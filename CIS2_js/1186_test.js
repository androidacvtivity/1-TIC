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
    var R633_C1_value = Number(parseFloat(Number(R631_C1.val())) +
        parseFloat(Number(R632_C1.val()))).toFixed(0);
    R633_C1.val(R633_C1_value);

    // Check if R633_C1_value is not equal to 100 and show message if necessary
    if (R633_C1_value !== "100" && (R631_C1.val() != "" || R632_C1.val() != "" )) {
        $.messager.alert("Error", "Valoare din  rind 633 este  =  " + R633_C1_value + ". Trebuie sa fie 100", "error");
    }

    //-------------------------------Rind 643-----------------------------------------------------
    var R643_C1_value = Number(parseFloat(Number(R641_C1.val())) +
        parseFloat(Number(R642_C1.val()))).toFixed(0);
    R643_C1.val(R643_C1_value);



    // Check if R633_C1_value is not equal to 100 and show message if necessary
    if (R643_C1_value !== "100" && (R641_C1.val() != "" || R642_C1.val() != "") ) {
        $.messager.alert("Error", "Valoare din  rind 643 este  =  " + R643_C1_value + ". Trebuie sa fie 100", "error");
    }
}
