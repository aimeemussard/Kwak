
/* HOMEPAGE PUBLIC*/

$(document).ready(function(){
    showHomepage()
})

function showHomepage(){
    document.querySelector(".button-navbar").setAttribute("style", "color: #202126; font-weight: 600;")
    $("#navbar-right-search").hide();
    $("#arrow").hide();
    $("#navbar-buttons").hide();
    $("#search-result-container").hide();
    $("#signup-login").hide();
    $("#homepage").show();
    $("#main-public-profile").hide();
    $("#following-followers").hide();
    $("#following").hide();
    $("#followers").hide();
    $("#navbar-right-search").show();
    $("#main-search").show();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'auto'
    });

    document.getElementById("navbar-search").classList.remove("sticky");
    document.getElementById("navbar-search").classList.remove("blur");
    window.addEventListener("scroll", function(){
        if(window.scrollY == 0){
            document.getElementById("navbar-search").classList.remove("sticky");
            document.getElementById("navbar-search").classList.remove("blur");
            document.getElementById("search-result-container").style.marginTop = "0";
        } else{
            let height = document.getElementById("navbar-search").offsetHeight;
            document.getElementById("search-result-container").style.marginTop = `${height}px`;
            document.getElementById("navbar-search").classList.add("sticky");
            document.getElementById("navbar-search").classList.add("blur");
        }
    })

    document.getElementById("search").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            $("#navbar-buttons").show();
            $("#arrow").show();
            $("#search-result-container").show();
            $("#recent").show();
            $("#person").hide();
            $("#pictures").hide();
            $("#videos").hide();
            
            document.getElementById("navbar-buttons").children[0].setAttribute("id", "focused");
            document.getElementById("navbar-buttons").children[0].classList.add("active");
            document.getElementById("navbar-buttons").children[1].classList.remove("active");
            document.getElementById("navbar-buttons").children[2].classList.remove("active");
            document.getElementById("navbar-buttons").children[3].classList.remove("active");

            document.getElementById("navbar-buttons").children[0].addEventListener("mouseover", function(){
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[0].classList.add("active");

                document.getElementById("navbar-buttons").children[0].addEventListener("mouseout", function(){
                    document.getElementById("navbar-buttons").children[0].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[0].addEventListener("click", function(){
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[0].setAttribute("id", "focused");
                    $("#recent").show();
                    $("#person").hide();
                    $("#pictures").hide();
                    $("#videos").hide();
                });
            })

            document.getElementById("navbar-buttons").children[1].addEventListener("mouseover", function(){
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[1].classList.add("active");

                document.getElementById("navbar-buttons").children[1].addEventListener("mouseout", function(){
                    document.getElementById("navbar-buttons").children[1].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[1].addEventListener("click", function(){
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[1].setAttribute("id", "focused");
                    $("#recent").hide();
                    $("#person").show();
                    $("#pictures").hide();
                    $("#videos").hide();
                });
            })

            document.getElementById("navbar-buttons").children[2].addEventListener("mouseover", function(){
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[2].classList.add("active");

                document.getElementById("navbar-buttons").children[2].addEventListener("mouseout", function(){
                    document.getElementById("navbar-buttons").children[2].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[2].addEventListener("click", function(){
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[2].setAttribute("id", "focused");
                    $("#recent").hide();
                    $("#person").hide();
                    $("#pictures").show();
                    $("#videos").hide();
                });
            })
            
            document.getElementById("navbar-buttons").children[3].addEventListener("mouseover", function(){
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[3].classList.add("active");

                document.getElementById("navbar-buttons").children[3].addEventListener("mouseout", function(){
                    document.getElementById("navbar-buttons").children[3].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[3].addEventListener("click", function(){
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[3].setAttribute("id", "focused");
                    $("#recent").hide();
                    $("#person").hide();
                    $("#pictures").hide();
                    $("#videos").show();
                });
            })
        }
    });
}

function showPublicProfile(){
    document.querySelector(".button-navbar").setAttribute("style","");
    $("#signup-login").hide();
    $("#homepage").show();
    $("#main-search").hide();
    $("#following-followers").hide();
    $("#following").hide();
    $("#followers").hide();
    $("#navbar-right-search").show();
    $("#main-public-profile").show();
    $("#kwaks").show();
    $("#media").hide();
    $("#likes").hide();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'auto'
    });

    document.getElementById("navbar-public-profile").classList.remove("sticky");
    document.getElementById("navbar-public-profile").classList.remove("blur");
    window.addEventListener("scroll", function(){
        if(window.scrollY == 0){
            document.getElementById("public-profile-container").style.marginTop = "0";
            document.getElementById("navbar-public-profile").classList.remove("sticky");
            document.getElementById("navbar-public-profile").classList.remove("blur");
        } else {
            let height = document.getElementById("navbar-public-profile").offsetHeight;
            document.getElementById("public-profile-container").style.marginTop = `${height}px`;
            document.getElementById("navbar-public-profile").classList.add("sticky");
            document.getElementById("navbar-public-profile").classList.add("blur");
        }
    });

    document.getElementById("profile-buttons-container").children[0].setAttribute("id", "focused2");
    document.getElementById("profile-buttons-container").children[0].classList.add("active");
    document.getElementById("profile-buttons-container").children[1].classList.remove("active");
    document.getElementById("profile-buttons-container").children[2].classList.remove("active");

    document.getElementById("profile-buttons-container").children[0].addEventListener("mouseover", function(){
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[0].classList.add("active");

        document.getElementById("profile-buttons-container").children[0].addEventListener("mouseout", function(){
            document.getElementById("profile-buttons-container").children[0].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[0].addEventListener("click", function(){
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[0].setAttribute("id", "focused2");
            $("#kwaks").show();
            $("#media").hide();
            $("#likes").hide();
        });
    })

    document.getElementById("profile-buttons-container").children[1].addEventListener("mouseover", function(){
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[1].classList.add("active");

        document.getElementById("profile-buttons-container").children[1].addEventListener("mouseout", function(){
            document.getElementById("profile-buttons-container").children[1].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[1].addEventListener("click", function(){
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[1].setAttribute("id", "focused2");
            $("#kwaks").hide();
            $("#media").show();
            $("#likes").hide();
        });
    })

    document.getElementById("profile-buttons-container").children[2].addEventListener("mouseover", function(){
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[2].classList.add("active");

        document.getElementById("profile-buttons-container").children[2].addEventListener("mouseout", function(){
            document.getElementById("profile-buttons-container").children[2].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[2].addEventListener("click", function(){
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[2].setAttribute("id", "focused2");
            $("#kwaks").hide();
            $("#media").hide();
            $("#likes").show();
        });
    })

    document.getElementById("navbar-right-search").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          alert("recherche effectuée");
        }
    });
}

function showFollowing(){
    document.querySelector(".button-navbar").setAttribute("style","");
    $("#signup-login").hide();
    $("#homepage").show();
    $("#main-search").hide();
    $("#following-followers").show();
    $("#following").show();
    $("#followers").hide();
    $("#navbar-right-search").show();
    $("#main-public-profile").hide();
    $("#kwaks").hide();
    $("#media").hide();
    $("#likes").hide();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'auto'
    });

    document.getElementById("follow-navbar").classList.remove("sticky");
    document.getElementById("follow-navbar").classList.remove("blur");
    window.addEventListener("scroll", function(){
        if(window.scrollY == 0){
            document.getElementById("follow-navbar").classList.remove("sticky");
            document.getElementById("follow-navbar").classList.remove("blur");
            document.getElementById("following").style.marginTop = "0";
        } else{
            let height = document.getElementById("follow-navbar").offsetHeight;
            document.getElementById("following").style.marginTop = `${height}px`;
            document.getElementById("follow-navbar").classList.add("sticky");
            document.getElementById("follow-navbar").classList.add("blur");
        }
    })

    document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "focused");
    document.getElementById("follow-navbar-buttons").children[0].classList.add("active");
    document.getElementById("follow-navbar-buttons").children[1].classList.remove("active");
    document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "");

    document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseover", function(){
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[0].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseout", function(){
            document.getElementById("follow-navbar-buttons").children[0].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("click", function(){
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "focused");
            showFollowing();
        });
    })

    document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseover", function(){
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[1].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseout", function(){
            document.getElementById("follow-navbar-buttons").children[1].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("click", function(){
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "focused");
            showFollowers();
        });
    })

}

function showFollowers(){
    document.querySelector(".button-navbar").setAttribute("style","");
    $("#signup-login").hide();
    $("#homepage").show();
    $("#main-search").hide();
    $("#following-followers").show();
    $("#following").hide();
    $("#followers").show();
    $("#navbar-right-search").show();
    $("#main-public-profile").hide();
    $("#kwaks").hide();
    $("#media").hide();
    $("#likes").hide();

    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'auto'
    });

    document.getElementById("follow-navbar").classList.remove("sticky");
    document.getElementById("follow-navbar").classList.remove("blur");
    window.addEventListener("scroll", function(){
        if(window.scrollY == 0){
            document.getElementById("follow-navbar").classList.remove("sticky");
            document.getElementById("follow-navbar").classList.remove("blur");
            document.getElementById("followers").style.marginTop = "0";
        } else{
            let height = document.getElementById("follow-navbar").offsetHeight;
            document.getElementById("followers").style.marginTop = `${height}px`;
            document.getElementById("follow-navbar").classList.add("sticky");
            document.getElementById("follow-navbar").classList.add("blur");
        }
    })

    document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "focused");
    document.getElementById("follow-navbar-buttons").children[1].classList.add("active");
    document.getElementById("follow-navbar-buttons").children[0].classList.remove("active");
    document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "");

    document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseover", function(){
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[0].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseout", function(){
            document.getElementById("follow-navbar-buttons").children[0].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("click", function(){
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "focused");
            showFollowing();
        });
    })

    document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseover", function(){
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[1].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseout", function(){
            document.getElementById("follow-navbar-buttons").children[1].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("click", function(){
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "focused");
            showFollowers();
        });
    })
}

/* LOGIN/SIGNUP */

function textAnimation(){
    const animatedTexts = document. querySelectorAll(".title");
    function animateText(animatedTexts) {
        const text = animatedTexts.textContent;
        let speed = animatedTexts.getAttribute("speed");
        let delay = animatedTexts.getAttribute("delay");
        if (speed == null) {
            speed = 150;
        }
        if (delay == null) {
            delay = 0;
        }
        animatedTexts.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] == ' ') {
                animatedTexts.innerHTML += ' ';
            }
            animatedTexts.innerHTML += `<span>${text[i]}</span>`;
        }
        setTimeout(function() {
            let idx = 0;
            function writeChar() {
            const span = animatedTexts.querySelectorAll('span') [idx];
            span.classList.add("fade");
            idx++;
            if (idx == text.length) {
                clearInterval(writeCharInterval);
            }
        }
        let writeCharInterval = setInterval (writeChar, speed);
        }, delay);
    }
    animatedTexts.forEach(animateText);
}

function showSignup() {
    $("#homepage").hide();
    $("#signup-login").show();
    $("#inscription").show();
    $("#connexion").hide();
    $("#btn-connexion").show();
    $("#btn-inscription").hide();
    textAnimation();
    setTimeout(() => {
        window.scroll({
            top: 700, 
            left: 0, 
            behavior: 'smooth'
        });
    }, 2000) 
}

function validateData() {

    var username = false;
    var usernamecheck = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    var lastname = false;
    var firstname = false;
    var namecheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,20}$/u;

    var email;
    var mailcheck = /^([\w-]+(?:.[\w-]+))@((?:[\w-]+.)\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i;

    var password = true;
    var passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

    var birthdate = false;

    var selectDay = document.getElementById("day");
    var selectMonth = document.getElementById("month");
    var selectYear = document.getElementById("year");

    var selectedValueDay = selectDay.options[selectDay.selectedIndex].value;
    var selectedValueMonth = selectMonth.options[selectMonth.selectedIndex].value;
    var selectedValueYear = selectYear.options[selectYear.selectedIndex].value;


    if (document.getElementById("username").value.match(usernamecheck)) {
        username = true;
    } else {
        username = false;

        var alertUsername = document.getElementById("alertUsername");
        alertUsername.classList.toggle("show");
        setTimeout(() => {
            alertUsername.classList.toggle("show");
        }, "5000");
        document.getElementById('username').classList.add('error');
        setTimeout(() => {
            document.getElementById('username').classList.remove('error');
        }, "500");
        document.getElementById('username').addEventListener('input', function () {

            if (document.getElementById("username").value.match(usernamecheck)) {
                username = true;
                //document.getElementById("username").style.borderBottom = "2px solid #f64c72";
            }
            else if (document.getElementById("username").value.length == 0) {
                document.getElementById('username').classList.add('error');
                setTimeout(() => {
                    document.getElementById('username').classList.remove('error');
                }, "300");
                //document.getElementById("username").style.borderBottom = "2px solid darkgray";
                username = false;
            } else {
                //document.getElementById("username").style.borderBottom = "2px solid darkgray";
                username = false;
            }
        })
    }

    if (document.getElementById("firstname").value.match(namecheck)) {
        firstname = true;
    } else {
        firstname = false;

        var alertFirstname = document.getElementById("alertFirstname");
        alertFirstname.classList.toggle("show");
        setTimeout(() => {
            alertFirstname.classList.toggle("show");
        }, "5000");
        document.getElementById('firstname').classList.add('error');
        setTimeout(() => {
            document.getElementById('firstname').classList.remove('error');
        }, "500");
        document.getElementById('firstname').addEventListener('input', function () {

            if (document.getElementById("firstname").value.match(namecheck)) {
                firstname = true;
            }
            else if (document.getElementById("firstname").value.length == 0) {
                document.getElementById('firstname').classList.add('error');
                setTimeout(() => {
                    document.getElementById('firstname').classList.remove('error');
                }, "300");
                firstname = false;
            } else {
                firstname = false;
            }
        })
    }

    if (document.getElementById("lastname").value.match(namecheck)) {
        lastname = true;
    } else {
        lastname = false;

        var alertLastname = document.getElementById("alertLastname");
        alertLastname.classList.toggle("show");
        setTimeout(() => {
            alertLastname.classList.toggle("show");
        }, "5000");
        document.getElementById('lastname').classList.add('error');
        setTimeout(() => {
            document.getElementById('lastname').classList.remove('error');
        }, "500");
        document.getElementById('lastname').addEventListener('input', function () {

            if (document.getElementById("lastname").value.match(namecheck)) {
                lastname = true;
            }
            else if (document.getElementById("lastname").value.length == 0) {
                document.getElementById('lastname').classList.add('error');
                setTimeout(() => {
                    document.getElementById('lastname').classList.remove('error');
                }, "300");
                lastname = false;
            } else {
                lastname = false;
            }
        })
    }

    if (document.getElementById("email-signup").value.match(mailcheck)) {
        email = true;
    } else {
        email = false;

        var alertEmailSignup = document.getElementById("alertEmailSignup");
        alertEmailSignup.classList.toggle("show");
        setTimeout(() => {
            alertEmailSignup.classList.toggle("show");
        }, "5000");
        document.getElementById('email-signup').classList.add('error');
        setTimeout(() => {
            document.getElementById('email-signup').classList.remove('error');
        }, "500");
        document.getElementById('email-signup').addEventListener('input', function () {

            if (document.getElementById("email-signup").value.match(mailcheck)) {
                email = true;
            }
            else if (document.getElementById("email-signup").value.length == 0) {
                document.getElementById('email-signup').classList.add('error');
                setTimeout(() => {
                    document.getElementById('email-signup').classList.remove('error');
                }, "300");
                email = false;
            } else {
                email = false;
            }
        })
    }

    if (document.getElementById("password-signup").value.match(passcheck)) {
        password = true;
    } else {
        password = false;

        var alertPasswordSignup = document.getElementById("alertPasswordSignup");
        alertPasswordSignup.classList.toggle("show");
        setTimeout(() => {
            alertPasswordSignup.classList.toggle("show");
        }, "5000");
        document.getElementById('password-signup').classList.add('error');
        setTimeout(() => {
            document.getElementById('password-signup').classList.remove('error');
        }, "500");
        document.getElementById('password-signup').addEventListener('input', function () {

            if (document.getElementById("password-signup").value.match(passcheck)) {
                password = true;
            }
            else if (document.getElementById("password-signup").value.length == 0) {
                document.getElementById('password-signup').classList.add('error');
                setTimeout(() => {
                    document.getElementById('password-signup').classList.remove('error');
                }, "300");
                password = false;
            } else {
                password = false;
            }
        })
    }


    const date = new Date();
    const actualYear = date.getFullYear();
    const actualMonth = (date.getMonth()) + 1;
    const actualDay = date.getDate();


    if (selectedValueDay === "0" && selectedValueMonth === "0" && selectedValueYear === "0") {
        birthdate = false;
        document.getElementById('year').classList.add('error');
        document.getElementById('month').classList.add('error');
        document.getElementById('day').classList.add('error');
        setTimeout(() => {
            document.getElementById('year').classList.remove('error');
            document.getElementById('month').classList.remove('error');
            document.getElementById('day').classList.remove('error');
        }, "300");
        var alertBirthdate = document.getElementById("alertBirthdate");
        alertBirthdate.classList.toggle("show");
        setTimeout(() => {
            alertBirthdate.classList.toggle("show");
        }, "5000");
    } else {
        if (parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) == actualMonth && parseInt(selectedValueDay) < actualDay && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0") {
            birthdate = true;
        }
        if (parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) == actualMonth && parseInt(selectedValueDay) >= actualDay && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0") {
            document.getElementById('year').classList.add('error');
            document.getElementById('month').classList.add('error');
            document.getElementById('day').classList.add('error');
            setTimeout(() => {
                document.getElementById('year').classList.remove('error');
                document.getElementById('month').classList.remove('error');
                document.getElementById('day').classList.remove('error');
            }, "300");
            var alertBirthdate2 = document.getElementById("alertBirthdate2");
            alertBirthdate2.classList.toggle("show");
            setTimeout(() => {
                alertBirthdate2.classList.toggle("show");
            }, "5000");
            //alert("Vous n'avez pas 13 ans!");
        }
        if (parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) < actualMonth && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0") {
            birthdate = true;
        }
        if (parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) > actualMonth && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0") {
            document.getElementById('year').classList.add('error');
            document.getElementById('month').classList.add('error');
            document.getElementById('day').classList.add('error');
            setTimeout(() => {
                document.getElementById('year').classList.remove('error');
                document.getElementById('month').classList.remove('error');
                document.getElementById('day').classList.remove('error');
            }, "300");
            var alertBirthdate2 = document.getElementById("alertBirthdate2");
            alertBirthdate2.classList.toggle("show");
            setTimeout(() => {
                alertBirthdate2.classList.toggle("show");
            }, "5000");
            //alert("Vous n'avez pas 13 ans!");
        }
        if (parseInt(selectedValueYear) < (actualYear - 13) && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0") {
            birthdate = true;
        }
        if (selectedValueDay === "0") {
            document.getElementById('day').classList.add('error');
            setTimeout(() => {
                document.getElementById('day').classList.remove('error');
            }, "300");
            var alertBirthdateDay = document.getElementById("alertBirthdateDay");
            alertBirthdateDay.classList.toggle("show");
            setTimeout(() => {
                alertBirthdateDay.classList.toggle("show");
            }, "5000");
            //alert("Veuillez renseigner votre jour de naissance.");
        }
        if (selectedValueMonth === "0") {
            document.getElementById('month').classList.add('error');
            setTimeout(() => {
                document.getElementById('month').classList.remove('error');
            }, "300");
            var alertBirthdateMonth = document.getElementById("alertBirthdateMonth");
            alertBirthdateMonth.classList.toggle("show");
            setTimeout(() => {
                alertBirthdateMonth.classList.toggle("show");
            }, "5000");
            //alert("Veuillez renseigner votre mois de naissance.");
        }
        if (selectedValueYear === "0") {
            document.getElementById('year').classList.add('error');
            setTimeout(() => {
                document.getElementById('year').classList.remove('error');
            }, "300");
            var alertBirthdateYear = document.getElementById("alertBirthdateYear");
            alertBirthdateYear.classList.toggle("show");
            setTimeout(() => {
                alertBirthdateYear.classList.toggle("show");
            }, "5000");
            //alert("Veuillez renseigner votre année de naissance.");
        }
    }



    if (username === true && firstname === true && lastname === true && birthdate === true && email === true && password === true) {
        subscribeUser();
        alert("Un formulaire a été envoyé.");
        return true;
    } else {
        // alert("Une erreur s'est produite.");
        return false;
    }

}

function showLogin() {
    $("#homepage").hide();
    $("#signup-login").show();
    $("#inscription").hide();
    $("#connexion").show();
    $("#btn-connexion").hide();
    $("#btn-inscription").show();
    textAnimation();
    setTimeout(() => {
        window.scroll({
            top: 700,
            left: 0,
            behavior: 'smooth'
        });
    }, 2000)   
}

function showPasswordLogin() {
    let x = document.getElementById("password-login");
    let eyeopen = document.getElementById("eye-open");
    let eyeclosed = document.getElementById("eye-closed");

    if (x.type === "password") {
        x.type = "text";
        eyeopen.style.display = "none";
        eyeclosed.style.display = "block";
        x.setAttribute("placeholder", "Mot de passe");
    } else {
        x.type = "password";
        eyeopen.style.display = "block";
        eyeclosed.style.display = "none";
        x.setAttribute("placeholder", "************");
    }
}

function showPasswordSignup() {
    let y = document.getElementById("password-signup");
    let eyeOpen = document.getElementById("eyeOpen");
    let eyeClosed = document.getElementById("eyeClosed");
    if (y.type === "password") {
        y.type = "text"
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
        y.setAttribute("placeholder", "Mot de passe");
    } else {
        y.type = "password";
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
        y.setAttribute("placeholder", "************");
    }
}


function generateDate() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const date = new Date();
    const year = date.getFullYear();
    let month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


    for (let i = 0; i <= 70; i++) {
        const option = document.createElement('option');
        option.setAttribute("value", ((year - 13) - i))
        option.textContent = ((year - 13) - i);
        yearSelect.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.setAttribute("value", (i < 10 ? `0${i}` : i))
        option.textContent = (month[(i - 1)]);
        monthSelect.appendChild(option);
    }

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.setAttribute("value", (i < 10 ? `0${i}` : i));
        option.setAttribute("id", "option");
        option.textContent = (i < 10 ? `0${i}` : i);
        daySelect.appendChild(option);
    }

}

function onChange() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    var text = monthSelect.options[monthSelect.selectedIndex].text;
    var selectedYear = parseInt(yearSelect.options[yearSelect.selectedIndex].text);
    if (((selectedYear % 4 == 0 && selectedYear % 100 > 0) || (selectedYear % 400 == 0)) && text == "Février") {
        const numberDays = 29;
        $("option").remove("#option");
        for (let i = 1; i <= numberDays; i++) {
            const option = document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    }
    else if (((selectedYear % 4 != 0 && selectedYear % 100 <= 0) || (selectedYear % 400 != 0)) && text == "Février") {
        const numberDays = 28;
        $("option").remove("#option");
        for (let i = 1; i <= numberDays; i++) {
            const option = document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    }
    else if (text == "Avril" || text == "Juin" || text == "Septembre" || text == "Novembre") {
        $("option").remove("#option");
        for (let i = 1; i <= 30; i++) {
            const option = document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    } else {
        $("option").remove("#option");
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    }
}

function subscribeUser() {
    let selectDay = document.getElementById("day");
    let selectMonth = document.getElementById("month");
    let selectYear = document.getElementById("year");
    let selectedValueDay = selectDay.options[selectDay.selectedIndex].value;
    let selectedValueMonth = selectMonth.options[selectMonth.selectedIndex].value;
    let selectedValueYear = selectYear.options[selectYear.selectedIndex].value;

    let date = selectedValueYear + "-" + selectedValueMonth + "-" + selectedValueDay
    let mail = document.getElementById("email-signup").value;
    let password = document.getElementById("password-signup").value;
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let username = document.getElementById("username").value;

    fetch('../PHP/UserInscription.php', {
        method: 'POST',
        body: JSON.stringify({
            mail: mail,
            password: password,
            lastname: lastname,
            firstname: firstname,
            birth: date,
            username: username,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.text())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

function connectUser() {
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    fetch('../PHP/UserConnection.php', {
        method: 'POST',
        body: JSON.stringify({
            mail: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let error = document.getElementById("error-connexion");
            if (data == "L'email ou mot de passe incorrect") {
                error.innerHTML = data;
                
            } else {
                //fetchDataUser("../PHP/userInfo.php");
                window.location.href = "../html_partials/profil_main_user.html";
                
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

function fetchDataUser(url) {
    fetch(url)
    .then ((response) => response.json())
    .then((response) => {
        console.log(response);
        return response;
    })
    .then (function(datas){
        const data = datas[0];
            document.getElementById("banner").innerHTML = `<img src="${data.banner}">`;
            document.getElementById("avatar").innerHTML = `<img src="${data.avatar}"class="img-profile" height="50px" width="100%">`;
            document.getElementById("name").innerHTML = `${data.name}`;
            document.getElementById("profil_username").innerHTML = `@${data.username}`;
            if(data.bio === null){
                data.bio = "Pas de bio pour cette personne";
            }
            document.getElementById("bio").innerHTML = `${data.bio}`;
            document.getElementById("join").innerHTML = `<i class="fa-solid fa-calendar-days"></i> A rejoint Kwak en ${data.register_date}</p>`;
            if(data.id_following === null){
                following = 0;
            } else {
                following = datas.id_following.length;
            }
            document.getElementById("number_following").innerHTML = `${following}`;
            if(data.id_follower === null){
                followers = 0;
            } else {
                followers = datas.id_followers.length;
            }
            document.getElementById("number_followers").innerHTML = `${followers}`;
    });
}

function getTweets() {
    fetch("../PHP/Tweets.php")
        .then(response => { return response.json(); })
        .then(tweets => {
            console.log(tweets);
            let i = 0;
            for (let tweet of tweets) {
                createTweets(tweet);
                getTweetStats(tweet.id, i);
                
                i++;
            }
        });
}

function getTweetStats(tweetid, index) {
    let comments = document.querySelector("#commentcount");
    let likes = document.querySelectorAll(".likecount")[index];
    let retweets = document.querySelectorAll(".retweetcount")[index];
    let likecount = document.createElement("div");
    let retweetcount = document.createElement("div");
    let commentcount = document.createElement("div");
    fetch("../PHP/tweetstats.php", {
        method: 'POST',
        body: JSON.stringify({
            tweetid: tweetid
        })
    })
        .then(response => { return response.json(); })
        .then(tweet => {
            console.log(tweet);
            tweet.countlikes == undefined ? likecount.innerHTML = "0 like(s)" : likecount.innerHTML = tweet.countlikes + " like(s)";
            likes.appendChild(likecount);
            tweet.countretweets == undefined ? retweetcount.innerHTML = "0 reKwak" :  retweetcount.innerHTML = tweet.countretweets +" reKwak(s)";
            retweets.appendChild(retweetcount);

        });
}


function createTweets(array) {
    console.log(array);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="row">
    <!-- ------------- -->
    <div class="two columns">
        <img src="${array.avatar}" alt="photo-profil" class="five columns img-tweets">
    </div>
    <!-- -------------- -->
    <div class="three columns section-tweets username-bar">${array.name}</div>
    <!-- -------------- -->
    <div class="two columns username-tweets">@${array.username}</div>
    <!-- -------------- -->
    <div class="two columns offset-by-two username-tweets">${array.date_send}</div>
</div>
<!-- ligne 3 : le tweet -->
<div class="row  container-tweets">
<!-- tweets -->
    <div class="content">
        <div class="tweets">${array.message}
        </div>
    </div>
</div>
<!-- ligne 4 : les intéractions -->
<div class="row container-tweets">
    <!-- links -->
    <div class="four columns links-interactions" id="commentcount">
        <i class="fa-regular fa-comment icon"></i>Comment
    </div>
    <div class="four columns links-interactions retweetcount">
        <i class="fa-solid fa-retweet icon"></i>
    </div>
    <div class="four columns links-interactions likecount">
        <i class="fa-regular fa-heart icon"></i>
    </div>
</div>
</div>`;
    document.querySelector("#tweets").appendChild(div);
}

window.onload = () => {
    generateDate();
    getTweets();
    //modalStuff();
    fetch("../PHP/isConnect.php")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data != null) {
                window.location.href = "../html_partials/profil_main_user.html";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

    