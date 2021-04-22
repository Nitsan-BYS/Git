var arrColors = ["#82CAFF", "#C2DFFF", "#CCFFFF", "#46C7C7", "#FFDB58", 
                 "#FAAFBA", "#C48793", "#E77471", "#FAAFBE", "#E8ADAA"];

var counter = 0;

//add image instead of colored rect
function addImg(strObj, obj) {
    //make new img element and sets attributes to img:src alt title
    var newImg = document.createElement("img");
    obj.appendChild(newImg); //new obj=first_rect
    newImg.className = strObj;
    newImg.setAttribute("src", "images/" + strObj + ".png");
    newImg.setAttribute("alt", strObj);
    newImg.setAttribute("title", strObj);
}

function changePic(num) {
    //press on the original rect change to color from pic or from pic to color
    var curObj = document.getElementsByClassName("rectangle")[num - 2];
    if (curObj.style.backgroundColor != "white") {
        curObj.style.backgroundColor = "white";

        if (num % 3 == 0) {
            curObj.removeChild(curObj.getElementsByClassName("star")[0]);
        }
        addImg("birthdaycake", curObj);
        curObj.className = "cake_rect";

    } else {
        curObj.removeChild(curObj.getElementsByClassName("birthdaycake")[0]);
        curObj.style.backgroundColor = colorsArray[randomColorArray[num - 1]];
        curObj.className = "rectangle";

        if (num % 3 == 0) {
            addImg("star", curObj);
            curObj.className = "star_rect";
        }
    }
}

//create rectangles
function Rectangles(){
        //var newImg = document.createElement("img");     //private var. Only Img object can access it
        var newRect = document.createElement("div");
        var randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
        newRect.style.backgroundColor = randomColor;
    
        //plus img
        if(counter == 0) {
            var img = document.createElement("img");
            img.src = "images/plus_button.png";
            newRect.appendChild(img);
            newRect.className = "first_rectangle";
            img.className = "plusbutton";
            //by clicking the plus button, add new rectangle
            img.onclick = function () {
                Rectangles();
            }
        }

        else {
            newRect.className = "rectangle";
            newRect.setAttribute("onclick", "changePic(" + (counter+1) + ")");
        }
     
        //star in third rect from line
        if((counter + 1) % 3 == 0){
            var img = document.createElement("img");
            img.src = "images/white_star.png";
            img.className = "star";
            newRect.appendChild(img);
        }
    
        counter++;

        document.getElementById("main_container").appendChild(newRect);
    }


//calculate number of rectangles to create
function calculateRects(string){
    var result = (string.length * 2) -2;
    return result;
}


function createRects(){
    var myFamilyName = "ben yehuda";

    //creates the rectangles
    for(var i = 0; i < calculateRects(myFamilyName); i++){
        //var rectObj = new Rectangles(i);
        Rectangles();
    }
    // document.getElementsByClassName("Rectangle")[0].addEventListener("click", Rectangles);
};


