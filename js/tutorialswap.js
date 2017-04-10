var tutorialOrder = [];
var offsetHeight = 50;

function renderTutorialRanking(parentId){
    var parentDiv = document.getElementById(parentId);
    parentDiv.className = "tutorial-rank-container";
    parentDiv.innerHTML = "&nbsp";
    // 200x700 for now, can do dynamic after base functionality implemented
}

function createRankItem(id, colour, innerContent, parentDiv){
    var tutorialRankItem = document.createElement("div");
    tutorialRankItem.id = id;
    tutorialRankItem.className = "rank-item";
    tutorialRankItem.innerHTML = innerContent;
    tutorialRankItem.style.backgroundColor = colour;
    parentDiv.appendChild(tutorialRankItem);
    tutorialOrder.push(tutorialRankItem);
    dragDropTut.initElement(tutorialRankItem);
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

dragDropTut = {
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
		element.onmousedown = dragDropTut.startDragMouse;
		element.innerHTML += dragDropTut.keyHTML;
		var links = element.getElementsByTagName('a');
		var lastLink = links[links.length-1];
		lastLink.relatedElement = element;
		lastLink.onclick = dragDropTut.startDragKeys;
	},
	startDragMouse: function (e) {
		dragDropTut.startDrag(this);
		var evt = e || window.event;
		dragDropTut.initialMouseX = evt.clientX;
		dragDropTut.initialMouseY = evt.clientY;
		addEventSimple(document,'mousemove',dragDropTut.dragMouse);
		addEventSimple(document,'mouseup',dragDropTut.releaseElement);
		return false;
	},
	startDragKeys: function () {
		dragDropTut.startDrag(this.relatedElement);
		dragDropTut.dXKeys = dragDrop.dYKeys = 0;
		addEventSimple(document,'keydown',dragDropTut.dragKeys);
		addEventSimple(document,'keypress',dragDropTut.switchKeyEvents);
		this.blur();
		return false;
	},
	startDrag: function (obj) {
		if (dragDropTut.draggedObject)
			dragDropTut.releaseElement();
		dragDropTut.startX = obj.offsetLeft;
		dragDropTut.startY = obj.offsetTop;
		dragDropTut.draggedObject = obj;
		obj.className += ' dragged';
	},
	dragMouse: function (e) {
		var evt = e || window.event;
		var dX = evt.clientX - dragDropTut.initialMouseX;
		var dY = evt.clientY - dragDropTut.initialMouseY;
		dragDropTut.setPosition(dX,dY);
		return false;
	},
	dragKeys: function(e) {
		var evt = e || window.event;
		var key = evt.keyCode;
		switch (key) {
			case 37:	// left
			case 63234:
				dragDropTut.dXKeys -= dragDropTut.keySpeed;
				break;
			case 38:	// up
			case 63232:
				dragDropTut.dYKeys -= dragDropTut.keySpeed;
				break;
			case 39:	// right
			case 63235:
				dragDropTut.dXKeys += dragDropTut.keySpeed;
				break;
			case 40:	// down
			case 63233:
				dragDropTut.dYKeys += dragDropTut.keySpeed;
				break;
			case 13: 	// enter
			case 27: 	// escape
				dragDropTut.releaseElement();
				return false;
			default:
				return true;
		}
		dragDropTut.setPosition(dragDropTut.dXKeys,dragDropTut.dYKeys);
		if (evt.preventDefault)
			evt.preventDefault();
		return false;
	},
	setPosition: function (dx,dy) {
		dragDropTut.draggedObject.style.left = dragDropTut.startX + dx + 'px';
		dragDropTut.draggedObject.style.top = dragDropTut.startY + dy + 'px';
	},
	switchKeyEvents: function () {
		// for Opera and Safari 1.3
		removeEventSimple(document,'keydown',dragDropTut.dragKeys);
		removeEventSimple(document,'keypress',dragDropTut.switchKeyEvents);
		addEventSimple(document,'keypress',dragDropTut.dragKeys);
	},
	releaseElement: function() {
		removeEventSimple(document,'mousemove',dragDropTut.dragMouse);
		removeEventSimple(document,'mouseup',dragDropTut.releaseElement);
		removeEventSimple(document,'keypress',dragDropTut.dragKeys);
		removeEventSimple(document,'keypress',dragDropTut.switchKeyEvents);
		removeEventSimple(document,'keydown',dragDropTut.dragKeys);
		dragDropTut.draggedObject.className = dragDropTut.draggedObject.className.replace(/dragged/,'');
        var item = document.getElementById(dragDropTut.draggedObject.id);
        hotswap(item);
        dragDropTut.draggedObject = null;
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
