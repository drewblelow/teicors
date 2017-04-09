var calendarRepresentation;

function renderCalendar(parentId, gridId){
    var start = 8;
    var end = 22;
    var numDays = 5;

    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "calendar-container";
    parentDiv.innerHTML = "&nbsp";

    var timeRow = document.createElement("div");
    timeRow.className = "calendar-timing-container";
    var blankspace = document.createElement("div");
    blankspace.className = "calendar-timing";
    blankspace.innerHTML = "&nbsp";
    timeRow.appendChild(blankspace);

    for (var i=start; i<=end; i++){
        var headerTiming = document.createElement("div");
        headerTiming.className = "calendar-timing";

        var hour = i.toString();
        if (hour < 10)
            hour = "0" + hour;

        var timingString = hour + "00";
        headerTiming.innerHTML = timingString;
        timeRow.appendChild(headerTiming);
    }

    var dayCol = document.createElement("div");
    dayCol.className = "calendar-day-container";
    var monday = document.createElement("div");
    monday.className = "calendar-day";
    monday.innerHTML = "MON";
    var tuesday = document.createElement("div");
    tuesday.className = "calendar-day";
    tuesday.innerHTML = "TUE";
    var wednesday = document.createElement("div");
    wednesday.className = "calendar-day";
    wednesday.innerHTML = "WED";
    var thursday = document.createElement("div");
    thursday.className = "calendar-day";
    thursday.innerHTML = "THU";
    var friday = document.createElement("div");
    friday.className = "calendar-day";
    friday.innerHTML = "FRI";
    dayCol.appendChild(monday);
    dayCol.appendChild(tuesday);
    dayCol.appendChild(wednesday);
    dayCol.appendChild(thursday);
    dayCol.appendChild(friday);

    var grid = document.createElement("div");
    grid.className = "calendar-grid-container";
    grid.id = gridId;
    for (var i=0; i<numDays; i++){
        var row = document.createElement("div");
        row.className = "calendar-grid-row";

        for (var j=start; j<=end; j++){
            var cell = document.createElement("div");
            cell.className = "calendar-grid-cell";
            cell.innerHtml = "&nbsp";
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    parentDiv.appendChild(timeRow);
    parentDiv.appendChild(dayCol);
    parentDiv.appendChild(grid);

    calendarRepresentation = createCalendarRep(numDays, end - start + 1);

}

function createCalendarRep(numDays, numHours){
    var arr = [];
    for (var i=0; i<numDays; i++){
        arr.push([]);
        arr[i].push(new Array(numHours));
        for (var j=0; j<numHours; j++){
            arr[i][j] = [];
        }
    }
    return arr;
}

function addModule(modId, modType, modInfo, modColour, gridId, top, left){
    var parentGrid = document.getElementById(gridId);
    var offsetX = 80;
    var offsetY = 80;
    var newModule = document.createElement("div");
    newModule.id = modId + "_" + top + "_" + left;
    newModule.className = modType + " module-node";
    console.log(newModule.className);
    newModule.style.backgroundColor = modColour;
    newModule.innerHTML = modInfo;
    newModule.style.top = (top * offsetY).toString() + "px";
    newModule.style.left = (left * offsetX).toString() + "px";
    parentGrid.appendChild(newModule);
    dragDrop.initElement(newModule);
}

// drag drop
function addEventSimple(obj,evt,fn) {
    if (obj.addEventListener)
        obj.addEventListener(evt,fn,false);
    else if (obj.attachEvent)
        obj.attachEvent('on'+evt,fn);
}

function removeEventSimple(obj,evt,fn) {
    if (obj.removeEventListener)
        obj.removeEventListener(evt,fn,false);
    else if (obj.detachEvent)
        obj.detachEvent('on'+evt,fn);
}

dragDrop = {
	keyHTML: '<a href="#" class="keyLink"></a>',
	keySpeed: 10, // pixels per keypress event
	initialMouseX: undefined,
	initialMouseY: undefined,
	startX: undefined,
	startY: undefined,
	dXKeys: undefined,
	dYKeys: undefined,
	draggedObject: undefined,
	initElement: function (element) {
		if (typeof element == 'string')
			element = document.getElementById(element);
		element.onmousedown = dragDrop.startDragMouse;
		element.innerHTML += dragDrop.keyHTML;
		var links = element.getElementsByTagName('a');
		var lastLink = links[links.length-1];
		lastLink.relatedElement = element;
		lastLink.onclick = dragDrop.startDragKeys;
	},
	startDragMouse: function (e) {
		dragDrop.startDrag(this);
		var evt = e || window.event;
		dragDrop.initialMouseX = evt.clientX;
		dragDrop.initialMouseY = evt.clientY;
		addEventSimple(document,'mousemove',dragDrop.dragMouse);
		addEventSimple(document,'mouseup',dragDrop.releaseElement);
		return false;
	},
	startDragKeys: function () {
		dragDrop.startDrag(this.relatedElement);
		dragDrop.dXKeys = dragDrop.dYKeys = 0;
		addEventSimple(document,'keydown',dragDrop.dragKeys);
		addEventSimple(document,'keypress',dragDrop.switchKeyEvents);
		this.blur();
		return false;
	},
	startDrag: function (obj) {
		if (dragDrop.draggedObject)
			dragDrop.releaseElement();
		dragDrop.startX = obj.offsetLeft;
		dragDrop.startY = obj.offsetTop;
		dragDrop.draggedObject = obj;
		obj.className += ' dragged';
	},
	dragMouse: function (e) {
		var evt = e || window.event;
		var dX = evt.clientX - dragDrop.initialMouseX;
		var dY = evt.clientY - dragDrop.initialMouseY;
		dragDrop.setPosition(dX,dY);
		return false;
	},
	dragKeys: function(e) {
		var evt = e || window.event;
		var key = evt.keyCode;
		switch (key) {
			case 37:	// left
			case 63234:
				dragDrop.dXKeys -= dragDrop.keySpeed;
				break;
			case 38:	// up
			case 63232:
				dragDrop.dYKeys -= dragDrop.keySpeed;
				break;
			case 39:	// right
			case 63235:
				dragDrop.dXKeys += dragDrop.keySpeed;
				break;
			case 40:	// down
			case 63233:
				dragDrop.dYKeys += dragDrop.keySpeed;
				break;
			case 13: 	// enter
			case 27: 	// escape
				dragDrop.releaseElement();
				return false;
			default:
				return true;
		}
		dragDrop.setPosition(dragDrop.dXKeys,dragDrop.dYKeys);
		if (evt.preventDefault)
			evt.preventDefault();
		return false;
	},
	setPosition: function (dx,dy) {
		dragDrop.draggedObject.style.left = dragDrop.startX + dx + 'px';
		dragDrop.draggedObject.style.top = dragDrop.startY + dy + 'px';
	},
	switchKeyEvents: function () {
		// for Opera and Safari 1.3
		removeEventSimple(document,'keydown',dragDrop.dragKeys);
		removeEventSimple(document,'keypress',dragDrop.switchKeyEvents);
		addEventSimple(document,'keypress',dragDrop.dragKeys);
	},
	releaseElement: function() {
		removeEventSimple(document,'mousemove',dragDrop.dragMouse);
		removeEventSimple(document,'mouseup',dragDrop.releaseElement);
		removeEventSimple(document,'keypress',dragDrop.dragKeys);
		removeEventSimple(document,'keypress',dragDrop.switchKeyEvents);
		removeEventSimple(document,'keydown',dragDrop.dragKeys);
		dragDrop.draggedObject.className = dragDrop.draggedObject.className.replace(/dragged/,'');
        var mod = document.getElementById(dragDrop.draggedObject.id);
        moveModule(mod);
        dragDrop.draggedObject = null;
	}
}

function moveModule(originalModule){
    var modCode = originalModule.id;
    var adjustedX = 20 + parseInt(originalModule.style.top.replace("px", ""));
    var adjustedY = 40 + parseInt(originalModule.style.left.replace("px", ""));
    var info = modCode.split("_");
    var modCodeRaw = info[0];
    var oldOffsetX = info[1];
    var oldOffsetY = info[2];

    if (adjustedX < 0 || adjustedY < 0 || adjustedX > 400 || adjustedY > 1200){
        originalModule.style.top = (oldOffsetX * 80).toString() + "px";
        originalModule.style.left = (oldOffsetY * 80).toString() + "px";
    } else {
        var numOffsetX = Math.floor(adjustedX / 80);
        var numOffsetY = Math.floor(adjustedY / 80);
        var newId = modCodeRaw + "_" + numOffsetX + "_" + numOffsetY;
        originalModule.style.top = (numOffsetX * 80).toString() + "px";
        originalModule.style.left = (numOffsetY * 80).toString() + "px";
        originalModule.id = newId;
    }
}
