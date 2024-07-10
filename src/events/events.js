document.addEventListener('DOMContentLoaded', () => {  const events = [    {      id: 1,      title: 'After festa julina 2024',      date: '2024-07-06',      time: '20:00',      location: 'Hangar 737',      image: '../../assets/eventos/after_festa_julina.jpg',      description: 'Descrição do evento'    },    {      id: 2,      title: 'Baile do teddy',      date: '2024-07-06',      time: '22:00',      location: 'Like Club Araranguá',      image: '../../assets/eventos/baile_do_teddy.jpg',      description: 'Quer ver L7NNON tocar? vem para Hangar'    },    {      id: 3,      title: 'Oz Music',      date: '2024-07-06',      time: '23:30',      location: 'Oz Pub Music',      image: '../../assets/eventos/Oz_music.jpg',      description: 'Descrição do evento'    },    {      id: 4,      title: 'Armandinho em Caxias',      date: '2024-07-12',      time: '21:00',      location: 'All Need Master Hall',      image: '../../assets/eventos/Armandinho_em_caxias.jpg',      description: 'Descrição do evento'    },    {      id: 5,      title: 'Sunset Surf',      date: '2024-07-20',      time: '17:00',      location: 'Éden GastroArts',      image: '../../assets/eventos/sun_set.jpg',      description: 'Descrição do evento'    },    {      id: 6,      title: 'Felp22 Mixing Night',      date: '2024-07-20',      time: '22:00',      location: 'Todai-Ji',      image: '../../assets/eventos/Felp22_Mixing_Night.jpg',      description: 'Descrição do evento'    },    {      id: 7,      title: 'Jeito louco + Situasamba',      date: '2024-08-04',      time: '07:00',      location: 'Parque do balonismo',      image: '../../assets/eventos/Jeito_louco.jpg',      description: 'Descrição do evento'    },    {      id: 8,      title: 'Mamonas Assassinas o legado',      date: '2024-08-04',      time: '17:00',      location: 'Indoor Music Park',      image: '../../assets/eventos/mamonas_assassinas.jpg',      description: 'Descrição do evento'    },    {      id: 9,      title: 'Mc IG - Caxias do Sul',      date: '2024-08-10',      time: '22:00',      location: 'All Need Master Hall',      image: '../../assets/eventos/mc_ig.jpg',      description: 'Descrição do evento'    },    {      id: 10,      title: 'Carnaval de inverno',      date: '2024-07-13',      time: '21:00',      location: 'Gremio fronteira Clube',      image: '../../assets/eventos/carnaval_inverno.jpg',      description: 'Descrição do evento'    },    {      id: 11,      title: 'Mixing Night',      date: '2024-05-10',      time: '22:00',      location: 'Todai-Ji',      image: '../../assets/eventos/mixing_night.jpg',      description: 'Descrição do evento'    },    {      id: 12,      title: 'Gaudêncio em busca do pia raiz',      date: '2024-08-17',      time: '18:30',      location: 'Centro cultural auxiliadora',      image: '../../assets/eventos/Gaudêncio.jpg',      description: 'Descrição do evento'    },    {      id: 13,      title: 'Criciúma x Grêmio',      date: '2024-08-30',      time: '21:30',      location: 'Estádio Heriberto Hu',      image: '../../assets/eventos/Criciúma_X_Grêmio.jpg',      description: 'Descrição do evento'    },    {      id: 14,      title: 'Livinho',      date: '2024-09-06',      time: '22:00',      location: 'Avenida Tenis Clube',      image: '../../assets/eventos/livinho.jpg',      description: 'Descrição do evento'    },    {      id: 15,      title: 'Livinho em Lageado',      date: '2024-09-24',      time: '22:00',      location: 'Magic club',      image: '../../assets/eventos/livinho_lageado.jpg',      description: 'Descrição do evento'    },    {      id: 16,      title: 'Thiaguinho Turnê Sorte - Tubarão também é samba',      date: '2024-09-24',      time: '15:00',      location: 'Praça de Eventos Ivo Prim',      image: '../../assets/eventos/thiaguinho.jpg',      description: 'Descrição do evento'    },    {      id: 17,      title: 'Ana Castela - Mailing',      date: '2024-09-15',      time: '15:00',      location: 'Mailing Lagoa',      image: '../../assets/eventos/ana_castela.jpg',      description: 'Descrição do evento'    },    {      id: 18,      title: 'Hungria em Passo Fundo',      date: '2024-09-20',      time: '18:00',      location: 'Fazenda venice',      image: '../../assets/eventos/hungria.jpg',      description: 'Descrição do evento'    },    {      id: 19,      title: 'Zé ramalho - Am Master Hall',      date: '2024-09-28',      time: '20:00',      location: 'Am Master Hall',      image: '../../assets/eventos/ze_ramalho.jpg',      description: 'Descrição do evento'    },    {      id: 20,      title: 'Baile das Patricinhas com Mc Livinho',      date: '2024-11-01',      time: '22:00',      location: 'All Need Master Hall',      image: '../../assets/eventos/baile_das_patricinhas.jpg',      description: 'Descrição do evento'    },  ];  const recentEventsContainer = document.getElementById('recentEventsContainer');  const eventsContainer = document.getElementById('eventsContainer');  const currentDate = new Date();  const oneMonthLater = new Date();  oneMonthLater.setMonth(currentDate.getMonth() + 1);  function formatDate(dateString) {    const [year, month, day] = dateString.split('-');    return `${day}/${month}/${year}`;  }  function formatTitle(title) {    return title.toUpperCase();  }  const recentEvents = events.filter(event => {    const eventDate = new Date(event.date);    return eventDate >= currentDate && eventDate <= oneMonthLater;  });  const upcomingEvents = events.filter(event => {    const eventDate = new Date(event.date);    return eventDate > oneMonthLater;  });  recentEvents.forEach(event => {    const eventCard = document.createElement('div');    eventCard.className = 'event-card recent';    eventCard.innerHTML = `      <img src="${event.image}" alt="${event.title}">      <div class="event-card-content">        <h2 class="event-card-title">${formatTitle(event.title)}</h2>        <p class="event-card-details"><i class="fas fa-calendar-alt"></i> ${formatDate(event.date)} às ${event.time}</p>        <p class="event-card-details"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>        <button onclick="selectTicket(${event.id})">Comprar Ingresso</button>      </div>    `;    recentEventsContainer.appendChild(eventCard);  });  upcomingEvents.forEach(event => {    const eventCard = document.createElement('div');    eventCard.className = 'event-card';    eventCard.innerHTML = `      <img src="${event.image}" alt="${event.title}">      <div class="event-card-content">        <h2 class="event-card-title">${formatTitle(event.title)}</h2>        <p class="event-card-details"><i class="fas fa-calendar-alt"></i> ${formatDate(event.date)} às ${event.time}</p>        <p class="event-card-details"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>        <button onclick="selectTicket(${event.id})">Comprar Ingresso</button>      </div>    `;    eventsContainer.appendChild(eventCard);  });  const menuHamburger = document.querySelector('.menu-hamburger');  const navMenu = document.querySelector('.nav-menu');  const closeNavMenu = document.querySelector('.close-nav-menu');  menuHamburger.addEventListener('click', () => {    navMenu.classList.toggle('active');  });  closeNavMenu.addEventListener('click', () => {    navMenu.classList.remove('active');  });  // Fechar o menu se o usuário clicar fora dele  window.addEventListener('click', (event) => {    if (!event.target.matches('.menu-hamburger') && !event.target.closest('.nav-menu')) {      if (navMenu.classList.contains('active')) {        navMenu.classList.remove('active');      }    }  });  // Função para abrir e fechar o modal de pesquisa  window.toggleSearchModal = function() {    const searchModal = document.getElementById('search-modal');    searchModal.style.display = searchModal.style.display === 'block' ? 'none' : 'block';  };  // Fechar o modal de pesquisa ao clicar fora dele  window.addEventListener('click', (event) => {    const searchModal = document.getElementById('search-modal');    if (event.target === searchModal) {      searchModal.style.display = 'none';    }  });});function selectTicket(eventId) {  Swal.fire({    title: 'Selecione o Tipo de Ingresso',    input: 'select',    inputOptions: {      'normal': 'Normal',      'meia': 'Meia Entrada',      'camarote': 'Camarote',      'vip': 'VIP'    },    inputPlaceholder: 'Selecione um tipo',    showCancelButton: true,    inputValidator: (value) => {      if (!value) {        return 'Você precisa selecionar um tipo de ingresso!';      }    }  }).then((result) => {    if (result.isConfirmed) {      window.location.href = `../login/login.html?eventId=${eventId}&ticketType=${result.value}`;    }  });}function toggleDropdown(event) {  event.preventDefault();  const dropdownMenu = document.querySelector('.auth-buttons .dropdown-menu');  dropdownMenu.classList.toggle('show');}document.addEventListener('click', function(event) {  const isClickInside = document.querySelector('.auth-buttons .dropdown').contains(event.target);  if (!isClickInside) {    const dropdownMenu = document.querySelector('.auth-buttons .dropdown-menu');    if (dropdownMenu.classList.contains('show')) {      dropdownMenu.classList.remove('show');    }  }});