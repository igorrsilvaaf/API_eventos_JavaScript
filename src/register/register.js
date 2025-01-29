document.addEventListener('DOMContentLoaded', function() {
  // Aplicar máscaras aos campos
  const phoneMask = new Inputmask('(99) 9999-9999');
  const celularMask = new Inputmask('(99) 99999-9999');
  const cepMask = new Inputmask('99999-999');

  phoneMask.mask(document.getElementById('userTelefone'));
  celularMask.mask(document.getElementById('userCelular'));
  cepMask.mask(document.getElementById('userCep'));

  // Buscar endereço pelo CEP
  document.getElementById('userCep').addEventListener('blur', async function() {
    const cep = this.value.replace(/\D/g, '');
    
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          document.getElementById('userCidade').value = data.localidade;
          document.getElementById('userBairro').value = data.bairro;
          document.getElementById('userEndereco').value = data.logradouro;
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  });

  // Validar confirmação de senha
  document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('userPassword').value;
    const confirmPassword = this.value;

    if (password !== confirmPassword) {
      this.setCustomValidity('As senhas não coincidem');
    } else {
      this.setCustomValidity('');
    }
  });

  // Enviar formulário
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const password = document.getElementById('userPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Erro',
        text: 'As senhas não coincidem',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'styled-popup'
        }
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        title: 'Erro',
        text: 'A senha deve ter no mínimo 6 caracteres',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'styled-popup'
        }
      });
      return;
    }

    const formData = {
      userName: document.getElementById('userName').value,
      userEmail: document.getElementById('userEmail').value,
      userTelefone: document.getElementById('userTelefone').value,
      userCelular: document.getElementById('userCelular').value,
      userCep: document.getElementById('userCep').value,
      userCidade: document.getElementById('userCidade').value,
      userBairro: document.getElementById('userBairro').value,
      userEndereco: document.getElementById('userEndereco').value,
      userPassword: password
    };

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Cadastro realizado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'styled-popup'
          }
        }).then(() => {
          window.location.href = '../login/login.html';
        });
      } else {
        throw new Error(result.message || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro:', error);
      Swal.fire({
        title: 'Erro',
        text: error.message || 'Erro ao cadastrar. Tente novamente.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'styled-popup'
        }
      });
    }
  });
});