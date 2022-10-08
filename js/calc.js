$(document).ready(function() {

    const display = $('#screen');
    var val1 = '';
    var val2 = '';

    $('.num').click(function() {

        if(val1 == '') {
            val1 = $(this).html();
            updateDisplay(val1);
            return;
        }

        if(val2 == '') {
            val2 = $(this).html();
            updateDisplay(val2);
            return;
        }

    });

    $('#plus').click(function() {
        if(val1 != '' && val2 != '') {
            alert('This calculator can only add 2 numbers at this time.')
        }
        clearDisplay();
    });

    $('#equals').click(function() {
        addStuff(val1,val2);
    });

    function updateDisplay(data) {
         display.append(data);
    }

    function clearDisplay() {
        display.html('');
    }

    function addStuff(val1,val2) {
        console.log(val1);
        console.log(val2);
        clearDisplay();
        let sum = parseInt(val1) + parseInt(val2);
        sum = parseInt(sum);
        console.log("Sum: ",sum);
        updateDisplay(sum);
    }

});