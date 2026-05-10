function calculateEMI() {
    let principal = Number(document.getElementById('principle').value);
    let months = Number(document.getElementById('months').value);
    let interestRate =  Number(document.getElementById('interest').value);
    if (!principal || !months || !interestRate || months <= 0) {
        document.getElementById('resultcontainer').innerHTML = 'Please enter valid values.';
        return;
    }
    let interest = Math.round((principal * (interestRate / 100)) * (months / 12));
    let monthlyValue = Math.round((principal + interest) / months);
    document.getElementById('resultcontainer').innerHTML = `Interest: ${interest} Rs. | Monthly: ${monthlyValue} Rs.`;
}