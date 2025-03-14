let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})
function fun2() {  
    alert("Payment Successful...!✅ Thank you..!");  
}
    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');