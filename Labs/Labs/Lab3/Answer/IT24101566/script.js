console.log("Javascript Loaded");

// 1. Create constant variable minAge and assign it the value 18
const minAge = 18;

// 2. Create an empty array called students to store student objects
let students = [];

function submitForm() {
    // 3. Get input values
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);  // Convert age to number
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // 4. Validate input values
    switch (true) {
        case name === "" || email === "":
            alert("Validation failed: Empty fields");
            return false;
        case age < minAge:
            alert("Validation failed: Age below 18");
            return false;
        case phone.length < 10:
            alert("Validation failed: Phone number must be at least 10 digits");
            return false;
        default:
            alert("Validation successful");
    }

    // 5. Create student object if validation passes
    let student = {
        name: name,
        age: age,
        email: email,
        phoneNumber: phone
    };

    // 6. Store student in array
    students.push(student);

    // 7. Display stored students
    console.log("Student List:");
    let message = "Student List:\n";
    for (let i = 0; i < students.length; i++) {
        let details = (i + 1) + ". Name: " + students[i].name +
                      ", Age: " + students[i].age +
                      ", Email: " + students[i].email +
                      ", Phone: " + students[i].phoneNumber;
        console.log(details);
        message += details + "\n";
    }

    // 8. Clear the form fields after submission
    clearForm();

    // 9. Prevent form submission (page refresh)
    return false;
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("name").focus();
}