// Dynamic adding of drop down filter list buttons in asc. order
function addToFilterList(photoID) {
    let id = photoID.substring(6) - 1;
    try {
        //Camera filter dropdown list
        let flag = false;

        for (let i = 0; i < cameraList.length; ++i) {
            if (cameraList[i] == arrEXIF[id]["0th"]["271"] + " " + arrEXIF[id]["0th"]["272"]) {
                flag = true;
            }
        }

        if (flag == false && typeof arrEXIF[id]["0th"]["271"]!=='undefined') {
            cameraList.push(arrEXIF[id]["0th"]["271"] + " " + arrEXIF[id]["0th"]["272"]);
            let cameraMenu = document.getElementById("cameraID");
            let cameraItem = document.createElement("a");
            cameraItem.className = "dropdown-item";
            cameraItem.setAttribute('value', arrEXIF[id]["0th"]["271"] + " " + arrEXIF[id]["0th"]["272"]);
            let cameraInput = document.createElement("input");
            cameraInput.id = "camera" + id;
            cameraInput.name = "checkbox";
            cameraInput.type = "checkbox";
            cameraInput.addEventListener("change", function () {
                filterCameraModel(this, arrEXIF[id]["0th"]["271"] + " " + arrEXIF[id]["0th"]["272"]);
            });
            cameraItem.appendChild(cameraInput);
            let cameraLabel = document.createElement("label");
            cameraLabel.className = "checkbox-inline";
            cameraLabel.setAttribute('for', "camera" + id);
            cameraLabel.textContent = arrEXIF[id]["0th"]["271"] + " " + arrEXIF[id]["0th"]["272"];
            cameraItem.appendChild(cameraLabel);
            cameraMenu.appendChild(cameraItem);
            $("#cameraID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#cameraID");
        }

        //ISO filter dropdown list
        flag = false;

        for (let i = 0; i < isoList.length; ++i) {
            if (isoList[i] == arrEXIF[id]["Exif"]["34855"]) {
                flag = true;
            }
        }

        if (flag == false && typeof arrEXIF[id]["Exif"]["34855"]!=='undefined') {
            isoList.push(arrEXIF[id]["Exif"]["34855"]);
            let isoMenu = document.getElementById("isoID");
            let isoItem = document.createElement("a");
            isoItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["34855"]));
            isoItem.className = "dropdown-item";
            let isoInput = document.createElement("input");
            isoInput.id = "iso" + id;
            isoInput.name = "checkbox";
            isoInput.type = "checkbox";
            isoInput.addEventListener("change", function () {
                filterISO(this, arrEXIF[id]["Exif"]["34855"]);
            });
            isoItem.appendChild(isoInput);
            let isoLabel = document.createElement("label");
            isoLabel.className = "checkbox-inline";
            isoLabel.setAttribute('for', "iso" + id);
            isoLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["34855"]);
            isoItem.appendChild(isoLabel);
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

        if (flag == false && typeof arrEXIF[id]["Exif"]["33437"][0]!=='undefined' && typeof arrEXIF[id]["Exif"]["33437"][1]!=='undefined') {
            fRatioList.push(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            let fRatioMenu = document.getElementById("fRatioID");
            let fRatioItem = document.createElement("a");
            fRatioItem.className = "dropdown-item";
            fRatioItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]));
            let fRatioInput = document.createElement("input");
            fRatioInput.id = "fRatio" + id;
            fRatioInput.name = "checkbox";
            fRatioInput.type = "checkbox";
            fRatioInput.addEventListener("change", function () {
                filterFocalRatio(this, arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            });
            fRatioItem.appendChild(fRatioInput);
            let fRatioLabel = document.createElement("label");
            fRatioLabel.className = "checkbox-inline";
            fRatioLabel.setAttribute('for', "fRatio" + id);
            fRatioLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["33437"][0] / arrEXIF[id]["Exif"]["33437"][1]);
            fRatioItem.appendChild(fRatioLabel);
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

        if (flag == false && typeof arrEXIF[id]["Exif"]["33434"][0]!=='undefined' && typeof arrEXIF[id]["Exif"]["33434"][1]!=='undefined') {
            expoTimeList.push(arrEXIF[id]["Exif"]["33434"][0] + "/" + arrEXIF[id]["Exif"]["33434"][1] + "sec");
            let expoTMenu = document.getElementById("expoTimeID");
            let expoTItem = document.createElement("a");
            expoTItem.className = "dropdown-item";
            expoTItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["33434"][0] / arrEXIF[id]["Exif"]["33434"][1]));
            let expoTInput = document.createElement("input");
            expoTInput.id = "expoTime" + id;
            expoTInput.name = "checkbox";
            expoTInput.type = "checkbox";
            expoTInput.addEventListener("change", function () {
                filterExposureTime(this, arrEXIF[id]["Exif"]["33434"][0], arrEXIF[id]["Exif"]["33434"][1]);
            });
            expoTItem.appendChild(expoTInput);
            let expoTLabel = document.createElement("label");
            expoTLabel.className = "checkbox-inline";
            expoTLabel.setAttribute('for', "expoTime" + id);
            expoTLabel.textContent = arrEXIF[id]["Exif"]["33434"][0] + "/" + arrEXIF[id]["Exif"]["33434"][1] + "sec";
            expoTItem.appendChild(expoTLabel);
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

        if (flag == false && typeof arrEXIF[id]["Exif"]["37386"][0]!=='undefined' && typeof arrEXIF[id]["Exif"]["37386"][1]!=='undefined') {
            fLengthList.push(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            let fLengthMenu = document.getElementById("fLengthID");
            let fLengthItem = document.createElement("a");
            fLengthItem.className = "dropdown-item";
            fLengthItem.setAttribute('value', parseFloat(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]));
            let fLengthInput = document.createElement("input");
            fLengthInput.id = "fLength" + id;
            fLengthInput.name = "checkbox";
            fLengthInput.type = "checkbox";
            fLengthInput.addEventListener("change", function () {
                filterFocalLength(this, arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            });
            fLengthItem.appendChild(fLengthInput);
            let fLengthLabel = document.createElement("label");
            fLengthLabel.className = "checkbox-inline"
            fLengthLabel.setAttribute('for', "fLength" + id);
            fLengthLabel.textContent = parseFloat(arrEXIF[id]["Exif"]["37386"][0] / arrEXIF[id]["Exif"]["37386"][1]);
            fLengthItem.appendChild(fLengthLabel);
            fLengthMenu.appendChild(fLengthItem);
            $("#fLengthID a").sort((a, b) => $(a).attr('value') - $(b).attr('value')).appendTo("#fLengthID");
        }
    } catch (error) {
        console.log("Undefined data");
    }
}

// Filtering by checked params functions below
checkedCamera = [];

function filterCameraModel(checkbox, value) {
    if (checkbox.checked == true)
    checkedCamera.push(value);
    if (checkbox.checked == false) {
        for (let i = 0; i < checkedCamera.length; i++) {
            if (checkedCamera[i] == value)
            checkedCamera.splice(i, 1);
        }
    }
}

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
    for (let i = 0; i < checkedCamera.length; i++) {
        document.getElementById("filterby").innerHTML += " Camera: " + checkedCamera[i] + "<br />";
    }
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

        var camera;
        var hideCamera = true;
        try {
            camera = arrEXIF[ID.substring(6) - 1]["0th"]["271"] + " " + arrEXIF[ID.substring(6) - 1]["0th"]["272"];
        } catch (error) {
            // this image will be hidden while filtering
        }
        if (checkedCamera.length == 0)
            hideCamera = false;
        else {
            for (let i = 0; i < checkedCamera.length; i++) {
                if (camera == checkedCamera[i])
                    hideCamera = false;
            }
        }

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
        if (hideCamera == true || hideISO == true || hideFocalRatio == true || hideExposureTime == true || hideFocalLenght == true)
            imgDiv.hidden = true; // hide
        else
            imgDiv.hidden = false; // do not hide
    }
}

function resetFilterImages() {
    // clear arrays with checked parameters
    for (let i = checkedCamera.length - 1; i >= 0; i--) {
        checkedCamera.splice(i, 1);
    }
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
    var allCheckBoxes = document.getElementsByName("checkbox");
    for (let i = 0; i < allCheckBoxes.length; i++)
        allCheckBoxes[i].checked = false;

    // clear info about current filters
    document.getElementById("filterby").textContent = "";

    counter = 0;
}