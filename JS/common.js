function switchPage(location) { // Side selector
    model.app.currentPage = location;
    updateView()
}

function openModal() { // Endrer modal modellen så den blir vist
    model.modal = 'block'
    updateView()
}

function closeModal() { // Endrer modal modellen så den blir lukket
    model.modal = 'none';
    updateView()
}

function outsideModalClickClose(event) { // lukker modalen når du klikker på utsiden
    if (!event.target.closest(".modal-content")) {
        closeModal();
    }
}

function sendToWebPage(webPage) { // Linker ikonene på navBarBottom til SoMe sidene
    if (webPage == 'instagram') {
        window.open('https://www.instagram.com')
    }
    if (webPage == 'facebook') {
        window.open('https://nb-no.facebook.com/')
    }
    if (webPage == 'twitter') {
        window.open('https://www.twitter.com')
    }
    if (webPage == 'youtube') {
        window.open('https://www.youtube.no')
    }
}

function checkIfPostHasImg(index) { // Sjekker om blogposten inneholder et bilde, hvis den ikke har det så sender den ikke med IMG HTML
    let temp;
    if (model.data.blogPosts[index].postPicture == undefined) { return '' }
    else {
        temp = /*HTML*/`  
            <div class="frontpage-picture-box">
                <img class="front-page-images fill" src="${model.data.blogPosts[index].postPicture}">
            </div>
        `;
        return temp
    }
}

function bottomNavBar() { // Tegner opp navBar nederst på siden
    let HTML = /*HTML*/`
        <div class="navbar-bottom">
            <a onclick="sendToWebPage('youtube')"><img class="img" src="img/youtube.png"></a>
            <a onclick="sendToWebPage('twitter')"><img class="img" src="img/twitter.png"></a>
            <a onclick="sendToWebPage('facebook')"><img class="img" src="img/facebook.png"></a>
            <a onclick="sendToWebPage('instagram')"><img class="img" src="img/instagram.png"></a>
        </div>
    `;
    return HTML
}

function upperNavBar() { // Tegner opp navBar øverst på siden // Skal vi skrive den om og trekke ut? Spør Joachim
    let HTML = ``;
    if (model.app.currentUser == 'admin') {
        HTML = /*HTML*/ `
        <div class="navbar-top">
            <a onclick="switchPage('frontPage')">Forside</a>
            <a onclick="switchPage('bookingPage')">BookingSide</a>
            <a onclick="switchPage('blogPage')">Bloggside</a>
            <b onclick="logOutUser()">Logg UT</b>
        <div class="dropdown">
                <button class="dropbtn">AdminSide
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a onclick="switchPage('adminPagePicture')">AdminBildeSide</a>
                    <a onclick="switchPage('adminPageComfort')">AdminComfortSide</a>
                    <a onclick="switchPage('adminPageBooking')">AdminBookingSide</a>
                </div>
        </div> 
            <a onclick="switchPage('loginPage')">${showCurrentLoggedInUser()}</a>
        </div>
     
    `;
    } else if (model.app.currentUser != '' && model.app.currentUser != 'admin') {
        HTML = /*HTML*/ `
    
        <div class="navbar-top">
            <a onclick="switchPage('frontPage')">Forside</a>
            <a onclick="switchPage('bookingPage')">BookingSide</a>
            <a onclick="switchPage('blogPage')">Bloggside</a>
            <b onclick="logOutUser()">Logg UT</b>
            <a onclick="switchPage('loginPage')">${showCurrentLoggedInUser()}</a>
        </div>
     
    `;
    }
    if (model.app.currentUser == '') {
        HTML = /*HTML*/` 
        <div class="navbar-top">
            <a onclick="switchPage('frontPage')">Forside</a>
            <a onclick="switchPage('bookingPage')">BookingSide</a>
            <a onclick="switchPage('blogPage')">Bloggside</a>
            <a onclick="switchPage('loginPage')">${showCurrentLoggedInUser()}</a>
        </div>`;
    }
    return HTML;
}

function showCurrentLoggedInUser() { // Viser frem hvilken user som er logget inn i Navbaren
    let HTML = ``
    if (model.app.currentUser == '') {
        HTML = 'LoginSide'
    } else {HTML = 'Logget inn som ' + model.app.currentUser }
    return HTML
}

function logOutUser() { // Logo out knappen
    model.app.currentUser = '';
    alert('Du har nå logget ut')
    updateView()

}
