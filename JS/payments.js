// Initialize arrays to track selected button IDs
let Buttons_soap = [];
let Buttons_perfume = [];

// Function to reset all buttons' colors
function resetButtonColors_soap() {
    var buttons = document.querySelectorAll('.button_lg_soap');
    buttons.forEach(button => {
        button.style.backgroundColor = 'cornsilk'; // Reset background color to cornsilk
    });
}

function resetButtonColors_perfume() {
    var buttons = document.querySelectorAll('.button_lg_perfume');
    buttons.forEach(button => {
        button.style.backgroundColor = 'cornsilk'; // Reset background color to cornsilk
    });
}

// Function to handle button selection for soap buttons
function button_soap(buttonId) {
    // Reset colors for soap buttons
    resetButtonColors_soap();

    // Check if button is already selected
    if (Buttons_soap.includes(buttonId)) {
        // Do nothing if it's already selected
        console.log('Already selected Soap Button:', buttonId); // Debugging
    } else {
        // Clear previous selection and select the new one
        Buttons_soap = [buttonId]; // Keep only the newly selected button
        console.log('Selected Soap Buttons:', Buttons_soap); // Debugging
    }
        // Change the clicked button's color to green
        var ButtonRead = document.getElementById('button_soap' + buttonId);
        ButtonRead.style.backgroundColor = 'green'; // Change clicked button's color to green
}

// Function to handle button selection for perfume buttons
function button_perfume(buttonId) {
    // Reset colors for perfume buttons
    resetButtonColors_perfume();

    // Check if button is already selected
    if (Buttons_perfume.includes(buttonId)) {
        // Do nothing if it's already selected
        console.log('Already selected Perfume Button:', buttonId); // Debugging
    } else {
        // Clear previous selection and select the new one
        Buttons_perfume = [buttonId]; // Keep only the newly selected button
        console.log('Selected Perfume Buttons:', Buttons_perfume); // Debugging
    }
        var ButtonRead = document.getElementById('button_perfume' + buttonId);
        ButtonRead.style.backgroundColor = 'green'; // Change clicked button's color to green
}

// Function to handle payment and redirect based on button combinations
function button_payments() {
    // Sort the selected buttons for consistent logic
    Buttons_soap.sort();
    Buttons_perfume.sort();

    // Define URLs for each combination
    let url = "";

    // Check combinations of selected buttons and set the URL
    if (Buttons_soap.includes(1) && Buttons_perfume.includes(1)) {
        url = "https://pay.ababank.com/jQFJqak6P6iCJKZw7";  //1000riel
    } else if (Buttons_soap.includes(1) && Buttons_perfume.includes(2)) {
        url = "https://pay.ababank.com/Ni4HVGrhe56mExNAA";  //1000riel     
    } else if (Buttons_soap.includes(1) && Buttons_perfume.includes(3)) {
        url = "https://pay.ababank.com/1TaJ2kmi4Qy2NxDC9";  //1000riel    
    } else if (Buttons_soap.includes(1) && Buttons_perfume.includes(4)) {
        url = "https://pay.ababank.com/toRD3ffdu5egqUur6";  //2500riel   
    } else if (Buttons_soap.includes(2) && Buttons_perfume.includes(2)) {
        url = "https://pay.ababank.com/1TaJ2kmi4Qy2NxDC9";  //1000riel    
    } else if (Buttons_soap.includes(2) && Buttons_perfume.includes(3)) {
        url = "https://pay.ababank.com/toRD3ffdu5egqUur6";  //2500riel   
    } else if (Buttons_soap.includes(2) && Buttons_perfume.includes(4)) {
        url = "https://pay.ababank.com/N7t8hxmdMhWfmtx3A";  //3000riel     
    } else if (Buttons_soap.includes(3) && Buttons_perfume.includes(3)) {
        url = "https://pay.ababank.com/N7t8hxmdMhWfmtx3A";  //3000riel     
    } else if (Buttons_soap.includes(3) && Buttons_perfume.includes(4)) {
        url = "https://pay.ababank.com/BzqBkg8ep5nKMwET8";  //3500riel     
    } else if (Buttons_soap.includes(4) && Buttons_perfume.includes(4)) {
        url = "https://pay.ababank.com/kbYrdmMjy2op1BuE6";  //4000riel     
    } else if (Buttons_soap.includes(1) || Buttons_perfume.includes(1)) {
        url = "https://pay.ababank.com/9S7EpSTJ7sioY7m97";    
    } else if (Buttons_soap.includes(2) || Buttons_perfume.includes(2)) {
        url = "https://pay.ababank.com/jQFJqak6P6iCJKZw7";  //1000riel   
    } else if (Buttons_soap.includes(3) || Buttons_perfume.includes(3)) {
        url = "https://pay.ababank.com/Ni4HVGrhe56mExNAA";  //1500riel     
    } else if (Buttons_soap.includes(4) || Buttons_perfume.includes(4)) {
        url = "https://pay.ababank.com/1TaJ2kmi4Qy2NxDC9";  //2000riel    
    } 

    // If a valid URL was found, redirect to it
    if (url) {
        window.location.href = url;
    } else {
        alert("No valid combination of buttons selected!");
    }

    // Reset the selected buttons after payment action
    Buttons_soap = [];
    Buttons_perfume = [];
}
