function convert() {
let celsius = document.querySelector("#c").value;  // #c >>>> Celsius //
document.querySelector("#f").value = celsius * (9/5) + 32; // #f >>>> Fahrenheit //
}

// (9/5) + 32 >>>> This is the formulae that makes the conversion possible //