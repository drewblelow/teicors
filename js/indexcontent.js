function renderContent(parentId) {
    var parentDiv = document.getElementById(parentId);
    console.log(parentDiv);
    parentDiv.className = "content-container";
    parentDiv.width = "100%";

    //Name & Matric
    var namematDiv = document.createElement("P");
    namematDiv.className = "content-container-namemat";

    var namematText = document.createTextNode("JUAN LOPEZ(A0101010B)")
    namematDiv.appendChild(namematText);

    parentDiv.appendChild(namematDiv);

    //Welcome
    var welcomeDiv = document.createElement("h2");
    welcomeDiv.className = "content-container-welcome";

    var welcomeText = document.createTextNode("Welcome Juan Lopez!");
    welcomeDiv.appendChild(welcomeText);

    parentDiv.appendChild(welcomeDiv);

    // Verify Personal Data:
    var verifyDiv = document.createElement("h3");
    verifyDiv.className = "content-container-verify";

    var verifyText = document.createTextNode("Verify Personal Data:");
    verifyDiv.appendChild(verifyText);

    parentDiv.appendChild(verifyDiv);

    // Personal Data
    var personaldataDiv = document.createElement("P");
    personaldataDiv.className = "content-container-personaldata";

    var linebreak1 = document.createElement("br");
    var linebreak2 = document.createElement("br");
    var linebreak3 = document.createElement("br");
    var linebreak4 = document.createElement("br");
    var matriculationnumText = document.createTextNode("Matriculation Number: A0101010B");
    var nameText = document.createTextNode("Name: Juan Lopez");
    var courselevelText = document.createTextNode("Course Level: Computing 1");
    var degreeText = document.createTextNode("Degree: Bachelor of Computing with Honours");
    var academicyearText = document.createTextNode("Academic Year: 2016/2017");

    personaldataDiv.appendChild(matriculationnumText);
    personaldataDiv.appendChild(linebreak1);
    personaldataDiv.appendChild(nameText);
    personaldataDiv.appendChild(linebreak2);
    personaldataDiv.appendChild(courselevelText);
    personaldataDiv.appendChild(linebreak3);
    personaldataDiv.appendChild(degreeText);
    personaldataDiv.appendChild(linebreak4);
    personaldataDiv.appendChild(academicyearText);

    parentDiv.appendChild(personaldataDiv);

    // Help
    var helpDiv = document.createElement("a");
    helpDiv.href = "./help.html";
    helpDiv.className = "content-container-help";

    var helpText = document.createTextNode("Note: Need help with the new interface? Click here for the user guide!");
    helpDiv.appendChild(helpText);

    parentDiv.appendChild(helpDiv);

    // More Info
    var moreinfoDiv = document.createElement("P");
    moreinfoDiv.className = "content-container-info";

    var moreinfoText = document.createTextNode("For more information on declaration, please click Declaration link on the menu to the left.");
    moreinfoDiv.append(moreinfoText);

    parentDiv.appendChild(moreinfoDiv);

}
