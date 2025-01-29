// Validar email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('userPassword').value;

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password
      })
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const result = await response.json();

    if (result.token) {
      localStorage.setItem('token', result.token);
      
      Swal.fire({
        title: 'Sucesso!',
        text: 'Login realizado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'styled-popup'
        }
      }).then(() => {
        window.top.location.href = '../events/events.html';
      });

      document.getElementById('loginForm').reset();
    } else {
      throw new Error('Token não recebido');
    }
  } catch (error) {
    console.error('Erro:', error);
    Swal.fire({
      title: 'Erro',
      text: 'E-mail ou senha incorretos',
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'styled-popup'
      }
    });
  }
});