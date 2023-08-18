// Wrap the code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    // Function to add numbers
    function addNumbers(a, b) {
        return a * b;
    }

    // Get references to elements
    var inputNumber1 = document.getElementById("input1");
    var inputNumber2 = document.getElementById("input2");
    var calculateButton = document.getElementById("calculateButton");
	var calculateButton2 = document.getElementById("calculateButton");
	var operationSelect = document.getElementById("operation");
    var resultElement = document.getElementById("result");

    // Add event listener to the button
    calculateButton.addEventListener("click", function () {
        var userInput1 = parseFloat(inputNumber1.value);
        var userInput2 = parseFloat(inputNumber2.value);

        if (!isNaN(userInput1) && !isNaN(userInput2)) {
            var result = addNumbers(userInput1, userInput2);
            //resultElement.textContent = "The answer is " + result;
			resultElement.innerHTML = "<strong class='result'>The answer is: " + result +"</strong>";
        } else {
            resultElement.innerHTML = "<strong class='error'>Invalid inputs. Please enter valid numbers.</strong>";
        }
    });
	
	// Add event listener to the button
	calculateButton2.addEventListener("click", function () {
        calculate();//calling calculate function upon clicking the calculate button
    });
	//A function that handles all the operations
	function calculate() {
        var number1 = parseFloat(inputNumber1.value);
        var number2 = parseFloat(inputNumber2.value);
        var operation = operationSelect.value;
        var result;
        
		//checking that the user input is 
        if (isNaN(number1) || isNaN(number2)) {
            resultElement.innerHTML = "<strong class='error'>Invalid inputs. Please enter valid numbers.</strong>";
            return;
        }
        if (operation === "add") {
            result = number1 + number2;
        } else if (operation === "subtract") {
            result = number1 - number2;
        } else if (operation === "multiply") {
            result = number1 * number2;
        } else if (operation === "divide") {
			//checking that the dividor (second number) is not zero
            if (number2 !== 0) {
                result = number1 / number2;
				result = result.toFixed(2); // Format result to two decimal places
            } else {
                resultElement.innerHTML = "<strong class='error'>Cannot divide by zero.</strong>";
                return;
            }
        }
         resultElement.innerHTML = "<strong class='result'>Result: "+ result +"</strong>";
    }
});
		