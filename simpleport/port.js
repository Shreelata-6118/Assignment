$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            $('#contact-form')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
