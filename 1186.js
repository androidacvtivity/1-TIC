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
        document.getElementById("77956").style.display = "";
        document.getElementById("77928").style.display = "";
        document.getElementById("77933").style.display = "";
        document.getElementById("77929").style.display = "";
        document.getElementById("77944").style.display = "";
        document.getElementById("77947").style.display = "";
    }
    else if (itemId == "71_1186_77932_660_2" && isChecked == true) {
        document.getElementById("71_1186_77932_660_1").checked = false;
        document.getElementById("77956").style.display = "none";
        document.getElementById("77928").style.display = "none";
        document.getElementById("77933").style.display = "none";
        document.getElementById("77929").style.display = "none";
        document.getElementById("77944").style.display = "none";
        document.getElementById("77947").style.display = "none";
        document.getElementById("71_1186_77928_681_1").checked = false;
        document.getElementById("71_1186_77928_681_2").checked = false;
        document.getElementById("71_1186_77933_682_1").checked = false;
        document.getElementById("71_1186_77933_682_2").checked = false;
        document.getElementById("71_1186_77929_683_1").checked = false;
        document.getElementById("71_1186_77929_683_2").checked = false;
        document.getElementById("71_1186_77944_684_1").checked = false;
        document.getElementById("71_1186_77944_684_2").checked = false;
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
    if (itemId == "71_1186_78025_611_2" && document.getElementById("71_1186_77959_612_2").checked == true) {
        document.getElementById("77938").style.display = "none";
        document.getElementById("77965").style.display = "none";
        document.getElementById("77950").style.display = "none";
        document.getElementById("77926").style.display = "none";
        document.getElementById("77943").style.display = "none";
        document.getElementById("77966").style.display = "none";
        document.getElementById("77939").style.display = "none";
        document.getElementById("77960").style.display = "none";
        document.getElementById("77961").style.display = "none";
        document.getElementById("77968").style.display = "none";
        document.getElementById("77967").style.display = "none";
        document.getElementById("77927").style.display = "none";
        document.getElementById("77962").style.display = "none";
        document.getElementById("77963").style.display = "none";
        document.getElementById("77964").style.display = "none";
        document.getElementById("71_1186_77927_651_1").checked = false;
        document.getElementById("71_1186_77927_651_2").checked = false;
        document.getElementById("71_1186_77962_652_1").checked = false;
        document.getElementById("71_1186_77962_652_2").checked = false;
        document.getElementById("71_1186_77963_653_1").checked = false;
        document.getElementById("71_1186_77963_653_2").checked = false;
        document.getElementById("71_1186_77964_654_1").checked = false;
        document.getElementById("71_1186_77964_654_2").checked = false;
        document.getElementById("71_1186_77938_620_1").value = "";
        document.getElementById("71_1186_77950_631_1").value = "";
        document.getElementById("71_1186_77926_632_1").value = "";
        document.getElementById("71_1186_77943_633_1").value = "";
        document.getElementById("71_1186_77939_641_1").value = "";
        document.getElementById("71_1186_77960_642_1").value = "";
        document.getElementById("71_1186_77961_643_1").value = "";
    }
    else if (itemId == "71_1186_77959_612_2" && document.getElementById("71_1186_78025_611_2").checked == true) {
        document.getElementById("77938").style.display = "none";
        document.getElementById("77965").style.display = "none";
        document.getElementById("77950").style.display = "none";
        document.getElementById("77926").style.display = "none";
        document.getElementById("77943").style.display = "none";
        document.getElementById("77966").style.display = "none";
        document.getElementById("77939").style.display = "none";
        document.getElementById("77960").style.display = "none";
        document.getElementById("77961").style.display = "none";
        document.getElementById("77968").style.display = "none";
        document.getElementById("77967").style.display = "none";
        document.getElementById("77927").style.display = "none";
        document.getElementById("77962").style.display = "none";
        document.getElementById("77963").style.display = "none";
        document.getElementById("77964").style.display = "none";
        document.getElementById("71_1186_77927_651_1").checked = false;
        document.getElementById("71_1186_77927_651_2").checked = false;
        document.getElementById("71_1186_77962_652_1").checked = false;
        document.getElementById("71_1186_77962_652_2").checked = false;
        document.getElementById("71_1186_77963_653_1").checked = false;
        document.getElementById("71_1186_77963_653_2").checked = false;
        document.getElementById("71_1186_77964_654_1").checked = false;
        document.getElementById("71_1186_77964_654_2").checked = false;
        document.getElementById("71_1186_77938_620_1").value = "";
       
        document.getElementById("71_1186_77950_631_1").value = "";
        document.getElementById("71_1186_77926_632_1").value = "";
        document.getElementById("71_1186_77943_633_1").value = "";
        document.getElementById("71_1186_77939_641_1").value = "";
        document.getElementById("71_1186_77960_642_1").value = "";
        document.getElementById("71_1186_77961_643_1").value = "";
    }
    else if (document.getElementById("71_1186_78025_611_1").checked == true || document.getElementById("71_1186_77959_612_1").checked == true) {
        document.getElementById("77965").style.display = "";
        document.getElementById("77938").style.display = "";
        document.getElementById("77950").style.display = "";
        document.getElementById("77926").style.display = "";
        document.getElementById("77943").style.display = "";
        document.getElementById("77966").style.display = "";
        document.getElementById("77939").style.display = "";
        document.getElementById("77960").style.display = "";
        document.getElementById("77961").style.display = "";
        document.getElementById("77968").style.display = "";
        document.getElementById("77967").style.display = "";
        document.getElementById("75542").style.display = "";
        document.getElementById("75543").style.display = "";
        document.getElementById("75544").style.display = "";
        document.getElementById("75545").style.display = "";
    }
}