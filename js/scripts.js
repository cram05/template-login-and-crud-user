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
    if(btnSignin){
        btnSignin.addEventListener('click', function(e){
            e.preventDefault();
            containerForm.classList.add("signin");
            containerForm.classList.remove("register-1");
            containerForm.classList.remove("register-2");
        });
    }

    var btnReg = document.getElementById("btnReg");
    if(btnReg)
        btnReg.addEventListener('click', function(e){
            e.preventDefault();
            containerForm.classList.add("register-1");
            containerForm.classList.remove("register-2");
            containerForm.classList.remove("signin")

        });

    var btnNext = document.getElementById("btnNext");
    if (btnNext)
        btnNext.addEventListener('click', function(e){
            e.preventDefault();
            containerForm.classList.add("register-2");
            containerForm.classList.remove("register-1")
            containerForm.classList.remove("signin")
        });
    

    /** Header */
    // var navItems = document.querySelectorAll('.nav > ul > li ');
    // for (const i of navItems) {
    //     i.addEventListener('mouseover', function(){
    //         if(this.firstChild.nextElementSibling)
    //             this.firstChild.nextElementSibling.style.display = "flex";
    //     })
    //     i.addEventListener('mouseout', function() {
    //         if (this.firstChild.nextElementSibling)
    //             this.firstChild.nextElementSibling.style.display = "none";
    //     })
    // }
})();