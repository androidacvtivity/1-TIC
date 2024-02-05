$(document).ready(function () {

});
this.ChangeCheckbox_1182 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;
    
    //Cap 2
    //Start row 210
    if (itemId == "71_1182_77841_210_1" && isChecked == true) {
        document.getElementById("71_1182_77841_210_2").checked = false;
    }
    else if (itemId == "71_1182_77841_210_2" && isChecked == true) {
        document.getElementById("71_1182_77841_210_1").checked = false;

    }
    //End row 210


}
