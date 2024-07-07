const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
const saltRounds = 10;
const secretKey = 'servidorMongo';

// Conectar ao MongoDB
(async () => {
  try {
    await mongoose.connect('mongodb+srv://igorprogramacao24:6884@api-javascript.xnwphmr.mongodb.net/?retryWrites=true&w=majority&appName=api-javascript');
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB', err);
  }
})();

// Definir o modelo de tabela
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

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Token recebido:', token);

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const verified = jwt.verify(token, secretKey);
    console.log('Token verificado:', verified);
    req.user = verified;
    next();
  } catch (err) {
    console.error('Erro na verificação do token:', err);
    res.status(400).json({ message: 'Token inválido' });
  }
};

// Rota para responder à raiz (/)
app.get('/', (req, res) => {
  res.send('Conectado com sucesso!');
});

// Rota para registrar o novo usuário
app.post('/register', async (req, res) => {
  const { userName, userEmail, userTelefone, userCelular, userCep, userCidade, userBairro, userEndereco, userPassword } = req.body;

  try {
    const existUser = await User.findOne({ userEmail });
    if (existUser) {
      return res.status(400).json({ message: 'Usuário já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    const newUser = new User({
      userName,
      userEmail,
      userTelefone,
      userCelular,
      userCep,
      userCidade,
      userBairro,
      userEndereco,
      userPassword: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
  console.log('Dados recebidos no login:', req.body);
  const { userEmail, userPassword } = req.body;

  try {
    const user = await User.findOne({ userEmail });
    console.log('Usuário encontrado:', user);
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado :(' });
    }

    const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Senha inválida, favor verifique e tente novamente!' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '24h' });
    console.log('Token gerado:', token);
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para buscar todos os usuários
app.get('/users', authenticate, async (req, res) => {
  try {
    const users = await User.find().select('-userPassword');
    res.json({ users });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota de pagamento
app.post('/payment', authenticate, (req, res) => {
  const { cardNumber, cardName, expiryDate, cvv } = req.body;

  console.log('Processando pagamento...');
  console.log(`Número do cartão: ${cardNumber}`);
  console.log(`Nome no cartão: ${cardName}`);
  console.log(`Data de validade: ${expiryDate}`);
  console.log(`CVV: ${cvv}`);

  // Simular um atraso de processamento
  setTimeout(() => {
    res.json({ message: 'Pagamento realizado com sucesso!' });
  }, 2000);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});