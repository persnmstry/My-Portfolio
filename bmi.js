const inputH = document.querySelector('.inputH');
const inputW = document.querySelector('.inputW');
const button = document.querySelector('button');
const results = document.getElementById('results');


button.addEventListener('click', function () {
   
    const height = parseFloat(inputH.value);
    const weight = parseFloat(inputW.value);

   
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.textContent = 'Please enter valid positive numbers for height and weight.';
        results.style.color = 'red';
        results.style.border = "red";
        return; 
    }

   
    const heightInMeters = height / 100;


    const bmi = weight / (heightInMeters * heightInMeters);

  
    const roundedBMI = bmi.toFixed(1);

 
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }


    results.style.color = 'rgb(250, 250, 250)';
    results.innerHTML = `<p>Your BMI is: <strong>${roundedBMI}</strong> (${category})</p>`;
});