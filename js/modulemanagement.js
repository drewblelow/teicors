function renderParticulars(parentId) {
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "content-particulars";
    parentDiv.width = "100%";
    
    var t = document.createTextNode("JUAN LOPEZ (A0101010B)");
    parentDiv.appendChild(t);
}

function renderContent(parentId) {
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "content-container";
    parentDiv.width = "100%";
    
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
    parentDiv.appendChild(hidetimetablebutton);
    
    var currentmodulesDiv = document.createElement("div");
    currentmodulesDiv.className = "content-container-currentmodule";
    
    var currentmoduletext = document.createElement("div");
    currentmoduletext.className = "cmtext";
    var t = document.createTextNode("Modules selected for current semester:")
    currentmoduletext.appendChild(t);
    currentmodulesDiv.appendChild(currentmoduletext);
    
    var currentmodulestable = document.createElement("TABLE");
    currentmodulestable.className = "modulestable";
    
    // TABLE HEADERS
    var moduleheader1 = document.createElement("TH");
    var moduleheadercode = document.createTextNode("Module Code");
    moduleheader1.appendChild(moduleheadercode);
    moduleheader1.align = "left";
    moduleheader1.width = 100;
    currentmodulestable.append(moduleheader1);
    
    var moduleheader2 = document.createElement("TH");
    var moduleheadertitle = document.createTextNode("Title");
    moduleheader2.appendChild(moduleheadertitle);
    moduleheader2.align = "left";
    moduleheader2.width = 280;
    currentmodulestable.append(moduleheader2);
    
    var moduleheader3 = document.createElement("TH");
    var moduleheadertype = document.createTextNode("Type");
    moduleheader3.appendChild(moduleheadertype);
    moduleheader3.align = "left";
    moduleheader3.width = 100;
    currentmodulestable.append(moduleheader3);
    
    var moduleheader4 = document.createElement("TH");
    var moduleheaderexam = document.createTextNode("Exam");
    moduleheader4.appendChild(moduleheaderexam);
    moduleheader4.align = "left";
    moduleheader4.width = 300;
    currentmodulestable.append(moduleheader4);
    
    // PRECODED ROWS
    
    // CS3240
    var module_3240 = document.createElement("TR");
    currentmodulestable.appendChild(module_3240);
    
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
    
    var module_3240_exam = document.createElement("TD");
    var module_3240_exam_text = document.createTextNode("27th April 2017 5:00 PM");
    module_3240_exam.appendChild(module_3240_exam_text);
    module_3240.appendChild(module_3240_exam);
    
    var module_3240_remove = document.createElement("TD");
    var module_3240_remove_button = document.createElement("BUTTON");
    module_3240_remove_button.onclick = function () {
        module_3240.style.display = "none";
        //console.log(document.getElementsByClassName("module-1"));
        document.getElementsByClassName("module-1 module-node")[0].style.display = "none";
        document.getElementsByClassName("module-1 module-node")[1].style.display = "none";
    }
    var module_3240_remove_button_text = document.createTextNode("Delete");
    module_3240_remove_button.appendChild(module_3240_remove_button_text);
    module_3240_remove.appendChild(module_3240_remove_button);
    module_3240.appendChild(module_3240_remove);
    
    module_3240.style.display = "none";
    
    // NM2213
    var module_2213 = document.createElement("TR");
    currentmodulestable.appendChild(module_2213);
    
    var module_2213_code = document.createElement("TD");
    var module_2213_code_text = document.createTextNode("NM2213");
    module_2213_code.appendChild(module_2213_code_text);
    module_2213.appendChild(module_2213_code);
    
    var module_2213_title = document.createElement("TD");
    var module_2213_title_text = document.createTextNode("Introduction to Human-Computer Interaction");
    module_2213_title.appendChild(module_2213_title_text);
    module_2213.appendChild(module_2213_title);
    
    var module_2213_type = document.createElement("TD");
    var module_2213_type_text = document.createTextNode("U9");
    module_2213_type.appendChild(module_2213_type_text);
    module_2213.appendChild(module_2213_type);
    
    var module_2213_exam = document.createElement("TD");
    var module_2213_exam_text = document.createTextNode("22th April 2017 1:00 PM");
    module_2213_exam.appendChild(module_2213_exam_text);
    module_2213.appendChild(module_2213_exam);
    
    var module_2213_remove = document.createElement("TD");
    var module_2213_remove_button = document.createElement("BUTTON");
    module_2213_remove_button.onclick = function () {
        module_2213.style.display = "none";
        //console.log(document.getElementsByClassName("module-1"));
        document.getElementsByClassName("module-3 module-node")[0].style.display = "none";
        document.getElementsByClassName("module-3 module-node")[1].style.display = "none";
    }
    var module_2213_remove_button_text = document.createTextNode("Delete");
    module_2213_remove_button.appendChild(module_2213_remove_button_text);
    module_2213_remove.appendChild(module_2213_remove_button);
    module_2213.appendChild(module_2213_remove);
    
    module_2213.style.display = "none";
    
    // LSM1301
    var module_1301 = document.createElement("TR");
    currentmodulestable.appendChild(module_1301);
    
    var module_1301_code = document.createElement("TD");
    var module_1301_code_text = document.createTextNode("LSM1301");
    module_1301_code.appendChild(module_1301_code_text);
    module_1301.appendChild(module_1301_code);
    
    var module_1301_title = document.createElement("TD");
    var module_1301_title_text = document.createTextNode("General Biology");
    module_1301_title.appendChild(module_1301_title_text);
    module_1301.appendChild(module_1301_title);
    
    var module_1301_type = document.createElement("TD");
    var module_1301_type_text = document.createTextNode("U9");
    module_1301_type.appendChild(module_1301_type_text);
    module_1301.appendChild(module_1301_type);
    
    var module_1301_exam = document.createElement("TD");
    var module_1301_exam_text = document.createTextNode("24th April 2017 5:00 PM");
    module_1301_exam.appendChild(module_1301_exam_text);
    module_1301.appendChild(module_1301_exam);
    
    var module_1301_remove = document.createElement("TD");
    var module_1301_remove_button = document.createElement("BUTTON");
    module_1301_remove_button.onclick = function () {
        module_1301.style.display = "none";
        //console.log(document.getElementsByClassName("module-1"));
        document.getElementsByClassName("module-2 module-node")[0].style.display = "none";
        document.getElementsByClassName("module-2 module-node")[1].style.display = "none";
    }
    var module_1301_remove_button_text = document.createTextNode("Delete");
    module_1301_remove_button.appendChild(module_1301_remove_button_text);
    module_1301_remove.appendChild(module_1301_remove_button);
    module_1301.appendChild(module_1301_remove);    
    
    module_1301.style.display = "none";
    
    currentmodulesDiv.appendChild(currentmodulestable);
    parentDiv.appendChild(currentmodulesDiv);
    
    
    // Add modules
    var searchmoduleDiv = document.createElement("div");
    searchmoduleDiv.className = "content-searchmodule";
    
    // List of hardcoded module codes
    var modules = document.createElement("div");
    modules.className = "modules";
    
    var module1 = document.createElement("a");
    module1.text = "CS3240 : Interaction Design";
    module1.className = "module-1";
    
    var module2 = document.createElement("a");
    module2.text = "LSM1301 : General Biology";
    module2.className = "module-2";
    
    var module3 = document.createElement("a");
    module3.text = "NM2213 : Introduction to Human-Computer Interaction Design";
    module3.className = "module-3";
    
    var modulesli = document.createElement("li");
    modulesli.className = "moduleslist";
    
    modulesli.appendChild(module1);
    modulesli.appendChild(module2);
    modulesli.appendChild(module3);
    
    modulesli.style.display = "none";
    modules.style.display = "none";
    modules.appendChild(modulesli);
    // Search bar
    var searchbar = document.createElement("INPUT");
    searchbar.className = "searchbar";
    searchbar.placeholder = "Enter module code here (e.g. CS3240)";
    searchbar.autocomplete = "on";
    searchbar.setAttribute("type", "search");
    searchbar.onkeyup = function() {
        for(i = 0; i < searchbar.value.length; i++) {
            module1.style.display = "none";
            module2.style.display = "none";
            module3.style.display = "none";
            if(module1.text.indexOf(searchbar.value) !== -1) {
                modules.style.display = "";
                modulesli.style.display = "";
                module1.style.display = "";
                module1.onclick = function () {
                    searchbar.value = module1.text;
                    modules.style.display = "none";
                    module1.style.display = "none";
                }
            }
            if(module2.text.indexOf(searchbar.value) !== -1) {
                modules.style.display = "";
                modulesli.style.display = "";
                module2.style.display = "";
                module2.onclick = function () {
                    searchbar.value = module2.text;
                    modules.style.display = "none";
                    module2.style.display = "none";
                }
            }
            if(module3.text.indexOf(searchbar.value) !== -1) {
                modules.style.display = "";
                modulesli.style.display = "";
                module3.style.display = "";
                module3.onclick = function () {
                    searchbar.value = module3.text;
                    modules.style.display = "none";
                    module3.style.display = "none";
                }
            }
        }
        if(searchbar.value.length == 0) {
            modulesli.style.display = "none";
            modules.style.display = "none";
            module1.style.display = "none";
            module2.style.display = "none";
            module3.style.display = "none";
        }
    }
    
    searchmoduleDiv.appendChild(searchbar);
    
    var addbutton = document.createElement("BUTTON");
    addbutton.className = "addbutton";
    
    var addbuttontext = document.createTextNode("Add");
    addbutton.appendChild(addbuttontext);
    addbutton.onclick = function() {
        var temp = document.createElement("a");
        temp.className = "addedmodule";
        temp.text = searchbar.value;
        if(searchbar.value == "CS3240 : Interaction Design") {
            addModule("module1", "module-1", "CS3240<br>LEC 1", "blue", "calendar", 4, 4);
            addModule("module1", "module-1", "CS3240<br>LAB 1", "blue", "calendar", 1, 6);
            module_3240.style.display = "";
        } else if(searchbar.value == "LSM1301 : General Biology") {
            addModule("module2", "module-2", "LSM1301<br>LEC 1", "yellow", "calendar", 2, 5);
            addModule("module2", "module-2", "LSM1301<br>LAB 1", "yellow", "calendar", 2, 7);
            module_1301.style.display = "";
        } else if (searchbar.value == "NM2213 : Introduction to Human-Computer Interaction Design") {
            addModule("module3", "module-3", "NM2213<br>T01", "red", "calendar", 0, 2);
            addModule("module3", "module-3", "NM2213<br>LEC", "red", "calendar", 4,3);
            module_2213.style.display = "";
        }
    }
    searchmoduleDiv.appendChild(addbutton);
    searchmoduleDiv.appendChild(modules);
    
    parentDiv.appendChild(searchmoduleDiv);
    
    // Proceed to bidding
    
    var modulebiddingbutton = document.createElement("BUTTON");
    modulebiddingbutton.className = "modulebiddingbutton";
    var modulebiddingbuttontext = document.createTextNode("Proceed to Bidding");
    modulebiddingbutton.appendChild(modulebiddingbuttontext);
    modulebiddingbutton.onclick = function() {
        location.href = "../docs/modulebidding.html";
    };
    parentDiv.appendChild(modulebiddingbutton);
    
    
}