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
}
