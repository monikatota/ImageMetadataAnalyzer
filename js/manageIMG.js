var arrImages = [];
/* global variable storing exif data of every image */
var arrEXIF = [];
var imgID = 0;
var imgIndex = [];

var isoList = [];
var expoTimeList = [];
var fRatioList = [];
var fLengthList = [];

// Uploading images function
function readURL(input) {
    for (let i = 0; i < input.files.length; i++) {
        var reader = new FileReader();
        reader.onload = function (event) {
            arrImages.push(input.files[i]);
            var exifObj = piexif.load(event.target.result);
            arrEXIF.push(exifObj);

            var newDiv = document.createElement("div");
            newDiv.className = "dropdown";

            var img = document.createElement("img"); // create new image
            img.src = event.target.result; // source = uploaded file
            imgID++;
            imgIndex.push(imgID);
            img.setAttribute("id", "photo_" + imgID);
            img.addEventListener("click", function () {
                displayModal(img.id, img);
            });
            newDiv.appendChild(img);

            addToFilterList(img.id);

            var sortData = document.createElement("div");
            sortData.className = "sortData";
            sortData.textContent = "";
            sortData.style.textAlign = "center";
            sortData.setAttribute("id", imgID);
            newDiv.appendChild(sortData);

            // rotation button 
            var rButton = document.createElement("button");
            rButton.className = "rButton";
            rButton.innerHTML = " <span class='glyphicon glyphicon-repeat'></span> ";
            rButton.setAttribute("id", imgID)
            rButton.addEventListener("click", function () {
                rotateImg(img.id);
            });
            newDiv.appendChild(rButton);

            var xButton = document.createElement("button");
            xButton.className = "xButton";
            xButton.innerHTML = " <span class='glyphicon glyphicon-remove'></span>";
            xButton.setAttribute("id", imgID)
            xButton.addEventListener("click", function () {
                deleteImg(img.id, xButton.id);
            });
            newDiv.appendChild(xButton);

            var newList = document.createElement("ul"); // dropdown list
            newList.className = "dropdown-content";

            var button1 = document.createElement("li");
            var a1 = document.createElement("div");
            a1.type = "button";
            a1.style.cursor = "pointer";
            a1.textContent = "View Photo";
            a1.setAttribute("id", imgID);
            a1.addEventListener("click", function () {
                displayModal(img.id, a1);
            });
            button1.appendChild(a1);
            newList.appendChild(button1);

            var button2 = document.createElement("li");
            var a2 = document.createElement("div");
            a2.type = "button";
            a2.style.cursor = "pointer";
            a2.textContent = "View/Edit Details";
            a2.setAttribute("id", imgID);
            a2.addEventListener("click", function () {
                displayPopup(img, img.id, a2);
            });

            //a2.setAttribute("data-toggle", "modal");
            //a2.setAttribute("data-target", "#popupModal");
            button2.appendChild(a2);
            newList.appendChild(button2);

            //data-toggle="modal" data-target="#exampleModalCenter"

            var button3 = document.createElement("li");
            var a3 = document.createElement("div");
            a3.type = "button";
            a3.style.cursor = "pointer";
            a3.textContent = "Delete";
            a3.setAttribute("id", imgID);
            a3.addEventListener("click", function () {
                deleteImg(img.id, a3.id);
            });
            button3.appendChild(a3);
            newList.appendChild(button3);

            newDiv.appendChild(newList);
            document.getElementById("images").prepend(newDiv); // prepend - insert newDiv to the beginning of "images"
        };
        reader.readAsDataURL(input.files[i]);
    }
}

// Delete image function
function deleteImg(photoID, numID) {
    var img = document.getElementById(photoID);
    for (let i = 0; i < imgIndex.length; i++) {
      if (imgIndex[i] == numID)
        imgIndex.splice(i, 1);
    }

    //Deleting from node
    let node = img.parentNode.parentNode;
    node.removeChild(img.parentNode);
  };

  // Rotate image function
  function rotateImg(photoID) {
    var img = document.getElementById(photoID);
    let thumbHeight = "14vw";
    let thumbWidth = "14vw";

    console.log(img.style.height);
    if (img.style.transform == "") {
      img.style.transform = 'rotate(90deg)';
      img.style.width = thumbHeight; //thumbnail's height and width swap due to rotation
      img.style.height = thumbWidth; //thumbnail's height and width swap due to rotation
      img.style.boxShadow = "10px -10px 5px dimgrey";
    }
    else if (img.style.transform == 'rotate(90deg)') {
      img.style.transform = 'rotate(180deg)';
      img.style.width = thumbWidth; //thumbnail's height and width swap due to rotation
      img.style.height = thumbHeight; //thumbnail's height and width swap due to rotation
      img.style.boxShadow = "-10px -10px 5px dimgrey";
    }
    else if (img.style.transform == 'rotate(180deg)') {
      img.style.transform = 'rotate(270deg)';
      img.style.width = thumbHeight; //thumbnail's height and width swap due to rotation
      img.style.height = thumbWidth; //thumbnail's height and width swap due to rotation
      img.style.boxShadow = "-10px 10px 5px dimgrey";
    }
    else if (img.style.transform == 'rotate(270deg)') {
      img.style.transform = 'rotate(0deg)';
      img.style.width = thumbWidth;    //thumbnail's height and width swap due to rotation
      img.style.height = thumbHeight; //thumbnail's height and width swap due to rotation
      img.style.boxShadow = "10px 10px 5px dimgrey";
    }
    else if (img.style.transform == 'rotate(0deg)') {
      img.style.transform = 'rotate(90deg)';
      img.style.width = thumbHeight; //thumbnail's height and width swap due to rotation
      img.style.height = thumbWidth; //thumbnail's height and width swap due to rotation
      img.style.boxShadow = "10px -10px 5px dimgrey";
    }
  };