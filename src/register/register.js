document.getElementById('registerForm').addEventListener('submit', async (e) => {  e.preventDefault();  const data = {    userName: document.getElementById('userName').value,    userEmail: document.getElementById('userEmail').value,    userTelefone: document.getElementById('userTelefone').value,    userCelular: document.getElementById('userCelular').value,    userCep: document.getElementById('userCep').value,    userCidade: document.getElementById('userCidade').value,    userBairro: document.getElementById('userBairro').value,    userEndereco: document.getElementById('userEndereco').value,    userPassword: document.getElementById('userPassword').value  };  console.log("Dados do formulário:", data);  try {    const response = await fetch('http://localhost:3000/register', {      method: 'POST',      headers: {        'Content-Type': 'application/json'      },      body: JSON.stringify(data)    });    if (!response.ok) {      throw new Error(`Erro: ${response.statusText}`);    }    const result = await response.json();    Swal.fire({      title: 'Sucesso!',      text: 'Usuário registrado com sucesso!',      icon: 'success',      confirmButtonText: 'OK',      customClass: {        popup: 'styled-popup'      }    }).then(() => {      const urlParams = new URLSearchParams(window.location.search);      const eventId = urlParams.get('eventId');      const ticketType = urlParams.get('ticketType');      window.location.href = `./payment.html?eventId=${eventId}&ticketType=${ticketType}`;    });    document.getElementById('registerForm').reset(); // limpa o form depois do cadastro  } catch (error) {    console.error('Erro:', error);    Swal.fire({      title: 'Erro',      text: 'Erro ao registrar. Tente novamente mais tarde.',      icon: 'error',      confirmButtonText: 'OK',      customClass: {        popup: 'styled-popup'      }    });  }});