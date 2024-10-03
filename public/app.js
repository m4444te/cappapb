document.querySelectorAll('.card h3').forEach(h3 => {
    h3.addEventListener('click', function () {
        console.log("click")
        this.classList.toggle('collapsed');
        const content = this.nextElementSibling;
        content.classList.toggle('collapsed');
    });
});