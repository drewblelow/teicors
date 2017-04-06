// load template_styles.css for styling

function renderTopNav(parentId){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "navbar-container";
    parentDiv.width = "100%";

    var logoDiv = document.createElement("span");
    logoDiv.className = "navbar-logo-container";
    var logoImage = document.createElement('img');
    logoImage.src = "../assets/img/partylion.png";
    logoImage.width = "213";
    logoImage.height = "98";
    logoDiv.appendChild(logoImage);

    var navbarDiv = document.createElement("span");
    navbarDiv.className = "navbar-link-container";
    var homeLink = document.createElement("a");
    homeLink.href = "../docs/index.html";
    homeLink.text = "Home";
    homeLink.className = "navbar-links";
    navbarDiv.appendChild(homeLink);

    var manageModuleLink = document.createElement("a");
    manageModuleLink.href = "";
    manageModuleLink.text = "Manage Modules";
    manageModuleLink.className = "navbar-links";
    navbarDiv.appendChild(manageModuleLink);

    var moduleBiddingLink = document.createElement("a");
    moduleBiddingLink.href = "";
    moduleBiddingLink.text = "Module Bidding";
    moduleBiddingLink.className = "navbar-links";
    navbarDiv.appendChild(moduleBiddingLink);

    var nusBidPointsLink = document.createElement("a");
    nusBidPointsLink.href = "";
    nusBidPointsLink.text = "NUS Bid Points";
    nusBidPointsLink.className = "navbar-links";
    navbarDiv.appendChild(nusBidPointsLink);

    var tutRegLink = document.createElement("a");
    tutRegLink.href = "";
    tutRegLink.text = "Tutorial Registration";
    tutRegLink.className = "navbar-links";
    navbarDiv.appendChild(tutRegLink);

    var appealLink = document.createElement("a");
    appealLink.href = "";
    appealLink.text = "Appeal";
    appealLink.className = "navbar-links";
    navbarDiv.appendChild(appealLink);

    parentDiv.appendChild(logoDiv);
    parentDiv.appendChild(navbarDiv);
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
    footerText.innerHTML = "The enhanced interface for CORS: an NUS project";

    parentDiv.appendChild(footerText);
}
