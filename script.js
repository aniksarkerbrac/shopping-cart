document.getElementById('plusBtnPhone').addEventListener('click', function () {
    calculateGrandValue('phone', 'plus', 1219);
})
document.getElementById('minusBtnPhone').addEventListener('click', function () {
    calculateGrandValue('phone', 'minus', 1219);
})
document.getElementById('plusBtnCase').addEventListener('click', function () {
    calculateGrandValue('case', 'plus', 59);
})
document.getElementById('minusBtnCase').addEventListener('click', function () {
    calculateGrandValue('case', 'minus', 59);
})

function calculateGrandValue(product, operation, productPrice) {
    const inputValueProduct = document.getElementById(product + 'inputValue').value;
    const inputValueProductNumber = Number(inputValueProduct);
    let currentValue = 0;
    if (operation == 'plus') {
        currentValue = inputValueProductNumber + 1;
    }
    if (operation == 'minus' && inputValueProductNumber > 0) {
        currentValue = inputValueProductNumber - 1;
    }
    document.getElementById(product + 'inputValue').value = currentValue;

    const totalPriceProduct = currentValue * productPrice;
    document.getElementById(product + 'Price').innerText = totalPriceProduct;

    let totalPriceAnotherProduct = 0;
    if (product == 'phone') {
        const noOfCase = document.getElementById('caseinputValue').value;
        const noOfCaseNumber = Number(noOfCase);
        totalPriceAnotherProduct = noOfCaseNumber * 59;
    }
    if (product == 'case') {
        const noOfPhone = document.getElementById('phoneinputValue').value;
        const noOfPhoneNumber = Number(noOfPhone);
        totalPriceAnotherProduct = noOfPhoneNumber * 1219;
    }

    const subTotal = totalPriceProduct + totalPriceAnotherProduct;
    document.getElementById('subTotal').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const grandtotal = subTotal + tax;
    document.getElementById('total').innerText = grandtotal;
}



































// const plusBtn = document.getElementById('plusBtnPhone');
// plusBtn.addEventListener('click', function () {
//     // const inputValue = document.getElementById('inputValue').value;
//     // const inputValueNumber = Number(inputValue);
//     // const currentNumber = inputValueNumber + 1;
//     // document.getElementById('inputValue').value = currentNumber;
//     calculateNoOfProduct("inputValuePhone", 1);

//     // const phonePrice = document.getElementById('phonePrice').innerText;
//     // const phonePriceNumber = Number(phonePrice);
//     // const currentPriceAmount = phonePriceNumber + 1219;
//     // document.getElementById('phonePrice').innerText = currentPriceAmount;
//     calculateTotalCost("phonePrice", 1219);

//     // const subTotal = document.getElementById('subTotal').innerText;
//     // const subTotalNumber = Number(subTotal);
//     // const currentSubTotal = subTotalNumber + 1219;
//     // document.getElementById('subTotal').innerText = currentSubTotal;
//     calculateTotalCost("subTotal", 1219);
//     //calculateTotalCost("total", 1219);
//     calculateGrandtotal();

// })

// const minusBtn = document.getElementById('minusBtnPhone');
// minusBtn.addEventListener('click', function () {
//     calculateNoOfProduct("inputValuePhone", -1);
//     calculateTotalCost("phonePrice", -1219);
//     calculateTotalCost("subTotal", -1219);
//     //calculateTotalCost("total", -1219);
//     calculateGrandtotal();
// })

// const plusBtnCase = document.getElementById('plusBtnCase');
// plusBtnCase.addEventListener('click', function () {
//     calculateNoOfProduct("inputValueCase", 1);
//     calculateTotalCost("casePrice", 59);
//     calculateTotalCost("subTotal", 59);
//     //calculateTotalCost("total", 59);
//     calculateGrandtotal();
// })

// const minusBtnCase = document.getElementById('minusBtnCase');
// minusBtnCase.addEventListener('click', function () {
//     calculateNoOfProduct("inputValueCase", -1);
//     calculateTotalCost("casePrice", -59);
//     calculateTotalCost("subTotal", -59);
//     //calculateTotalCost("total", -59);
//     calculateGrandtotal();
// })

// function calculateGrandtotal(){
//     const subTotal = document.getElementById('subTotal').innerText;
//     const subTotalNumber = Number(subTotal);
//     const tax = Math.round(subTotalNumber * 0.1);
//     const total = tax + subTotalNumber;
//     document.getElementById('tax').innerText = tax;
//     document.getElementById('total').innerText = total;
// }

// function calculateNoOfProduct(id, num) {
//     const inputValue = document.getElementById(id).value;
//     const inputValueNumber = Number(inputValue);
//     const currentNumber = inputValueNumber + num;
//     if(currentNumber >= 0){
//         document.getElementById(id).value = currentNumber;
//     }
// }

// function calculateTotalCost(id, price) {
//     const subTotal = document.getElementById(id).innerText;
//     const subTotalNumber = Number(subTotal);
//     const currentSubTotal = subTotalNumber + price;
//     if(currentSubTotal >=0){
//         document.getElementById(id).innerText = currentSubTotal;
//     }
// }