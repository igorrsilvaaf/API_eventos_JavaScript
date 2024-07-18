document.addEventListener('DOMContentLoaded', () => {
  const events = [
    { id: 1, title: 'After festa julina 2024', date: '2024-07-31', time: '20:00', location: 'Hangar 737', image: '../../assets/eventos/after_festa_julina.jpg', description: 'Descrição do evento' },
    { id: 2, title: 'Baile do teddy', date: '2024-07-31', time: '22:00', location: 'Like Club Araranguá', image: '../../assets/eventos/baile_do_teddy.jpg', description: 'Quer ver L7NNON tocar? vem para Hangar' },
    { id: 3, title: 'Oz Music', date: '2024-07-20', time: '23:30', location: 'Oz Pub Music', image: '../../assets/eventos/Oz_music.jpg', description: 'Descrição do evento' },
    { id: 4, title: 'Armandinho em Caxias', date: '2024-08-12', time: '21:00', location: 'All Need Master Hall', image: '../../assets/eventos/Armandinho_em_caxias.jpg', description: 'Descrição do evento' },
    { id: 5, title: 'Sunset Surf', date: '2024-07-30', time: '17:00', location: 'Éden GastroArts', image: '../../assets/eventos/sun_set.jpg', description: 'Descrição do evento' },
    { id: 6, title: 'Felp22 Mixing Night', date: '2024-08-12', time: '22:00', location: 'Todai-Ji', image: '../../assets/eventos/Felp22_Mixing_Night.jpg', description: 'Descrição do evento' },
    { id: 7, title: 'Jeito louco + Situasamba', date: '2024-08-04', time: '07:00', location: 'Parque do balonismo', image: '../../assets/eventos/Jeito_louco.jpg', description: 'Descrição do evento' },
    { id: 8, title: 'Mamonas Assassinas o legado', date: '2024-08-04', time: '17:00', location: 'Indoor Music Park', image: '../../assets/eventos/mamonas_assassinas.jpg', description: 'Descrição do evento' },
    { id: 9, title: 'Mc IG - Caxias do Sul', date: '2024-08-10', time: '22:00', location: 'All Need Master Hall', image: '../../assets/eventos/mc_ig.jpg', description: 'Descrição do evento' },
    { id: 10, title: 'Carnaval de inverno', date: '2024-09-13', time: '21:00', location: 'Gremio fronteira Clube', image: '../../assets/eventos/carnaval_inverno.jpg', description: 'Descrição do evento' },
    { id: 11, title: 'Mixing Night', date: '2024-10-10', time: '22:00', location: 'Todai-Ji', image: '../../assets/eventos/mixing_night.jpg', description: 'Descrição do evento' },
    { id: 12, title: 'Gaudêncio em busca do pia raiz', date: '2024-08-17', time: '18:30', location: 'Centro cultural auxiliadora', image: '../../assets/eventos/Gaudêncio.jpg', description: 'Descrição do evento' },
    { id: 13, title: 'Criciúma x Grêmio', date: '2024-08-30', time: '21:30', location: 'Estádio Heriberto Hu', image: '../../assets/eventos/Criciúma_X_Grêmio.jpg', description: 'Descrição do evento' },
    { id: 14, title: 'Livinho', date: '2024-09-06', time: '22:00', location: 'Avenida Tenis Clube', image: '../../assets/eventos/livinho.jpg', description: 'Descrição do evento' },
    { id: 15, title: 'Livinho em Lageado', date: '2024-09-24', time: '22:00', location: 'Magic club', image: '../../assets/eventos/livinho_lageado.jpg', description: 'Descrição do evento' },
    { id: 16, title: 'Thiaguinho Turnê Sorte - Tubarão também é samba', date: '2024-09-24', time: '15:00', location: 'Praça de Eventos Ivo Prim', image: '../../assets/eventos/thiaguinho.jpg', description: 'Descrição do evento' },
    { id: 17, title: 'Ana Castela - Mailing', date: '2024-09-15', time: '15:00', location: 'Mailing Lagoa', image: '../../assets/eventos/ana_castela.jpg', description: 'Descrição do evento' },
    { id: 18, title: 'Hungria em Passo Fundo', date: '2024-09-20', time: '18:00', location: 'Fazenda venice', image: '../../assets/eventos/hungria.jpg', description: 'Descrição do evento' },
    { id: 19, title: 'Zé ramalho - Am Master Hall', date: '2024-09-28', time: '20:00', location: 'Am Master Hall', image: '../../assets/eventos/ze_ramalho.jpg', description: 'Descrição do evento' },
    { id: 20, title: 'Maiara & Maraisa In Concert Curitiba', date: '2024-08-15', time: '21:30', location: 'All Need Master Hall', image: '../../assets/eventos/maiara_mariasa.jpg', description: 'Descrição do evento' },
    { id: 21, title: 'Henrique & Juliano e Rayane & Rafaela', date: '2024-07-26', time: '21:00', location: 'Efapi - Pavilhão 1 - Rua Itaboraí, S/N - Chapecó/SC', image: '../../assets/eventos/henrique_juliano.png', description: 'Descrição do evento' },
    { id: 22, title: 'Ana Castela em Bento Gonçalves', date: '2024-09-19', time: '20:00', location: 'Fundaparque - Alameda Fenavinho, 481 - Bento Gonçalves/RS', image: '../../assets/eventos/ana_castela.png', description: 'Descrição do evento' },
    { id: 23, title: 'Lauana Prado em Santa Rosa', date: '2024-09-19', time: '00:30', location: 'Arena Fenasoja - Mr. Jack.Bet - Av Benvenuto de Conti, 370 - Santa Rosa/RS', image: '../../assets/eventos/launa_prado.png', description: 'Descrição do evento' },
    { id: 24, title: 'Roberto Carlos em Florianópolis', date: '2024-07-27', time: '21:00', location: 'Arena Opus - SC 281, 4000 - Florianópolis/SC', image: '../../assets/eventos/roberto_carlos.png', description: 'Descrição do evento' },
    { id: 25, title: 'Lauana Prado em Guarapuava', date: '2024-09-20', time: '00:00', location: 'Joinville Square Garden - Avenida Santos Dummont, S/N - Joinville/SC', image: '../../assets/eventos/pity.png', description: 'Descrição do evento' },
    { id: 26, title: 'Pitty em Joinville', date: '2024-08-30', time: '21:00', location: 'Efapi - Pavilhão 1 - Rua Itaboraí, S/N - Chapecó/SC', image: '../../assets/eventos/henrique_juliano.png', description: 'Descrição do evento' },
    { id: 27, title: 'Ana Castela em Itajaí', date: '2024-11-30', time: '21:00', location: 'Centreventos de Itajaí - Av. Min. Victor Konder, 303 - Itajaí/SC', image: '../../assets/eventos/ANA_CASTELA_-_ITAJAÍ.png', description: 'Descrição do evento' },
    { id: 28, title: 'Henrique & Juliano em Joinville', date: '2024-07-27', time: '21:00', location: 'Expoville - Rua XV de Novembro, 4315 - Joinville/SC', image: '../../assets/eventos/henrique_juliano_joinvile.png', description: 'Descrição do evento' },
  ];

  const recentEventsContainer = document.getElementById('recentEventsContainer');
  const eventsContainer = document.getElementById('eventsContainer');
  const noRecentEventsMessage = document.getElementById('noRecentEventsMessage');
  const noUpcomingEventsMessage = document.getElementById('noUpcomingEventsMessage');
  const currentDate = new Date();

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatTitle(title) {
    return title.toUpperCase();
  }

  function renderEvents(eventsToRender) {
    recentEventsContainer.innerHTML = '';
    eventsContainer.innerHTML = '';

    const recentEvents = eventsToRender.filter(event => {
      const eventDate = new Date(`${event.date}T${event.time}`);
      return eventDate >= currentDate && eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear();
    }).sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

    const upcomingEvents = eventsToRender.filter(event => {
      const eventDate = new Date(`${event.date}T${event.time}`);
      return eventDate > currentDate && !(eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear());
    }).sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

    if (recentEvents.length === 0) {
      noRecentEventsMessage.style.display = 'block';
    } else {
      noRecentEventsMessage.style.display = 'none';
      recentEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card recent';

        eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="event-card-content">
            <h2 class="event-card-title">${formatTitle(event.title)}</h2>
            <p class="event-card-details"><i class="fas fa-calendar-alt"></i> ${formatDate(event.date)} às ${event.time}</p>
            <p class="event-card-details"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <button onclick="selectTicket(${event.id})">Comprar Ingresso</button>
          </div>
        `;

        recentEventsContainer.appendChild(eventCard);
      });
    }

    if (upcomingEvents.length === 0) {
      noUpcomingEventsMessage.style.display = 'block';
    } else {
      noUpcomingEventsMessage.style.display = 'none';
      upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="event-card-content">
            <h2 class="event-card-title">${formatTitle(event.title)}</h2>
            <p class="event-card-details"><i class="fas fa-calendar-alt"></i> ${formatDate(event.date)} às ${event.time}</p>
            <p class="event-card-details"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <button onclick="selectTicket(${event.id})">Comprar Ingresso</button>
          </div>
        `;

        eventsContainer.appendChild(eventCard);
      });
    }
  }

  function setEventTitleWithMonth() {
    const titleElement = document.getElementById('titleEventsNext');
    const options = { month: 'long' };
    const currentMonthFormatted = new Intl.DateTimeFormat('pt-BR', options).format(currentDate);
    titleElement.textContent = `Eventos de ${currentMonthFormatted.charAt(0).toUpperCase() + currentMonthFormatted.slice(1)}`;
  }

  setEventTitleWithMonth();
  renderEvents(events);

  const eventSearchInput = document.getElementById('event-search');
  const locationSearchInput = document.getElementById('location-search');

  eventSearchInput.addEventListener('input', () => {
    const searchTerm = eventSearchInput.value.toLowerCase();
    const filteredEvents = events.filter(event => event.title.toLowerCase().includes(searchTerm));
    renderEvents(filteredEvents);
  });

  locationSearchInput.addEventListener('input', () => {
    const searchTerm = locationSearchInput.value.toLowerCase();
    const filteredEvents = events.filter(event => event.location.toLowerCase().includes(searchTerm));
    renderEvents(filteredEvents);
  });

  function searchEvents() {
    const eventSearchTerm = document.getElementById('event-search-modal').value.toLowerCase();
    const locationSearchTerm = document.getElementById('location-search-modal').value.toLowerCase();

    const filteredEvents = events.filter(event =>
      event.title.toLowerCase().includes(eventSearchTerm) &&
      event.location.toLowerCase().includes(locationSearchTerm)
    );

    renderEvents(filteredEvents);
    toggleSearchModal(); // Fecha o modal de pesquisa
  }

  function clearSearchInputs() {
    document.getElementById('event-search-modal').value = '';
    document.getElementById('location-search-modal').value = '';
  }

  document.querySelector('.search-button').addEventListener('click', searchEvents);

  window.addEventListener('click', (event) => {
    const searchModal = document.getElementById('search-modal');
    if (event.target === searchModal) {
      searchModal.style.display = 'none';
      clearSearchInputs();
    }
  });

  const menuHamburger = document.querySelector('.menu-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const closeNavMenu = document.querySelector('.close-nav-menu');

  menuHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  closeNavMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.matches('.menu-hamburger') && !event.target.closest('.nav-menu')) {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  });

  window.toggleSearchModal = function() {
    const searchModal = document.getElementById('search-modal');
    const isVisible = searchModal.style.display === 'block';
    searchModal.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
      clearSearchInputs();
    }
  };

  window.addEventListener('click', (event) => {
    const searchModal = document.getElementById('search-modal');
    if (event.target === searchModal) {
      searchModal.style.display = 'none';
    }
  });

  window.openLoginModal = function() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'flex';
  };

  window.closeLoginModal = function() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
  };

  window.addEventListener('click', (event) => {
    const loginModal = document.getElementById('loginModal');
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  const carousel = document.getElementById('eventCarousel');

  function populateCarousel(events) {
    events.forEach(event => {
      const img = document.createElement('img');
      img.src = event.image;
      img.alt = event.title;
      img.className = 'carousel-image';
      carousel.appendChild(img);
    });

    events.forEach(event => {
      const img = document.createElement('img');
      img.src = event.image;
      img.alt = event.title;
      img.className = 'carousel-image';
      carousel.appendChild(img);
    });
  }

  populateCarousel(events);

  let currentIndex = 0;
  let imageWidth = 0;

  function updateImageWidth() {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
      imageWidth = images[0].clientWidth;
    }
  }

  function moveCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    updateImageWidth();

    if (imageWidth > 0) {
      currentIndex++;
      if (currentIndex >= images.length / 2) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0px)`;
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
          currentIndex++;
          carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }, 50);
      } else {
        carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
      }
    }
  }

  function autoMoveCarousel() {
    moveCarousel();
  }

  setInterval(autoMoveCarousel, 3000);

  window.moveCarousel = moveCarousel;

  window.selectTicket = function(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
      const url = new URL('../buy_tickets/buy_tickets.html', window.location.href);
      url.searchParams.append('eventId', event.id);
      url.searchParams.append('title', event.title);
      url.searchParams.append('date', event.date);
      url.searchParams.append('location', event.location);
      url.searchParams.append('description', event.description);
      window.location.href = url.href;
    } else {
      console.error('Evento não encontrado');
    }
  };
});

function isUserLoggedIn() {
  return !!localStorage.getItem('token');
}

function openLoginModal(eventId, ticketType) {
  const loginModal = document.getElementById('loginModal');
  const loginIframe = document.getElementById('loginIframe');
  loginIframe.src = `../login/login.html?eventId=${eventId}&ticketType=${ticketType}`;
  loginModal.style.display = 'flex';
}

function closeLoginModal() {
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'none';
}

function logout() {
  localStorage.removeItem('token');
  document.getElementById('welcome-text').innerText = 'Seja bem-vindo!';
  document.getElementById('user-action').innerHTML = 'Entrar na minha conta <i class="fas fa-caret-down"></i>';
  document.getElementById('dropdown-header').innerHTML = '<i class="fas fa-user-circle"></i> Olá! Clique em entrar para acessar sua conta.';
  document.getElementById('dropdown-header-mobile').innerHTML = '<i class="fas fa-user-circle"></i> Olá! Clique em entrar para acessar sua conta.';
  document.getElementById('login-button').style.display = 'block';
  document.getElementById('logout-button').style.display = 'none';
  document.getElementById('login-button-mobile').style.display = 'block';
  document.getElementById('logout-button-mobile').style.display = 'none';
  Swal.fire({
    title: 'Logout',
    text: 'Você saiu da sua conta com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
      popup: 'styled-popup'
    }
  });
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = document.querySelector('.auth-buttons .dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
  const isClickInside = document.querySelector('.auth-buttons .dropdown').contains(event.target);
  if (!isClickInside) {
    const dropdownMenu = document.querySelector('.auth-buttons .dropdown-menu');
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  }
});

function toggleNavMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('dark-mode-icon');
  const label = document.getElementById('dark-mode-label');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    label.textContent = 'Modo Claro';
  } else {
    localStorage.removeItem('theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    label.textContent = 'Modo Escuro';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('dark-mode-icon');
  const label = document.getElementById('dark-mode-label');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    label.textContent = 'Modo Claro';
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    label.textContent = 'Modo Escuro';
  }
});