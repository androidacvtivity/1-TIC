$(document).ready(function () {
    restoreState(); // Restore state on page load

    $("input[type=checkbox]").change(function () {
        ChangeCheckbox_1204(this.id);
        saveState(); // Save state when checkbox changes
    });
});

function saveState() {
    let state = {};
    $("input[type=checkbox]").each(function () {
        state[this.id] = this.checked;
    });

    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];

    state["hiddenRows"] = rowIds.filter(id => $("#" + id).css("display") === "none");
    localStorage.setItem("checkboxState", JSON.stringify(state));
}

function restoreState() {
    let state = JSON.parse(localStorage.getItem("checkboxState"));
    if (!state) return;

    Object.keys(state).forEach(id => {
        if (id !== "hiddenRows") {
            $("#" + id).prop("checked", state[id]);
        }
    });

    state.hiddenRows.forEach(id => $("#" + id).hide());
}

function ChangeCheckbox_1204(itemId) {
    var isChecked = document.getElementById(itemId).checked;

    if (itemId === "71_1204_83635_810_1" && isChecked) {
        document.getElementById("71_1204_83635_810_2").checked = false;
        showRows();
    }
    else if (itemId === "71_1204_83635_810_2" && isChecked) {
        document.getElementById("71_1204_83635_810_1").checked = false;
        hideRows();
        uncheckDependentCheckboxes();
    }
    // ... (rest of the ChangeCheckbox_1204 function remains unchanged)
}

function showRows() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];
    rowIds.forEach(id => $("#" + id).show());
}

function hideRows() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];
    rowIds.forEach(id => $("#" + id).hide());
}

function uncheckDependentCheckboxes() {
    let checkboxIds = [
        "71_1204_83637_821_1", "71_1204_83637_821_2",
        // ... (rest of the checkbox IDs)
    ];
    checkboxIds.forEach(id => $("#" + id).prop("checked", false));
}

// New function to handle "Sterge Raport" click
function btnReportDelete_OnClick() {
    $("input[type=checkbox]").prop("checked", false);
    hideRows();
    saveState();
    $.bootstrapGrowl("Toate datele au fost șterse.", { type: 'info' });
    return false;
}