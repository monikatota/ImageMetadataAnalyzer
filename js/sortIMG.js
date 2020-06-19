function sortImages(sortBy, order) {
    var parentDiv = document.getElementById("images");
    /* get images */
    var parentDivImages = parentDiv.getElementsByTagName("img");
    /* copy images' ids and theirs names into a list */
    var parentDivImagesSorted = [];
    /* get images data areas array */
    var imageSortData = parentDiv.getElementsByClassName("sortData");
    for (let i = 0; i < parentDivImages.length; i++) {
        /* get image's id (format: photo_+nr */
        let ID = parentDivImages[i].id;
        try {
            switch (sortBy) {
                case "name":                         /* get number from id */
                    var obj = { "id": ID, "name": arrImages[ID.substring(6) - 1].name };
                    imageSortData[i].textContent = "Name: " + arrImages[ID.substring(6) - 1].name;
                    break;
                case "date":
                    var obj = { "id": ID, "date": arrEXIF[ID.substring(6) - 1]["Exif"]["36867"] };
                    imageSortData[i].textContent = "Original date: " + arrEXIF[ID.substring(6) - 1]["Exif"]["36867"];
                    break;
                case "modDate":
                    var obj = { "id": ID, "modDate": arrEXIF[ID.substring(6) - 1]["0th"]["306"] };
                    imageSortData[i].textContent = "Modification date: " + arrEXIF[ID.substring(6) - 1]["0th"]["306"];
                    break;
                case "camera":
                    var obj = { "id": ID, "camera": arrEXIF[ID.substring(6) - 1]["0th"]["271"] + " " + arrEXIF[ID.substring(6) - 1]["0th"]["272"] }; //concat of camera manufacturer and model
                    imageSortData[i].textContent = "Camera: " + arrEXIF[ID.substring(6) - 1]["0th"]["271"] + " " + arrEXIF[ID.substring(6) - 1]["0th"]["272"];
                    break;
                //Exposure triangle
                case "iso":
                    var obj = { "id": ID, "iso": arrEXIF[ID.substring(6) - 1]["Exif"]["34855"] };
                    imageSortData[i].textContent = "ISO: " + arrEXIF[ID.substring(6) - 1]["Exif"]["34855"];
                    break;
                case "focalRatio":
                    imageSortData[i].textContent = "Focal ratio: ";
                    var obj = { "id": ID, "focalRatio": arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][1] };
                    imageSortData[i].textContent += arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["33437"][1];
                    break;
                case "shutter":
                    imageSortData[i].textContent = "Exposure time: ";
                    var obj = { "id": ID, "shutter": arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][1] }; //exposure time in seconds
                    imageSortData[i].textContent += arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][0] + "/" + arrEXIF[ID.substring(6) - 1]["Exif"]["33434"][1] + "sec";
                    break;
                //end
                case "focalLength":
                    imageSortData[i].textContent = "Focal length: ";
                    var obj = { "id": ID, "focalLength": arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][1] };
                    imageSortData[i].textContent += arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][0] / arrEXIF[ID.substring(6) - 1]["Exif"]["37386"][1];
                    break;
                case "defaultSort":
                    var obj = { "id": ID, "defaultSort": ID };
                    imageSortData[i].textContent = "";
                    break;
                default:
                /* ? */
            }
        } catch (error) {
            var obj = { "id": ID, sortBy: "undefined" };
            imageSortData[i].textContent += "undefined";
        }
        parentDivImagesSorted.push(obj);
    }
    /* sort with a desired order */
    parentDivImagesSorted.sort(compareValues(sortBy, order));
    for (let img in parentDivImagesSorted) {
        let imgDiv = document.getElementById(parentDivImagesSorted[img].id).parentNode;
        /* change order of div elements */
        parentDiv.appendChild(imgDiv);
    }
}

function compareValues(key, order = 'asc') { //'asc' by default
    return function innerSort(a, b) {
        const varA = (typeof a[key] === 'string') // for 'string' change to upper case (comparison is not case sensitive)
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) { // e.g. for strings S>P
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        } else {  //Comparison of defined element with undefined one
            if (typeof varA === "undefined") {
                return 1;
            } else if (typeof varB === "undefined") {
                return -1;
            }
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}