$(document).ready(function () {
});
this.ChangeCheckbox_1205 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;



     if (itemId == "71_1205_78001_910_1" && isChecked == true) {
        document.getElementById("71_1205_78001_910_2").checked = false;
        document.getElementById("78003").style.display = "";
        document.getElementById("78004").style.display = "";
       
    }
    else if (itemId == "71_1205_78001_910_2" && isChecked == true) {
        document.getElementById("71_1205_78001_910_1").checked = false;
        document.getElementById("78003").style.display = "none";
        document.getElementById("78004").style.display = "none";
       
         document.getElementById("71_1205_78004_921_1").checked = false;
         document.getElementById("71_1205_78004_921_2").checked = false;
       


    }


   

}