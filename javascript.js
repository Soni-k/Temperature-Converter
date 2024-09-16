const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");
const farenheit = document.querySelector("#farenheit");

// celsius to farenheit =>(0)

celsius.addEventListener("input", function () {
	let c = parseFloat(celsius.value);
	let f = (c * 9 / 5) + 32;
	let k = c + 273.15;
	farenheit.value = f;
	kelvin.value = k;
});

farenheit.addEventListener("input", function () {
	let f = parseFloat(farenheit.value);
	let c = (f - 32) * 5 / 9;
	let k = (f - 32) * 5 / 9 + 273.15;
	celsius.value = c;
	kelvin.value = k;
});

kelvin.addEventListener("input", function () {
	let k = parseFloat(kelvin.value);
	let c = k - 273.15;
	let f = (k - 273.15) * 5 / 9 + 32;
	celsius.value = c;
	farenheit.value = f;
});
