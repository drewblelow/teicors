var tutorialOrder = [];
var offsetHeight = 50;

function renderTutorialRanking(parentId){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "tutorial-rank-container";
    parentDiv.innerHTML = "&nbsp";
    // 200x700 for now, can do dynamic after base functionality implemented

    var cs3240lab1 = createRankItem("cs3240lab1", "green", "CS3240 LAB01<br>AS6 4-21", parentDiv);
    var cs3240lab2 = createRankItem("cs3240lab2", "green", "CS3240 LAB02<br>AS6 4-21", parentDiv);
    var cs3240lab3 = createRankItem("cs3240lab3", "green", "CS3240 LAB03<br>AS6 4-21", parentDiv);
    var nm2213tut1 = createRankItem("nm2213tut1", "yellow", "NM2213 TUT01<br>COM2 2-15", parentDiv);
    var nm2213tut2 = createRankItem("nm2213tut2", "yellow", "NM2213 TUT02<br>COM2 2-16", parentDiv);
    var nm2213tut3 = createRankItem("nm2213tut3", "yellow", "NM2213 TUT03<br>COM2 2-15", parentDiv);
    var nm2213tut4 = createRankItem("nm2213tut4", "yellow", "NM2213 TUT04<br>COM2 2-16", parentDiv);

    assignOffsets();
}

function createRankItem(id, colour, innerContent, parentDiv){
    var tutorialRankItem = document.createElement("div");
    tutorialRankItem.id = id;
    tutorialRankItem.className = "rank-item";
    tutorialRankItem.innerHTML = innerContent;
    tutorialRankItem.style.backgroundColor = colour;
    parentDiv.appendChild(tutorialRankItem);
    tutorialOrder.push(tutorialRankItem);
    dragDrop.initElement(tutorialRankItem);
    return tutorialRankItem;
}

function assignOffsets(){
    for (var i=0; i<tutorialOrder.length; i++){
        console.log(i);
        console.log(tutorialOrder[i]);
        var offsetAmount = (offsetHeight * i).toString() + "px";
        var currentItem = tutorialOrder[i];
        currentItem.style.top = offsetAmount;
    }
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
        var item = document.getElementById(dragDrop.draggedObject.id);
        hotswap(item);
        dragDrop.draggedObject = null;
	}
}

function hotswap(item){
    var adjustedX = 25 + parseInt(item.style.top.replace("px", ""));
    var adjustedY = 75 + parseInt(item.style.left.replace("px", ""));
    var currentRank = tutorialOrder.indexOf(item);

    // out of bounds
    if (adjustedX < 0 || adjustedY < 0 || adjustedX > 350 || adjustedY > 150){
        item.style.top = (currentRank * 50).toString() + "px";
        item.style.left = "0px";
    } else {
        var numOffsetX = Math.floor(adjustedX / 50);
        var tempMod = tutorialOrder[numOffsetX];
        tutorialOrder[numOffsetX] = item;
        tutorialOrder[currentRank] = tempMod;
        tempMod.style.top = (currentRank * 50).toString() + "px";
        tempMod.style.left = "0px";
        item.style.top = (numOffsetX * 50).toString() + "px";
        item.style.left = "0px";
    }
}
