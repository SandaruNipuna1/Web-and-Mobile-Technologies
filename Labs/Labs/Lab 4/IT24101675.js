/*
Student ID: IT24101675
Name: Nanayakkara S.N.N.
*/
$(document).ready(function() {

    // --- TASK 1: Page Load & Document Properties ---
    // Change browser tab title
    document.title = "Library Seat Booking - DOM Test";
    // Print current URL to console
    console.log("Current Page URL: " + window.location.href);

    // --- TASK 2: Style & Background Manipulation ---
    // Change title style
    $("#pageTitle").css({
        "color": "#147d1b",
        "font-size": "34px"
    });

    // Change background color after 2 seconds
    setTimeout(function() {
        $("body").css("background-color", "#D3D3D3");
    }, 2000);

    // --- TASK 3: Mouse Events ---
    // Image border on hover
    $("#libraryImage").on("mouseenter", function() {
        $(this).css("border", "5px solid #0000ff");
    }).on("mouseleave", function() {
        $(this).css("border", "none");
    });

    // Alert on table click
    $("#seatTable").click(function() {
        alert("You clicked on the Seat Categories table!");
    });

    // --- TASK 4: Keyboard & Object Events ---
    // Input background color change
    $("#studentName").on("keydown", function() {
        $(this).css("background-color", "#FFFF00");
    });

    // Window resize event
    $(window).resize(function() {
        console.log("Window resized");
    });

    // --- TASK 5: Image Preloading & Toggling ---
    // Preload library2.jpg
    var img2 = new Image();
    img2.src = "Library2.jpg";
    var img1Path = "library1.jpg";
    var img2Path = "Library2.jpg";

    // Toggle image on double click
    $("#libraryImage").dblclick(function() {
        var currentSrc = $(this).attr("src");
        if (currentSrc === img1Path) {
            $(this).attr("src", img2Path);
        } else {
            $(this).attr("src", img1Path);
        }
    });

    // --- TASK 6: Form Handling & Dynamic Table ---
    $("#bookingForm").submit(function(event) {
        // Prevent page refresh
        event.preventDefault();

        // Read values
        var name = $("#studentName").val();
        var email = $("#studentEmail").val();

        // Create a new row with a delete button
        var newRow = "<tr>" +
                        "<td>" + name + "</td>" +
                        "<td>" + email + "</td>" +
                        "<td><button class='deleteBtn'>Delete</button></td>" +
                     "</tr>";

        // Append to table
        $("#bookingTable").append(newRow);

        // Clear input fields after adding
        $("#studentName").val("");
        $("#studentEmail").val("");
    });

    // Handle Delete button click (using delegation for dynamic elements)
    $("#bookingTable").on("click", ".deleteBtn", function() {
        $(this).closest("tr").remove();
    });

});