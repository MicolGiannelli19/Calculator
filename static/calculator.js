function sumbmit(operand, nums){
    Clear()
    console.log("running submit")

    if (operand === 'add') {

        fetch(`/add?numbers=${nums}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result !== undefined) {
                    console.log('Success!')
                    display.value = data.result;
                } else {
                    display.value = 'Error';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                display.textContent = 'Error';  // Handle fetch errors
            })
        }
    }

// let operand = "should set this to some empty value"
function Clear(){
    console.log('clearing display')
    document.querySelector('#display').value = ""
}

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.clear').addEventListener('click', Clear)

    // Select all buttons with class "number" and "operator"
    const buttons = document.querySelectorAll('.number', '.operator');
    
    // Loop through each button and add a click event listener
    buttons.forEach(button => {

        button.addEventListener('click', function() {
            display.value += button.textContent; // Type in text
        });
    });


})