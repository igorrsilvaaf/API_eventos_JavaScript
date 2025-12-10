require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/api_eventos';

const eventData = [
  { id: 1, title: 'After festa julina 2024', date: '2025-01-31', time: '20:00', location: 'Hangar 737', image: 'assets/eventos/after_festa_julina.jpg', description: 'Descrição do evento' },
  { id: 2, title: 'Baile do teddy', date: '2025-02-28', time: '22:00', location: 'Like Club Araranguá', image: 'assets/eventos/baile_do_teddy.jpg', description: 'Quer ver L7NNON tocar? vem para Hangar' },
  { id: 3, title: 'Oz Music', date: '2025-03-20', time: '23:30', location: 'Oz Pub Music', image: 'assets/eventos/Oz_music.jpg', description: 'Descrição do evento' },
  { id: 4, title: 'Armandinho em Caxias', date: '2025-01-12', time: '21:00', location: 'All Need Master Hall', image: 'assets/eventos/Armandinho_em_caxias.jpg', description: 'Descrição do evento' },
  { id: 24, title: 'Roberto Carlos em Florianópolis', date: '2025-10-27', time: '21:00', location: 'Arena Opus - SC 281, 4000 - Florianópolis/SC', image: 'assets/eventos/roberto_carlos.png', description: 'Descrição do evento' },
  { id: 25, title: 'Lauana Prado em Guarapuava', date: '2025-01-20', time: '00:00', location: 'Joinville Square Garden - Avenida Santos Dummont, S/N - Joinville/SC', image: 'assets/eventos/pity.png', description: 'Descrição do evento' },
  { id: 26, title: 'Pitty em Joinville', date: '2025-02-28', time: '21:00', location: 'Efapi - Pavilhão 1 - Rua Itaboraí, S/N - Chapecó/SC', image: 'assets/eventos/henrique_juliano.png', description: 'Descrição do evento' },
  { id: 27, title: 'Ana Castela em Itajaí', date: '2025-11-30', time: '21:00', location: 'Centreventos de Itajaí - Av. Min. Victor Konder, 303 - Itajaí/SC', image: 'assets/eventos/ANA_CASTELA_-_ITAJAÍ.png', description: 'Descrição do evento' },
  { id: 28, title: 'Henrique & Juliano em Joinville', date: '2025-01-27', time: '21:00', location: 'Expoville - Rua XV de Novembro, 4315 - Joinville/SC', image: 'assets/eventos/henrique_juliano_joinvile.png', description: 'Descrição do evento' }
];

async function run() {
  console.log('Conectando ao MongoDB:', MONGODB_URI);
  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 30000 });

  const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: { type: String, unique: true },
    userTelefone: String,
    userCelular: String,
    userCep: String,
    userCidade: String,
    userBairro: String,
    userEndereco: String,
    userPassword: String
  });

  const eventSchema = new mongoose.Schema({
    id: Number,
    title: String,
    date: String,
    time: String,
    location: String,
    image: String,
    description: String
  });

  const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ productId: mongoose.Schema.Types.Mixed, quantity: Number }]
  });

  const User = mongoose.model('User', userSchema);
  const Event = mongoose.model('Event', eventSchema);
  const Cart = mongoose.model('Cart', cartSchema);

  try {
    await Promise.all([User.deleteMany({}), Event.deleteMany({}), Cart.deleteMany({})]);
    console.log('Limpeza das coleções concluída.');

    const insertedEvents = await Event.insertMany(eventData);
    console.log(`Inseridos ${insertedEvents.length} eventos.`);

    const password = 'senha123';
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ userName: 'Admin', userEmail: 'admin@example.com', userPassword: hashed });
    await user.save();
    console.log('Usuário exemplo criado: admin@example.com / senha:', password);

    // criar um carrinho vazio para o usuário
    const cart = new Cart({ userId: user._id, items: [] });
    await cart.save();
    console.log('Carrinho vazio criado para o usuário admin.');

    console.log('Seed concluído com sucesso.');
  } catch (err) {
    console.error('Erro ao popular o banco:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
