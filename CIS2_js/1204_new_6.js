$(document).ready(function () {
    restoreState(); // Restore state on page load

    $("input[type=checkbox]").change(function () {
        ChangeCheckbox_1204(this.id);
        saveState(); // Save state when checkbox changes
    });

    //  Add Event Listener for "Sterge Raport" button
    $("#btnReportDelete").click(function () {
        uncheckAllCheckboxes(); // Uncheck all checkboxes
        localStorage.removeItem("checkboxState"); // Clear saved state
    });
});

//  Uncheck all checkboxes function
function uncheckAllCheckboxes() {
    $("input[type=checkbox]").prop("checked", false);
    saveState(); // Save cleared state
}

//  Save checkbox and row visibility states to `localStorage`
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

//  Restore checkbox and row visibility states from `localStorage`
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

//  Checkbox logic for mutual exclusion + row 810 fix
function ChangeCheckbox_1204(itemId) {
    var isChecked = $("#" + itemId).prop("checked");

    //  Special Case: Row 810 Checkboxes
    if (itemId === "71_1204_83635_810_1" && isChecked) {
        $("#71_1204_83635_810_2").prop("checked", false).trigger("change");
        showRows();
    } else if (itemId === "71_1204_83635_810_2" && isChecked) {
        $("#71_1204_83635_810_1").prop("checked", false).trigger("change");
        hideRows();
        uncheckDependentCheckboxes();
    }

    saveState(); // Save state to localStorage
}

//  Function to show rows
function showRows() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];
    rowIds.forEach(id => $("#" + id).show());
}

//  Function to hide rows and uncheck all checkboxes in them
function hideRows() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];
    rowIds.forEach(id => {
        $("#" + id).hide();
        uncheckCheckboxesInRow(id); // Uncheck checkboxes in hidden row
    });
}

//  Function to uncheck all checkboxes inside a hidden row
function uncheckCheckboxesInRow(rowId) {
    $("#" + rowId)
        .find("input[type=checkbox]")
        .prop("checked", false)
        .trigger("change");
}

//  Uncheck all dependent checkboxes when hiding rows
function uncheckDependentCheckboxes() {
    let checkboxIds = [
        "71_1204_83637_821_1", "71_1204_83637_821_2",
        "71_1204_83638_822_1", "71_1204_83638_822_2",
        "71_1204_83639_823_1", "71_1204_83639_823_2",
        "71_1204_83640_824_1", "71_1204_83640_824_2",
        "71_1204_83641_825_1", "71_1204_83641_825_2",
        "71_1204_83642_826_1", "71_1204_83642_826_2",
        "71_1204_83644_827_1", "71_1204_83644_827_2",
        "71_1204_83646_831_1", "71_1204_83646_831_2",
        "71_1204_83647_832_1", "71_1204_83647_832_2",
        "71_1204_83648_833_1", "71_1204_83648_833_2",
        "71_1204_83649_834_1", "71_1204_83649_834_2",
        "71_1204_83650_835_1", "71_1204_83650_835_2",
        "71_1204_83651_836_1", "71_1204_83651_836_2",
        "71_1204_83652_837_1", "71_1204_83652_837_2"
    ];
    checkboxIds.forEach(id => $("#" + id).prop("checked", false));
}
