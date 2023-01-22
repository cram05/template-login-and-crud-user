(function() {

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

    var containerForm = document.getElementById('containerForm');

    var btnSignin = document.getElementById("btnSignin");
    btnSignin.addEventListener('click', function(e){
        e.preventDefault();
        containerForm.classList.add("signin");
        containerForm.classList.remove("register-1");
        containerForm.classList.remove("register-2");
    });

    var btnReg = document.getElementById("btnReg");
    btnReg.addEventListener('click', function(e){
        e.preventDefault();
        containerForm.classList.add("register-1");
        containerForm.classList.remove("register-2");
        containerForm.classList.remove("signin")

    });

    var btnNext = document.getElementById("btnNext");
    btnNext.addEventListener('click', function(e){
        e.preventDefault();
        containerForm.classList.add("register-2");
        containerForm.classList.remove("register-1")
        containerForm.classList.remove("signin")
    });
    
})();