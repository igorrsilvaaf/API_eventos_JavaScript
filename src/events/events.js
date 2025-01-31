document.addEventListener('DOMContentLoaded', function() {
  // Verificar autenticação
  checkAuthentication();

  // Carregar eventos
  loadEvents();

  // Configurar busca
  setupSearch();

  // Configurar carrossel
  setupCarousel();
});

// Funções de autenticação
function checkAuthentication() {
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const userAction = document.getElementById('user-action');
  const welcomeText = document.getElementById('welcome-text');
  const loginButton = document.getElementById('login-button');
  const logoutButton = document.getElementById('logout-button');
  const dropdownHeader = document.querySelector('#dropdown-header span');

  if (token && userName) {
    welcomeText.textContent = `Olá, ${userName}!`;
    userAction.textContent = userName;
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
    dropdownHeader.textContent = `Bem-vindo, ${userName}!`;
  } else {
    welcomeText.textContent = 'Seja bem-vindo!';
    userAction.textContent = 'Entrar na minha conta';
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
    dropdownHeader.textContent = 'Olá! Clique em entrar para acessar sua conta.';
  }
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  checkAuthentication();
  Swal.fire({
    title: 'Logout realizado!',
    text: 'Você foi desconectado com sucesso.',
    icon: 'success',
    customClass: {
      popup: 'styled-popup'
    }
  });
}

// Mock de eventos para desenvolvimento
const mockEvents = [
  { id: 1, title: 'After festa julina 2024', date: '2025-01-31', time: '20:00', location: 'Hangar 737', image: '../assets/eventos/after_festa_julina.jpg', description: 'Descrição do evento' },
  { id: 2, title: 'Baile do teddy', date: '2025-02-28', time: '22:00', location: 'Like Club Araranguá', image: '../assets/eventos/baile_do_teddy.jpg', description: 'Quer ver L7NNON tocar? vem para Hangar' },
  { id: 3, title: 'Oz Music', date: '2025-03-20', time: '23:30', location: 'Oz Pub Music', image: '../assets/eventos/Oz_music.jpg', description: 'Descrição do evento' },
  { id: 4, title: 'Armandinho em Caxias', date: '2025-01-12', time: '21:00', location: 'All Need Master Hall', image: '../assets/eventos/Armandinho_em_caxias.jpg', description: 'Descrição do evento' },
  { id: 24, title: 'Roberto Carlos em Florianópolis', date: '2025-10-27', time: '21:00', location: 'Arena Opus - SC 281, 4000 - Florianópolis/SC', image: '../assets/eventos/roberto_carlos.png', description: 'Descrição do evento' },
  { id: 25, title: 'Lauana Prado em Guarapuava', date: '2025-01-20', time: '00:00', location: 'Joinville Square Garden - Avenida Santos Dummont, S/N - Joinville/SC', image: '../assets/eventos/pity.png', description: 'Descrição do evento' },
  { id: 26, title: 'Pitty em Joinville', date: '2025-02-28', time: '21:00', location: 'Efapi - Pavilhão 1 - Rua Itaboraí, S/N - Chapecó/SC', image: '../assets/eventos/henrique_juliano.png', description: 'Descrição do evento' },
  { id: 27, title: 'Ana Castela em Itajaí', date: '2025-11-30', time: '21:00', location: 'Centreventos de Itajaí - Av. Min. Victor Konder, 303 - Itajaí/SC', image: '../assets/eventos/ANA_CASTELA_-_ITAJAÍ.png', description: 'Descrição do evento' },
  { id: 28, title: 'Henrique & Juliano em Joinville', date: '2025-01-27', time: '21:00', location: 'Expoville - Rua XV de Novembro, 4315 - Joinville/SC', image: '../assets/eventos/henrique_juliano_joinvile.png', description: 'Descrição do evento' },
];

// Funções de eventos
async function loadEvents() {
  try {
    // Por enquanto usando eventos mockados
    const events = mockEvents;
    if (events.length > 0) {
      document.getElementById('noRecentEventsMessage').style.display = 'none';
      renderEvents(events);
      populateCarousel(events);
    } else {
      document.getElementById('noRecentEventsMessage').style.display = 'flex';
    }
  } catch (error) {
    console.error('Erro ao carregar eventos:', error);
    Swal.fire({
      title: 'Erro',
      text: 'Não foi possível carregar os eventos. Tente novamente mais tarde.',
      icon: 'error',
      customClass: {
        popup: 'styled-popup'
      }
    });
  }
}

function renderEvents(events) {
  const container = document.getElementById('eventsContainer');
  const recentContainer = document.getElementById('recentEventsContainer');
  
  container.innerHTML = '';
  recentContainer.innerHTML = '';

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Atualizar título com o mês atual
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  document.getElementById('titleEventsNext').textContent = `Eventos de ${monthNames[currentMonth]}`;

  events.forEach(event => {
    const eventDate = new Date(event.date);
    const card = createEventCard(event);

    if (eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear) {
      recentContainer.appendChild(card.cloneNode(true));
    }
    container.appendChild(card);
  });

  // Mostrar/ocultar mensagens de "nenhum evento encontrado"
  const hasCurrentMonthEvents = recentContainer.children.length > 0;
  document.getElementById('noRecentEventsMessage').style.display = hasCurrentMonthEvents ? 'none' : 'flex';
  document.getElementById('noUpcomingEventsMessage').style.display = events.length > 0 ? 'none' : 'flex';
}

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card animate__animated animate__fadeIn';

  const image = document.createElement('img');
  image.src = event.image || '../assets/event-placeholder.jpg';
  image.alt = event.title;
  image.className = 'event-image';
  image.onerror = function() {
    this.src = '../assets/event-placeholder.jpg';
  };

  const details = document.createElement('div');
  details.className = 'event-details';

  const title = document.createElement('h3');
  title.className = 'event-title';
  title.textContent = event.title;

  const date = document.createElement('p');
  date.className = 'event-date';
  date.innerHTML = `<i class="far fa-calendar"></i> ${formatDate(event.date)}`;

  const time = document.createElement('p');
  time.className = 'event-time';
  time.innerHTML = `<i class="far fa-clock"></i> ${event.time}`;

  const location = document.createElement('p');
  location.className = 'event-location';
  location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${event.location}`;

  const buyButton = document.createElement('button');
  buyButton.className = 'buy-button';
  buyButton.innerHTML = '<i class="fas fa-ticket-alt"></i> Comprar';
  buyButton.onclick = () => selectTicket(event.id);

  details.appendChild(title);
  details.appendChild(date);
  details.appendChild(time);
  details.appendChild(location);
  details.appendChild(buyButton);

  card.appendChild(image);
  card.appendChild(details);

  return card;
}

// Funções de utilidade
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Funções de UI
function toggleDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

// Fechar dropdown quando clicar fora
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (!dropdown.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});

// Prevenir que o clique dentro do menu feche o dropdown
document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
  if (event.target.tagName !== 'BUTTON') {
    event.stopPropagation();
  }
});

function toggleSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

// Configuração da busca
function setupSearch() {
  const searchInput = document.getElementById('event-search');
  const locationInput = document.getElementById('location-search');
  const searchModalInput = document.getElementById('event-search-modal');
  const locationModalInput = document.getElementById('location-search-modal');

  [searchInput, locationInput, searchModalInput, locationModalInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        const searchTerm = (searchInput.value || searchModalInput.value || '').toLowerCase();
        const locationTerm = (locationInput.value || locationModalInput.value || '').toLowerCase();
        
        const filteredEvents = mockEvents.filter(event => {
          const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                              event.description.toLowerCase().includes(searchTerm);
          const matchesLocation = event.location.toLowerCase().includes(locationTerm);
          return matchesSearch && matchesLocation;
        });
        
        renderEvents(filteredEvents);
      });
    }
  });
}

// Funções do carrossel
function setupCarousel() {
  const carousel = document.getElementById('eventCarousel');
  if (!carousel) return;

  let currentIndex = 0;
  const images = carousel.getElementsByTagName('img');
  
  function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function autoMove() {
    moveCarousel(1);
  }

  setInterval(autoMove, 3000);
  window.moveCarousel = moveCarousel;
}

function populateCarousel(events) {
  const carousel = document.getElementById('eventCarousel');
  if (!carousel) return;

  carousel.innerHTML = '';
  events.forEach(event => {
    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.title;
    img.onerror = function() {
      this.src = '../assets/event-placeholder.jpg';
    };
    carousel.appendChild(img);
  });
}

// Funções de compra
function selectTicket(eventId) {
  const event = mockEvents.find(e => e.id === eventId);
  if (!event) return;

  const token = localStorage.getItem('token');
  if (!token) {
    Swal.fire({
      title: 'Faça login',
      text: 'Para comprar ingressos, você precisa estar logado.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Fazer login',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'styled-popup'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        openLoginModal();
      }
    });
    return;
  }

  // Implementar lógica de seleção de ingresso
  Swal.fire({
    title: 'Comprar Ingresso',
    text: `Você selecionou o evento: ${event.title}`,
    icon: 'info',
    customClass: {
      popup: 'styled-popup'
    }
  });
}

// Funções do modal de login
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Fechar modais quando clicar fora
window.addEventListener('click', (event) => {
  const searchModal = document.getElementById('search-modal');
  const loginModal = document.getElementById('loginModal');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (event.target === searchModal) {
    searchModal.style.display = 'none';
  }
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (dropdownMenu && !event.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('show');
  }
});