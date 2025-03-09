// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);

document.getElementById("LinkedIn").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/emilioimam/", "_blank");
});

document.getElementById("Github").addEventListener("click", function() {
    window.open("https://github.com/UnclElmino/Portfolio", "_blank");
});

document.getElementById("Email").addEventListener("click", function() {
    window.location.href = "mailto:your-email@example.com";
});

document.getElementById("Resume").addEventListener("click", function() {
    window.open("EmilioShakhawat_resume.pdf", "_blank");
});

// Open link when sysDiagnose card is clicked
document.getElementById("sysDiagnose").addEventListener("click", function() {
    window.open("https://github.com/UnclElmino/Portfolio/tree/e35a16665bcc4b27a764194eee22d2e25c773e9b/System%20diagnosis%20tool", "_blank");
});