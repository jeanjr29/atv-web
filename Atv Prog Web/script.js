let donosPets = JSON.parse(localStorage.getItem('donosPets')) || [];
let usuarioLogado = null;
let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

function showScreen(screenId) {
    const screens = document.querySelectorAll('.container');
    screens.forEach(screen => {
        screen.style.display = screen.id === screenId ? 'block' : 'none';
    });
}

function realizarCadastroPaciente(event) {
    event.preventDefault();

    const nomePaciente = document.getElementById('nome-paciente').value;
    const emailPaciente = document.getElementById('email-paciente').value;
    const senhaPaciente = document.getElementById('senha-paciente').value;
    const nomePet = document.getElementById('nome-pet').value;
    const tipoPet = document.getElementById('tipo-pet').value;

    const paciente = { nome: nomePaciente, email: emailPaciente, senha: senhaPaciente, pet: { nome: nomePet, tipo: tipoPet } };

    donosPets.push(paciente);
    localStorage.setItem('donosPets', JSON.stringify(donosPets));

    alert('Paciente e pet cadastrados com sucesso!');
    showScreen('login-paciente');
}

function realizarLoginPaciente(event) {
    event.preventDefault();

    const email = document.getElementById('email-login-paciente').value;
    const senha = document.getElementById('senha-login-paciente').value;

    const paciente = donosPets.find(d => d.email === email && d.senha === senha);
    if (paciente) {
        usuarioLogado = paciente;
        document.getElementById('nome-paciente-logado').innerText = paciente.nome;
        showScreen('area-paciente');
    } else {
        alert('E-mail ou senha inválidos');
    }
}

function realizarLoginVeterinario(event) {
    event.preventDefault();

    const senha = document.getElementById('senha-login-veterinario').value;

    if (senha === 'veterinario123') {  // Senha fixa para teste
        showScreen('area-veterinario');
    } else {
        alert('Senha do veterinário incorreta');
    }
}

function logout() {
    usuarioLogado = null;
    showScreen('inicio');
}

function salvarDiagnostico() {
    const nomePet = document.getElementById('nome-pet-diagnostico').value;
    const diagnostico = document.getElementById('diagnostico').value;
    const medicamentos = document.getElementById('medicamentos').value;

    const consulta = { nomePet, diagnostico, medicamentos };
    consultas.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(consultas));

    alert('Diagnóstico e medicamentos salvos!');
}


//JEAN CARLO BOB JUNIOR 			RA: 1840482322008   

//PROGRAMÇÃO WEB			PROFESSOR: APARECIDO DA SILVA HORAS
