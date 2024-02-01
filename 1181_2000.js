$(document).ready(function () {
    //document.getElementById("56_1081_41988_Q3_1").maxLength = 4;
    //document.getElementById("56_1081_41981_Q1.2_2").maxLength = 2;
});
this.ChangeCheckbox_1181 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;
    if (itemId == "71_1181_75474_130_1" && isChecked == true) {
        document.getElementById("71_1181_75474_130_2").checked = false;
        document.getElementById("75475").style.display = "";
        document.getElementById("75476").style.display = "";
        document.getElementById("75477").style.display = "";
        document.getElementById("75478").style.display = "";
        document.getElementById("75479").style.display = "";
        document.getElementById("75480").style.display = "";
        document.getElementById("75481").style.display = "";
        document.getElementById("75482").style.display = "";
        document.getElementById("75483").style.display = "";
        document.getElementById("75484").style.display = "";
        document.getElementById("75485").style.display = "";
        document.getElementById("75486").style.display = "";
    }
    else if (itemId == "71_1181_75474_130_2" && isChecked == true) {
        document.getElementById("71_1181_75474_130_1").checked = false;
        document.getElementById("75475").style.display = "none";
        document.getElementById("75476").style.display = "none";
        document.getElementById("75477").style.display = "none";
        document.getElementById("75478").style.display = "none";
        document.getElementById("75479").style.display = "none";
        document.getElementById("75480").style.display = "none";
        document.getElementById("75481").style.display = "none";
        document.getElementById("75482").style.display = "none";
        document.getElementById("75483").style.display = "none";
        document.getElementById("75484").style.display = "none";
        document.getElementById("75485").style.display = "none";
        document.getElementById("75486").style.display = "none";
        document.getElementById("71_1181_75475_140_1").checked = false;
        document.getElementById("71_1181_75475_140_2").checked = false;
        document.getElementById("71_1181_75476_141_1").value = "";
        document.getElementById("71_1181_75477_150_1").checked = false;
        document.getElementById("71_1181_75477_150_2").checked = false;
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
        document.getElementById("71_1181_75484_170_1").checked = false;
        document.getElementById("71_1181_75484_170_2").checked = false;
        document.getElementById("71_1181_75485_180_1").checked = false;
        document.getElementById("71_1181_75485_180_2").checked = false;
        document.getElementById("71_1181_75486_181_1").value = "";
    }
    else if (itemId == "71_1181_75475_140_1" && isChecked == true) {
        document.getElementById("71_1181_75475_140_2").checked = false;
        eval($("#71_1181_75476_141_1")).prop("readonly", false);
    }
    else if (itemId == "71_1181_75475_140_2" && isChecked == true) {
        document.getElementById("71_1181_75475_140_1").checked = false;
        eval($("#71_1181_75476_141_1")).val("");
        eval($("#71_1181_75476_141_1")).prop("readonly", true);
    }
    else if (itemId == "71_1181_75477_150_1" && isChecked == true) {
        document.getElementById("71_1181_75477_150_2").checked = false;
        document.getElementById("75478").style.display = "";
        document.getElementById("75479").style.display = "";
        document.getElementById("75480").style.display = "";
        document.getElementById("75481").style.display = "";
        document.getElementById("75482").style.display = "";
        document.getElementById("75483").style.display = "";
    }
    else if (itemId == "71_1181_75477_150_2" && isChecked == true) {
        document.getElementById("71_1181_75477_150_1").checked = false;
        document.getElementById("75478").style.display = "none";
        document.getElementById("75479").style.display = "none";
        document.getElementById("75480").style.display = "none";
        document.getElementById("75481").style.display = "none";
        document.getElementById("75482").style.display = "none";
        document.getElementById("75483").style.display = "none";
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
    }
    else if (itemId == "71_1181_75479_161_1" && isChecked == true) {
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
    }
    else if (itemId == "71_1181_75480_162_1" && isChecked == true) {
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
    }
    else if (itemId == "71_1181_75481_163_1" && isChecked == true) {
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
    }
    else if (itemId == "71_1181_75482_164_1" && isChecked == true) {
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75483_165_1").checked = false;
    }
    else if (itemId == "71_1181_75483_165_1" && isChecked == true) {
        document.getElementById("71_1181_75479_161_1").checked = false;
        document.getElementById("71_1181_75480_162_1").checked = false;
        document.getElementById("71_1181_75481_163_1").checked = false;
        document.getElementById("71_1181_75482_164_1").checked = false;
    }
    else if (itemId == "71_1181_75484_170_1" && isChecked == true) {
        document.getElementById("71_1181_75484_170_2").checked = false;
        document.getElementById("75485").style.display = "";
        document.getElementById("75486").style.display = "";
    }
    else if (itemId == "71_1181_75484_170_2" && isChecked == true) {
        document.getElementById("71_1181_75484_170_1").checked = false;
        document.getElementById("75485").style.display = "none";
        document.getElementById("75486").style.display = "none";
        document.getElementById("71_1181_75485_180_1").checked = false;
        document.getElementById("71_1181_75485_180_2").checked = false;
        document.getElementById("71_1181_75486_181_1").value = "";
    }
    else if (itemId == "71_1181_75485_180_1" && isChecked == true) {
        document.getElementById("71_1181_75485_180_2").checked = false;
        eval($("#71_1181_75486_181_1")).prop("readonly", false);
    }
    else if (itemId == "71_1181_75485_180_2" && isChecked == true) {
        document.getElementById("71_1181_75485_180_1").checked = false;
        eval($("#71_1181_75486_181_1")).val("");
        eval($("#71_1181_75486_181_1")).prop("readonly", true);
    }
}