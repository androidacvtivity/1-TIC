var from = "";
var msgErr = "Nu ati introdus o valoare corecta in coloana.";

$(document).ready(function () {
    form = $("#formDenShort").val();
    fCBGC_Cap4();
});

$(function () {
    $("input:not([type='button']):not([disabled])").on("change", function (e) {
        fCBGC_Cap4();
    });
});
function fCBGC_Cap4() {

    var rows = document.getElementById('Tab_Data').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        //rows[i].onchange = function() {
        if ($("#68_1147_63142_1_0").val() == "1" || $("#68_1147_63142_1_0").val() != "undefined")
            var R1_C1 = $("#68_1147_63142_1_1");
        var R1_C2 = $("#68_1147_63142_1_2");
        var R1_C3 = $("#68_1147_63142_1_3");
        var R1_C4 = $("#68_1147_63142_1_4");
        var R1_C5 = $("#68_1147_63142_1_5");
        var R1_C6 = $("#68_1147_63142_1_6");
        var R1_C7 = $("#68_1147_63142_1_7");
        var R1_C8 = $("#68_1147_63142_1_8");
        var R1_C9 = $("#68_1147_63142_1_9");
        var R1_C10 = $("#68_1147_63142_1_10");
        var R1_C11 = $("#68_1147_63142_1_11");
        var R1_C12 = $("#68_1147_63142_1_12");
        var R1_C13 = $("#68_1147_63142_1_13");
        var R1_C14 = $("#68_1147_63142_1_14");
        var R1_C15 = $("#68_1147_63142_1_15");
        if (eval('R1_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R1_C2').val("");
            eval('R1_C3').val("");
            eval('R1_C4').val("");
            eval('R1_C5').val("");
            eval('R1_C6').val("");
            //----------readOnly input -----------------------
            eval('R1_C2').prop("readonly", true);
            eval('R1_C3').prop("readonly", true);
            eval('R1_C4').prop("readonly", true);
            eval('R1_C5').prop("readonly", true);
            eval('R1_C6').prop("readonly", true);
        }
        else if (eval('R1_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R1_C2').prop("readonly", false);
            eval('R1_C3').prop("readonly", false);
            eval('R1_C4').prop("readonly", false);
            eval('R1_C5').prop("readonly", false);
            eval('R1_C6').prop("readonly", false);
        }
        if (eval('R1_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R1_C3').val("");
            eval('R1_C4').val("");
            //----------readOnly input -----------------------
            eval('R1_C3').prop("readonly", true);
            eval('R1_C4').prop("readonly", true);
        }
        else if (eval('R1_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R1_C3').prop("readonly", false);
            eval('R1_C4').prop("readonly", false);
        }
        if (eval('R1_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R1_C4').val("");
            eval('R1_C5').val("");
            eval('R1_C6').val("");
            //----------readOnly input -----------------------
            eval('R1_C4').prop("readonly", true);
            eval('R1_C5').prop("readonly", true);
            eval('R1_C6').prop("readonly", true);
        }
        else if (eval('R1_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R1_C4').prop("readonly", false);
            eval('R1_C5').prop("readonly", false);
            eval('R1_C6').prop("readonly", false);
        }
        if (eval('R1_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R1_C6').val("");
            eval('R1_C7').val("");
            eval('R1_C8').val("");
            eval('R1_C9').val("");
            eval('R1_C10').val("");
            eval('R1_C11').val("");
            //----------readOnly input -----------------------
            eval('R1_C6').prop("readonly", true);
            eval('R1_C7').prop("readonly", true);
            eval('R1_C8').prop("readonly", true);
            eval('R1_C9').prop("readonly", true);
            eval('R1_C10').prop("readonly", true);
            eval('R1_C11').prop("readonly", true);
        }
        else if (eval('R1_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R1_C6').prop("readonly", false);
            eval('R1_C7').prop("readonly", false);
            eval('R1_C8').prop("readonly", false);
            eval('R1_C9').prop("readonly", false);
            eval('R1_C10').prop("readonly", false);
            eval('R1_C11').prop("readonly", false);
        }
        if (eval('R1_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R1_C7').val("");
            eval('R1_C8').val("");
            eval('R1_C9').val("");
            eval('R1_C10').val("");
            eval('R1_C11').val("");
            eval('R1_C12').val("");
            //----------readOnly input -----------------------
            eval('R1_C7').prop("readonly", true);
            eval('R1_C8').prop("readonly", true);
            eval('R1_C9').prop("readonly", true);
            eval('R1_C10').prop("readonly", true);
            eval('R1_C11').prop("readonly", true);
            eval('R1_C12').prop("readonly", true);
        }
        else if (eval('R1_C6').val() == "1" || eval('R1_C6').val() == "2" || eval('R1_C6').val() == "3" || eval('R1_C6').val() == "4" ||
            eval('R1_C6').val() == "5" || eval('R1_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R1_C7').prop("readonly", false);
            eval('R1_C8').prop("readonly", false);
            eval('R1_C9').prop("readonly", false);
            eval('R1_C10').prop("readonly", false);
            eval('R1_C11').prop("readonly", false);
            eval('R1_C12').prop("readonly", false);
        }
        if (eval('R1_C7').val() == "2" || eval('R1_C7').val() == "3" || eval('R1_C7').val() == "4" || eval('R1_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R1_C8').val("");
            //----------readOnly input -----------------------
            eval('R1_C8').prop("readonly", true);
        }
        else if (eval('R1_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R1_C8').prop("readonly", false);
        }
        if (eval('R1_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R1_C12').val("");
            eval('R1_C13').val("");
            eval('R1_C14').val("");
            eval('R1_C15').val("");
            //----------readOnly input -----------------------
            eval('R1_C12').prop("readonly", true);
            eval('R1_C13').prop("readonly", true);
            eval('R1_C14').prop("readonly", true);
            eval('R1_C15').prop("readonly", true);
        }
        else if (eval('R1_C11').val() <= "0" && !eval('R1_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R1_C12').prop("readonly", false);
            eval('R1_C13').prop("readonly", false);
            eval('R1_C14').prop("readonly", false);
            eval('R1_C15').prop("readonly", false);
        }
        if (eval('R1_C12').val() < "0" && eval('R1_C12').val() != "") {
            //----------clear input --------------------------
            eval('R1_C13').val("");
            eval('R1_C14').val("");
            eval('R1_C15').val("");
            //----------readOnly input -----------------------
            eval('R1_C13').prop("readonly", true);
            eval('R1_C14').prop("readonly", true);
            eval('R1_C15').prop("readonly", true);
        }
        else if (eval('R1_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R1_C13').prop("readonly", false);
            eval('R1_C14').prop("readonly", false);
            eval('R1_C15').prop("readonly", false);
        }
        if (R1_C1.val() != "" && (R1_C1.val() < 1 || R1_C1.val() > 2)) { R1_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R1_C2.val() != "" && (R1_C2.val() < 1 || R1_C2.val() > 2)) { R1_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R1_C3.val() != "" && (R1_C3.val() < 1 || R1_C3.val() > 2)) { R1_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R1_C4.val() != "" && (R1_C4.val() < 0 || R1_C4.val() > 99)) { R1_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R1_C5.val() != "" && (R1_C5.val() < 1 || R1_C5.val() > 2)) { R1_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R1_C6.val() != "" && (R1_C6.val() < 1 || R1_C6.val() > 7)) { R1_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R1_C7.val() != "" && (R1_C7.val() < 1 || R1_C7.val() > 5)) { R1_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R1_C8.val() != "" && (R1_C8.val() < 1 || R1_C8.val() > 4)) { R1_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R1_C11.val() != "" && (R1_C11.val() < 1 || R1_C11.val() > 99)) { R1_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R1_C12.val() != "" && (R1_C12.val() < 1 || R1_C12.val() > 5)) { R1_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R1_C13.val() != "" && (R1_C13.val() < 1 || R1_C13.val() > 2)) { R1_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R1_C14.val() != "" && (R1_C14.val() < 1 || R1_C14.val() > 2)) { R1_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R1_C15.val() != "" && (R1_C15.val() < 1 || R1_C15.val() > 2)) { R1_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63143_2_0").val() == "2" || $("#68_1147_63143_2_0").val() != "undefined") {
        var R2_C1 = $("#68_1147_63143_2_1");
        var R2_C2 = $("#68_1147_63143_2_2");
        var R2_C3 = $("#68_1147_63143_2_3");
        var R2_C4 = $("#68_1147_63143_2_4");
        var R2_C5 = $("#68_1147_63143_2_5");
        var R2_C6 = $("#68_1147_63143_2_6");
        var R2_C7 = $("#68_1147_63143_2_7");
        var R2_C8 = $("#68_1147_63143_2_8");
        var R2_C9 = $("#68_1147_63143_2_9");
        var R2_C10 = $("#68_1147_63143_2_10");
        var R2_C11 = $("#68_1147_63143_2_11");
        var R2_C12 = $("#68_1147_63143_2_12");
        var R2_C13 = $("#68_1147_63143_2_13");
        var R2_C14 = $("#68_1147_63143_2_14");
        var R2_C15 = $("#68_1147_63143_2_15");

        if (eval('R2_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R2_C2').val("");
            eval('R2_C3').val("");
            eval('R2_C4').val("");
            eval('R2_C5').val("");
            eval('R2_C6').val("");
            //----------readOnly input -----------------------
            eval('R2_C2').prop("readonly", true);
            eval('R2_C3').prop("readonly", true);
            eval('R2_C4').prop("readonly", true);
            eval('R2_C5').prop("readonly", true);
            eval('R2_C6').prop("readonly", true);
        }
        else if (eval('R2_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R2_C2').prop("readonly", false);
            eval('R2_C3').prop("readonly", false);
            eval('R2_C4').prop("readonly", false);
            eval('R2_C5').prop("readonly", false);
            eval('R2_C6').prop("readonly", false);
        }
        if (eval('R2_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R2_C3').val("");
            eval('R2_C4').val("");
            //---------readOnly input -----------------------
            eval('R2_C3').prop("readonly", true);
            eval('R2_C4').prop("readonly", true);
        }
        else if (eval('R2_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R2_C3').prop("readonly", false);
            eval('R2_C4').prop("readonly", false);
        }
        if (eval('R2_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R2_C4').val("");
            eval('R2_C5').val("");
            eval('R2_C6').val("");
            //----------readOnly input -----------------------
            eval('R2_C4').prop("readonly", true);
            eval('R2_C5').prop("readonly", true);
            eval('R2_C6').prop("readonly", true);
        }
        else if (eval('R2_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R2_C4').prop("readonly", false);
            eval('R2_C5').prop("readonly", false);
            eval('R2_C6').prop("readonly", false);
        }
        if (eval('R2_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R2_C6').val("");
            eval('R2_C7').val("");
            eval('R2_C8').val("");
            eval('R2_C9').val("");
            eval('R2_C10').val("");
            eval('R2_C11').val("");
            //----------readOnly input -----------------------
            eval('R2_C6').prop("readonly", true);
            eval('R2_C7').prop("readonly", true);
            eval('R2_C8').prop("readonly", true);
            eval('R2_C9').prop("readonly", true);
            eval('R2_C10').prop("readonly", true);
            eval('R2_C11').prop("readonly", true);
        }
        else if (eval('R2_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R2_C6').prop("readonly", false);
            eval('R2_C7').prop("readonly", false);
            eval('R2_C8').prop("readonly", false);
            eval('R2_C9').prop("readonly", false);
            eval('R2_C10').prop("readonly", false);
            eval('R2_C11').prop("readonly", false);
        }
        if (eval('R2_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R2_C7').val("");
            eval('R2_C8').val("");
            eval('R2_C9').val("");
            eval('R2_C10').val("");
            eval('R2_C11').val("");
            eval('R2_C12').val("");
            //----------readOnly input -----------------------
            eval('R2_C7').prop("readonly", true);
            eval('R2_C8').prop("readonly", true);
            eval('R2_C9').prop("readonly", true);
            eval('R2_C10').prop("readonly", true);
            eval('R2_C11').prop("readonly", true);
            eval('R2_C12').prop("readonly", true);
        }
        else if (eval('R2_C6').val() == "1" || eval('R2_C6').val() == "2" || eval('R2_C6').val() == "3" || eval('R2_C6').val() == "4" ||
            eval('R2_C6').val() == "5" || eval('R2_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R2_C7').prop("readonly", false);
            eval('R2_C8').prop("readonly", false);
            eval('R2_C9').prop("readonly", false);
            eval('R2_C10').prop("readonly", false);
            eval('R2_C11').prop("readonly", false);
            eval('R2_C12').prop("readonly", false);
        }
        if (eval('R2_C7').val() == "2" || eval('R2_C7').val() == "3" || eval('R2_C7').val() == "4" || eval('R2_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R2_C8').val("");
            //----------readOnly input -----------------------
            eval('R2_C8').prop("readonly", true);
        }
        else if (eval('R2_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R2_C8').prop("readonly", false);
        }
        if (eval('R2_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R2_C12').val("");
            eval('R2_C13').val("");
            eval('R2_C14').val("");
            eval('R2_C15').val("");
            //----------readOnly input -----------------------
            eval('R2_C12').prop("readonly", true);
            eval('R2_C13').prop("readonly", true);
            eval('R2_C14').prop("readonly", true);
            eval('R2_C15').prop("readonly", true);
        }
        else if (eval('R2_C11').val() <= "0" && !eval('R2_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R2_C12').prop("readonly", false);
            eval('R2_C13').prop("readonly", false);
            eval('R2_C14').prop("readonly", false);
            eval('R2_C15').prop("readonly", false);
        }
        if (eval('R2_C12').val() <= "0" && eval('R2_C12').val() != "") {
            //----------clear input --------------------------
            eval('R2_C13').val("");
            eval('R2_C14').val("");
            eval('R2_C15').val("");
            //----------readOnly input -----------------------
            eval('R2_C13').prop("readonly", true);
            eval('R2_C14').prop("readonly", true);
            eval('R2_C15').prop("readonly", true);
        }
        else if (eval('R2_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R2_C13').prop("readonly", false);
            eval('R2_C14').prop("readonly", false);
            eval('R2_C15').prop("readonly", false);
        }
        if (R2_C1.val() != "" && (R2_C1.val() < 1 || R2_C1.val() > 2)) { R2_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R2_C2.val() != "" && (R2_C2.val() < 1 || R2_C2.val() > 2)) { R2_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R2_C3.val() != "" && (R2_C3.val() < 1 || R2_C3.val() > 2)) { R2_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R2_C4.val() != "" && (R2_C4.val() < 0 || R2_C4.val() > 99)) { R2_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R2_C5.val() != "" && (R2_C5.val() < 1 || R2_C5.val() > 2)) { R2_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R2_C6.val() != "" && (R2_C6.val() < 1 || R2_C6.val() > 7)) { R2_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R2_C7.val() != "" && (R2_C7.val() < 1 || R2_C7.val() > 5)) { R2_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R2_C8.val() != "" && (R2_C8.val() < 1 || R2_C8.val() > 4)) { R2_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R2_C11.val() != "" && (R2_C11.val() < 1 || R2_C11.val() > 99)) { R2_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R2_C12.val() != "" && (R2_C12.val() < 1 || R2_C12.val() > 5)) { R2_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R2_C13.val() != "" && (R2_C13.val() < 1 || R2_C13.val() > 2)) { R2_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R2_C14.val() != "" && (R2_C14.val() < 1 || R2_C14.val() > 2)) { R2_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R2_C15.val() != "" && (R2_C15.val() < 1 || R2_C15.val() > 2)) { R2_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63144_3_0").val() == "3" || $("#68_1147_63144_3_0").val() != "undefined") {

        var R3_C1 = $("#68_1147_63144_3_1");
        var R3_C2 = $("#68_1147_63144_3_2");
        var R3_C3 = $("#68_1147_63144_3_3");
        var R3_C4 = $("#68_1147_63144_3_4");
        var R3_C5 = $("#68_1147_63144_3_5");
        var R3_C6 = $("#68_1147_63144_3_6");
        var R3_C7 = $("#68_1147_63144_3_7");
        var R3_C8 = $("#68_1147_63144_3_8");
        var R3_C9 = $("#68_1147_63144_3_9");
        var R3_C10 = $("#68_1147_63144_3_10");
        var R3_C11 = $("#68_1147_63144_3_11");
        var R3_C12 = $("#68_1147_63144_3_12");
        var R3_C13 = $("#68_1147_63144_3_13");
        var R3_C14 = $("#68_1147_63144_3_14");
        var R3_C15 = $("#68_1147_63144_3_15");

        if (eval('R3_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R3_C2').val("");
            eval('R3_C3').val("");
            eval('R3_C4').val("");
            eval('R3_C5').val("");
            eval('R3_C6').val("");
            //----------readOnly input -----------------------
            eval('R3_C2').prop("readonly", true);
            eval('R3_C3').prop("readonly", true);
            eval('R3_C4').prop("readonly", true);
            eval('R3_C5').prop("readonly", true);
            eval('R3_C6').prop("readonly", true);
        }
        else if (eval('R3_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R3_C2').prop("readonly", false);
            eval('R3_C3').prop("readonly", false);
            eval('R3_C4').prop("readonly", false);
            eval('R3_C5').prop("readonly", false);
            eval('R3_C6').prop("readonly", false);
        }
        if (eval('R3_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R3_C3').val("");
            eval('R3_C4').val("");
            //---------readOnly input -----------------------
            eval('R3_C3').prop("readonly", true);
            eval('R3_C4').prop("readonly", true);
        }
        else if (eval('R3_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R3_C3').prop("readonly", false);
            eval('R3_C4').prop("readonly", false);
        }
        if (eval('R3_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R3_C4').val("");
            eval('R3_C5').val("");
            eval('R3_C6').val("");
            //----------readOnly input -----------------------
            eval('R3_C4').prop("readonly", true);
            eval('R3_C5').prop("readonly", true);
            eval('R3_C6').prop("readonly", true);
        }
        else if (eval('R3_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R3_C4').prop("readonly", false);
            eval('R3_C5').prop("readonly", false);
            eval('R3_C6').prop("readonly", false);
        }
        if (eval('R3_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R3_C6').val("");
            eval('R3_C7').val("");
            eval('R3_C8').val("");
            eval('R3_C9').val("");
            eval('R3_C10').val("");
            eval('R3_C11').val("");
            //----------readOnly input -----------------------
            eval('R3_C6').prop("readonly", true);
            eval('R3_C7').prop("readonly", true);
            eval('R3_C8').prop("readonly", true);
            eval('R3_C9').prop("readonly", true);
            eval('R3_C10').prop("readonly", true);
            eval('R3_C11').prop("readonly", true);
        }
        else if (eval('R3_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R3_C6').prop("readonly", false);
            eval('R3_C7').prop("readonly", false);
            eval('R3_C8').prop("readonly", false);
            eval('R3_C9').prop("readonly", false);
            eval('R3_C10').prop("readonly", false);
            eval('R3_C11').prop("readonly", false);
        }
        if (eval('R3_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R3_C7').val("");
            eval('R3_C8').val("");
            eval('R3_C9').val("");
            eval('R3_C10').val("");
            eval('R3_C11').val("");
            eval('R3_C12').val("");
            //----------readOnly input -----------------------
            eval('R3_C7').prop("readonly", true);
            eval('R3_C8').prop("readonly", true);
            eval('R3_C9').prop("readonly", true);
            eval('R3_C10').prop("readonly", true);
            eval('R3_C11').prop("readonly", true);
            eval('R3_C12').prop("readonly", true);
        }
        else if (eval('R3_C6').val() == "1" || eval('R3_C6').val() == "2" || eval('R3_C6').val() == "3" || eval('R3_C6').val() == "4" ||
            eval('R3_C6').val() == "5" || eval('R3_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R3_C7').prop("readonly", false);
            eval('R3_C8').prop("readonly", false);
            eval('R3_C9').prop("readonly", false);
            eval('R3_C10').prop("readonly", false);
            eval('R3_C11').prop("readonly", false);
            eval('R3_C12').prop("readonly", false);
        }
        if (eval('R3_C7').val() == "2" || eval('R3_C7').val() == "3" || eval('R3_C7').val() == "4" || eval('R3_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R3_C8').val("");
            //----------readOnly input -----------------------
            eval('R3_C8').prop("readonly", true);
        }
        else if (eval('R3_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R3_C8').prop("readonly", false);
        }
        if (eval('R3_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R3_C12').val("");
            eval('R3_C13').val("");
            eval('R3_C14').val("");
            eval('R3_C15').val("");
            //----------readOnly input -----------------------
            eval('R3_C12').prop("readonly", true);
            eval('R3_C13').prop("readonly", true);
            eval('R3_C14').prop("readonly", true);
            eval('R3_C15').prop("readonly", true);
        }
        else if (eval('R3_C11').val() <= "0" && !eval('R3_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R3_C12').prop("readonly", false);
            eval('R3_C13').prop("readonly", false);
            eval('R3_C14').prop("readonly", false);
            eval('R3_C15').prop("readonly", false);
        }
        if (eval('R3_C12').val() <= "0" && eval('R3_C12').val() != "") {
            //----------clear input --------------------------
            eval('R3_C13').val("");
            eval('R3_C14').val("");
            eval('R3_C15').val("");
            //----------readOnly input -----------------------
            eval('R3_C13').prop("readonly", true);
            eval('R3_C14').prop("readonly", true);
            eval('R3_C15').prop("readonly", true);
        }
        else if (eval('R3_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R3_C13').prop("readonly", false);
            eval('R3_C14').prop("readonly", false);
            eval('R3_C15').prop("readonly", false);
        }
        if (R3_C1.val() != "" && (R3_C1.val() < 1 || R3_C1.val() > 2)) { R3_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R3_C2.val() != "" && (R3_C2.val() < 1 || R3_C2.val() > 2)) { R3_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R3_C3.val() != "" && (R3_C3.val() < 1 || R3_C3.val() > 2)) { R3_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R3_C4.val() != "" && (R3_C4.val() < 0 || R3_C4.val() > 99)) { R3_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R3_C5.val() != "" && (R3_C5.val() < 1 || R3_C5.val() > 2)) { R3_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R3_C6.val() != "" && (R3_C6.val() < 1 || R3_C6.val() > 7)) { R3_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R3_C7.val() != "" && (R3_C7.val() < 1 || R3_C7.val() > 5)) { R3_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R3_C8.val() != "" && (R3_C8.val() < 1 || R3_C8.val() > 4)) { R3_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R3_C11.val() != "" && (R3_C11.val() < 1 || R3_C11.val() > 99)) { R3_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R3_C12.val() != "" && (R3_C12.val() < 1 || R3_C12.val() > 5)) { R3_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R3_C13.val() != "" && (R3_C13.val() < 1 || R3_C13.val() > 2)) { R3_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R3_C14.val() != "" && (R3_C14.val() < 1 || R3_C14.val() > 2)) { R3_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R3_C15.val() != "" && (R3_C15.val() < 1 || R3_C15.val() > 2)) { R3_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63145_4_0").val() == "4" || $("#68_1147_63145_4_0").val() != "undefined") {
        var R4_C1 = $("#68_1147_63145_4_1");
        var R4_C2 = $("#68_1147_63145_4_2");
        var R4_C3 = $("#68_1147_63145_4_3");
        var R4_C4 = $("#68_1147_63145_4_4");
        var R4_C5 = $("#68_1147_63145_4_5");
        var R4_C6 = $("#68_1147_63145_4_6");
        var R4_C7 = $("#68_1147_63145_4_7");
        var R4_C8 = $("#68_1147_63145_4_8");
        var R4_C9 = $("#68_1147_63145_4_9");
        var R4_C10 = $("#68_1147_63145_4_10");
        var R4_C11 = $("#68_1147_63145_4_11");
        var R4_C12 = $("#68_1147_63145_4_12");
        var R4_C13 = $("#68_1147_63145_4_13");
        var R4_C14 = $("#68_1147_63145_4_14");
        var R4_C15 = $("#68_1147_63145_4_15");

        if (eval('R4_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R4_C2').val("");
            eval('R4_C3').val("");
            eval('R4_C4').val("");
            eval('R4_C5').val("");
            eval('R4_C6').val("");
            //----------readOnly input -----------------------
            eval('R4_C2').prop("readonly", true);
            eval('R4_C3').prop("readonly", true);
            eval('R4_C4').prop("readonly", true);
            eval('R4_C5').prop("readonly", true);
            eval('R4_C6').prop("readonly", true);
        }
        else if (eval('R4_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R4_C2').prop("readonly", false);
            eval('R4_C3').prop("readonly", false);
            eval('R4_C4').prop("readonly", false);
            eval('R4_C5').prop("readonly", false);
            eval('R4_C6').prop("readonly", false);
        }
        if (eval('R4_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R4_C3').val("");
            eval('R4_C4').val("");
            //---------readOnly input -----------------------
            eval('R4_C3').prop("readonly", true);
            eval('R4_C4').prop("readonly", true);
        }
        else if (eval('R4_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R4_C3').prop("readonly", false);
            eval('R4_C4').prop("readonly", false);
        }
        if (eval('R4_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R4_C4').val("");
            eval('R4_C5').val("");
            eval('R4_C6').val("");
            //----------readOnly input -----------------------
            eval('R4_C4').prop("readonly", true);
            eval('R4_C5').prop("readonly", true);
            eval('R4_C6').prop("readonly", true);
        }
        else if (eval('R4_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R4_C4').prop("readonly", false);
            eval('R4_C5').prop("readonly", false);
            eval('R4_C6').prop("readonly", false);
        }
        if (eval('R4_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R4_C6').val("");
            eval('R4_C7').val("");
            eval('R4_C8').val("");
            eval('R4_C9').val("");
            eval('R4_C10').val("");
            eval('R4_C11').val("");
            //----------readOnly input -----------------------
            eval('R4_C6').prop("readonly", true);
            eval('R4_C7').prop("readonly", true);
            eval('R4_C8').prop("readonly", true);
            eval('R4_C9').prop("readonly", true);
            eval('R4_C10').prop("readonly", true);
            eval('R4_C11').prop("readonly", true);
        }
        else if (eval('R4_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R4_C6').prop("readonly", false);
            eval('R4_C7').prop("readonly", false);
            eval('R4_C8').prop("readonly", false);
            eval('R4_C9').prop("readonly", false);
            eval('R4_C10').prop("readonly", false);
            eval('R4_C11').prop("readonly", false);
        }
        if (eval('R4_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R4_C7').val("");
            eval('R4_C8').val("");
            eval('R4_C9').val("");
            eval('R4_C10').val("");
            eval('R4_C11').val("");
            eval('R4_C12').val("");
            //----------readOnly input -----------------------
            eval('R4_C7').prop("readonly", true);
            eval('R4_C8').prop("readonly", true);
            eval('R4_C9').prop("readonly", true);
            eval('R4_C10').prop("readonly", true);
            eval('R4_C11').prop("readonly", true);
            eval('R4_C12').prop("readonly", true);
        }
        else if (eval('R4_C6').val() == "1" || eval('R4_C6').val() == "2" || eval('R4_C6').val() == "3" || eval('R4_C6').val() == "4" ||
            eval('R4_C6').val() == "5" || eval('R4_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R4_C7').prop("readonly", false);
            eval('R4_C8').prop("readonly", false);
            eval('R4_C9').prop("readonly", false);
            eval('R4_C10').prop("readonly", false);
            eval('R4_C11').prop("readonly", false);
            eval('R4_C12').prop("readonly", false);
        }
        if (eval('R4_C7').val() == "2" || eval('R4_C7').val() == "3" || eval('R4_C7').val() == "4" || eval('R4_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R4_C8').val("");
            //----------readOnly input -----------------------
            eval('R4_C8').prop("readonly", true);
        }
        else if (eval('R4_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R4_C8').prop("readonly", false);
        }
        if (eval('R4_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R4_C12').val("");
            eval('R4_C13').val("");
            eval('R4_C14').val("");
            eval('R4_C15').val("");
            //----------readOnly input -----------------------
            eval('R4_C12').prop("readonly", true);
            eval('R4_C13').prop("readonly", true);
            eval('R4_C14').prop("readonly", true);
            eval('R4_C15').prop("readonly", true);
        }
        else if (eval('R4_C11').val() <= "0" && !eval('R4_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R4_C12').prop("readonly", false);
            eval('R4_C13').prop("readonly", false);
            eval('R4_C14').prop("readonly", false);
            eval('R4_C15').prop("readonly", false);
        }
        if (eval('R4_C12').val() <= "0" && eval('R4_C12').val() != "") {
            //----------clear input --------------------------
            eval('R4_C13').val("");
            eval('R4_C14').val("");
            eval('R4_C15').val("");
            //----------readOnly input -----------------------
            eval('R4_C13').prop("readonly", true);
            eval('R4_C14').prop("readonly", true);
            eval('R4_C15').prop("readonly", true);
        }
        else if (eval('R4_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R4_C13').prop("readonly", false);
            eval('R4_C14').prop("readonly", false);
            eval('R4_C15').prop("readonly", false);
        }
        if (R4_C1.val() != "" && (R4_C1.val() < 1 || R4_C1.val() > 2)) { R4_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R4_C2.val() != "" && (R4_C2.val() < 1 || R4_C2.val() > 2)) { R4_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R4_C3.val() != "" && (R4_C3.val() < 1 || R4_C3.val() > 2)) { R4_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R4_C4.val() != "" && (R4_C4.val() < 0 || R4_C4.val() > 99)) { R4_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R4_C5.val() != "" && (R4_C5.val() < 1 || R4_C5.val() > 2)) { R4_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R4_C6.val() != "" && (R4_C6.val() < 1 || R4_C6.val() > 7)) { R4_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R4_C7.val() != "" && (R4_C7.val() < 1 || R4_C7.val() > 5)) { R4_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R4_C8.val() != "" && (R4_C8.val() < 1 || R4_C8.val() > 4)) { R4_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R4_C11.val() != "" && (R4_C11.val() < 1 || R4_C11.val() > 99)) { R4_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R4_C12.val() != "" && (R4_C12.val() < 1 || R4_C12.val() > 5)) { R4_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R4_C13.val() != "" && (R4_C13.val() < 1 || R4_C13.val() > 2)) { R4_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R4_C14.val() != "" && (R4_C14.val() < 1 || R4_C14.val() > 2)) { R4_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R4_C15.val() != "" && (R4_C15.val() < 1 || R4_C15.val() > 2)) { R4_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63146_5_0").val() == "5" || $("#68_1147_63146_5_0").val() != "undefined") {
        var R5_C1 = $("#68_1147_63146_5_1");
        var R5_C2 = $("#68_1147_63146_5_2");
        var R5_C3 = $("#68_1147_63146_5_3");
        var R5_C4 = $("#68_1147_63146_5_4");
        var R5_C5 = $("#68_1147_63146_5_5");
        var R5_C6 = $("#68_1147_63146_5_6");
        var R5_C7 = $("#68_1147_63146_5_7");
        var R5_C8 = $("#68_1147_63146_5_8");
        var R5_C9 = $("#68_1147_63146_5_9");
        var R5_C10 = $("#68_1147_63146_5_10");
        var R5_C11 = $("#68_1147_63146_5_11");
        var R5_C12 = $("#68_1147_63146_5_12");
        var R5_C13 = $("#68_1147_63146_5_13");
        var R5_C14 = $("#68_1147_63146_5_14");
        var R5_C15 = $("#68_1147_63146_5_15");

        if (eval('R5_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R5_C2').val("");
            eval('R5_C3').val("");
            eval('R5_C4').val("");
            eval('R5_C5').val("");
            eval('R5_C6').val("");
            //----------readOnly input -----------------------
            eval('R5_C2').prop("readonly", true);
            eval('R5_C3').prop("readonly", true);
            eval('R5_C4').prop("readonly", true);
            eval('R5_C5').prop("readonly", true);
            eval('R5_C6').prop("readonly", true);
        }
        else if (eval('R5_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R5_C2').prop("readonly", false);
            eval('R5_C3').prop("readonly", false);
            eval('R5_C4').prop("readonly", false);
            eval('R5_C5').prop("readonly", false);
            eval('R5_C6').prop("readonly", false);
        }
        if (eval('R5_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R5_C3').val("");
            eval('R5_C4').val("");
            //---------readOnly input -----------------------
            eval('R5_C3').prop("readonly", true);
            eval('R5_C4').prop("readonly", true);
        }
        else if (eval('R5_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R5_C3').prop("readonly", false);
            eval('R5_C4').prop("readonly", false);
        }
        if (eval('R5_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R5_C4').val("");
            eval('R5_C5').val("");
            eval('R5_C6').val("");
            //----------readOnly input -----------------------
            eval('R5_C4').prop("readonly", true);
            eval('R5_C5').prop("readonly", true);
            eval('R5_C6').prop("readonly", true);
        }
        else if (eval('R5_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R5_C4').prop("readonly", false);
            eval('R5_C5').prop("readonly", false);
            eval('R5_C6').prop("readonly", false);
        }
        if (eval('R5_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R5_C6').val("");
            eval('R5_C7').val("");
            eval('R5_C8').val("");
            eval('R5_C9').val("");
            eval('R5_C10').val("");
            eval('R5_C11').val("");
            //----------readOnly input -----------------------
            eval('R5_C6').prop("readonly", true);
            eval('R5_C7').prop("readonly", true);
            eval('R5_C8').prop("readonly", true);
            eval('R5_C9').prop("readonly", true);
            eval('R5_C10').prop("readonly", true);
            eval('R5_C11').prop("readonly", true);
        }
        else if (eval('R5_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R5_C6').prop("readonly", false);
            eval('R5_C7').prop("readonly", false);
            eval('R5_C8').prop("readonly", false);
            eval('R5_C9').prop("readonly", false);
            eval('R5_C10').prop("readonly", false);
            eval('R5_C11').prop("readonly", false);
        }
        if (eval('R5_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R5_C7').val("");
            eval('R5_C8').val("");
            eval('R5_C9').val("");
            eval('R5_C10').val("");
            eval('R5_C11').val("");
            eval('R5_C12').val("");
            //----------readOnly input -----------------------
            eval('R5_C7').prop("readonly", true);
            eval('R5_C8').prop("readonly", true);
            eval('R5_C9').prop("readonly", true);
            eval('R5_C10').prop("readonly", true);
            eval('R5_C11').prop("readonly", true);
            eval('R5_C12').prop("readonly", true);
        }
        else if (eval('R5_C6').val() == "1" || eval('R5_C6').val() == "2" || eval('R5_C6').val() == "3" || eval('R5_C6').val() == "4" ||
            eval('R5_C6').val() == "5" || eval('R5_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R5_C7').prop("readonly", false);
            eval('R5_C8').prop("readonly", false);
            eval('R5_C9').prop("readonly", false);
            eval('R5_C10').prop("readonly", false);
            eval('R5_C11').prop("readonly", false);
            eval('R5_C12').prop("readonly", false);
        }
        if (eval('R5_C7').val() == "2" || eval('R5_C7').val() == "3" || eval('R5_C7').val() == "4" || eval('R5_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R5_C8').val("");
            //----------readOnly input -----------------------
            eval('R5_C8').prop("readonly", true);
        }
        else if (eval('R5_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R5_C8').prop("readonly", false);
        }
        if (eval('R5_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R5_C12').val("");
            eval('R5_C13').val("");
            eval('R5_C14').val("");
            eval('R5_C15').val("");
            //----------readOnly input -----------------------
            eval('R5_C12').prop("readonly", true);
            eval('R5_C13').prop("readonly", true);
            eval('R5_C14').prop("readonly", true);
            eval('R5_C15').prop("readonly", true);
        }
        else if (eval('R5_C11').val() <= "0" && !eval('R5_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R5_C12').prop("readonly", false);
            eval('R5_C13').prop("readonly", false);
            eval('R5_C14').prop("readonly", false);
            eval('R5_C15').prop("readonly", false);
        }
        if (eval('R5_C12').val() <= "0" && eval('R5_C12').val() != "") {
            //----------clear input --------------------------
            eval('R5_C13').val("");
            eval('R5_C14').val("");
            eval('R5_C15').val("");
            //----------readOnly input -----------------------
            eval('R5_C13').prop("readonly", true);
            eval('R5_C14').prop("readonly", true);
            eval('R5_C15').prop("readonly", true);
        }
        else if (eval('R5_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R5_C13').prop("readonly", false);
            eval('R5_C14').prop("readonly", false);
            eval('R5_C15').prop("readonly", false);
        }
        if (R5_C1.val() != "" && (R5_C1.val() < 1 || R5_C1.val() > 2)) { R5_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R5_C2.val() != "" && (R5_C2.val() < 1 || R5_C2.val() > 2)) { R5_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R5_C3.val() != "" && (R5_C3.val() < 1 || R5_C3.val() > 2)) { R5_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R5_C4.val() != "" && (R5_C4.val() < 0 || R5_C4.val() > 99)) { R5_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R5_C5.val() != "" && (R5_C5.val() < 1 || R5_C5.val() > 2)) { R5_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R5_C6.val() != "" && (R5_C6.val() < 1 || R5_C6.val() > 7)) { R5_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R5_C7.val() != "" && (R5_C7.val() < 1 || R5_C7.val() > 5)) { R5_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R5_C8.val() != "" && (R5_C8.val() < 1 || R5_C8.val() > 4)) { R5_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R5_C11.val() != "" && (R5_C11.val() < 1 || R5_C11.val() > 99)) { R5_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R5_C12.val() != "" && (R5_C12.val() < 1 || R5_C12.val() > 5)) { R5_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R5_C13.val() != "" && (R5_C13.val() < 1 || R5_C13.val() > 2)) { R5_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R5_C14.val() != "" && (R5_C14.val() < 1 || R5_C14.val() > 2)) { R5_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R5_C15.val() != "" && (R5_C15.val() < 1 || R5_C15.val() > 2)) { R5_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63147_6_0").val() == "6" || $("#68_1147_63147_6_0").val() != "undefined") {
        var R6_C1 = $("#68_1147_63147_6_1");
        var R6_C2 = $("#68_1147_63147_6_2");
        var R6_C3 = $("#68_1147_63147_6_3");
        var R6_C4 = $("#68_1147_63147_6_4");
        var R6_C5 = $("#68_1147_63147_6_5");
        var R6_C6 = $("#68_1147_63147_6_6");
        var R6_C7 = $("#68_1147_63147_6_7");
        var R6_C8 = $("#68_1147_63147_6_8");
        var R6_C9 = $("#68_1147_63147_6_9");
        var R6_C10 = $("#68_1147_63147_6_10");
        var R6_C11 = $("#68_1147_63147_6_11");
        var R6_C12 = $("#68_1147_63147_6_12");
        var R6_C13 = $("#68_1147_63147_6_13");
        var R6_C14 = $("#68_1147_63147_6_14");
        var R6_C15 = $("#68_1147_63147_6_15");

        if (eval('R6_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R6_C2').val("");
            eval('R6_C3').val("");
            eval('R6_C4').val("");
            eval('R6_C5').val("");
            eval('R6_C6').val("");
            //----------readOnly input -----------------------
            eval('R6_C2').prop("readonly", true);
            eval('R6_C3').prop("readonly", true);
            eval('R6_C4').prop("readonly", true);
            eval('R6_C5').prop("readonly", true);
            eval('R6_C6').prop("readonly", true);
        }
        else if (eval('R6_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R6_C2').prop("readonly", false);
            eval('R6_C3').prop("readonly", false);
            eval('R6_C4').prop("readonly", false);
            eval('R6_C5').prop("readonly", false);
            eval('R6_C6').prop("readonly", false);
        }
        if (eval('R6_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R6_C3').val("");
            eval('R6_C4').val("");
            //---------readOnly input -----------------------
            eval('R6_C3').prop("readonly", true);
            eval('R6_C4').prop("readonly", true);
        }
        else if (eval('R6_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R6_C3').prop("readonly", false);
            eval('R6_C4').prop("readonly", false);
        }
        if (eval('R6_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R6_C4').val("");
            eval('R6_C5').val("");
            eval('R6_C6').val("");
            //----------readOnly input -----------------------
            eval('R6_C4').prop("readonly", true);
            eval('R6_C5').prop("readonly", true);
            eval('R6_C6').prop("readonly", true);
        }
        else if (eval('R6_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R6_C4').prop("readonly", false);
            eval('R6_C5').prop("readonly", false);
            eval('R6_C6').prop("readonly", false);
        }
        if (eval('R6_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R6_C6').val("");
            eval('R6_C7').val("");
            eval('R6_C8').val("");
            eval('R6_C9').val("");
            eval('R6_C10').val("");
            eval('R6_C11').val("");
            //----------readOnly input -----------------------
            eval('R6_C6').prop("readonly", true);
            eval('R6_C7').prop("readonly", true);
            eval('R6_C8').prop("readonly", true);
            eval('R6_C9').prop("readonly", true);
            eval('R6_C10').prop("readonly", true);
            eval('R6_C11').prop("readonly", true);
        }
        else if (eval('R6_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R6_C6').prop("readonly", false);
            eval('R6_C7').prop("readonly", false);
            eval('R6_C8').prop("readonly", false);
            eval('R6_C9').prop("readonly", false);
            eval('R6_C10').prop("readonly", false);
            eval('R6_C11').prop("readonly", false);
        }
        if (eval('R6_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R6_C7').val("");
            eval('R6_C8').val("");
            eval('R6_C9').val("");
            eval('R6_C10').val("");
            eval('R6_C11').val("");
            eval('R6_C12').val("");
            //----------readOnly input -----------------------
            eval('R6_C7').prop("readonly", true);
            eval('R6_C8').prop("readonly", true);
            eval('R6_C9').prop("readonly", true);
            eval('R6_C10').prop("readonly", true);
            eval('R6_C11').prop("readonly", true);
            eval('R6_C12').prop("readonly", true);
        }
        else if (eval('R6_C6').val() == "1" || eval('R6_C6').val() == "2" || eval('R6_C6').val() == "3" || eval('R6_C6').val() == "4" ||
            eval('R6_C6').val() == "5" || eval('R6_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R6_C7').prop("readonly", false);
            eval('R6_C8').prop("readonly", false);
            eval('R6_C9').prop("readonly", false);
            eval('R6_C10').prop("readonly", false);
            eval('R6_C11').prop("readonly", false);
            eval('R6_C12').prop("readonly", false);
        }
        if (eval('R6_C7').val() == "2" || eval('R6_C7').val() == "3" || eval('R6_C7').val() == "4" || eval('R6_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R6_C8').val("");
            //----------readOnly input -----------------------
            eval('R6_C8').prop("readonly", true);
        }
        else if (eval('R6_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R6_C8').prop("readonly", false);
        }
        if (eval('R6_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R6_C12').val("");
            eval('R6_C13').val("");
            eval('R6_C14').val("");
            eval('R6_C15').val("");
            //----------readOnly input -----------------------
            eval('R6_C12').prop("readonly", true);
            eval('R6_C13').prop("readonly", true);
            eval('R6_C14').prop("readonly", true);
            eval('R6_C15').prop("readonly", true);
        }
        else if (eval('R6_C11').val() <= "0" && !eval('R6_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R6_C12').prop("readonly", false);
            eval('R6_C13').prop("readonly", false);
            eval('R6_C14').prop("readonly", false);
            eval('R6_C15').prop("readonly", false);
        }
        if (eval('R6_C12').val() <= "0" && eval('R6_C12').val() != "") {
            //----------clear input --------------------------
            eval('R6_C13').val("");
            eval('R6_C14').val("");
            eval('R6_C15').val("");
            //----------readOnly input -----------------------
            eval('R6_C13').prop("readonly", true);
            eval('R6_C14').prop("readonly", true);
            eval('R6_C15').prop("readonly", true);
        }
        else if (eval('R6_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R6_C13').prop("readonly", false);
            eval('R6_C14').prop("readonly", false);
            eval('R6_C15').prop("readonly", false);
        }
        if (R6_C1.val() != "" && (R6_C1.val() < 1 || R6_C1.val() > 2)) { R6_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R6_C2.val() != "" && (R6_C2.val() < 1 || R6_C2.val() > 2)) { R6_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R6_C3.val() != "" && (R6_C3.val() < 1 || R6_C3.val() > 2)) { R6_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R6_C4.val() != "" && (R6_C4.val() < 0 || R6_C4.val() > 99)) { R6_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R6_C5.val() != "" && (R6_C5.val() < 1 || R6_C5.val() > 2)) { R6_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R6_C6.val() != "" && (R6_C6.val() < 1 || R6_C6.val() > 7)) { R6_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R6_C7.val() != "" && (R6_C7.val() < 1 || R6_C7.val() > 5)) { R6_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R6_C8.val() != "" && (R6_C8.val() < 1 || R6_C8.val() > 4)) { R6_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R6_C11.val() != "" && (R6_C11.val() < 1 || R6_C11.val() > 99)) { R6_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R6_C12.val() != "" && (R6_C12.val() < 1 || R6_C12.val() > 5)) { R6_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R6_C13.val() != "" && (R6_C13.val() < 1 || R6_C13.val() > 2)) { R6_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R6_C14.val() != "" && (R6_C14.val() < 1 || R6_C14.val() > 2)) { R6_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R6_C15.val() != "" && (R6_C15.val() < 1 || R6_C15.val() > 2)) { R6_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63148_7_0").val() == "7" || $("#68_1147_63148_7_0").val() != "undefined") {
        var R7_C1 = $("#68_1147_63148_7_1");
        var R7_C2 = $("#68_1147_63148_7_2");
        var R7_C3 = $("#68_1147_63148_7_3");
        var R7_C4 = $("#68_1147_63148_7_4");
        var R7_C5 = $("#68_1147_63148_7_5");
        var R7_C6 = $("#68_1147_63148_7_6");
        var R7_C7 = $("#68_1147_63148_7_7");
        var R7_C8 = $("#68_1147_63148_7_8");
        var R7_C9 = $("#68_1147_63148_7_9");
        var R7_C10 = $("#68_1147_63148_7_10");
        var R7_C11 = $("#68_1147_63148_7_11");
        var R7_C12 = $("#68_1147_63148_7_12");
        var R7_C13 = $("#68_1147_63148_7_13");
        var R7_C14 = $("#68_1147_63148_7_14");
        var R7_C15 = $("#68_1147_63148_7_15");

        if (eval('R7_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R7_C2').val("");
            eval('R7_C3').val("");
            eval('R7_C4').val("");
            eval('R7_C5').val("");
            eval('R7_C6').val("");
            //----------readOnly input -----------------------
            eval('R7_C2').prop("readonly", true);
            eval('R7_C3').prop("readonly", true);
            eval('R7_C4').prop("readonly", true);
            eval('R7_C5').prop("readonly", true);
            eval('R7_C6').prop("readonly", true);
        }
        else if (eval('R7_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R7_C2').prop("readonly", false);
            eval('R7_C3').prop("readonly", false);
            eval('R7_C4').prop("readonly", false);
            eval('R7_C5').prop("readonly", false);
            eval('R7_C6').prop("readonly", false);
        }
        if (eval('R7_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R7_C3').val("");
            eval('R7_C4').val("");
            //---------readOnly input -----------------------
            eval('R7_C3').prop("readonly", true);
            eval('R7_C4').prop("readonly", true);
        }
        else if (eval('R7_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R7_C3').prop("readonly", false);
            eval('R7_C4').prop("readonly", false);
        }
        if (eval('R7_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R7_C4').val("");
            eval('R7_C5').val("");
            eval('R7_C6').val("");
            //----------readOnly input -----------------------
            eval('R7_C4').prop("readonly", true);
            eval('R7_C5').prop("readonly", true);
            eval('R7_C6').prop("readonly", true);
        }
        else if (eval('R7_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R7_C4').prop("readonly", false);
            eval('R7_C5').prop("readonly", false);
            eval('R7_C6').prop("readonly", false);
        }
        if (eval('R7_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R7_C6').val("");
            eval('R7_C7').val("");
            eval('R7_C8').val("");
            eval('R7_C9').val("");
            eval('R7_C10').val("");
            eval('R7_C11').val("");
            //----------readOnly input -----------------------
            eval('R7_C6').prop("readonly", true);
            eval('R7_C7').prop("readonly", true);
            eval('R7_C8').prop("readonly", true);
            eval('R7_C9').prop("readonly", true);
            eval('R7_C10').prop("readonly", true);
            eval('R7_C11').prop("readonly", true);
        }
        else if (eval('R7_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R7_C6').prop("readonly", false);
            eval('R7_C7').prop("readonly", false);
            eval('R7_C8').prop("readonly", false);
            eval('R7_C9').prop("readonly", false);
            eval('R7_C10').prop("readonly", false);
            eval('R7_C11').prop("readonly", false);
        }
        if (eval('R7_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R7_C7').val("");
            eval('R7_C8').val("");
            eval('R7_C9').val("");
            eval('R7_C10').val("");
            eval('R7_C11').val("");
            eval('R7_C12').val("");
            //----------readOnly input -----------------------
            eval('R7_C7').prop("readonly", true);
            eval('R7_C8').prop("readonly", true);
            eval('R7_C9').prop("readonly", true);
            eval('R7_C10').prop("readonly", true);
            eval('R7_C11').prop("readonly", true);
            eval('R7_C12').prop("readonly", true);
        }
        else if (eval('R7_C6').val() == "1" || eval('R7_C6').val() == "2" || eval('R7_C6').val() == "3" || eval('R7_C6').val() == "4" ||
            eval('R7_C6').val() == "5" || eval('R7_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R7_C7').prop("readonly", false);
            eval('R7_C8').prop("readonly", false);
            eval('R7_C9').prop("readonly", false);
            eval('R7_C10').prop("readonly", false);
            eval('R7_C11').prop("readonly", false);
            eval('R7_C12').prop("readonly", false);
        }
        if (eval('R7_C7').val() == "2" || eval('R7_C7').val() == "3" || eval('R7_C7').val() == "4" || eval('R7_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R7_C8').val("");
            //----------readOnly input -----------------------
            eval('R7_C8').prop("readonly", true);
        }
        else if (eval('R7_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R7_C8').prop("readonly", false);
        }
        if (eval('R7_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R7_C12').val("");
            eval('R7_C13').val("");
            eval('R7_C14').val("");
            eval('R7_C15').val("");
            //----------readOnly input -----------------------
            eval('R7_C12').prop("readonly", true);
            eval('R7_C13').prop("readonly", true);
            eval('R7_C14').prop("readonly", true);
            eval('R7_C15').prop("readonly", true);
        }
        else if (eval('R7_C11').val() <= "0" && !eval('R7_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R7_C12').prop("readonly", false);
            eval('R7_C13').prop("readonly", false);
            eval('R7_C14').prop("readonly", false);
            eval('R7_C15').prop("readonly", false);
        }
        if (eval('R7_C12').val() <= "0" && eval('R7_C12').val() != "") {
            //----------clear input --------------------------
            eval('R7_C13').val("");
            eval('R7_C14').val("");
            eval('R7_C15').val("");
            //----------readOnly input -----------------------
            eval('R7_C13').prop("readonly", true);
            eval('R7_C14').prop("readonly", true);
            eval('R7_C15').prop("readonly", true);
        }
        else if (eval('R7_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R7_C13').prop("readonly", false);
            eval('R7_C14').prop("readonly", false);
            eval('R7_C15').prop("readonly", false);
        }
        if (R7_C1.val() != "" && (R7_C1.val() < 1 || R7_C1.val() > 2)) { R7_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R7_C2.val() != "" && (R7_C2.val() < 1 || R7_C2.val() > 2)) { R7_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R7_C3.val() != "" && (R7_C3.val() < 1 || R7_C3.val() > 2)) { R7_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R7_C4.val() != "" && (R7_C4.val() < 0 || R7_C4.val() > 99)) { R7_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R7_C5.val() != "" && (R7_C5.val() < 1 || R7_C5.val() > 2)) { R7_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R7_C6.val() != "" && (R7_C6.val() < 1 || R7_C6.val() > 7)) { R7_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R7_C7.val() != "" && (R7_C7.val() < 1 || R7_C7.val() > 5)) { R7_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R7_C8.val() != "" && (R7_C8.val() < 1 || R7_C8.val() > 4)) { R7_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R7_C11.val() != "" && (R7_C11.val() < 1 || R7_C11.val() > 99)) { R7_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R7_C12.val() != "" && (R7_C12.val() < 1 || R7_C12.val() > 5)) { R7_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R7_C13.val() != "" && (R7_C13.val() < 1 || R7_C13.val() > 2)) { R7_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R7_C14.val() != "" && (R7_C14.val() < 1 || R7_C14.val() > 2)) { R7_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R7_C15.val() != "" && (R7_C15.val() < 1 || R7_C15.val() > 2)) { R7_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
    }
    if ($("#68_1147_63149_8_0").val() == "8" || $("#68_1147_63149_8_0").val() != "undefined") {
        var R8_C1 = $("#68_1147_63149_8_1");
        var R8_C2 = $("#68_1147_63149_8_2");
        var R8_C3 = $("#68_1147_63149_8_3");
        var R8_C4 = $("#68_1147_63149_8_4");
        var R8_C5 = $("#68_1147_63149_8_5");
        var R8_C6 = $("#68_1147_63149_8_6");
        var R8_C7 = $("#68_1147_63149_8_7");
        var R8_C8 = $("#68_1147_63149_8_8");
        var R8_C9 = $("#68_1147_63149_8_9");
        var R8_C10 = $("#68_1147_63149_8_10");
        var R8_C11 = $("#68_1147_63149_8_11");
        var R8_C12 = $("#68_1147_63149_8_12");
        var R8_C13 = $("#68_1147_63149_8_13");
        var R8_C14 = $("#68_1147_63149_8_14");
        var R8_C15 = $("#68_1147_63149_8_15");

        if (eval('R8_C1').val() == "1") {
            //----------clear input --------------------------
            eval('R8_C2').val("");
            eval('R8_C3').val("");
            eval('R8_C4').val("");
            eval('R8_C5').val("");
            eval('R8_C6').val("");
            //----------readOnly input -----------------------
            eval('R8_C2').prop("readonly", true);
            eval('R8_C3').prop("readonly", true);
            eval('R8_C4').prop("readonly", true);
            eval('R8_C5').prop("readonly", true);
            eval('R8_C6').prop("readonly", true);
        }
        else if (eval('R8_C1').val() == "2") {
            //----------readOnly input -----------------------
            eval('R8_C2').prop("readonly", false);
            eval('R8_C3').prop("readonly", false);
            eval('R8_C4').prop("readonly", false);
            eval('R8_C5').prop("readonly", false);
            eval('R8_C6').prop("readonly", false);
        }
        if (eval('R8_C2').val() == "2") {
            //----------clear input --------------------------
            eval('R8_C3').val("");
            eval('R8_C4').val("");
            //---------readOnly input -----------------------
            eval('R8_C3').prop("readonly", true);
            eval('R8_C4').prop("readonly", true);
        }
        else if (eval('R8_C2').val() == "1") {
            //----------readOnly input -----------------------
            eval('R8_C3').prop("readonly", false);
            eval('R8_C4').prop("readonly", false);
        }
        if (eval('R8_C3').val() == "2") {
            //----------clear input --------------------------
            eval('R8_C4').val("");
            eval('R8_C5').val("");
            eval('R8_C6').val("");
            //----------readOnly input -----------------------
            eval('R8_C4').prop("readonly", true);
            eval('R8_C5').prop("readonly", true);
            eval('R8_C6').prop("readonly", true);
        }
        else if (eval('R8_C3').val() == "1") {
            //----------readOnly input -----------------------
            eval('R8_C4').prop("readonly", false);
            eval('R8_C5').prop("readonly", false);
            eval('R8_C6').prop("readonly", false);
        }
        if (eval('R8_C5').val() == "2") {
            //----------clear input --------------------------
            eval('R8_C6').val("");
            eval('R8_C7').val("");
            eval('R8_C8').val("");
            eval('R8_C9').val("");
            eval('R8_C10').val("");
            eval('R8_C11').val("");
            //----------readOnly input -----------------------
            eval('R8_C6').prop("readonly", true);
            eval('R8_C7').prop("readonly", true);
            eval('R8_C8').prop("readonly", true);
            eval('R8_C9').prop("readonly", true);
            eval('R8_C10').prop("readonly", true);
            eval('R8_C11').prop("readonly", true);
        }
        else if (eval('R8_C5').val() == "1") {
            //----------readOnly input -----------------------
            eval('R8_C6').prop("readonly", false);
            eval('R8_C7').prop("readonly", false);
            eval('R8_C8').prop("readonly", false);
            eval('R8_C9').prop("readonly", false);
            eval('R8_C10').prop("readonly", false);
            eval('R8_C11').prop("readonly", false);
        }
        if (eval('R8_C6').val() == "7") {
            //----------clear input --------------------------
            eval('R8_C7').val("");
            eval('R8_C8').val("");
            eval('R8_C9').val("");
            eval('R8_C10').val("");
            eval('R8_C11').val("");
            eval('R8_C12').val("");
            //----------readOnly input -----------------------
            eval('R8_C7').prop("readonly", true);
            eval('R8_C8').prop("readonly", true);
            eval('R8_C9').prop("readonly", true);
            eval('R8_C10').prop("readonly", true);
            eval('R8_C11').prop("readonly", true);
            eval('R8_C12').prop("readonly", true);
        }
        else if (eval('R8_C6').val() == "1" || eval('R8_C6').val() == "2" || eval('R8_C6').val() == "3" || eval('R8_C6').val() == "4" ||
            eval('R8_C6').val() == "5" || eval('R8_C6').val() == "6") {
            //----------readOnly input -----------------------
            eval('R8_C7').prop("readonly", false);
            eval('R8_C8').prop("readonly", false);
            eval('R8_C9').prop("readonly", false);
            eval('R8_C10').prop("readonly", false);
            eval('R8_C11').prop("readonly", false);
            eval('R8_C12').prop("readonly", false);
        }
        if (eval('R8_C7').val() == "2" || eval('R8_C7').val() == "3" || eval('R8_C7').val() == "4" || eval('R8_C7').val() == "5") {
            //----------clear input --------------------------
            eval('R8_C8').val("");
            //----------readOnly input -----------------------
            eval('R8_C8').prop("readonly", true);
        }
        else if (eval('R8_C8').val() == "1") {
            //----------readOnly input -----------------------
            eval('R8_C8').prop("readonly", false);
        }
        if (eval('R8_C11').val() > "0") {
            //----------clear input --------------------------
            eval('R8_C12').val("");
            eval('R8_C13').val("");
            eval('R8_C14').val("");
            eval('R8_C15').val("");
            //----------readOnly input -----------------------
            eval('R8_C12').prop("readonly", true);
            eval('R8_C13').prop("readonly", true);
            eval('R8_C14').prop("readonly", true);
            eval('R8_C15').prop("readonly", true);
        }
        else if (eval('R8_C11').val() <= "0" && !eval('R8_C11').prop("readonly")) {
            //----------readOnly input -----------------------
            eval('R8_C12').prop("readonly", false);
            eval('R8_C13').prop("readonly", false);
            eval('R8_C14').prop("readonly", false);
            eval('R8_C15').prop("readonly", false);
        }
        if (eval('R8_C12').val() <= "0" && eval('R8_C12').val() != "") {
            //----------clear input --------------------------
            eval('R8_C13').val("");
            eval('R8_C14').val("");
            eval('R8_C15').val("");
            //----------readOnly input -----------------------
            eval('R8_C13').prop("readonly", true);
            eval('R8_C14').prop("readonly", true);
            eval('R8_C15').prop("readonly", true);
        }
        else if (eval('R8_C12').val() > "0") {
            //----------readOnly input -----------------------
            eval('R8_C13').prop("readonly", false);
            eval('R8_C14').prop("readonly", false);
            eval('R8_C15').prop("readonly", false);
        }
        if (R8_C1.val() != "" && (R8_C1.val() < 1 || R8_C1.val() > 2)) { R8_C1.val(""); $.messager.alert("Eroare", msgErr + "1", "error"); }
        if (R8_C2.val() != "" && (R8_C2.val() < 1 || R8_C2.val() > 2)) { R8_C2.val(""); $.messager.alert("Eroare", msgErr + "2", "error"); }
        if (R8_C3.val() != "" && (R8_C3.val() < 1 || R8_C3.val() > 2)) { R8_C3.val(""); $.messager.alert("Eroare", msgErr + "3", "error"); }
        if (R8_C4.val() != "" && (R8_C4.val() < 0 || R8_C4.val() > 99)) { R8_C4.val(""); $.messager.alert("Eroare", msgErr + "4", "error"); }
        if (R8_C5.val() != "" && (R8_C5.val() < 1 || R8_C5.val() > 2)) { R8_C5.val(""); $.messager.alert("Eroare", msgErr + "5", "error"); }
        if (R8_C6.val() != "" && (R8_C6.val() < 1 || R8_C6.val() > 7)) { R8_C6.val(""); $.messager.alert("Eroare", msgErr + "6", "error"); }
        if (R8_C7.val() != "" && (R8_C7.val() < 1 || R8_C7.val() > 5)) { R8_C7.val(""); $.messager.alert("Eroare", msgErr + "7", "error"); }
        if (R8_C8.val() != "" && (R8_C8.val() < 1 || R8_C8.val() > 4)) { R8_C8.val(""); $.messager.alert("Eroare", msgErr + "8", "error"); }
        if (R8_C11.val() != "" && (R8_C11.val() < 1 || R8_C11.val() > 99)) { R8_C11.val(""); $.messager.alert("Eroare", msgErr + "11", "error"); }
        if (R8_C12.val() != "" && (R8_C12.val() < 1 || R8_C12.val() > 5)) { R8_C12.val(""); $.messager.alert("Eroare", msgErr + "12", "error"); }
        if (R8_C13.val() != "" && (R8_C13.val() < 1 || R8_C13.val() > 2)) { R8_C13.val(""); $.messager.alert("Eroare", msgErr + "13", "error"); }
        if (R8_C14.val() != "" && (R8_C14.val() < 1 || R8_C14.val() > 2)) { R8_C14.val(""); $.messager.alert("Eroare", msgErr + "14", "error"); }
        if (R8_C15.val() != "" && (R8_C15.val() < 1 || R8_C15.val() > 2)) { R8_C15.val(""); $.messager.alert("Eroare", msgErr + "15", "error"); }
        //}
    }
}

