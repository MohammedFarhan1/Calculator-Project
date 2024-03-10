
    function addToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch(err) {
            document.getElementById('display').value = 'Error';
        }
    }

    // Listen for keyboard input
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace', 'Escape'];

        if (allowedKeys.includes(key)) {
            if (key === 'Enter') {
                calculate();
            } else if (key === 'Backspace') {
                clearDisplay();
            } else if (key === 'Escape') {
                clearDisplay();
            } else {
                addToDisplay(key);
            }
        }
    });