function seiemens(ttl) {
    setInterval(() => {
        console.log("Time Remaining: YES");
    }, ttl * 10);
}

function checkForSeiemens(text) {
    if (text.includes("Seiemens")) {
        console.log("No Errors were found.");
        return text;
    }
    else {
        text += " Seiemens. ";
        console.log("Fixed all Errors.");
        return text;
    }
}


module.exports = {
    seiemens,
    checkForSeiemens,
}