function goToIndex() {
    window.location.href = 'index.html';
}


document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementsByClassName('logo')[0];
    if (logo) {
        logo.addEventListener('click', goToIndex);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            sections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('.service-image img');
        img.style.transform = 'scale(1.1)';
        item.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseout', () => {
        const img = item.querySelector('.service-image img');
        img.style.transform = 'scale(1)';
        item.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if a user is logged in by checking the localStorage
    const userName = localStorage.getItem('userName');
    const loginButton = document.querySelector('a[href="login.html"]');
    
    if (userName) {
        // Hide the login button
        if (loginButton) {
            loginButton.style.display = 'none';
        }

        // Create a greeting message
        const greetingMessage = document.createElement('li');
        greetingMessage.textContent = `Hello, ${userName}`;
        greetingMessage.style.fontSize = '16px';
        greetingMessage.style.color = 'white';

        // Insert the greeting message into the navigation bar
        const navList = document.querySelector('nav ul');
        if (navList) {
            navList.appendChild(greetingMessage);
        }
    } else {
        // If no user is logged in, ensure the login button is visible
        if (loginButton) {
            loginButton.style.display = 'inline-block';
        }
    }
});
