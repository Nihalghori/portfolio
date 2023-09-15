document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    // Replace with your WhatsApp number
    const whatsappNumber = '03113841096';

    // Create a WhatsApp message link
    const whatsappMessage = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Name:%20${encodeURIComponent(fullName)}%0AEmail:%20${encodeURIComponent(email)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}%0ASubject:%20${encodeURIComponent(emailSubject)}%0AMessage:%20${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappMessage;
});


document.getElementById('menu-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  });
  
