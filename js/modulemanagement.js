function renderContent(parentId) {
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "content-container";
    parentDiv.width = "100%";
    
    var currentmodulesDiv = document.createElement("p");
    currentmodulesDiv.className = "content-container-currentmodule";
    
    var currentmoduletext = document.createTextNode("Modules selected for semester:");
    currentmodulesDiv.appendChild(currentmoduletext);
    
    parentDiv.appendChild(currentmodulesDiv);
    
    // Add modules
    var searchmoduleDiv = document.createElement("div");
    searchmoduleDiv.className = "content-searchmodule";
    
    // List of hardcoded module codes
    var modules = document.createElement("div");
    modules.className = "moduleslist";
    
    var module1 = document.createElement("a");
    module1.text = "CS3240";
    module1.className = "module-1";
    
    var module2 = document.createElement("a");
    module2.text = "LSM1301";
    module2.className = "module-2";
    
    var module3 = document.createElement("a");
    module3.text = "NM2213";
    module3.className = "module-3";
    
    modules.appendChild(module1);
    modules.appendChild(module2);
    modules.appendChild(module3);
    
    modules.style.display = "none";
    
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
                module1.style.display = "";
                module1.onclick = function () {
                    searchbar.value = module1.text;
                    modules.style.display = "none";
                    module1.style.display = "none";
                }
            }
            if(module2.text.indexOf(searchbar.value) !== -1) {
                modules.style.display = "";
                module2.style.display = "";
                module2.onclick = function () {
                    searchbar.value = module2.text;
                    modules.style.display = "none";
                    module2.style.display = "none";
                }
            }
            if(module3.text.indexOf(searchbar.value) !== -1) {
                modules.style.display = "";
                module3.style.display = "";
                module3.onclick = function () {
                    searchbar.value = module3.text;
                    modules.style.display = "none";
                    module3.style.display = "none";
                }
            }
        }
        if(searchbar.value.length == 0) {
            modules.style.display = "none";
            module1.style.display = "none";
            module2.style.display = "none";
            module3.style.display = "none";
        }
    }
    
    searchmoduleDiv.appendChild(searchbar);
    searchmoduleDiv.appendChild(modules);
    
    var addbutton = document.createElement("BUTTON");
    addbutton.className = "addbutton";
    
    var addbuttontext = document.createTextNode("Add");
    addbutton.appendChild(addbuttontext);
    addbutton.onclick = function() {
        console.log(searchbar.value);
    }
    searchmoduleDiv.appendChild(addbutton);
    
    parentDiv.appendChild(searchmoduleDiv);
    
}