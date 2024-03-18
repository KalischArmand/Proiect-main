document.addEventListener('DOMContentLoaded', () => {
    const loginSection = $('#login-section');
    const loginBtn = $('#login-btn');
    const logoutBtn = $('#logout-btn');
    const loginForm = $('#login-form');
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const recenziiBtn = $('#recenzii-btn');
    const comentariiBtn = $('#comentarii-btn');
    const listaSerialeBtn = $('#lista-seriale-btn');


    if (isLoggedIn()) {
        loginBtn.hide();
        logoutBtn.show();
        loginSection.hide();
    } else {
        loginBtn.show();
        logoutBtn.hide();
        loginSection.show();
    }

    // Adăugăm eveniment pentru butonul de logare
    loginBtn.click(() => {
        window.location.href = 'pagina-noua.html';
    });

    // Adăugăm eveniment pentru butonul de ieșire
    logoutBtn.click(() => {
        logout();
    });

    // Adăugăm eveniment pentru butonul de recenzii
    recenziiBtn.click(() => {
        window.location.href = 'recenzii.html';
    });

    // Adăugăm eveniment pentru butonul de comentarii
    comentariiBtn.click(() => {
        window.location.href = 'comentarii.html';
    });

    // Adăugăm eveniment pentru butonul de lista seriale
    listaSerialeBtn.click(() => {
        window.location.href = 'lista-seriale.html';
    });
    // Adăugăm eveniment pentru butonul de lista seriale
    logareBtn.click(() => {
        window.location.href = 'logare.html';
    });

    // Adăugăm eveniment pentru formularul de logare folosind jQuery
    loginForm.submit((e) => {
        e.preventDefault();
        const username = usernameInput.val();
        const password = passwordInput.val();

        if (login(username, password)) {
            loginSection.hide();
            loginBtn.hide();
            logoutBtn.show();
        } else {
            alert('Autentificare eșuată. Verificați utilizatorul și parola.');
        }
    });
});

// Restul codului rămâne neschimbat

function isLoggedIn() {
    return localStorage.getItem('user') !== null;
}

function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem('user');
    location.reload(); // Reîncărcăm pagina pentru a actualiza interfața
}

function getUsers() {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString).users : [];
};

// jQuery code
$(document).ready(function() {
    // Ascultă evenimentul de submit al formularului de login
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Oprire comportamentul implicit al formularului

        // Obține valorile din câmpurile de utilizator și parolă
        var username = $('#username').val();
        var password = $('#password').val();

        // Simulează autentificarea (adaptează în funcție de necesități)
        var isAuthenticated = authenticateUser(username, password);

        if (isAuthenticated) {
            // Ascunde formularul de login și arată butonul de deconectare
            $('#login-section').hide();
            $('#login-btn').hide();
            $('#logout-btn').show();

            // Alte acțiuni după autentificare
        } else {
            alert('Autentificare eșuată. Verificați utilizatorul și parola.');
        }
    });

    // Ascultă evenimentul de clic pe butonul de deconectare
    $('#logout-btn').click(function() {
        // Simulează deconectarea (adaptează în funcție de necesități)

        // Arată formularul de login și ascunde butonul de deconectare
        $('#login-section').show();
        $('#login-btn').show();
        $('#logout-btn').hide();

        // Alte acțiuni după deconectare
    });
});

// Funcția de autentificare simplă (adaptă în funcție de necesități)
function authenticateUser(username, password) {
    // Implementează logica de autentificare
    // În exemplu, autentificăm orice utilizator cu orice parolă
    return true;
}
