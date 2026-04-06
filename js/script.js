$(document).ready(function() {
    
    // FEATURE 1 (JS): Prompt-based personalization - UPDATED
    const visitorName = prompt("Welcome! Please enter your name:");
    if (visitorName) {
        const welcomeMsg = document.createElement("p");
        welcomeMsg.innerText = "Hello " + visitorName + "!"; // Made it shorter for the sidebar
        welcomeMsg.style.color = "#f5a4ee";
        welcomeMsg.style.textAlign = "center"; // Center it under the photo
        welcomeMsg.style.fontSize = "14px";
        welcomeMsg.style.marginTop = "0px";

        // CHANGE THIS LINE: Target the sidebar-header instead of #about
        document.querySelector(".sidebar-header").appendChild(welcomeMsg);
    }

    // FEATURE 2 (jQuery): Dark Mode Toggle
    // Keep your code here as is...
    $('nav').append('<button id="darkToggle" style="margin-top:20px;">Toggle Theme</button>');
    
    $('#darkToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        $(this).text($(this).text() === 'Toggle Theme' ? 'Light Mode' : 'Dark Mode');
    });

    // FEATURE 3 (JS/jQuery): Form Validation and Feedback
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const nameVal = $('#name').val(); // jQuery Method: val()
        if(nameVal.length < 2) {
            alert("Please enter a valid name.");
        } else {
            // FEATURE 4 (jQuery): Hide/Show feedback
            $(this).hide();
            $('#contact').append('<h3>Thank you, ' + nameVal + '! Your message was sent.</h3>');
        }
    });
});