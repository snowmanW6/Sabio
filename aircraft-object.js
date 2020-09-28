function Aircraft(name = ""
    , designation = "unknown"
    , manuf = "unknown"
    , startYear = 0
    , endYear = 0
    , engineType = "solar"
    , engineCount = 0
    , nickname = ""
    , isManned = true
    , alternateDesignations = []
    , photoUrl = ""
    , sourceInfoUrl = ""
    , narrative = ""
) {
    Aircraft.entityName = "aircraft";  // STATIC value; must re-assign to any child to keep
    this.name = name;
    this.designation = designation;
    this.manufacturer = manuf;
    this.startYear = parseInt(startYear);
    this.endYear = parseInt(endYear);
    this.engineType = engineType;
    this.engineCount = engineCount;
    this.nickname = nickname;
    this.isManned = isManned;
    this.alternateDesignations = alternateDesignations;
    this.photoUrl = photoUrl;
    this.sourceInfoUrl = sourceInfoUrl;
    this.narrative = narrative;
    this.id = 0;
    this.entityName = function () {
        return Aircraft.entityName;
    }
}
// Aircraft.getEntityName = function getEntityName() {
//     return this.entityName;
// }

var mustang = new Aircraft("Mustang", "P-51", "North American Aircraft"
    , 1940, 1984, "turbo-charged reciprocating internal combustion", 1, "", true,
    ["NA-73X", "NA-73", "Mustang Mk Ia", "P-51A", "XP-78", "XP-51B"
        , "Mustang Mk II", "P-51B", "P-51C", "Mustang Mk III", "P-51D"
        , "Mustang Mk IV", "P-51K", "Mustang Mk IVa", "F-51", "F-15"
        , "F-51B", "F-51D", "F-51K", "F-6D", "RF-51D", "F-6K", "RF-51K"
        , "TRF-51D"]
    , "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/375th_Fighter_Squadron_North_American_P-51D-5-NA_Mustang_44-13926_%28cropped%29.jpg/300px-375th_Fighter_Squadron_North_American_P-51D-5-NA_Mustang_44-13926_%28cropped%29.jpg"
);

var lightning = new Aircraft("Lightning", "P-38", "Lockheed"
    , 1939, 1965, "muffled turbo-charged reciprocating internal combustion", 2, "", true
    , []
    , "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lockheed_P-38H_Lightning_-_1.jpg/300px-Lockheed_P-38H_Lightning_-_1.jpg"
);

var mitchell = new Aircraft("Mitchell", "B-25", "North American Aircraft"
    , 1940, 1979, "reciprocating internal combustion", 2, "", true,
    ["NA-40", "NA-40B", "NA-62", "F-10", "AT-24", "PBJ-1", "XB-28"]
    , "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/North_American_B-25_Mitchell_G%C3%B3raszka_2007.jpg/300px-North_American_B-25_Mitchell_G%C3%B3raszka_2007.jpg"
);


let engineTypes = [
    { id: "engineType0", shortName: "none", longName: "No engine" }
    , { id: "engineType1", shortName: "recip int cmbstn", longName: "Reciprocating Internal Combustion Piston" }
    , { id: "engineType2", shortName: "elec", longName: "Electric" }
    , { id: "engineType3", shortName: "nuclear", longName: "Nuclear" }
    , { id: "engineType4", shortName: "jet turboprop", longName: "Jet Turboprop" }
    , { id: "engineType5", shortName: "jet turbofan hi", longName: "Jet Turbofan - High Bypass" }
    , { id: "engineType6", shortName: "jet turbofan lo", longName: "Jet Turbofan - Low Bypass" }
    , { id: "engineType7", shortName: "solid liq not air", longName: "Non Air Breathing - Solid / Liquid Fuel" }
    , { id: "engineType8", shortName: "other", longName: "Other:" }
] // always keep "other" as the last element in the array

function getEngineDataByShortName(shortNameToFind, engineTypeList = engineTypes) {
    // console.log("... getEngineDataByIndex firing ...", shortNameToFind);

    let index = 0;
    for (index; index < engineTypeList.length; index++) {
        const currentEngType = engineTypeList[index];

        if (shortNameToFind === currentEngType.shortName) {
            break;
        }
    }
    // console.log("Engine List index: ", index);
    const engineData = getEngineDataByIndex(index, engineTypeList);
    return engineData;
}

function getEngineDataByIndex(index, engineTypeList = engineTypes) {
    // console.log("... getEngineDataByIndex firing ...");

    if (index && index >= 0) {
        if (index > (engineTypeList.length - 1)) {
            index = engineTypeList.length - 1;
        }
    } else {
        index = 0;
    }
    const engineData = {
        id: engineTypeList[index].id
        , index: index
        , shortName: engineTypeList[index].shortName
        , longName: engineTypeList[index].longName
    }
    // console.log("Engine obj data: ", engineData);
    return engineData;
}

function Engine(

) {

}

function TailNumber(
    serialNumber = "",
    tailNumber = "",
    variant = "",
    powerplant = "",
    colors = [],
    markings = [],
    operationalStatus = "",
    location = "",
    historicalNarrative = "",
    website = ""
) {
    TailNumber.entityName = "tailnumber";
    this.aircraftTypeId = 0;
    this.tailNumberId = 0;
    this.serialNumber = serialNumber;
    this.tailNumber = tailNumber;
    this.variant = variant;
    this.powerplant = powerplant;
    this.colors = colors;
    this.markings = markings;
    this.operationalStatus = operationalStatus;
    this.location = location;
    this.historicalNarrative = historicalNarrative;
    this.website = website;
}