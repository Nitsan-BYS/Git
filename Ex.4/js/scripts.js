//validation of checkbox

var obj = document.getElementById("submit_width");
obj.onclick = function() {

var arrHearts = document.getElementsByName("interests[]");

    var isAnyChecked = false;
    for (var i = 0; i < arrHearts.length; i++) {
      if (arrHearts[i].checked == true){
            isAnyChecked = true;
      }
    }

    if (isAnyChecked == false) {
        alert("You must pick at least one kind of heart");
      return false;
    }
    return true;
}