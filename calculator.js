    function setText(input) {
        document.getElementById("Calculator-Text").value = input;
    }

    function getText() {
        return document.getElementById("Calculator-Text").value
    }

    function clear() {
        setText("");

    }


    function del() {
        var output = "";
        var inputString = getText();
        setText(inputString.substring(0, inputString.length - 1));
    }

    function displayText(input) {
        var number = input.currentTarget.innerText;
        var currentText = getText();
        setText(currentText + number);
    }

    function equals() {
        var tempText = getText().split("x");
        var newText = tempText.join("*");
        setText(eval(newText));
    }





    document.getElementById('Clear').onclick = clear;
    document.getElementById('Del').onclick = del;
    document.getElementById('Equals').onclick = equals;
    // document.getElementById('Logic').onclick = displayText;