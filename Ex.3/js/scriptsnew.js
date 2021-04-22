var arrColors = ["#82CAFF", "#C2DFFF", "#CCFFFF", "#46C7C7", "#FFDB58", 
                 "#FAAFBA", "#C48793", "#E77471", "#FAAFBE", "#E8ADAA"];

var counter = 1;


function newRectangles() {
    var rectObj = document.createElement("div");
    var randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
    rectObj.style.backgroundColor = randomColor;

    //add plus icon to 1st rect
    if(counter == 1) {
        var img = document.createElement("img");
        img.src = "images/plus_button.png";
        rectObj.appendChild(img);
        rectObj.className = "first_rectangle";
        img.className = "plusbutton";
        //by clicking the plus button, add new rectangle at the bottom
        img.onclick = function () {
            newRectangles();
        }
    }
    else {
        rectObj.className = "rectangle";
        rectObj.setAttribute("onclick", "picChange(" + counter + ")");
    }

    //add star every third rect from the left
    if (counter % 3 == 0) {
        var iStar = document.createElement("star");
        iStar.src = "images/white_star.jpg";
        iStar.className = "star";
        rectObj.appendChild(iStar);
    }

    counter++;

    document.getElementById("main_container").appendChild(rectObj);
}


function calculateRects(str) {
    var strSurname = str.length * 2;
    return strSurname;
}

function createRects() {
    var myFamilyName = "ben yehuda";

    for(var i = 0; i < calculateRects(myFamilyName); i++)
        newRectangles();
}


function addImg(picName, imgObj) {

    var newImg = document.createElement("img");
    imgObj.appendChild(newImg); 
    newImg.className = picName;
    newImg.setAttribute("src", "images/" + picName + ".png");
    newImg.setAttribute("alt", picName);
    //?
    newImg.setAttribute("title", picName);
}

function picChange(index) {

    var Current = document.getElementsByClassName("rectangle")[index-2];

    if(Current.style.backgroundColor != "white") {
        Current.style.backgroundColor = "white";
    }

    //remove star when changing pic
    if (index % 3 == 0) {
        Current.removeChild(Current.getElementsByClassName("star")[0]);
    
        //replace img from color rect to img rect
        addImg("birthdaycake", Current);
        Current.className = "cake rect";
    }
    else {
        
        Current.removeChild(Current.getElementsByClassName("birthdaycake")[0]);
        Current.style.backgroundColor = randomColor;
        Current.className = "rectangle";

        if (index % 3 == 0) {
            addImg("star", Current);
            C.className = "star rect";
        }     
    }
}