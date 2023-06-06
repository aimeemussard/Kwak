/* PRIVATE PAGES*/

$(document).ready(function () {
    showHome();
    modalStuff();
    allowAccess();
    kwakon();
});

function logOut() {
    window.location.replace("http://127.0.0.1:5504/mytweeter/html_partials/welcome.html");
}

/* todo */
function showHome() {
    document.querySelector("#home-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#messages").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#following-followers").hide();
    $("#home").show();
    $("#home-recent").show();
    $("#home-person").hide();
    $("#navbar-right").show();
    $("#navbar-right-settings").hide();
    $("#navbar-right-search").show();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").show();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    document.getElementById("navbar-home").classList.remove("sticky");
    document.getElementById("navbar-home").classList.remove("blur");
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            document.getElementById("home-results-container").style.marginTop = "0";
            document.getElementById("navbar-home").classList.remove("sticky");
            document.getElementById("navbar-home").classList.remove("blur");
        } else {
            let height = document.getElementById("navbar-home").offsetHeight;
            document.getElementById("home-results-container").style.marginTop = `${height}px`;
            document.getElementById("navbar-home").classList.add("sticky");
            document.getElementById("navbar-home").classList.add("blur");
        }
    });

    document.getElementById("home-navbar-buttons").children[0].setAttribute("id", "focused");
    document.getElementById("home-navbar-buttons").children[0].classList.add("active");
    document.getElementById("home-navbar-buttons").children[1].classList.remove("active");

    document.getElementById("home-navbar-buttons").children[0].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("home-navbar-buttons").children[0].classList.add("active");

        document.getElementById("home-navbar-buttons").children[0].addEventListener("mouseout", function () {
            document.getElementById("home-navbar-buttons").children[0].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("home-navbar-buttons").children[0].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("home-navbar-buttons").children[0].setAttribute("id", "focused");
            $("#home-recent").show();
            $("#home-person").hide();
        });
    })

    document.getElementById("home-navbar-buttons").children[1].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("home-navbar-buttons").children[1].classList.add("active");

        document.getElementById("home-navbar-buttons").children[1].addEventListener("mouseout", function () {
            document.getElementById("home-navbar-buttons").children[1].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("home-navbar-buttons").children[1].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("home-navbar-buttons").children[1].setAttribute("id", "focused");
            $("#home-recent").hide();
            $("#home-person").show();
        });
    })

}
/* done */
function showExplorer() {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#arrow").hide();
    $("#navbar-buttons").hide();
    $("#search-result-container").hide();
    $("#navbar-right").show();
    $("#navbar-right-search").hide();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").show();
    $("#navbar-right-settings").hide();

    $("#home").hide();
    $("#messages").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#following-followers").hide();
    $("#main-search").show();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    document.getElementById("navbar-search").classList.remove("sticky");
    document.getElementById("navbar-search").classList.remove("blur");
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            document.getElementById("navbar-search").classList.remove("sticky");
            document.getElementById("navbar-search").classList.remove("blur");
            document.getElementById("search-result-container").style.marginTop = "0";
        } else {
            let height = document.getElementById("navbar-search").offsetHeight;
            document.getElementById("search-result-container").style.marginTop = `${height}px`;
            document.getElementById("navbar-search").classList.add("sticky");
            document.getElementById("navbar-search").classList.add("blur");
        }
    })

    document.getElementById("search").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            $("#navbar-buttons").show();
            $("#arrow").show();
            $("#search-result-container").show();
            $("#recent").show();
            $("#person").hide();
            $("#pictures").hide();
            $("#videos").hide();
            fetchresearch();
            document.getElementById("navbar-buttons").children[0].setAttribute("id", "focused");
            document.getElementById("navbar-buttons").children[0].classList.add("active");
            document.getElementById("navbar-buttons").children[1].classList.remove("active");
            document.getElementById("navbar-buttons").children[2].classList.remove("active");
            document.getElementById("navbar-buttons").children[3].classList.remove("active");

            document.getElementById("navbar-buttons").children[0].addEventListener("mouseover", function () {
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[0].classList.add("active");

                document.getElementById("navbar-buttons").children[0].addEventListener("mouseout", function () {
                    document.getElementById("navbar-buttons").children[0].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[0].addEventListener("click", function () {
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[0].setAttribute("id", "focused");
                    $("#recent").show();
                    $("#person").hide();
                    $("#pictures").hide();
                    $("#videos").hide();
                });
            })

            document.getElementById("navbar-buttons").children[1].addEventListener("mouseover", function () {
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[1].classList.add("active");

                document.getElementById("navbar-buttons").children[1].addEventListener("mouseout", function () {
                    document.getElementById("navbar-buttons").children[1].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[1].addEventListener("click", function () {
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[1].setAttribute("id", "focused");
                    $("#recent").hide();
                    $("#person").show();
                    $("#pictures").hide();
                    $("#videos").hide();
                });
            })

            document.getElementById("navbar-buttons").children[2].addEventListener("mouseover", function () {
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[2].classList.add("active");

                document.getElementById("navbar-buttons").children[2].addEventListener("mouseout", function () {
                    document.getElementById("navbar-buttons").children[2].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[2].addEventListener("click", function () {
                    document.getElementById("focused").setAttribute("id", "");
                    document.getElementById("navbar-buttons").children[2].setAttribute("id", "focused");
                    $("#recent").hide();
                    $("#person").hide();
                    $("#pictures").show();
                    $("#videos").hide();
                });
            })

            document.getElementById("navbar-buttons").children[3].addEventListener("mouseover", function () {
                document.getElementById("focused").classList.remove("active");
                document.getElementById("navbar-buttons").children[3].classList.add("active");

                document.getElementById("navbar-buttons").children[3].addEventListener("mouseout", function () {
                    document.getElementById("navbar-buttons").children[3].classList.remove("active");
                    document.getElementById("focused").classList.add("active");
                })

                document.getElementById("navbar-buttons").children[3].addEventListener("click", function () {
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
/* Louisa */
function showMessages() {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#home").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#navbar-right").hide();
    $("#navbar-right-settings").hide();
    $("#following-followers").hide();
    $("#messages").show();
    $("#primary-message-section").show();
    $("#secondary-message-section").show();
    $("#newConversation").hide();
    $("#conversation").hide();
    $("#newMessage").show();

    document.getElementById("newMessage").addEventListener("click", function(){
        $("#newMessage").hide();
        $("#newConversation").show();
        $("#conversation").hide();

        document.getElementById("sendMessage").addEventListener("click", function(){
            const usersMessages = document.getElementById("bubbleMessages");

            usersMessages.style.height = "100px";
            usersMessages.style.background = "#fb6421";
            usersMessages.style.color = "#fff";
            usersMessages.style.padding = "7px 15px";
            usersMessages.style.borderRadius = "9px";
            usersMessages.style.width = "350px";
            usersMessages.style.margin = "9px";

            const usersMessagesOthers = document.getElementById("bubbleMessagesOthers");

            usersMessagesOthers.style.height = "100px";
            usersMessagesOthers.style.background = "#f64c72";
            usersMessagesOthers.style.color = "#fff";
            usersMessagesOthers.style.padding = "7px 15px";
            usersMessagesOthers.style.borderRadius = "9px";
            usersMessagesOthers.style.width = "350px";
            usersMessagesOthers.style.margin = "9px";

            let input = document.getElementById("inputMessage");
            let inputValue = input.value;

            let p = document.createElement("p");
            p.textContent = inputValue;

            let div = document.createElement("div");
            div.appendChild(p);

            let container = document.getElementById("messagesContainer");
            container.appendChild(div);
        })
    })

    document.getElementById("primary-message-section").addEventListener("mouseover", function () {
        document.getElementById("secondary-message-section").classList.add("sticky")
        document.getElementById("primary-message-section").style.overflow = "scroll";
        document.getElementById("primary-message-section").classList.remove("sticky")
    })

    document.getElementById("secondary-message-section").addEventListener("mouseover", function () {
        document.getElementById("secondary-message-section").classList.remove("sticky")
        document.getElementById("secondary-message-section").style.overflow = "scroll";
        document.getElementById("primary-message-section").classList.add("sticky")
        document.getElementById("primary-message-section").style.overflow = "hidden";
    })

    document.getElementById("sendMessage").addEventListener("click", function(){
        const usersMessages = document.getElementById("bubbleMessages");

        usersMessages.style.height = "100px";
        usersMessages.style.background = "#fb6421";
        usersMessages.style.color = "#fff";
        usersMessages.style.padding = "7px 15px";
        usersMessages.style.borderRadius = "9px";
        usersMessages.style.width = "350px";
        usersMessages.style.margin = "9px";
    
        const usersMessagesOthers = document.getElementById("bubbleMessagesOthers");
    
        usersMessagesOthers.style.height = "100px";
        usersMessagesOthers.style.background = "#f64c72";
        usersMessagesOthers.style.color = "#fff";
        usersMessagesOthers.style.padding = "7px 15px";
        usersMessagesOthers.style.borderRadius = "9px";
        usersMessagesOthers.style.width = "350px";
        usersMessagesOthers.style.margin = "9px";
    
        let input = document.getElementById("inputMessage");
        let inputValue = input.value;
    
        let p = document.createElement("p");
        p.textContent = inputValue;
    
        let div = document.createElement("div");
        div.appendChild(p);
    
        let container = document.getElementById("messagesContainer");
        container.appendChild(div);
    })


    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    let input = document.getElementById("input-test")
    let list = document.getElementById("user-list")
    let ul = document.createElement("ul")
    list.appendChild(ul)
    input.addEventListener("input", function () {
        if (input.value.length >= 5) {
            let li = document.createElement("li")
            li.textContent = input.value;
            ul.appendChild(li)
            li.addEventListener("click", function () {
                ul.remove()
                showPrivateProfile()
            })
        } else {
            ul.innerHTML = '';
        }
    })
}
/* done */
function showPrivateProfile(userid) {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;")
    document.querySelector("#settings-button").setAttribute("style", "")
    fetchProfileData(userid); //ALLOALALLALA
    $("#home").hide();
    $("#messages").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#following-followers").hide();

    $("#navbar-right").show();
    $("#navbar-right-search").show();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").show();
    $("#navbar-right-settings").hide();

    $("#main-private-profile").show();
    //$("#button-follow").hide();
    $("#kwaks").show();
    $("#media").hide();
    $("#likes").hide();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    document.getElementById("navbar-private-profile").classList.remove("sticky");
    document.getElementById("navbar-private-profile").classList.remove("blur");
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            document.getElementById("private-profile-container").style.marginTop = "0";
            document.getElementById("navbar-private-profile").classList.remove("sticky");
            document.getElementById("navbar-private-profile").classList.remove("blur");
        } else {
            let height = document.getElementById("navbar-private-profile").offsetHeight;
            document.getElementById("private-profile-container").style.marginTop = `${height}px`;
            document.getElementById("navbar-private-profile").classList.add("sticky");
            document.getElementById("navbar-private-profile").classList.add("blur");
        }
    });

    document.getElementById("profile-buttons-container").children[0].setAttribute("id", "focused2");
    document.getElementById("profile-buttons-container").children[0].classList.add("active");
    document.getElementById("profile-buttons-container").children[1].classList.remove("active");
    document.getElementById("profile-buttons-container").children[2].classList.remove("active");

    document.getElementById("profile-buttons-container").children[0].addEventListener("mouseover", function () {
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[0].classList.add("active");

        document.getElementById("profile-buttons-container").children[0].addEventListener("mouseout", function () {
            document.getElementById("profile-buttons-container").children[0].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[0].addEventListener("click", function () {
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[0].setAttribute("id", "focused2");
            $("#kwaks").show();
            $("#media").hide();
            $("#likes").hide();
        });
    })

    document.getElementById("profile-buttons-container").children[1].addEventListener("mouseover", function () {
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[1].classList.add("active");

        document.getElementById("profile-buttons-container").children[1].addEventListener("mouseout", function () {
            document.getElementById("profile-buttons-container").children[1].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[1].addEventListener("click", function () {
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[1].setAttribute("id", "focused2");
            $("#kwaks").hide();
            $("#media").show();
            $("#likes").hide();
        });
    })

    document.getElementById("profile-buttons-container").children[2].addEventListener("mouseover", function () {
        document.getElementById("focused2").classList.remove("active");
        document.getElementById("profile-buttons-container").children[2].classList.add("active");

        document.getElementById("profile-buttons-container").children[2].addEventListener("mouseout", function () {
            document.getElementById("profile-buttons-container").children[2].classList.remove("active");
            document.getElementById("focused2").classList.add("active");
        })

        document.getElementById("profile-buttons-container").children[2].addEventListener("click", function () {
            document.getElementById("focused2").setAttribute("id", "");
            document.getElementById("profile-buttons-container").children[2].setAttribute("id", "focused2");
            $("#kwaks").hide();
            $("#media").hide();
            $("#likes").show();
        });
    })

    document.getElementById("navbar-right-search").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            alert("recherche effectuée");
        }
    });
}
/* todo */
function showSettings() {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;")

    $("#home").hide();
    $("#messages").hide();
    $("#main-private-profile").hide();
    $("#settings").show();
    $("#main-search").hide();
    $("#following-followers").hide();

    $("#navbar-right").hide();
    $("#navbar-right-search").hide();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").hide();
    $("#navbar-right-settings").show();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    })

    generateDate();
    onChange();

    /*
    fetch("../PHP/userdata.php", {
        method: 'POST',
        body: JSON.stringify({
            banner: 
            profilePicture:
            username:
            firstname:
            lastname:
            birthdate:
            email:
            password:
        })
    })
        .then(response => { return response.json(); })
        .then(data => {
    })
    
    /*
    let ppButton = document.getElementById("ppButton")
    let ppContainer = document.getElementById("edit-avatar")
    let ppInput = document.getElementById("addPicture")
    let bannerButton = document.getElementById("bannerButton")
    let bannerContainer = document.getElementById("edit-banner")
    let bannerInput = document.getElementById("addBanner")
    
    ppInput.addEventListener("input", function(){
        ppContainer.setAttribute("src", `../assets/${ppInput.files[0].src}`)
    })*/

    document.getElementById("editSubmit").addEventListener("click", function(){
        validateData();

    })

}

function showConversation(){
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "color: #202126; font-weight: 600; fill: #202126;")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#home").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#navbar-right").hide();
    $("#navbar-right-settings").hide();
    $("#following-followers").hide();
    $("#messages").show();
    $("#primary-message-section").show();
    $("#secondary-message-section").show();
    $("#newConversation").hide();
    $("#conversation").show();
    $("#newMessage").hide();
}

function modalStuff() {
    var modalbtn = document.querySelectorAll('[data-target]');
    console.log(modalbtn);
    let children = document.body.children;
    let kwakval = document.querySelector("#kwak");
    let kwak = document.querySelector("#showtext");
    for (const target of modalbtn) {
        const modal = document.getElementById(target.dataset.target);
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        if (target.tagName == "BUTTON") {
            target.onclick = function () {
                for (const tout of children) {
                    if (tout != modal) {
                        document.body.style.backdropFilter = 'blur(10px)';
                        tout.style.filter = 'blur(10px)'
                        tout.style.zIndex = "0";
                        //tout.style.pointerEvents = "none";
                    }
                }
                modal.style.visibility = "visible";
                modal.style.opacity = "1";
                modal.style.zIndex = "9999";
            }
            document.body.onclick = function (e) {
                console.log(e);
                //if(!$(event.target).closest('#openModal').length && !$(event.target).is('#openModal'))
                if (e.target.id != target.dataset.target && modal.style.visibility == "visible" && e.target != target && !modal.contains(e.target)) {
                    modal.style.visibility = "hidden";
                    modal.style.opacity = "0";
                    for (const tout of children) {
                        document.body.style.backdropFilter = 'none';
                        tout.style.filter = 'none'
                        //tout.style.pointerEvents = "auto";
                    }
                }
            }
        }
    }
    var modalclose = document.getElementsByClassName("modal-close");
    for (const btnclose of modalclose) {
        const closestmodal = btnclose.closest(".modal");
        btnclose.onclick = function () {
            for (const tout of children) {
                document.body.style.backdropFilter = 'none';
                tout.style.filter = 'none';

            }
            closestmodal.style.visibility = "hidden";
            closestmodal.style.opacity = "0";
            //kwak.innerHTML = kwakval.value;
        }
        document.onkeyup = function (e) {
            if (e.key === "Escape") {
                for (const tout of children) {

                    document.body.style.backdropFilter = 'none';
                    tout.style.filter = 'none'

                }
                closestmodal.style.visibility = "hidden";
                closestmodal.style.opacity = "0";
            }
        }
    }
}
function showFollowing() {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#messages").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#home").hide();
    $("#navbar-right").show();
    $("#navbar-right-settings").hide();
    $("#navbar-right-search").show();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").show();
    $("#following-followers").show();
    $("#following").show();
    $("#followers").hide();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });


    document.getElementById("follow-navbar").classList.remove("sticky");
    document.getElementById("follow-navbar").classList.remove("blur");
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            document.getElementById("follow-navbar").classList.remove("sticky");
            document.getElementById("follow-navbar").classList.remove("blur");
            document.getElementById("following").style.marginTop = "0";
        } else {
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

    document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[0].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseout", function () {
            document.getElementById("follow-navbar-buttons").children[0].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "focused");
            showFollowing();
        });
    })

    document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[1].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseout", function () {
            document.getElementById("follow-navbar-buttons").children[1].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "focused");
            showFollowers();
        });
    })

}

function showFollowers() {
    document.querySelector("#home-button").setAttribute("style", "");
    document.querySelector("#explore-button").setAttribute("style", "")
    document.querySelector("#messages-button").setAttribute("style", "")
    document.querySelector("#profile-button").setAttribute("style", "")
    document.querySelector("#settings-button").setAttribute("style", "")

    $("#messages").hide();
    $("#main-private-profile").hide();
    $("#settings").hide();
    $("#main-search").hide();
    $("#home").hide();
    $("#navbar-right").show();
    $("#navbar-right-settings").hide();
    $("#navbar-right-search").show();
    $("#navbar-right-signup").hide();
    $("#navbar-right-trending").show();
    $("#following-followers").show();
    $("#following").hide();
    $("#followers").show();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    document.getElementById("follow-navbar").classList.remove("sticky");
    document.getElementById("follow-navbar").classList.remove("blur");
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            document.getElementById("follow-navbar").classList.remove("sticky");
            document.getElementById("follow-navbar").classList.remove("blur");
            document.getElementById("followers").style.marginTop = "0";
        } else {
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

    document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[0].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("mouseout", function () {
            document.getElementById("follow-navbar-buttons").children[0].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[0].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[0].setAttribute("id", "focused");
            showFollowing();
        });
    })

    document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseover", function () {
        document.getElementById("focused").classList.remove("active");
        document.getElementById("follow-navbar-buttons").children[1].classList.add("active");

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("mouseout", function () {
            document.getElementById("follow-navbar-buttons").children[1].classList.remove("active");
            document.getElementById("focused").classList.add("active");
        })

        document.getElementById("follow-navbar-buttons").children[1].addEventListener("click", function () {
            document.getElementById("focused").setAttribute("id", "");
            document.getElementById("follow-navbar-buttons").children[1].setAttribute("id", "focused");
            showFollowers();
        });
    })
}

function allowAccess() {
    fetch("../PHP/userInfo.php")
        .then(response => { return response.json(); })
        .then(data => {
            console.log(data);
            data == 1 ? alert("Bienvenue") : window.location.href = "../html_partials/welcome.html"
        })
}

function fetchresearch() {
    let search = document.querySelector(".input-search").value;
    if (search == "") {
        alert("Champ vide");
        return;
    }
    console.log(search);
    fetch("../PHP/tweetsearch.php", {
        method: 'POST',
        body: JSON.stringify({
            search: search
        })
    })
        .then(response => { return response.json(); })
        .then(tweets => {
            let i = 0;
            console.log(tweets);
            clearTweets();
            for (let tweet of tweets) {
                createTweets(tweet, document.querySelector("#recent"));
                getTweetStats(tweet.id, i);

                i++;
            }
        });
    fetch("../PHP/usersearch.php", {
        method: 'POST',
        body: JSON.stringify({
            search: search
        })
    })
        .then(response => { return response.json(); })
        .then(profiles => {
            clearProfiles();
            for (let profile of profiles) {
                createProfiles(profile, document.querySelector("#person"));
            }
        });

}

function getTweets(user) {
    fetch("../PHP/Tweets.php", {
        method: 'POST',
        body: JSON.stringify({
            userid: user
        })
    })
        .then(response => { return response.json(); })
        .then(tweets => {
            console.log(tweets);
            let i = 0;
            clearTweets();
            for (let tweet of tweets) {
                createTweets(tweet, document.querySelector("#kwaks"));
                getTweetStats(tweet.idtweet, i);

                i++;
            }
        });
}

function getTweetStats(tweetid, index) {
    let comments = document.querySelectorAll(".commentcount")[index];
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
            tweet.countlikes == undefined ? likecount.innerHTML = "0 like" : likecount.innerHTML = tweet.countlikes + " like(s)";
            likes.appendChild(likecount);
            tweet.countretweets == undefined ? retweetcount.innerHTML = "0 reKwak" : retweetcount.innerHTML = tweet.countretweets + " reKwak(s)";
            retweets.appendChild(retweetcount);
            tweet.countcomments == undefined  ?  commentcount.innerHTML = "0 comment" : commentcount.innerHTML = tweet.countcomments + " comment(s)";
            comments.appendChild(commentcount);
        });
}

function clearProfiles() {
    allprofiles = document.querySelectorAll(".ALLPROFILES");
    for (let allprofile of allprofiles) {
        allprofile.innerHTML = "";
    }
}
function createProfiles(array, element) {
    let div = document.createElement("div");
    div.className = "ALLPROFILES";
    div.innerHTML = `<div class="row follow-container">
    <div class="eleven columns offset-by-half-one">
            <img class="one column profile-picture" src="${array.avatar}" alt="">
            <div class="seven columns">
                <h5>${array.name}</h5>
                <h6 onclick="showPrivateProfile(${array.id})">@${array.username}</h6>
            </div>
            <button class="button-third-outline three columns offset-by-one">Follow</button>
    </div>
</div>`;
    element.appendChild(div);
}
function clearTweets() {
    alltweets = document.querySelectorAll(".ALLTWEETS");
    for (let alltweet of alltweets) {
        alltweet.innerHTML = "";
    }
}
function createTweets(array, element) {
    console.log(array);
    let div = document.createElement("div");
    div.className = "ALLTWEETS";
    div.innerHTML = `
    <div class="container">
                            <div class="row kwak-container">
                                <div class="eleven columns offset-by-half-one">
                                    <!-- username and info -->
                                    <div class="row align-center">
                                        <img src="${array.avatar}" alt="photo-profil" class="one column profile-picture">
                                        <button type="button" class="button-interaction three columns offset-by-half-one">${array.name}</button>
                                        <p class="three columns offset-by-half-one disabled" onclick="showPrivateProfile(${array.userid})">@${array.username}</p>
                                        <p class=" three columns offset-by-one">${array.date}</p>
                                    </div>
                                    <!-- kwak text -->
                                    <div class="row">
                                        <div class="eleven columns offset-by-one">
                                            <p>${array.message}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- kwak/comment/like buttons-->
                                    <div class="row">
                                        <div class="four columns offset-by-one">
                                            <button type="button" class="button-interaction commentcount"><i class="fa-regular fa-comment icon"></i></button>
                                        </div>
                                        <div class="four columns">
                                            <button type="button" class="button-interaction retweetcount"><i class="fa-solid fa-retweet icon"></i></button>
                                        </div>
                                        <div class="three columns">
                                            <button type="button" class="button-interaction likecount" onclick="likekwak(${array.tweetid})"><i class="fa-regular fa-heart icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    element.appendChild(div);
}

function fetchProfileData(userid) {
    fetch("../PHP/userdata.php", {
        method: 'POST',
        body: JSON.stringify({
            userid: userid
        })
    })
        .then(response => { return response.json(); })
        .then(data => {
            console.log(data);
            profileUserData(data[0], document.querySelector("#private-profile-container"));
            getTweets(data[0].userid);
        });

}
function profileUserData(data) {
    document.getElementById("banner").innerHTML = `<img src="${data.banner}">`;
    document.getElementById("avatar").innerHTML = `<img src="${data.avatar}"class="img-profile" height="50px" width="100%">`;
    document.getElementById("name").innerHTML = `${data.name}`;
    if (data.city != null) {
        document.getElementById("city").innerHTML = `${data.city}`;
    }
    document.getElementById("username").innerHTML = `@${data.username}`;
    if (data.bio == null) {
        data.bio = "Pas de bio pour cette personne";
    }
    document.getElementById("bio").innerHTML = `${data.bio}`;
    document.getElementById("join").innerHTML = `<i class="fa-solid fa-calendar-days"></i> A rejoint Kwak en ${data.date}</p>`;
    if (data.id_following == null) {
        following = 0;
    } else {
        //following = datas.id_following.length;
    }
    //document.getElementById("number_following").innerHTML = `${following}`;
    if (data.id_follower == null) {
        followers = 0;
    } else {
        //followers = datas.id_followers.length;
    }
    //document.getElementById("number_followers").innerHTML = `${followers}`;
}
function kwakon() {
    document.querySelector(".modal-close").addEventListener("click", () => (kwak()));
}
function kwak() {
    let message = document.querySelector("#kwak").value;
    console.log(message);
    fetch("../PHP/kwak.php", {
        method: 'POST',
        body: JSON.stringify({
            message: message
        })
    })
        .then(response => { return response.json(); })
        .then(data => { 
            console.log(data);
        });
}

function retweet(tweetid) {
    fetch("../PHP/rekwak.php", {
        method: 'POST',
        body: JSON.stringify({
            tweetid: tweetid
        })
    })
        .then(response => { return response.json(); })
        .then(data => { 
            console.log(data);
        });
}

function likekwak(tweetid) {
    fetch("../PHP/likekwak.php", {
        method: 'POST',
        body: JSON.stringify({
            tweetid: tweetid
        })
    })
        .then(response => { return response.json(); })
        .then(data => { 
            console.log(data);
        });
}
function generateDate() {
    const yearSelect = document.getElementById('edit-year');
    const monthSelect = document.getElementById('edit-month');
    const daySelect = document.getElementById('edit-day');
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
        const option =document.createElement('option');
        option.setAttribute("value", (i < 10 ? `0${i}` : i));
        option.setAttribute("id", "option");
        option.textContent = (i < 10 ? `0${i}` : i);
        daySelect.appendChild(option);
	} 
    
}

function onChange() {
    const yearSelect = document.getElementById('edit-year');
    const monthSelect = document.getElementById('edit-month');
    const daySelect = document.getElementById('edit-day');
    var text = monthSelect.options[monthSelect.selectedIndex].text;
    var selectedYear = parseInt(yearSelect.options[yearSelect.selectedIndex].text);
    if (((selectedYear % 4 == 0 && selectedYear % 100 > 0) || (selectedYear % 400 == 0)) && text == "Février") {
        const numberDays = 29;
        $("option").remove("#option");
        for (let i = 1; i <= numberDays; i++) {
            const option =document.createElement('option');
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
            const option =document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    }
    else if (text == "Avril" || text == "Juin" || text == "Septembre" || text == "Novembre" ) {
        $("option").remove("#option");
        for (let i = 1; i <= 30; i++) {
            const option =document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    } else {
        $("option").remove("#option");
        for (let i = 1; i <= 31; i++) {
            const option =document.createElement('option');
            option.setAttribute("value", (i < 10 ? `0${i}` : i));
            option.setAttribute("id", "option");
            option.textContent = (i < 10 ? `0${i}` : i);
            daySelect.appendChild(option);
        }
    }
}

function validateData() {

    var username = false;
    var usernamecheck = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    var lastname = false;
    var firstname = false;
    var namecheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,20}$/u ;
    
    var email;
    var mailcheck = /^([\w-]+(?:.[\w-]+))@((?:[\w-]+.)\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i ;
    
    var password = true;
    var passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    
    var birthdate = false;

    var selectDay = document.getElementById("edit-day");
    var selectMonth = document.getElementById("edit-month");
    var selectYear = document.getElementById("edit-year");

    var selectedValueDay = selectDay.options[selectDay.selectedIndex].value;
    var selectedValueMonth = selectMonth.options[selectMonth.selectedIndex].value;
    var selectedValueYear = selectYear.options[selectYear.selectedIndex].value;


    if (document.getElementById("edit-username").value.match(usernamecheck)) {
        username = true;
    } else {
        username = false;

        var alertUsername = document.getElementById("alertUsername");
        alertUsername.classList.toggle("show");
        setTimeout(() => {
            alertUsername.classList.toggle("show");
        }, "5000");
        document.getElementById("edit-username").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-username").classList.remove('error');
        }, "500");
        document.getElementById("edit-username").addEventListener('input', function() {

            if(document.getElementById("edit-username").value.match(usernamecheck)){
                username = true;
                //document.getElementById("edit-username").style.borderBottom = "2px solid #f64c72";
            }
            else if(document.getElementById("edit-username").value.length == 0){
                document.getElementById("edit-username").classList.add('error');
                setTimeout(() => {
                    document.getElementById("edit-username").classList.remove('error');
                }, "300");
                //document.getElementById("edit-username").style.borderBottom = "2px solid darkgray";
                username = false;
            } else {
                //document.getElementById("edit-username").style.borderBottom = "2px solid darkgray";
                username = false;
            }
        })
    }

    if (document.getElementById("edit-firstname").value.match(namecheck)) {
        firstname = true;
    } else {
        firstname = false;

        var alertFirstname = document.getElementById("alertFirstname");
        alertFirstname.classList.toggle("show");
        setTimeout(() => {
            alertFirstname.classList.toggle("show");
        }, "5000");
        document.getElementById("edit-firstname").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-firstname").classList.remove('error');
        }, "500");
        document.getElementById("edit-firstname").addEventListener('input', function() {

            if(document.getElementById("edit-firstname").value.match(namecheck)){
                firstname = true;
            }
            else if(document.getElementById("edit-firstname").value.length == 0){
                document.getElementById("edit-firstname").classList.add('error');
                setTimeout(() => {
                    document.getElementById("edit-firstname").classList.remove('error');
                }, "300");
                firstname = false;
            } else {
                firstname = false;
            }
        })
    }

    if (document.getElementById("edit-lastname").value.match(namecheck)) {
        lastname = true;
    } else {
        lastname = false;

        var alertLastname = document.getElementById("alertLastname");
        alertLastname.classList.toggle("show");
        setTimeout(() => {
            alertLastname.classList.toggle("show");
        }, "5000");
        document.getElementById("edit-lastname").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-lastname").classList.remove('error');
        }, "500");
        document.getElementById("edit-lastname").addEventListener('input', function() {

            if(document.getElementById("edit-lastname").value.match(namecheck)){
                lastname = true;
            }
            else if(document.getElementById("edit-lastname").value.length == 0){
                document.getElementById("edit-lastname").classList.add('error');
                setTimeout(() => {
                    document.getElementById("edit-lastname").classList.remove('error');
                }, "300");
                lastname = false;
            } else {
                lastname = false;
            }
        })
    }

    if (document.getElementById("edit-email").value.match(mailcheck)) {
        email = true;
    } else {
        email = false;

        var alertEmailSignup = document.getElementById("alertEmailSignup");
        alertEmailSignup.classList.toggle("show");
        setTimeout(() => {
            alertEmailSignup.classList.toggle("show");
        }, "5000");
        document.getElementById("edit-email").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-email").classList.remove('error');
        }, "500");
        document.getElementById("edit-email").addEventListener('input', function() {

            if(document.getElementById("edit-email").value.match(mailcheck)){
                email = true;
            }
            else if(document.getElementById("edit-email").value.length == 0){
                document.getElementById("edit-email").classList.add('error');
                setTimeout(() => {
                    document.getElementById("edit-email").classList.remove('error');
                }, "300");
                email = false;
            } else {
                email = false;
            }
        })
    }

    if (document.getElementById("edit-password").value.match(passcheck)) {
        password = true;
    } else {
        password = false;

        var alertPasswordSignup = document.getElementById("alertPasswordSignup");
        alertPasswordSignup.classList.toggle("show");
        setTimeout(() => {
            alertPasswordSignup.classList.toggle("show");
        }, "5000");
        document.getElementById("edit-password").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-password").classList.remove('error');
        }, "500");
        document.getElementById("edit-password").addEventListener('input', function() {

            if(document.getElementById("edit-password").value.match(passcheck)){
                password = true;
            }
            else if(document.getElementById("edit-password").value.length == 0){
                document.getElementById("edit-password").classList.add('error');
                setTimeout(() => {
                    document.getElementById("edit-password").classList.remove('error');
                }, "300");
                password = false;
            } else {
                password = false;
            }
        })
    }


    const date = new Date();
    const actualYear = date.getFullYear();
    const actualMonth = (date.getMonth())+1;
    const actualDay = date.getDate();


    if (selectedValueDay === "0" && selectedValueMonth === "0" && selectedValueYear === "0" ) {
        birthdate = false;
        document.getElementById("edit-year").classList.add('error');
        document.getElementById("edit-month").classList.add('error');
        document.getElementById("edit-day").classList.add('error');
        setTimeout(() => {
            document.getElementById("edit-year").classList.remove('error');
            document.getElementById("edit-month").classList.remove('error');
            document.getElementById("edit-day").classList.remove('error');
        }, "300");
        var alertBirthdate = document.getElementById("alertBirthdate");
        alertBirthdate.classList.toggle("show");
        setTimeout(() => {
            alertBirthdate.classList.toggle("show");
        }, "5000");
    } else{
        if(parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) == actualMonth && parseInt(selectedValueDay) < actualDay && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0"){
            birthdate = true;
        }
        if(parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) == actualMonth && parseInt(selectedValueDay) >= actualDay && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0"){
            document.getElementById("edit-year").classList.add('error');
            document.getElementById("edit-month").classList.add('error');
            document.getElementById("edit-day").classList.add('error');
            setTimeout(() => {
                document.getElementById("edit-year").classList.remove('error');
                document.getElementById("edit-month").classList.remove('error');
                document.getElementById("edit-day").classList.remove('error');
            }, "300");
            var alertBirthdate2 = document.getElementById("alertBirthdate2");
            alertBirthdate2.classList.toggle("show");
            setTimeout(() => {
                alertBirthdate2.classList.toggle("show");
            }, "5000");
            //alert("Vous n'avez pas 13 ans!");
        }
        if(parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) < actualMonth && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0"){
            birthdate = true;
        }
        if(parseInt(selectedValueYear) == (actualYear - 13) && parseInt(selectedValueMonth) > actualMonth && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0"){
            document.getElementById("edit-year").classList.add('error');
            document.getElementById("edit-month").classList.add('error');
            document.getElementById("edit-day").classList.add('error');
            setTimeout(() => {
                document.getElementById("edit-year").classList.remove('error');
                document.getElementById("edit-month").classList.remove('error');
                document.getElementById("edit-day").classList.remove('error');
            }, "300");
            var alertBirthdate2 = document.getElementById("alertBirthdate2");
            alertBirthdate2.classList.toggle("show");
            setTimeout(() => {
                alertBirthdate2.classList.toggle("show");
            }, "5000");
            //alert("Vous n'avez pas 13 ans!");
        }
        if(parseInt(selectedValueYear) < (actualYear - 13) && selectedValueDay != "0" && selectedValueMonth != "0" && selectedValueYear != "0"){
            birthdate = true;
        }
        if(selectedValueDay === "0"){
            document.getElementById("edit-day").classList.add('error');
            setTimeout(() => {
                document.getElementById("edit-day").classList.remove('error');
            }, "300");
            var alertBirthdateDay = document.getElementById("alertBirthdateDay");
            alertBirthdateDay.classList.toggle("show");
            setTimeout(() => {
                alertBirthdateDay.classList.toggle("show");
            }, "5000");
            //alert("Veuillez renseigner votre jour de naissance.");
        }
        if (selectedValueMonth === "0"){
            document.getElementById("edit-month").classList.add('error');
            setTimeout(() => {
                document.getElementById("edit-month").classList.remove('error');
            }, "300");
            var alertBirthdateMonth = document.getElementById("alertBirthdateMonth");
            alertBirthdateMonth.classList.toggle("show");
            setTimeout(() => {
                alertBirthdateMonth.classList.toggle("show");
            }, "5000");
            //alert("Veuillez renseigner votre mois de naissance.");
        }
        if (selectedValueYear === "0"){
            document.getElementById("edit-year").classList.add('error');
            setTimeout(() => {
                document.getElementById("edit-year").classList.remove('error');
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
window.onload = () => {
    fetchDataUser("../PHP/userInfo.php");
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
            let numberFollowers;
            let numberFollowing ;
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
                numberFollowing = 0;
            } else {
                let following = data.id_follower.split(",");
                numberFollowing = following.length;
            }
            document.getElementById("number_followers").innerHTML = `${numberFollowing}`;
            if(data.id_follower === null){
                numberFollowers = 0;
            } else {
                let followers = data.id_follower.split(",");
                numberFollowers = followers.length;
            }
            document.getElementById("number_followers").innerHTML = `${numberFollowers}`;
    });
}
