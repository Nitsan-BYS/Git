
function navIcons(x) {
    var x = window.matchMedia("(max-width: 700px)");
    x.addEventListener("change", navIcons)
    var p=document.title;
    var objList = document.getElementsByTagName("ul")[1];

    if (objList.childNodes) {
        while (objList.childNodes.length) {
            objList.removeChild(objList.childNodes[0]);
        }
    }
    if (x.matches) {
        if(p=="Home Page"){
            objList.innerHTML += "<li><a href=\"index.html\"><img src='images/homes.png'><p id=\"selected_mobile\">Home</p></a></li><li><a href=\"reportlist.html\"><img src='images/d.png'><p>Reports List</p></a></li><li><a href=\"#\"><img src='images/blacklistlight.png'><p>Black List</p></a></li><li><a href=\"#\"><img src='images/documentslight.png'><p>Documents</p></a></li>";

        }
        else{
            objList.innerHTML += "<li><a href=\"index.html\"><img src='images/homelight.png'><p>Home</p></a></li><li><a href=\"reportlist.html\"><img src='images/reportsbold.png'><p id=\"selected_mobile\">Reports List</p></a></li><li><a href=\"#\"><img src='images/blacklistlight.png'><p>Black List</p></a></li><li><a href=\"#\"><img src='images/documentslight.png'><p>Documents</p></a></li>";
        }
    }
    else {
        if(p=="Home Page"){
            objList.innerHTML += "<li><a href=\"index.html\" id=\"selected1\">Home</a></li><li><a href=\"reportlist.html\">Reports List</a></li><li><a href=\"#\">Black List</a></li><li><a href=\"#\">Shifts</a></li><li><a href=\"#\">Contact List</a></li><li><a href=\"#\">Settings</a></li>";
            
        }
        else{
            objList.innerHTML += "<li><a href=\"index.html\" >Home</a></li><li><a id=\"selected\" href=\"reportlist.html\">Reports List</a></li><li><a href=\"#\">Black List</a></li><li><a href=\"#\">Shifts</a></li><li><a href=\"#\">Contact List</a></li><li><a href=\"#\">Settings</a></li>";
        }

      
    }

}
window.onload = navIcons;





