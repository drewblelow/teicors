function renderParticulars(parentId) {
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "content-particulars";
    parentDiv.width = "100%";
    
    var t = document.createTextNode("JUAN LOPEZ (A0101010B)");
    parentDiv.appendChild(t);
}

function renderPoints(parentId, paccount, gaccount) {
    var parentDiv = document.getElementById(parentId);
    var paccountpoints = paccount;
    var gaccountpoints = gaccount;
    parentDiv.className = "points-container";
    parentDiv.width = "100%";
    
    // TABLE FORM
    var pointstable = document.createElement("table");
    pointstable.className = "points-table";
    
    var currentbidpoints = document.createElement("TH");
    currentbidpoints.className = "currentbidpoints";
    var currentbidpointstext = document.createTextNode("Current Bid Points ");
    currentbidpoints.appendChild(currentbidpointstext);
    pointstable.appendChild(currentbidpoints);
    
    var programmebidpoints = document.createElement("TH");
    programmebidpoints.className = "programmebidpoints";
    var programmebidpointstext = document.createTextNode("P: " + paccountpoints);
    programmebidpoints.appendChild(programmebidpointstext);
    pointstable.appendChild(programmebidpoints);
    
    var generalbidpoints = document.createElement("TH");
    generalbidpoints.className = "generalbidpoints";
    var generalbidpointstext = document.createTextNode("G: " + gaccountpoints);
    generalbidpoints.appendChild(generalbidpointstext);
    pointstable.appendChild(generalbidpoints);
    
    parentDiv.appendChild(pointstable);
}



function renderContent(parentId) {
    parentDiv = document.getElementById(parentId);
    parentDiv.className = "content-container";
    parentDiv.width = "100%";
    
    // Hide/show timetable
    var hidetimetableDiv = document.createElement("div");
    hidetimetableDiv.id = "timetablebutton-container";
    var hidetimetablebutton = document.createElement("BUTTON");
    hidetimetablebutton.className = "hidetimetablebutton";
    
    var text = document.createTextNode("Show/Hide Calendar");
    hidetimetablebutton.appendChild(text);
    hidetimetablebutton.onclick = function () {
        console.log(document.getElementById("dragdrop-calendar-container"));
        if(document.getElementById("dragdrop-calendar-container").style.display === 'none') {
            document.getElementById("dragdrop-calendar-container").style.display = 'block';    
        }
        else {
            document.getElementById("dragdrop-calendar-container").style.display = 'none';
        }
    };
    hidetimetableDiv.appendChild(hidetimetablebutton);
    parentDiv.appendChild(hidetimetableDiv);
    
    // Modules available for current bidding
    var availableDiv = document.createElement("div");
    availableDiv.className = "available-container";
    
    // Header
    var availableText = document.createElement("h3");
    availableText.className = "tablelabel";
    var text = document.createTextNode("Bids this round");
    availableText.appendChild(text);
    availableDiv.appendChild(availableText);
    
    // Table
    var availabletable = document.createElement("TABLE");
    availabletable.className = "availabletable";
    
    // Table: Headers
    var availabletableheader1 = document.createElement("TH");
    var moduleheadercode = document.createTextNode("Module Code");
    availabletableheader1.appendChild(moduleheadercode);
    availabletableheader1.align = "left";
    availabletableheader1.width = 100;
    availabletable.appendChild(availabletableheader1);
    
    var availabletableheader2 = document.createElement("TH");
    var moduleheadertitle = document.createTextNode("Title");
    availabletableheader2.appendChild(moduleheadertitle);
    availabletableheader2.align = "left";
    availabletableheader2.width = 250;
    availabletable.append(availabletableheader2);
    
    var availabletableheader3 = document.createElement("TH");
    var moduleheadertype = document.createTextNode("Type");
    availabletableheader3.appendChild(moduleheadertype);
    availabletableheader3.align = "left";
    availabletableheader3.width = 100;
    availabletable.append(availabletableheader3);
    
    var availabletableheader4 = document.createElement("TH");
    var moduleheadermybid = document.createTextNode("My Bid");
    availabletableheader4.appendChild(moduleheadermybid);
    availabletableheader4.align = "left";
    availabletableheader4.width = 100;
    availabletable.append(availabletableheader4);
    
    var availabletableheader5 = document.createElement("TH");
    var moduleheadervac = document.createTextNode("Vac");
    availabletableheader5.appendChild(moduleheadervac);
    availabletableheader5.align = "left";
    availabletableheader5.width = 50;
    availabletable.append(availabletableheader5);
    
    var availabletableheader6 = document.createElement("TH");
    var moduleheaderbidders = document.createTextNode("No. bidders");
    availabletableheader6.appendChild(moduleheaderbidders);
    availabletableheader6.align = "left";
    availabletableheader6.width = 100;
    availabletable.append(availabletableheader6);
    
    var availabletableheader7 = document.createElement("TH");
    var moduleheaderhigh = document.createTextNode("High");
    availabletableheader7.appendChild(moduleheaderhigh);
    availabletableheader7.align = "left";
    availabletableheader7.width = 50;
    availabletable.append(availabletableheader7);

    var availabletableheader8 = document.createElement("TH");
    var moduleheaderlow = document.createTextNode("Low");
    availabletableheader8.appendChild(moduleheaderlow);
    availabletableheader8.align = "left";
    availabletableheader8.width = 50;
    availabletable.append(availabletableheader8);
    
    var availabletableheader9 = document.createElement("TH");
    var moduleheaderexam = document.createTextNode("Exam");
    availabletableheader9.appendChild(moduleheaderexam);
    availabletableheader9.align = "left";
    availabletableheader9.width = 250;
    availabletable.append(availabletableheader9);
    
    availableDiv.appendChild(availabletable);
    parentDiv.appendChild(availableDiv);
    
    // Modules (Current Round)
    
    var module_3240 = document.createElement("TR");
    availabletable.appendChild(module_3240);
    
    // CS3240 
    
    var module_3240_code = document.createElement("TD");
    var module_3240_code_text = document.createTextNode("CS3240");
    module_3240_code.appendChild(module_3240_code_text);
    module_3240.appendChild(module_3240_code);
    
    var module_3240_title = document.createElement("TD");
    var module_3240_title_text = document.createTextNode("Interaction Design");
    module_3240_title.appendChild(module_3240_title_text);
    module_3240.appendChild(module_3240_title);
    
    var module_3240_type = document.createElement("TD");
    var module_3240_type_text = document.createTextNode("05");
    module_3240_type.appendChild(module_3240_type_text);
    module_3240.appendChild(module_3240_type);
    
    var module_3240_mybid = document.createElement("TD");
    var module_3240_mybid_field = document.createElement("INPUT");
    module_3240_mybid_field.className = "input_field";
    module_3240_mybid_field.setAttribute("type", "text");
    module_3240_mybid_field.placeholder = "Enter your bid here"
    module_3240_mybid.appendChild(module_3240_mybid_field);
    module_3240.appendChild(module_3240_mybid);
    
    var vacancies = 7;
    var bidders = 11;
    var high = 1969;
    var low = 1;
    var paccount = 1000;
    var gaccount = 1000;
    
    var module_3240_vac = document.createElement("TD");
    module_3240_vac.className = "module_3240_vac";
    var module_3240_vac_text = document.createTextNode(vacancies);
    module_3240_vac.appendChild(module_3240_vac_text);
    module_3240.appendChild(module_3240_vac);
    
    var module_3240_bidders = document.createElement("TD");
    var module_3240_bidders_text = document.createTextNode(bidders);
    module_3240_bidders.appendChild(module_3240_bidders_text);
    module_3240.appendChild(module_3240_bidders);
    
    var module_3240_high = document.createElement("TD");
    var module_3240_high_text = document.createTextNode(high);
    module_3240_high.appendChild(module_3240_high_text);
    module_3240.appendChild(module_3240_high);
    
    var module_3240_low = document.createElement("TD");
    var module_3240_low_text = document.createTextNode(low);
    module_3240_low.appendChild(module_3240_low_text);
    module_3240.appendChild(module_3240_low);
    
    var module_3240_exam = document.createElement("TD");
    var module_3240_exam_text = document.createTextNode("27th April 5:00pm");
    module_3240_exam.appendChild(module_3240_exam_text);
    module_3240.appendChild(module_3240_exam);
    
    // Update bids button
    
    var updatebidsbutton = document.createElement("BUTTON");
    updatebidsbutton.className = "updatebidsbutton";
    var updatebidsbuttontext = document.createTextNode("Update bids");
    updatebidsbutton.appendChild(updatebidsbuttontext);
    
    updatebidsbutton.onclick = function () {
        console.log(module_3240_mybid_field.value);
        if(module_3240_mybid_field.value > paccount) {
            alert("Insufficient bid points!\nYour bid: " + module_3240_mybid_field.value + "\nAvailable points: " + paccount);
        } else if (isNaN(module_3240_mybid_field.value)) {
            alert("Enter a valid bid point amount (i.e. > 0)");
        } else if (module_3240_mybid_field.value < 0) {
            alert("Invalid bid!");
        }else {
            alert("Bid successful!");
            document.getElementById("modulebidding-points").innerHTML = "";
            renderPoints("modulebidding-points", (paccount - module_3240_mybid_field.value), gaccount);
            module_3240_vac_text.nodeValue = vacancies - 1;
            module_3240_bidders_text.nodeValue = bidders + 1;
            module_3240_low_text.nodeValue = module_3240_mybid_field.value;
        }
    };
    
    availableDiv.appendChild(updatebidsbutton);
    
    // Future Rounds
    var futureDiv = document.createElement("div");
    futureDiv.className = "future-container";
    
    // Header
    var futureText = document.createElement("h3");
    futureText.className = "tablelabel";
    var text = document.createTextNode("Modules not available in this round");
    futureText.appendChild(text);
    futureDiv.appendChild(futureText);
    
    // Table
    var futuretable = document.createElement("TABLE");
    futuretable.className = "futuretable";
    
    // Table: Headers
    var futuretableheader1 = document.createElement("TH");
    var moduleheadercode = document.createTextNode("Module Code");
    futuretableheader1.appendChild(moduleheadercode);
    futuretableheader1.align = "left";
    futuretableheader1.width = 100;
    futuretable.appendChild(futuretableheader1);
    
    var futuretableheader2 = document.createElement("TH");
    var moduleheadertitle = document.createTextNode("Title");
    futuretableheader2.appendChild(moduleheadertitle);
    futuretableheader2.align = "left";
    futuretableheader2.width = 250;
    futuretable.append(futuretableheader2);
    
    var futuretableheader3 = document.createElement("TH");
    var moduleheadertype = document.createTextNode("Type");
    futuretableheader3.appendChild(moduleheadertype);
    futuretableheader3.align = "left";
    futuretableheader3.width = 100;
    futuretable.append(futuretableheader3);
    
    var futuretableheader4 = document.createElement("TH");
    var moduleheadermybid = document.createTextNode("My Bid");
    futuretableheader4.appendChild(moduleheadermybid);
    futuretableheader4.align = "left";
    futuretableheader4.width = 100;
    futuretable.append(futuretableheader4);
    
    var futuretableheader5 = document.createElement("TH");
    var moduleheadervac = document.createTextNode("Vac");
    futuretableheader5.appendChild(moduleheadervac);
    futuretableheader5.align = "left";
    futuretableheader5.width = 50;
    futuretable.append(futuretableheader5);
    
    var futuretableheader6 = document.createElement("TH");
    var moduleheaderbidders = document.createTextNode("No. bidders");
    futuretableheader6.appendChild(moduleheaderbidders);
    futuretableheader6.align = "left";
    futuretableheader6.width = 100;
    futuretable.append(futuretableheader6);
    
    var futuretableheader7 = document.createElement("TH");
    var moduleheaderhigh = document.createTextNode("High");
    futuretableheader7.appendChild(moduleheaderhigh);
    futuretableheader7.align = "left";
    futuretableheader7.width = 50;
    futuretable.append(futuretableheader7);

    var futuretableheader8 = document.createElement("TH");
    var moduleheaderlow = document.createTextNode("Low");
    futuretableheader8.appendChild(moduleheaderlow);
    futuretableheader8.align = "left";
    futuretableheader8.width = 50;
    futuretable.append(futuretableheader8);
    
    var futuretableheader9 = document.createElement("TH");
    var moduleheaderexam = document.createTextNode("Exam");
    futuretableheader9.appendChild(moduleheaderexam);
    futuretableheader9.align = "left";
    futuretableheader9.width = 200;
    futuretable.append(futuretableheader9);
    
    futureDiv.appendChild(futuretable);
    parentDiv.appendChild(futureDiv);
    
    // Modules (Future Rounds)
    
    var module_2213 = document.createElement("TR");
    futuretable.appendChild(module_2213);
    
    var module_2213_code = document.createElement("TD");
    var module_2213_code_text = document.createTextNode("NM2213");
    module_2213_code.appendChild(module_2213_code_text);
    module_2213.appendChild(module_2213_code);
    
    var module_2213_title = document.createElement("TD");
    var module_2213_title_text = document.createTextNode("Introduction to Human-Computer Interaction Design");
    module_2213_title.appendChild(module_2213_title_text);
    module_2213.appendChild(module_2213_title);
    
    var module_2213_type = document.createElement("TD");
    var module_2213_type_text = document.createTextNode("U9");
    module_2213_type.appendChild(module_2213_type_text);
    module_2213.appendChild(module_2213_type);
    
    var module_2213_mybid = document.createElement("TD");
    var module_2213_mybid_text = document.createTextNode("0");
    module_2213_mybid.appendChild(module_2213_mybid_text);
    module_2213.appendChild(module_2213_mybid);
    
    var module_2213_vac = document.createElement("TD");
    module_2213_vac.className = "module_2213_vac";
    var module_2213_vac_text = document.createTextNode("-");
    module_2213_vac.appendChild(module_2213_vac_text);
    module_2213.appendChild(module_2213_vac);
    
    var module_2213_bidders = document.createElement("TD");
    var module_2213_bidders_text = document.createTextNode("-");
    module_2213_bidders.appendChild(module_2213_bidders_text);
    module_2213.appendChild(module_2213_bidders);
    
    var module_2213_high = document.createElement("TD");
    var module_2213_high_text = document.createTextNode("-");
    module_2213_high.appendChild(module_2213_high_text);
    module_2213.appendChild(module_2213_high);
    
    var module_2213_low = document.createElement("TD");
    var module_2213_low_text = document.createTextNode("-");
    module_2213_low.appendChild(module_2213_low_text);
    module_2213.appendChild(module_2213_low);
    
    var module_2213_exam = document.createElement("TD");
    var module_2213_exam_text = document.createTextNode("22th April 1:00pm");
    module_2213_exam.appendChild(module_2213_exam_text);
    module_2213.appendChild(module_2213_exam);
    
    // Secured modules
    var mymodulesDiv = document.createElement("div");
    mymodulesDiv.className = "mymodules-container";
    
    // Header
    var mymodulesText = document.createElement("h3");
    var text = document.createTextNode("My Modules");
    mymodulesText.className = "tablelabel";
    mymodulesText.appendChild(text);
    mymodulesDiv.appendChild(mymodulesText);
    
    // Table
    var mymodulestable = document.createElement("TABLE");
    mymodulestable.className = "mymodulestable";
    
    // Table: Headers
    var mymodulestableheader1 = document.createElement("TH");
    var moduleheadercode = document.createTextNode("Module Code");
    mymodulestableheader1.appendChild(moduleheadercode);
    mymodulestableheader1.align = "left";
    mymodulestableheader1.width = 100;
    mymodulestable.appendChild(mymodulestableheader1);
    
    var mymodulestableheader2 = document.createElement("TH");
    var moduleheadertitle = document.createTextNode("Title");
    mymodulestableheader2.appendChild(moduleheadertitle);
    mymodulestableheader2.align = "left";
    mymodulestableheader2.width = 280;
    mymodulestable.append(mymodulestableheader2);
    
    var mymodulestableheader3 = document.createElement("TH");
    var moduleheadertype = document.createTextNode("Type");
    mymodulestableheader3.appendChild(moduleheadertype);
    mymodulestableheader3.align = "left";
    mymodulestableheader3.width = 100;
    mymodulestable.append(mymodulestableheader3);
    
    var mymodulestableheader4 = document.createElement("TH");
    var moduleheaderexam = document.createTextNode("Exam");
    mymodulestableheader4.appendChild(moduleheaderexam);
    mymodulestableheader4.align = "left";
    mymodulestableheader4.width = 300;
    mymodulestable.append(mymodulestableheader4);
    
    mymodulesDiv.appendChild(mymodulestable);
    parentDiv.appendChild(mymodulesDiv);
    
    // My modules
    
    var module_1301 = document.createElement("TR");
    mymodulestable.appendChild(module_1301);
    
    var module_1301_code = document.createElement("TD");
    var module_1301_code_text = document.createTextNode("LSM1301");
    module_1301_code.appendChild(module_1301_code_text);
    module_1301.appendChild(module_1301_code);
    
    var module_1301_title = document.createElement("TD");
    var module_1301_title_text = document.createTextNode("General Biology");
    module_1301_title.appendChild(module_1301_title_text);
    module_1301.appendChild(module_1301_title);
    
    var module_1301_type = document.createElement("TD");
    var module_1301_type_text = document.createTextNode("05");
    module_1301_type.appendChild(module_1301_type_text);
    module_1301.appendChild(module_1301_type);
    
    var module_1301_exam = document.createElement("TD");
    var module_1301_exam_text = document.createTextNode("24th April 5:00pm");
    module_1301_exam.appendChild(module_1301_exam_text);
    module_1301.appendChild(module_1301_exam);
    
}