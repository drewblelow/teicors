// load template_styles.css for styling

function renderTopNav(parentId){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "navbar-container";
    parentDiv.width = "100%";

    var logoDiv = document.createElement("span");
    logoDiv.className = "navbar-logo-container";
    var logoImage = document.createElement('img');
    logoImage.src = "./assets/img/NUS_bootleg_logo_with_hat.png";
    logoImage.className = "navbar-logo-pic";
    logoDiv.appendChild(logoImage);

    var navbarDiv = document.createElement("span");
    navbarDiv.className = "navbar-link-container";

    var homeLink = document.createElement("a");
    homeLink.href = "/index.html";
    homeLink.text = "Home";
    homeLink.className = "navbar-links";
    navbarDiv.appendChild(homeLink);

    var manageModuleLink = document.createElement("a");
    manageModuleLink.href = "/modulemanagement.html";
    manageModuleLink.text = "Manage Modules";
    manageModuleLink.className = "navbar-links";
    navbarDiv.appendChild(manageModuleLink);

    var moduleBiddingLink = document.createElement("a");
    moduleBiddingLink.href = "/modulebidding.html";
    moduleBiddingLink.text = "Module Bidding";
    moduleBiddingLink.className = "navbar-links";
    navbarDiv.appendChild(moduleBiddingLink);

    var nusBidPointsLink = document.createElement("a");
    nusBidPointsLink.href = "";
    nusBidPointsLink.text = "NUS Bid Points";
    nusBidPointsLink.className = "navbar-links";
    navbarDiv.appendChild(nusBidPointsLink);

    var tutRegLink = document.createElement("a");
    tutRegLink.href = "/tutorialregistration.html";
    tutRegLink.text = "Tutorial Registration";
    tutRegLink.className = "navbar-links";
    navbarDiv.appendChild(tutRegLink);

    var appealLink = document.createElement("a");
    appealLink.href = "";
    appealLink.text = "Appeal";
    appealLink.className = "navbar-links";
    navbarDiv.appendChild(appealLink);

    var buttonDiv = document.createElement("div");
    buttonDiv.className = "dropdown";

    var button = document.createElement("BUTTON");
    button.className = "ddbtn";
    buttonDiv.appendChild(button);

    var menuLinks = document.createElement("div");
    menuLinks.id = "links";
    menuLinks.className = "listlinks";

    var homeLinkB = document.createElement("a");
    homeLinkB.href = "/index.html";
    homeLinkB.text = "Home";
    homeLinkB.className = "navbar-button-links";
    menuLinks.appendChild(homeLinkB);

    var manageModuleLinkB = document.createElement("a");
    manageModuleLinkB.href = "/modulemanagement.html";
    manageModuleLinkB.text = "Manage Modules";
    manageModuleLinkB.className = "navbar-button-links";
    menuLinks.appendChild(manageModuleLinkB);

    var moduleBiddingLinkB = document.createElement("a");
    moduleBiddingLinkB.href = "/modulebidding.html";
    moduleBiddingLinkB.text = "Module Bidding";
    moduleBiddingLinkB.className = "navbar-button-links";
    menuLinks.appendChild(moduleBiddingLinkB);

    var nusBidPointsLinkB = document.createElement("a");
    nusBidPointsLinkB.href = "";
    nusBidPointsLinkB.text = "NUS Bid Points";
    nusBidPointsLinkB.className = "navbar-button-links";
    menuLinks.appendChild(nusBidPointsLinkB);

    var tutRegLinkB = document.createElement("a");
    tutRegLinkB.href = "/tutorialregistration.html";
    tutRegLinkB.text = "Tutorial Registration";
    tutRegLinkB.className = "navbar-button-links";
    menuLinks.appendChild(tutRegLinkB);

    var appealLinkB = document.createElement("a");
    appealLinkB.href = "";
    appealLinkB.text = "Appeal";
    appealLinkB.className = "navbar-button-links";
    menuLinks.appendChild(appealLinkB);

    buttonDiv.appendChild(menuLinks);
    button.onclick = function() {
        menuLinks.classList.toggle("show");
        console.log(menuLinks)
    };

    parentDiv.appendChild(logoDiv);
    parentDiv.appendChild(navbarDiv);
    parentDiv.appendChild(buttonDiv);

}

function renderBanner(parentId, bannerText){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "banner-container";
    parentDiv.width = "100%";

    var bannerTextHeader = document.createElement("h1");
    bannerTextHeader.className = "banner-header";
    bannerTextHeader.innerHTML = bannerText;

    parentDiv.appendChild(bannerTextHeader);
}

function renderFooter(parentId){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "footer-container";
    parentDiv.width = "100%";

    var footerText = document.createElement("h2");
    footerText.className = "footer-text";
    footerText.innerHTML = "The enhanced interactive CORS: an NUS project";

    parentDiv.appendChild(footerText);
}
