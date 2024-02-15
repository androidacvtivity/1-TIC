$(document).ready(function () {
});
this.ChangeCheckbox_1206 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;

    if (itemId == "71_1206_78002_980_1" && isChecked == true) {
        document.getElementById("71_1206_78002_980_2").checked = false;
    }
    else if (itemId == "71_1206_78002_980_2" && isChecked == true) {
        document.getElementById("71_1206_78002_980_1").checked = false;
    }

    else if (itemId == "71_1206_78020_981_1" && isChecked == true) {
        document.getElementById("71_1206_78020_981_2").checked = false;
    }
    else if (itemId == "71_1206_78020_981_2" && isChecked == true) {
        document.getElementById("71_1206_78020_981_1").checked = false;
    }


    else if (itemId == "71_1206_78022_982_1" && isChecked == true) {
        document.getElementById("71_1206_78022_982_2").checked = false;
    }
    else if (itemId == "71_1206_78022_982_2" && isChecked == true) {
        document.getElementById("71_1206_78022_982_1").checked = false;
    }



    else if (itemId == "71_1206_78021_983_1" && isChecked == true) {
        document.getElementById("71_1206_78021_983_2").checked = false;
    }
    else if (itemId == "71_1206_78021_983_2" && isChecked == true) {
        document.getElementById("71_1206_78021_983_1").checked = false;
    }
   

}