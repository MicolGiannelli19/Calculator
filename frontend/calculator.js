function sumbmit(operand, array_of_values){
    Clear()
    // make a fetch request to add  
}

let operand = "should set this to some empty value"

// function typeValue(){
//     button.addEventListener('click', function() {
//         // Append the button's text to the display
//         display.textContent += button.textContent;
//     });
// // });

// }

function Clear(){
    console.log('clearing display')
    document.querySelector('#display').value = ""
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.clear').addEventListener('click', Clear)

    // nned to select and add this to all the buttons 

    // Select all buttons with class "number" and "operator"
    const buttons = document.querySelectorAll('.number', '.operator');
    
    // Loop through each button and add a click event listener
    buttons.forEach(button => {

        button.addEventListener('click', function() {
            display.value += button.textContent; // Type in text
        });
    });


})