function displayModal(photoID, element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    element.setAttribute("data-toggle", "modal");
    element.setAttribute("data-target", "#myModal");

    // Get the image and insert it inside the modal
    var img = document.getElementById(photoID);
    modalImg.style.transform = img.style.transform;
    modalImg.src = img.src;
}

function countDec(num) {
    if (Math.floor(num) == num) {
        return 1;
    } else {
        val = num.toString().split(".")[1].length || 0;
        return Math.pow(10, val);
    }
}

function mergeDec(num) {
    return num.replace(/[,.]/g, "");
}

function calculateFlash(num) {
    var binNum = (num >>> 0).toString(2);
    return binNum;
}

function binToDec(num) {
    return parseInt(num, 2);
}

function replaceAt(string, index, replace) {
    return (
        string.substring(0, index) + replace + string.substring(index + 1)
    );
}

function invalidForm() {
    document.getElementById("downloadButton").disabled = true;
}

function displayPopup(img, photoID, element) {
    var exifObj = piexif.load(img.src);

    element.setAttribute("data-toggle", "modal");
    element.setAttribute("data-target", "#popupModal");

    var modalImg = document.getElementById("imgPopup");
    var modalDate = document.getElementById("modalDate");
    var modalDevice = document.getElementById("modalDevice");
    var modalIso = document.getElementById("modalIso");
    var modalExposure = document.getElementById("modalExposure");
    var modalGPS = document.getElementById("modalGPS");
    var modalModel = document.getElementById("modalModel");
    var modalLens = document.getElementById("modalLens");
    var modalFleshFired = document.getElementById("modalFleshFired");
    var modalFleshType = document.getElementById("modalFleshType");
    var modalGPS1 = document.getElementById("modalGPS1");
    var modalGPS2 = document.getElementById("modalGPS2");
    var modalGPS3 = document.getElementById("modalGPS3");
    var modalGPS4 = document.getElementById("modalGPS4");
    var modalGPS5 = document.getElementById("modalGPS5");
    var modalGPS6 = document.getElementById("modalGPS6");
    var modalGPS7 = document.getElementById("modalGPS7");
    var modalGPS8 = document.getElementById("modalGPS8");

    var id = img.id.substring(6) - 1; //Image index in arrEXIF

    // Get the image and insert it inside the modal
    var img = document.getElementById(photoID);
    modalImg.src = img.src;
    modalImg.style.transform = img.style.transform;
    if (modalImg.width < modalImg.height && (modalImg.style.transform == "rotate(90deg)" || modalImg.style.transform == "rotate(270deg)")) {
        document.getElementById("imgPopup").style.width = "70%";
        document.getElementById("imgPopup").style.marginTop = "0%";
    }
    else if (modalImg.width > modalImg.height && (modalImg.style.transform == "rotate(90deg)" || modalImg.style.transform == "rotate(270deg)")) {
        document.getElementById("imgPopup").style.width = "100%";
        document.getElementById("imgPopup").style.marginTop = "25%";
    }
    else {
        document.getElementById("imgPopup").style.width = "100%";
        document.getElementById("imgPopup").style.marginTop = "0%";
    }

    modalTitle.value = arrImages[id].name; //Title

    if (arrEXIF[id]["0th"]["306"]) {
        modalDate.value = arrEXIF[id]["0th"]["306"];
        modalDate.disabled = false;
    } else {
        modalDate.placeholder = "0000:00:00 00:00:00";
        modalDate.value = "";
        modalDate.disabled = true;
    }

    if (arrEXIF[id]["0th"]["271"]) {
        modalModel.value = arrEXIF[id]["0th"]["271"];
        modalModel.disabled = false;
    } else {
        modalModel.placeholder = "n/a";
        modalModel.value = "";
        modalModel.disabled = true;
    }

    if (arrEXIF[id]["0th"]["272"]) {
        modalDevice.value = arrEXIF[id]["0th"]["272"];
        modalDevice.disabled = false;
    } else {
        modalDevice.placeholder = "n/a";
        modalDevice.value = "";
        modalDevice.disabled = true;
    }

    if (arrEXIF[id]["Exif"]["34855"]) {
        modalIso.value = arrEXIF[id]["Exif"]["34855"];
        modalIso.disabled = false;
    } else {
        modalIso.placeholder = "n/a";
        modalIso.value = "";
        modalIso.disabled = true;
    }

    if (arrEXIF[id]["Exif"]["33434"]) {
        modalExposure.value = 1 + "/" + arrEXIF[id]["Exif"]["33434"][1] / arrEXIF[id]["Exif"]["33434"][0];
        modalExposure.disabled = false;
    } else {
        modalExposure.placeholder = "n/a";
        modalExposure.disabled = true;
        modalExposure.value = "";
    }

    if (arrEXIF[id]["Exif"]["42036"]) {
        modalLens.value = arrEXIF[id]["Exif"]["42036"];
        modalLens.disabled = false;
    } else {
        modalLens.placeholder = "n/a";
        modalLens.disabled = true;
        modalLens.value = "";
    }

    if (arrEXIF[id]["Exif"]["37385"]) {
        var flashVal = calculateFlash(arrEXIF[id]["Exif"]["37385"]);
        modalFleshType.disabled = false;
        modalFleshFired.disabled = false;

        // Check last bit if flash fired
        if (flashVal.substr(flashVal.length - 1) == 1) {
            modalFleshFired.value = 1;
        } else {
            modalFleshFired.value = 2; //Didnt fired
        }

        // Check flash type
        if (flashVal.substr(flashVal.length - 5, flashVal.length - 3) == 11) {
            modalFleshType.value = 1; // auto
        } else if (
            flashVal.substr(flashVal.length - 5, flashVal.length - 3) == 01
        ) {
            modalFleshType.value = 2; // compulsory flash firing
        } else if (
            flashVal.substr(flashVal.length - 5, flashVal.length - 3) == 10
        ) {
            modalFleshType.value = 3; // compulsory flash suppression
        }
    } else { // No exif data
        modalFleshFired.value = 3;
        modalFleshFired.disabled = true;
        modalFleshType.value = 4;
        modalFleshType.disabled = true;
    }

    // ----------------- GPS LAT

    var longitudeRef = arrEXIF[id]["GPS"]["3"];
    var gpsLongFlag = 0;

    if (longitudeRef == "E") {
        modalGPS8.value = 1;
    } else if (longitudeRef == "W") {
        modalGPS8.value = 2;
    } else {
        modalGPS8.value = 3;
    }

    if (arrEXIF[id]["GPS"]["4"]) {
        var longitude = arrEXIF[id]["GPS"]["4"];
        var longitudeArray = longitude.toString().split(",");
        modalGPS5.disabled = false;
        modalGPS6.disabled = false;
        modalGPS7.disabled = false;
        modalGPS8.disabled = false;
        // e.g if data in latitudeArray is 55,1,36,1,2554,100 it equals 55° 36' 25.5"

        modalGPS5.value = longitudeArray[0] / longitudeArray[1];
        modalGPS6.value = longitudeArray[2] / longitudeArray[3];
        modalGPS7.value = longitudeArray[4] / longitudeArray[5];
        var gpsLongFlag = 1;
    } else {
        modalGPS5.value = null;
        modalGPS6.value = null;
        modalGPS7.value = null;
        modalGPS5.disabled = true;
        modalGPS6.disabled = true;
        modalGPS7.disabled = true;
        modalGPS8.disabled = true;
    }

    // ----------------- GPS LONG

    var latitudeRef = arrEXIF[id]["GPS"]["1"];
    var gpsLatFlag = 0;

    if (latitudeRef == "N") {
        modalGPS4.value = 1;
    } else if (latitudeRef == "S") {
        modalGPS4.value = 2;
    } else {
        modalGPS4.value = 3;
    }

    if (arrEXIF[id]["GPS"]["2"]) {
        var latitude = arrEXIF[id]["GPS"]["2"];
        var latitudeArray = latitude.toString().split(",");
        modalGPS1.disabled = false;
        modalGPS2.disabled = false;
        modalGPS3.disabled = false;
        modalGPS4.disabled = false;
        // e.g if data in latitudeArray is 55,1,36,1,2554,100 it equals 55° 36' 25.5"

        modalGPS1.value = latitudeArray[0] / latitudeArray[1];
        modalGPS2.value = latitudeArray[2] / latitudeArray[3];
        modalGPS3.value = latitudeArray[4] / latitudeArray[5];
        gpsLatFlag = 1;
    } else {
        console.log("no GPS");
        modalGPS1.value = null;
        modalGPS2.value = null;
        modalGPS3.value = null;
        modalGPS1.disabled = true;
        modalGPS2.disabled = true;
        modalGPS3.disabled = true;
        modalGPS4.disabled = true;
    }

    //------- Validity check

    modalDate.addEventListener("keyup", (e) => {
        if (modalDate.checkValidity()) {
            document.getElementById("downloadButton").disabled = false;
        } else {
            document.getElementById("downloadButton").disabled = true;
        }
    });

    modalExposure.addEventListener("keyup", (e) => {
        if (modalExposure.checkValidity()) {
            document.getElementById("downloadButton").disabled = false;
        } else {
            document.getElementById("downloadButton").disabled = true;
        }
    });

    // ---------------------------------------------- EDIT EXIF

    document.getElementById("downloadButton").onclick = function () {
        var zeroth = {};
        var exif = {};
        var gps = {};

        zeroth[piexif.ImageIFD.ImageDescription] = arrEXIF[id]["0th"]["270"];
        zeroth[piexif.ImageIFD.Make] = arrEXIF[id]["0th"]["271"];
        zeroth[piexif.ImageIFD.Model] = arrEXIF[id]["0th"]["272"];
        zeroth[piexif.ImageIFD.Orientation] = arrEXIF[id]["0th"]["274"];
        zeroth[piexif.ImageIFD.XResolution] = arrEXIF[id]["0th"]["282"];
        zeroth[piexif.ImageIFD.YResolution] = arrEXIF[id]["0th"]["283"];
        zeroth[piexif.ImageIFD.ResolutionUnit] = arrEXIF[id]["0th"]["296"];
        zeroth[piexif.ImageIFD.Software] = arrEXIF[id]["0th"]["305"];
        zeroth[piexif.ImageIFD.DateTime] = arrEXIF[id]["0th"]["306"];
        zeroth[piexif.ImageIFD.HostComputer] = arrEXIF[id]["0th"]["316"];
        zeroth[piexif.ImageIFD.Copyright] = arrEXIF[id]["0th"]["33432"];

        exif[piexif.ExifIFD.ExposureTime] = arrEXIF[id]["Exif"]["33434"];
        exif[piexif.ExifIFD.FNumber] = arrEXIF[id]["Exif"]["33437"];
        exif[piexif.ExifIFD.ExposureProgram] = arrEXIF[id]["Exif"]["34850"];
        exif[piexif.ExifIFD.ISOSpeedRatings] = arrEXIF[id]["Exif"]["34855"];
        exif[piexif.ExifIFD.ExifVersion] = arrEXIF[id]["Exif"]["36864"];
        exif[piexif.ExifIFD.DateTimeOriginal] = arrEXIF[id]["Exif"]["36867"];
        exif[piexif.ExifIFD.DateTimeDigitized] = arrEXIF[id]["Exif"]["36868"];
        exif[piexif.ExifIFD.ComponentsConfiguration] =
            arrEXIF[id]["Exif"]["37121"];
        exif[piexif.ExifIFD.ShutterSpeedValue] = arrEXIF[id]["Exif"]["37377"];
        exif[piexif.ExifIFD.ApertureValue] = arrEXIF[id]["Exif"]["37378"];
        exif[piexif.ExifIFD.BrightnessValue] = arrEXIF[id]["Exif"]["37379"];
        exif[piexif.ExifIFD.ExposureBiasValue] = arrEXIF[id]["Exif"]["37380"];
        exif[piexif.ExifIFD.MeteringMode] = arrEXIF[id]["Exif"]["37383"];
        exif[piexif.ExifIFD.Flash] = arrEXIF[id]["Exif"]["37385"];
        exif[piexif.ExifIFD.FocalLength] = arrEXIF[id]["Exif"]["37386"];
        exif[piexif.ExifIFD.SubjectArea] = arrEXIF[id]["Exif"]["37396"];
        exif[piexif.ExifIFD.MakerNote] = arrEXIF[id]["Exif"]["37500"];
        exif[piexif.ExifIFD.UserComment] = arrEXIF[id]["Exif"]["37510"];
        exif[piexif.ExifIFD.SubSecTimeOriginal] =
            arrEXIF[id]["Exif"]["37521"];
        exif[piexif.ExifIFD.SubSecTimeDigitized] =
            arrEXIF[id]["Exif"]["37522"];
        exif[piexif.ExifIFD.FlashpixVersion] = arrEXIF[id]["Exif"]["40960"];
        exif[piexif.ExifIFD.ColorSpace] = arrEXIF[id]["Exif"]["40961"];
        exif[piexif.ExifIFD.PixelXDimension] = arrEXIF[id]["Exif"]["40962"];
        exif[piexif.ExifIFD.PixelYDimension] = arrEXIF[id]["Exif"]["40963"];
        exif[piexif.ExifIFD.SensingMethod] = arrEXIF[id]["Exif"]["41495"];
        exif[piexif.ExifIFD.SceneType] = arrEXIF[id]["Exif"]["41729"];
        exif[piexif.ExifIFD.ExposureMode] = arrEXIF[id]["Exif"]["41986"];
        exif[piexif.ExifIFD.WhiteBalance] = arrEXIF[id]["Exif"]["41987"];
        exif[piexif.ExifIFD.FocalLengthIn35mmFilm] =
            arrEXIF[id]["Exif"]["41989"];
        exif[piexif.ExifIFD.SceneCaptureType] = arrEXIF[id]["Exif"]["41990"];
        exif[piexif.ExifIFD.ImageUniqueID] = arrEXIF[id]["Exif"]["42016"];
        exif[piexif.ExifIFD.LensSpecification] = arrEXIF[id]["Exif"]["42034"];
        exif[piexif.ExifIFD.LensMake] = arrEXIF[id]["Exif"]["42035"];
        exif[piexif.ExifIFD.LensModel] = arrEXIF[id]["Exif"]["42036"];

        gps[piexif.GPSIFD.GPSVersionID] = arrEXIF[id]["GPS"]["0"];
        gps[piexif.GPSIFD.GPSLatitudeRef] = arrEXIF[id]["GPS"]["1"];
        gps[piexif.GPSIFD.GPSLatitude] = arrEXIF[id]["GPS"]["2"];
        gps[piexif.GPSIFD.GPSLongitudeRef] = arrEXIF[id]["GPS"]["3"];
        gps[piexif.GPSIFD.GPSLongitude] = arrEXIF[id]["GPS"]["4"];
        gps[piexif.GPSIFD.GPSAltitudeRef] = arrEXIF[id]["GPS"]["5"];
        gps[piexif.GPSIFD.GPSAltitude] = arrEXIF[id]["GPS"]["6"];
        gps[piexif.GPSIFD.GPSTimeStamp] = arrEXIF[id]["GPS"]["7"];
        gps[piexif.GPSIFD.GPSSpeedRef] = arrEXIF[id]["GPS"]["12"];
        gps[piexif.GPSIFD.GPSSpeed] = arrEXIF[id]["GPS"]["13"];
        gps[piexif.GPSIFD.GPSImgDirectionRef] = arrEXIF[id]["GPS"]["16"];
        gps[piexif.GPSIFD.GPSImgDirection] = arrEXIF[id]["GPS"]["17"];
        gps[piexif.GPSIFD.GPSDestBearingRef] = arrEXIF[id]["GPS"]["23"];
        gps[piexif.GPSIFD.GPSDestBearing] = arrEXIF[id]["GPS"]["24"];
        gps[piexif.GPSIFD.GPSDateStamp] = arrEXIF[id]["GPS"]["29"];
        gps[piexif.GPSIFD.GPSHPositioningError] = arrEXIF[id]["GPS"]["31"];

        // Modified by user

        zeroth[piexif.ImageIFD.DateTime] = modalDate.value;
        zeroth[piexif.ImageIFD.Make] = modalModel.value;
        zeroth[piexif.ImageIFD.Model] = modalDevice.value;
        if (modalIso.value) {
            exif[piexif.ExifIFD.ISOSpeedRatings] = parseInt(modalIso.value);
        }
        else {
            modalIso.disabled = true;
        }
        if (modalExposure.value) {
            var exposureRes = modalExposure.value.toString().split("/");
            exif[piexif.ExifIFD.ExposureTime][0] = parseInt(exposureRes[0]);
            exif[piexif.ExifIFD.ExposureTime][1] = parseInt(exposureRes[1]);
        } else {
            modalExposure.disabled = true;
        }

        if (modalLens.value) {
            exif[piexif.ExifIFD.LensModel] = modalLens.value;
        } else {
            modalLens.disabled = true;
        }

        if (gpsLatFlag) {
            if (modalGPS4.value == 1) {
                gps[piexif.GPSIFD.GPSLatitudeRef] = "N";
            } else {
                gps[piexif.GPSIFD.GPSLatitudeRef] = "S";
            }
        }

        if (modalGPS1.value) {
            gps[piexif.GPSIFD.GPSLatitude][0] = [
                mergeDec(modalGPS1.value),
                countDec(modalGPS1.value),
            ];
        }
        if (modalGPS2.value) {
            gps[piexif.GPSIFD.GPSLatitude][1] = [
                mergeDec(modalGPS2.value),
                countDec(modalGPS2.value),
            ];
        }
        if (modalGPS3.value) {
            gps[piexif.GPSIFD.GPSLatitude][2] = [
                mergeDec(modalGPS3.value),
                countDec(modalGPS3.value),
            ];
        }

        if (gpsLongFlag) {
            if (modalGPS8.value == 1) {
                gps[piexif.GPSIFD.GPSLongitudeRef] = "E";
            } else {
                gps[piexif.GPSIFD.GPSLongitudeRef] = "W";
            }
        }

        if (modalGPS5.value) {
            gps[piexif.GPSIFD.GPSLongitude][0] = [
                mergeDec(modalGPS5.value),
                countDec(modalGPS5.value),
            ];
        }
        if (modalGPS6.value) {
            gps[piexif.GPSIFD.GPSLongitude][1] = [
                mergeDec(modalGPS6.value),
                countDec(modalGPS6.value),
            ];
        }
        if (modalGPS7.value) {
            gps[piexif.GPSIFD.GPSLongitude][2] = [
                mergeDec(modalGPS7.value),
                countDec(modalGPS7.value),
            ];
        }

        //Flash
        var newFlashval = flashVal;

        if (modalFleshFired.value == 1) {
            newFlashval = replaceAt(newFlashval, flashVal.length - 1, 1);
        } else if (modalFleshFired.value == 2) {
            newFlashval = replaceAt(newFlashval, flashVal.length - 1, 0);
        }
        //
        if (modalFleshType.value == 1) {
            //auto, na 11
            newFlashval = replaceAt(newFlashval, 0, 1);
            newFlashval = replaceAt(newFlashval, 1, 1);
        } else if (modalFleshType.value == 2) {
            //compulsory flash firing, na 01
            newFlashval = replaceAt(newFlashval, 0, 0);
            newFlashval = replaceAt(newFlashval, 1, 1);
        } else if (modalFleshType.value == 3) {
            //compulsory flash suppression, na 10
            newFlashval = replaceAt(newFlashval, 0, 1);
            newFlashval = replaceAt(newFlashval, 1, 0);
        }

        if (modalFleshType.value != 4 && modalFleshFired.value != 3) {
            exif[piexif.ExifIFD.Flash] = binToDec(newFlashval);
        }
        if (modalFleshType.value == 4 || modalFleshFired == 3) {
            modalFleshFired.disabled = true;
            modalFleshType.disabled = true;
        }

        var modifiedExifObj = { "0th": zeroth, Exif: exif, GPS: gps };
        var exifStr = piexif.dump(modifiedExifObj);
        var inserted = piexif.insert(exifStr, img.src);
        img.src = inserted;
        //modalImg.src = inserted; //podmiana zdjęcia na modalu na zmodyfikowane

        //-------------------------------------------------------------

        var modifiedExifObjData = piexif.load(inserted);
        // console.log(modifiedExifObjData); // Only debugging purpose

        // Trigger download
        var a = document.createElement("a");

        //a.href = canvas.toDataURL("image/jpeg");
        a.setAttribute("href", inserted);
        a.setAttribute("download", modalTitle.value);

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        var aj = $(a);
        aj.appendTo("body");
        aj[0].click();
        aj.remove();
    };
}