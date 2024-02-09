$(document).ready(function () {
    form = $("#formDenShort").val();
    f1INVESTA_CAPII();
});
$(function () {
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        f1INVESTA_CAPII();
    });
});
function f1INVESTA_CAPII() {


    var R631_C1 = $("#71_1186_77950_631_1");
    var R632_C1 = $("#71_1186_77926_632_1");
    var R633_C1 = $("#71_1186_77943_633_1");
    var R641_C1 = $("#71_1186_77939_641_1");
    var R642_C1 = $("#71_1186_77960_642_1");
    var R643_C1 = $("#71_1186_77961_643_1");

    //----------readOnly input -----------------------
    R633_C1.prop("readonly", true);
    R643_C1.prop("readonly", true);
    //-------------------------------Rind 633-----------------------------------------------------
    R633_C1.val(Number(parseFloat(Number(R631_C1.val())) +
        parseFloat(Number(R632_C1.val()))).toFixed(0));
    //-------------------------------Rind 643-----------------------------------------------------
    R643_C1.val(Number(parseFloat(Number(R641_C1.val())) +
        parseFloat(Number(R642_C1.val()))).toFixed(0));
}


this.ChangeCheckbox_1186 = function (itemId) {
    var isChecked = document.getElementById(itemId).checked;
    if (itemId == "71_1186_78025_611_1" && isChecked == true) {
        document.getElementById("71_1186_78025_611_2").checked = false;
    }
    else if (itemId == "71_1186_78025_611_2" && isChecked == true) {
        document.getElementById("71_1186_78025_611_1").checked = false;
    }
    else if (itemId == "71_1186_77959_612_1" && isChecked == true) {
        document.getElementById("71_1186_77959_612_2").checked = false;
    }
    else if (itemId == "71_1186_77959_612_2" && isChecked == true) {
        document.getElementById("71_1186_77959_612_1").checked = false;
    }
    else if (itemId == "71_1186_77927_651_1" && isChecked == true) {
        document.getElementById("71_1186_77927_651_2").checked = false;
    }
    else if (itemId == "71_1186_77927_651_2" && isChecked == true) {
        document.getElementById("71_1186_77927_651_1").checked = false;
    }

    else if (itemId == "71_1186_77962_652_1" && isChecked == true) {
        document.getElementById("71_1186_77962_652_2").checked = false;
    }

    else if (itemId == "71_1186_77962_652_2" && isChecked == true) {
        document.getElementById("71_1186_77962_652_1").checked = false;
    }
    else if (itemId == "71_1186_77963_653_1" && isChecked == true) {
        document.getElementById("71_1186_77963_653_2").checked = false;
    }
    else if (itemId == "71_1186_77963_653_2" && isChecked == true) {
        document.getElementById("71_1186_77963_653_1").checked = false;
    }
    else if (itemId == "71_1186_77964_654_1" && isChecked == true) {
        document.getElementById("71_1186_77964_654_2").checked = false;
    }
    else if (itemId == "71_1186_77964_654_2" && isChecked == true) {
        document.getElementById("71_1186_77964_654_1").checked = false;
    }
    else if (itemId == "71_1186_77932_660_1" && isChecked == true) {
        document.getElementById("71_1186_77932_660_2").checked = false;
        document.getElementById("75547").style.display = "";
        document.getElementById("75548").style.display = "";
        document.getElementById("75549").style.display = "";
        document.getElementById("75550").style.display = "";
        document.getElementById("75551").style.display = "";
        document.getElementById("75552").style.display = "";
    }
    else if (itemId == "71_1186_77932_660_2" && isChecked == true) {
        document.getElementById("71_1186_77932_660_1").checked = false;
        document.getElementById("75547").style.display = "none";
        document.getElementById("75548").style.display = "none";
        document.getElementById("75549").style.display = "none";
        document.getElementById("75550").style.display = "none";
        document.getElementById("75551").style.display = "none";
        document.getElementById("75552").style.display = "none";
        document.getElementById("71_1186_75549_681_1").checked = false;
        document.getElementById("71_1186_75549_681_2").checked = false;
        document.getElementById("71_1186_75550_682_1").checked = false;
        document.getElementById("71_1186_75550_682_2").checked = false;
        document.getElementById("71_1186_75551_683_1").checked = false;
        document.getElementById("71_1186_75551_683_2").checked = false;
        document.getElementById("71_1186_75552_684_1").checked = false;
        document.getElementById("71_1186_75552_684_2").checked = false;
        document.getElementById("71_1186_77956_670_1").value = "";
    }
    else if (itemId == "71_1186_77928_681_1" && isChecked == true) {
        document.getElementById("71_1186_77928_681_2").checked = false;
    }
    else if (itemId == "71_1186_77928_681_2" && isChecked == true) {
        document.getElementById("71_1186_77928_681_1").checked = false;
    }
    else if (itemId == "71_1186_77933_682_1" && isChecked == true) {
        document.getElementById("71_1186_77933_682_2").checked = false;
    }
    else if (itemId == "71_1186_77933_682_2" && isChecked == true) {
        document.getElementById("71_1186_77933_682_1").checked = false;
    }
    else if (itemId == "71_1186_77929_683_1" && isChecked == true) {
        document.getElementById("71_1186_77929_683_2").checked = false;
    }
    else if (itemId == "71_1186_77929_683_2" && isChecked == true) {
        document.getElementById("71_1186_77929_683_1").checked = false;
    }
    else if (itemId == "71_1186_77944_684_1" && isChecked == true) {
        document.getElementById("71_1186_77944_684_2").checked = false;
    }
    else if (itemId == "71_1186_77944_684_2" && isChecked == true) {
        document.getElementById("71_1186_77944_684_1").checked = false;
    }
    if (itemId == "71_1186_75530_611_2" && document.getElementById("71_1186_75531_612_2").checked == true) {
        document.getElementById("75532").style.display = "none";
        document.getElementById("75533").style.display = "none";
        document.getElementById("75534").style.display = "none";
        document.getElementById("75535").style.display = "none";
        document.getElementById("75536").style.display = "none";
        document.getElementById("75537").style.display = "none";
        document.getElementById("75538").style.display = "none";
        document.getElementById("75539").style.display = "none";
        document.getElementById("75540").style.display = "none";
        document.getElementById("75541").style.display = "none";
        document.getElementById("75542").style.display = "none";
        document.getElementById("75543").style.display = "none";
        document.getElementById("75544").style.display = "none";
        document.getElementById("75545").style.display = "none";
        document.getElementById("71_1186_75542_651_1").checked = false;
        document.getElementById("71_1186_75542_651_2").checked = false;
        document.getElementById("71_1186_75543_652_1").checked = false;
        document.getElementById("71_1186_75543_652_2").checked = false;
        document.getElementById("71_1186_75544_653_1").checked = false;
        document.getElementById("71_1186_75544_653_2").checked = false;
        document.getElementById("71_1186_75545_654_1").checked = false;
        document.getElementById("71_1186_75545_654_2").checked = false;
        document.getElementById("71_1186_75532_620_1").value = "";
        document.getElementById("71_1186_75534_631_1").value = "";
        document.getElementById("71_1186_75535_632_1").value = "";
        document.getElementById("71_1186_75536_633_1").value = "";
        document.getElementById("71_1186_75538_641_1").value = "";
        document.getElementById("71_1186_75539_642_1").value = "";
        document.getElementById("71_1186_75540_643_1").value = "";
    }
    else if (itemId == "71_1186_75531_612_2" && document.getElementById("71_1186_75530_611_2").checked == true) {
        document.getElementById("75532").style.display = "none";
        document.getElementById("75533").style.display = "none";
        document.getElementById("75534").style.display = "none";
        document.getElementById("75535").style.display = "none";
        document.getElementById("75536").style.display = "none";
        document.getElementById("75537").style.display = "none";
        document.getElementById("75538").style.display = "none";
        document.getElementById("75539").style.display = "none";
        document.getElementById("75540").style.display = "none";
        document.getElementById("75541").style.display = "none";
        document.getElementById("75542").style.display = "none";
        document.getElementById("75543").style.display = "none";
        document.getElementById("75544").style.display = "none";
        document.getElementById("75545").style.display = "none";
        document.getElementById("71_1186_75542_651_1").checked = false;
        document.getElementById("71_1186_75542_651_2").checked = false;
        document.getElementById("71_1186_75543_652_1").checked = false;
        document.getElementById("71_1186_75543_652_2").checked = false;
        document.getElementById("71_1186_75544_653_1").checked = false;
        document.getElementById("71_1186_75544_653_2").checked = false;
        document.getElementById("71_1186_75545_654_1").checked = false;
        document.getElementById("71_1186_75545_654_2").checked = false;
        document.getElementById("71_1186_75532_620_1").value = "";
        document.getElementById("71_1186_75534_631_1").value = "";
        document.getElementById("71_1186_75535_632_1").value = "";
        document.getElementById("71_1186_75536_633_1").value = "";
        document.getElementById("71_1186_75538_641_1").value = "";
        document.getElementById("71_1186_75539_642_1").value = "";
        document.getElementById("71_1186_75540_643_1").value = "";
    }
    else if (document.getElementById("71_1186_75530_611_1").checked == true || document.getElementById("71_1186_75531_612_1").checked == true) {
        document.getElementById("75532").style.display = "";
        document.getElementById("75533").style.display = "";
        document.getElementById("75534").style.display = "";
        document.getElementById("75535").style.display = "";
        document.getElementById("75536").style.display = "";
        document.getElementById("75537").style.display = "";
        document.getElementById("75538").style.display = "";
        document.getElementById("75539").style.display = "";
        document.getElementById("75540").style.display = "";
        document.getElementById("75541").style.display = "";
        document.getElementById("75542").style.display = "";
        document.getElementById("75543").style.display = "";
        document.getElementById("75544").style.display = "";
        document.getElementById("75545").style.display = "";
    }
}