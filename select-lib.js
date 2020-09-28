var yearselect = (start, end) => {
    let yearList = [];

    if (!(start && typeof parseInt(start) === "number")) return;

    if (!(end && typeof parseInt(end) === "number")) return;

    let validStart

    if (end < start) {
        let holder = end;
        end = start;
        start = holder;
    }

}

var generateYearData = (start, end, elementId) => {
    let y = start;
    let date = new Date();
    let thisYear = date.getFullYear();
    for (y; y <= thisYear; y++) {
        let optn = document.createElement("OPTION");
        optn.text = y;
        optn.value = y;

        // if year is 2015 selected
        if (y == 1940) {
            optn.selected = true;
        }

        document.getElementById(elementId).options.add(optn);
    }
    let operationalOptn = document.createElement("OPTION");

    operationalOptn.text = "Still operational";
    operationalOptn.value = 9999;
    document.getElementById(elementId).options.add(operationalOptn);
    let lastOptn = document.createElement("OPTION");

    lastOptn.text = "Never Flown or Under Development";
    lastOptn.value = 0;
    document.getElementById(elementId).options.add(lastOptn);
}

// ('#dropdownYear').each(function () {

//     var year = (new Date()).getFullYear();
//     var current = year;
//     year -= 3;
//     for (var i = 0; i < 6; i++) {
//         if ((year + i) == current)
//             $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
//         else
//             $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
//     }

// })
function uniqueTagCombinator(entityName, entityId) {
    const resultingTag = entityId + "-" + entityName;
    return resultingTag;
}

function uniqueTagSplitter(uniqueTag) {
    const indexOfSplitter = uniqueTag.indexOf("-");

    const resultingElements = {
        entityName: uniqueTag.slice(indexOfSplitter + 1)
        , entityId: uniqueTag.slice(0, indexOfSplitter)
    };
    return resultingElements;
}


var generateEditList = (targetFormInput, listOfEntities) => { // could add key list to display
    // could also filter by modified or created dates

    if (!listOfEntities || (listOfEntities.length === 0)) {
        // inform user no items to edit because none fount by "entityName"
    }

    // get all in entity,
    // if none, display no items to edit in "entityname"

    // create a unique display line for each item tied to it's entity name and entity value

}

var filterEntities = (listOfEntities, callback) => {

    console.log("... filterEntities ... ", arguments);
}


