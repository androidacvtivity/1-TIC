$(document).ready(function () {
    restoreState(); // Restore state on page load

    $("input[type=checkbox]").change(function () {
        ChangeCheckbox_1204(this.id);
        saveState(); // Save state when checkbox changes
    });

    // Event Listener for "Sterge Raport" button
    $("#btnReportDelete").click(function () {
        uncheckAllCheckboxes(); // Uncheck all checkboxes
        clearRowData(); // Clear data from rows and columns
        localStorage.removeItem("checkboxState"); // Clear saved state
    });
});

// Uncheck all checkboxes function
function uncheckAllCheckboxes() {
    $("input[type=checkbox]").prop("checked", false);
    saveState(); // Save cleared state
}

// Clear all data from specified rows and columns
function clearRowData() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];

    rowIds.forEach(id => {
        $("#" + id).find("input, select, textarea").val(""); // Clear input fields
        $("#" + id).hide();
    });
}

// Save checkbox and row visibility states to `localStorage`
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

// Restore checkbox and row visibility states from `localStorage`
function restoreState() {
    let state = JSON.parse(localStorage.getItem("checkboxState"));
    if (!state) return;

    Object.keys(state).forEach(id => {
        if (id !== "hiddenRows") {
            $("#" + id).prop("checked", state[id]);
        }
    });

    state.hiddenRows.forEach(id => {
        $("#" + id).hide();
        uncheckCheckboxesInRow(id); // Uncheck all checkboxes inside hidden rows
    });
}

// Checkbox logic for mutual exclusion + row 810 fix
function ChangeCheckbox_1204(itemId) {
    var isChecked = $("#" + itemId).prop("checked");

    // Special Case: Row 810 Checkboxes
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

// Function to show rows
function showRows() {
    let rowIds = [
        "83636", "83637", "83638", "83639", "83640", "83641", "83642",
        "83643", "83644", "83645", "83646", "83647", "83648", "83649",
        "83650", "83651", "83652"
    ];
    rowIds.forEach(id => $("#" + id).show());
}

// Function to hide rows and uncheck all checkboxes in them
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

// Function to uncheck all checkboxes inside a hidden row
function uncheckCheckboxesInRow(rowId) {
    $("#" + rowId)
        .find("input[type=checkbox]")
        .prop("checked", false)
        .trigger("change");
}

// Uncheck all dependent checkboxes when hiding rows
function uncheckDependentCheckboxes() {
    $("input[type=checkbox]").each(function () {
        $(this).prop("checked", false);
    });
}
