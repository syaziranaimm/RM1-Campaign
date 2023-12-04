
document.getElementById('deduction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("deduction-form");

    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var name = document.getElementById("name").value;
        var staffNo = document.getElementById("staffno").value;
        if (name == "" || staffno == "" || kcdio == "" || contactno == "" || email == "" || amount == "" || startdate == "" || enddate == "") {
            alert("Please fill out all required fields.");
            return false;
        }
        return true;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var startDateInput = document.getElementById("startdate");
    var endDateInput = document.getElementById("enddate");

    endDateInput.addEventListener("change", function() {
        if (endDateInput.value < startDateInput.value) {
            alert("End date cannot be before start date.");
            endDateInput.value = ""; // Clear the end date field
        }
    });
});
