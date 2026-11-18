const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});