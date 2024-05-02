
let textString = prompt('Доброго дня! Ви хочете ввести текст для 3-х строк зараз чи згодом?', 'Так чи Ні');
let firstString = '';
let secondString = '';
let therdString = '';
let resultText = '';



if (textString == 'Так') {
    firstString = prompt('Введіть текст для першої строки: ');
    document.getElementById('first__string').value = firstString;
    secondString = prompt('Введіть текст для другої строки: ');
    document.getElementById('second__string').value = secondString;
    therdString = prompt('Введіть текст для третьої строки: ');
    document.getElementById('therd__string').value = therdString;

    if (firstString == null || secondString == null || therdString == null) {
        alert('Ви пропустили одну з строк, та то нічого страшного, ви зможете заповнити її пізніше.');
    }
    resultText = (firstString + ' ' + secondString + ' ' + therdString);
    document.getElementById('result').textContent = resultText;
}
else {
    alert('Добре, не забудьте ввести текст для строк!');
}


let btn = document.getElementById('btn');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    firstString = document.getElementById('first__string').value;
    secondString = document.getElementById('second__string').value;
    therdString = document.getElementById('therd__string').value;
    resultText = (firstString + ' ' + secondString + ' ' + therdString);
    document.getElementById('result').textContent = resultText;
})


let btnSplit = document.getElementById('btnSplit');
let Nuber = '';
let cyfra = '';
let resultNumber = '';
btnSplit.addEventListener('click', function (event) {
    event.preventDefault();
    Nuber = document.getElementById('SplitNumber').value;
    console.log(Nuber)
    cyfra = Nuber.split('');
    console.log(cyfra)
    resultNumber = cyfra.join(' ');
    console.log(resultNumber)
    document.getElementById('result_number').textContent = resultNumber;
})