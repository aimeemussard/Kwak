function modalStuff() {
    var modalbtn = document.querySelectorAll('[data-target]');
    let children = document.body.children;
    let kwakval = document.querySelector("#kwak");
    let kwak = document.querySelector("#showtext");
    for (const target of modalbtn) {
        const modal = document.getElementById(target.dataset.target);
        if (target.tagName == "BUTTON") {
            target.onclick = function () {
                for (const tout of children) {
                    if (tout != modal) {
                        document.body.style.backdropFilter = 'blur(10px)';
                        tout.style.filter = 'blur(10px)'
                    }
                }
                modal.style.visibility = "visible";
                modal.style.opacity = "1";
            }
            document.body.onclick = function (e) {
                //if(!$(event.target).closest('#openModal').length && !$(event.target).is('#openModal'))
                if (1 == 2 && modal.style.visibility == "visible") {
                    modal.style.visibility = "hidden";
                    modal.style.opacity = "0";
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
                tout.style.filter = 'none'

            }
            closestmodal.style.visibility = "hidden";
            closestmodal.style.opacity = "0";
            kwak.innerHTML = kwakval.value;
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
window.onload = function () {
    modalStuff();
    getTweets();
}

function getTweets() {
    fetch("../PHP/test.php")
        .then(response => { return response.json(); })
        .then(tweets => {
            for (let tweet of tweets) {
                createTweets(tweet);
            }
        });
}

function createTweets(array) {
    console.log(array);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="row">
        <!-- ------------- -->
        <div class="two columns">
            <img src="../assets/sakura_picture.png" alt="photo-profil" class="five columns img-tweets">
        </div>
        <!-- -------------- -->
        <div class="three columns section-tweets username-bar">Sakura Haruno</div>
            <!-- -------------- -->
            <div class="two columns username-tweets">@username</div>
                <!-- -------------- -->
                <div class="two columns offset-by-two username-tweets">Jun 2, 1999</div>
                </div>
                <!-- ligne 3 : le tweet -->
                <div class="row  container-tweets">
                <!-- tweets -->
                    <div class="content">
                        <div class="tweets">
                        ${array.message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <!-- ligne 4 : les intéractions -->
    <div class="row container-tweets">
        <!-- links -->
        <br/>
        <div class="four columns links-interactions">
            <i class="fa-regular fa-comment icon"></i>Comment
        </div>
        <div class="four columns links-interactions">
            <i class="fa-solid fa-retweet icon"></i>Retweets
        </div>
        <div class="four columns links-interactions">
            <i class="fa-regular fa-heart icon"></i>Likes
        </div>
    </div>`;
    document.body.appendChild(div);
}