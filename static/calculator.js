function submit(){

    let nums = display.value
    Clear()
    
    nums = reformatString(nums)
    console.log(nums)

    console.log("running submit")

    if (true) { // can potentially change this to a conditional statment to check operand

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

function reformatString(x){
    // to make this better you could remove opperands at the end of the string and stuff like that 
    let newString = x.replaceAll(" ", "");
    newString = newString.replaceAll("+", ",");
    newString = newString.replaceAll("-", ",-");
    return newString
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

    equals.addEventListener('click', submit);

    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('Enter key pressed!');
            submit()
        }
    });

});