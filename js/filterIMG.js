// Dynamic adding of drop down filter list buttons in asc. order
function addToFilterList(photoID) {
    let id = photoID.substring(6) - 1;
    try {
        //ISO filter dropdown list
        let flag = false;

        for (let i = 0; i < isoList.length; ++i) {
            if (isoList[i] == arrEXIF[id]["Exif"]["34855"]) {
                flag = true;
            }
        }

        if (flag == false) {
            isoList.push(arrEXIF[id]["Exif"]["34855"]);
            let isoMenu = document.getElementById("isoID");
            let isoItem = document.createElement("a");
            isoItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["34855"]));
            isoItem.className = "dropdown-item";
            let isoDiv = document.createElement("div");
            isoDiv.className = "form-check form-check-inline";
            let isoInput = document.createElement("input");
            isoInput.className = "form-check-input";
            isoInput.type = "checkbox";
            isoInput.addEventListener("change", function () {
                filterISO(this, arrEXIF[id]["Exif"]["34855"]);
            });
            isoDiv.appendChild(isoInput);
            let isoLabel = document.createElement("label");
            isoLabel.className = "form-check-label";
            isoLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["34855"]);
            isoDiv.appendChild(isoLabel);
            isoItem.appendChild(isoDiv);
            isoMenu.appendChild(isoItem);
            $("#isoID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#isoID");
        }

        //Focal ratio filter dropdown list
        flag = false;

        for (let i = 0; i < fRatioList.length; ++i) {
            if (fRatioList[i] == arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]) {
                flag = true;
            }
        }

        if (flag == false) {
            fRatioList.push(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            let fRatioMenu = document.getElementById("fRatioID");
            let fRatioItem = document.createElement("a");
            fRatioItem.className = "dropdown-item";
            fRatioItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]));
            let fRatioDiv = document.createElement("div");
            fRatioDiv.className = "form-check form-check-inline";
            let fRatioInput = document.createElement("input");
            fRatioInput.className = "form-check-input";
            fRatioInput.type = "checkbox";
            fRatioInput.addEventListener("change", function () {
                filterFocalRatio(this, arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            });
            fRatioDiv.appendChild(fRatioInput);
            let fRatioLabel = document.createElement("label");
            fRatioLabel.className = "form-check-label";
            fRatioLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            fRatioDiv.appendChild(fRatioLabel);
            fRatioItem.appendChild(fRatioDiv);
            fRatioMenu.appendChild(fRatioItem);
            $("#fRatioID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#fRatioID");
        }

        //Exposure time filter dropdown list
        flag = false;

        for (let i = 0; i < expoTimeList.length; ++i) {
            if (expoTimeList[i] == arrEXIF[id]["Exif"]["33434"][0] + "/" + arrEXIF[id]["Exif"]["33434"][1] + "sec") {
                flag = true;
            }
        }

        if (flag == false) {
            expoTimeList.push(arrEXIF[id]["Exif"]["33434"][0] + "/" + arrEXIF[id]["Exif"]["33434"][1] + "sec");
            let expoTMenu = document.getElementById("expoTimeID");
            let expoTItem = document.createElement("a");
            expoTItem.className = "dropdown-item";
            expoTItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["33434"][0] / arrEXIF[id]["Exif"]["33434"][1]));
            let expoTDiv = document.createElement("div");
            expoTDiv.className = "form-check form-check-inline";
            let expoTInput = document.createElement("input");
            expoTInput.className = "form-check-input";
            expoTInput.type = "checkbox";
            expoTInput.addEventListener("change", function () {
                filterExposureTime(this, arrEXIF[id]["Exif"]["33434"][0], arrEXIF[id]["Exif"]["33434"][1]);
            });
            expoTDiv.appendChild(expoTInput);
            let expoTLabel = document.createElement("label");
            expoTLabel.className = "form-check-label";
            expoTLabel.textContent = arrEXIF[id]["Exif"]["33434"][0] + "/" + arrEXIF[id]["Exif"]["33434"][1] + "sec";
            expoTDiv.appendChild(expoTLabel);
            expoTItem.appendChild(expoTDiv);
            expoTMenu.appendChild(expoTItem);
            $("#expoTimeID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#expoTimeID");
        }

        //Focal length filter dropdown list
        flag = false;

        for (let i = 0; i < fLengthList.length; ++i) {
            if (fLengthList[i] == arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]) {
                flag = true;
            }
        }

        if (flag == false) {
            fLengthList.push(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            let fLengthMenu = document.getElementById("fLengthID");
            let fLengthItem = document.createElement("a");
            fLengthItem.className = "dropdown-item";
            fLengthItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]));
            let fLengthDiv = document.createElement("div");
            fLengthDiv.className = "form-check form-check-inline";
            let fLengthInput = document.createElement("input");
            fLengthInput.className = "form-check-input";
            fLengthInput.type = "checkbox";
            fLengthInput.addEventListener("change", function () {
                filterFocalLength(this, arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            });
            fLengthDiv.appendChild(fLengthInput);
            let fLengthLabel = document.createElement("label");
            fLengthLabel.className = "form-check-label";
            fLengthLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            fLengthDiv.appendChild(fLengthLabel);
            fLengthItem.appendChild(fLengthDiv);
            fLengthMenu.appendChild(fLengthItem);
            $("#fLengthID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#fLengthID");
        }
    } catch (error) {
        console.log("Undefined data");
    }
}

// Filtering by checked params functions below
checkedISO = [];
function filterISO(checkbox, value) {
    if (checkbox.checked == true)
        checkedISO.push(value);
    if (checkbox.checked == false) {
        for (let i = 0; i < checkedISO.length; i++) {
            if (checkedISO[i] == value)
                checkedISO.splice(i, 1);
        }
    }
}

checkedFocalRatio = [];
function filterFocalRatio(checkbox, value) {
    if (checkbox.checked == true)
        checkedFocalRatio.push(value);
    if (checkbox.checked == false) {
        for (let i = 0; i < checkedFocalRatio.length; i++) {
            if (checkedFocalRatio[i] == value)
                checkedFocalRatio.splice(i, 1);
        }
    }
}

checkedExposureTime1 = []; // eg. 1
checkedExposureTime2 = []; // eg. 50 -> 1/50

function filterExposureTime(checkbox, value1, value2) {
    if (checkbox.checked == true) {
        checkedExposureTime1.push(value1);
        checkedExposureTime2.push(value2);
    }
    if (checkbox.checked == false) {
        for (let i = 0; i < checkedExposureTime2.length; i++) {
            if (checkedExposureTime2[i] == value2) {
                checkedExposureTime1.splice(i, 1);
                checkedExposureTime2.splice(i, 1);
            }
        }
    }
}

checkedFocalLength = [];
function filterFocalLength(checkbox, value) {
    if (checkbox.checked == true)
        checkedFocalLength.push(value);
    if (checkbox.checked == false) {
        for (let i = 0; i < checkedFocalLength.length; i++) {
            if (checkedFocalLength[i] == value)
                checkedFocalLength.splice(i, 1);
        }
    }
}

// Displaying checked params
function displayParameters() {
    for (let i = 0; i < checkedISO.length; i++) {
        document.getElementById("filterby").innerHTML += " ISO: " + checkedISO[i] + "<br />";
    }
    for (let i = 0; i < checkedFocalRatio.length; i++) {
        document.getElementById("filterby").innerHTML += " Focal Ratio: " + checkedFocalRatio[i] + "<br />";
    }
    for (let i = 0; i < checkedExposureTime1.length; i++) {
        document.getElementById("filterby").innerHTML += " Exposure time: " + checkedExposureTime1[i] + "/" + checkedExposureTime2[i] + "sec <br />";
    }
    for (let i = 0; i < checkedFocalLength.length; i++) {
        document.getElementById("filterby").innerHTML += " Focal length: " + checkedFocalLength[i] + "<br />";
    }
}

counter = 0;
function filterImages() {
    counter++;
    if (counter == 1) {
        displayParameters();
    }
    else {
        document.getElementById("filterby").textContent = "";
        displayParameters();
    }
    // for every image which was not deleted (imgIndex) check if... 
    for (let i = 0; i < imgIndex.length; i++) {
        let ID = "photo_" + imgIndex[i];

        var hideISO = true;
        var ISO;
        try {
            ISO = arrEXIF[ID.substring(6) - 1]["Exif"]["34855"];
        } catch (error) {
            // this image will be hidden while filtering
        }
        if (checkedISO.length == 0)
            hideISO = false;
        else {
            for (let i = 0; i < checkedISO.length; i++) {
                if (ISO == checkedISO[i])
                    hideISO = false;
            }
        }

        var hideFocalRatio = true;
        var focalRatio;
        try {
            focalRatio = arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][1];
        } catch (error) {
            // this image will be hidden while filtering
        }
        if (checkedFocalRatio.length == 0)
            hideFocalRatio = false;
        else {
            for (let i = 0; i < checkedFocalRatio.length; i++) {
                if (focalRatio == checkedFocalRatio[i])
                    hideFocalRatio = false;
            }
        }

        var exposureTime1;
        var exposureTime2;
        var hideExposureTime = true;
        try {
            exposureTime1 = arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][0];
            exposureTime2 = arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][1];
        } catch (error) {
            // this image will be hidden while filtering
        }
        if (checkedExposureTime1.length == 0 && checkedExposureTime2.length == 0)
            hideExposureTime = false;
        else {
            for (let i = 0; i < checkedExposureTime1.length; i++) {
                if (exposureTime1 == checkedExposureTime1[i] && exposureTime2 == checkedExposureTime2[i])
                    hideExposureTime = false;
            }
        }

        var focalLength;
        var hideFocalLenght = true;
        try {
            focalLength = arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][1];
        } catch (error) {
            // this image will be hidden while filtering
        }
        if (checkedFocalLength.length == 0)
            hideFocalLenght = false;
        else {
            for (let i = 0; i < checkedFocalLength.length; i++) {
                if (focalLength == checkedFocalLength[i])
                    hideFocalLenght = false;
            }
        }
        var imgDiv = document.getElementById(ID).parentNode;
        if (hideISO == true || hideFocalRatio == true || hideExposureTime == true || hideFocalLenght == true)
            imgDiv.hidden = true; // hide
        else
            imgDiv.hidden = false; // do not hide
    }
}

function resetFilterImages() {
    // clear arrays with checked parameters 
    for (let i = checkedISO.length - 1; i >= 0; i--) {
        checkedISO.splice(i, 1);
    }
    for (let i = checkedFocalRatio.length - 1; i >= 0; i--) {
        checkedFocalRatio.splice(i, 1);
    }
    for (let i = checkedExposureTime1.length - 1; i >= 0; i--) {
        checkedExposureTime1.splice(i, 1);
        checkedExposureTime2.splice(i, 1);
    }
    for (let i = checkedFocalLength.length - 1; i >= 0; i--) {
        checkedFocalLength.splice(i, 1);
    }

    // unhide every image which was not deleted (imgIndex)
    for (let i = 0; i < imgIndex.length; i++) {
        let ID = "photo_" + imgIndex[i];
        var imgDiv = document.getElementById(ID).parentNode;
        imgDiv.hidden = false;
    }
    // clear all the checkboxes
    var allCheckBoxes = document.getElementsByClassName("form-check-input");
    for (let i = 0; i < allCheckBoxes.length; i++)
        allCheckBoxes[i].checked = false;

    // clear info about current filters
    document.getElementById("filterby").textContent = "";

    counter = 0;
}