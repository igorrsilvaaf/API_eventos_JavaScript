document.getElementById('loginForm').addEventListener('submit', async (e) => {  e.preventDefault();  const data = {    userEmail: document.getElementById('userEmail').value,    userPassword: document.getElementById('userPassword').value  };  try {    const response = await fetch('http://localhost:3000/login', {      method: 'POST',      headers: {        'Content-Type': 'application/json'      },      body: JSON.stringify(data)    });    const result = await response.json();    document.getElementById('loginMessage').textContent = result.message;    if (response.ok) {      localStorage.setItem('token', result.token);    }  } catch (error) {    console.error('Erro:', error);  }});