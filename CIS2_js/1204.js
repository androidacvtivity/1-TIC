$(document).ready(function () {
});
this.ChangeCheckbox_1204 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;
   
    if (itemId == "71_1204_77992_810_1" && isChecked == true) {
        document.getElementById("71_1204_77992_810_2").checked = false;
    }
    else if (itemId == "71_1204_77992_810_2" && isChecked == true) {
        document.getElementById("71_1204_77992_810_1").checked = false;
    }


    else if (itemId == "71_1204_77994_821_1" && isChecked == true) {
        document.getElementById("71_1204_77994_821_2").checked = false;
    }
    else if (itemId == "71_1204_77994_821_2" && isChecked == true) {
        document.getElementById("71_1204_77994_821_1").checked = false;
    }

    else if (itemId == "71_1204_77995_822_1" && isChecked == true) {
        document.getElementById("71_1204_77995_822_2").checked = false;
    }
    else if (itemId == "71_1204_77995_822_2" && isChecked == true) {
        document.getElementById("71_1204_77995_822_1").checked = false;
    }


   


    else if (itemId == "71_1204_77996_830_1" && isChecked == true) {
        document.getElementById("71_1204_77996_830_2").checked = false;
        document.getElementById("77997").style.display = "";
        
    }
    else if (itemId == "71_1204_77996_830_2" && isChecked == true) {
        document.getElementById("71_1204_77996_830_1").checked = false;
        document.getElementById("77997").style.display = "none";
        
        document.getElementById("71_1204_77997_840_1").checked = false;
        document.getElementById("71_1204_77997_840_2").checked = false;
        


    }


    else if (itemId == "71_1204_77997_840_1" && isChecked == true) {
        document.getElementById("71_1204_77997_840_2").checked = false;
    }
    else if (itemId == "71_1204_77997_840_2" && isChecked == true) {
        document.getElementById("71_1204_77997_840_1").checked = false;
    }

    else if (itemId == "71_1204_77999_851_1" && isChecked == true) {
        document.getElementById("71_1204_77999_851_2").checked = false;
    }
    else if (itemId == "71_1204_77999_851_2" && isChecked == true) {
        document.getElementById("71_1204_77999_851_1").checked = false;
    }

    else if (itemId == "71_1204_78000_852_1" && isChecked == true) {
        document.getElementById("71_1204_78000_852_2").checked = false;
    }
    else if (itemId == "71_1204_78000_852_2" && isChecked == true) {
        document.getElementById("71_1204_78000_852_1").checked = false;
    }

}