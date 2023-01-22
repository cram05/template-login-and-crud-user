var buttons = document.querySelectorAll(".button");

for (const btn of buttons) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        for (const btnOthers of buttons) {
            btnOthers.classList.remove("active");
        }
        btn.classList.add("active");

    })
}