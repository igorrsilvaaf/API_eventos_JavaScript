const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secretKey = 'servidorMongo';

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/meu_banco_de_dados')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Definir o modelo de usuário
const User = mongoose.model('User', new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  userTelefone: { type: String, required: true, unique: true },
  userCelular: { type: String, required: true, unique: true },
  userCep: { type: String, required: true },
  userCidade: { type: String, required: true },
  userBairro: { type: String, required: true },
  userEndereco: { type: String, required: true },
  userPassword: { type: String, required: true }
}));

app.use(express.json());

// Rota para responder à raiz (/)
app.get('/', (req, res) => {
  res.send('Bem-vindo à API!');
});

// Rota para registrar o novo usuário
app.post('/register', async (req, res) => {
  const { userName, userEmail, userTelefone, userCelular, userCep, userCidade, userBairro, userEndereco, userPassword } = req.body;

  try {
    // Verificar se o usuário já existe
    const existUser = await User.findOne({ userEmail });
    if (existUser) {
      return res.status(400).json({ message: 'Usuário já cadastrado.' });
    }

    // Criptografar a senha do usuário
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    // Criar um novo usuário
    const newUser = new User({ userName, userEmail, userTelefone, userCelular, userCep, userCidade, userBairro, userEndereco, userPassword: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
  const { userName, userPassword } = req.body;

  try {
    // Encontrar o usuário pelo nome
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado :(' });
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Senha inválida, favor verifique e tente novamente!' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '2h' });
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token inválido' });
  }
};

// Rota protegida de exemplo
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Bem-vindo à rota protegida!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});