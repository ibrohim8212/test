var elForm = document.querySelector(".site-form");
var elName = document.querySelector(".youser-name");
var elBalls = document.querySelector(".youser-balls");
var elResult = document.querySelector(".result");

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

  if (isNaN(elBalls.value)) {
    elResult.textContent = `${elName} Please, enter the number`;
  } else if (elBalls.value >= 100) {
		elResult.textContent = `${elName.value} You can continue to study with us!`;
	} else if (elBalls.value >= 60) {
		elResult.textContent = `${elName.value} You can continue to study with us with conditions.`;
	} else if (elBalls.value >= 30) {
		elText.textContent = `${elName.value} You can continue to study with us, but with a fine.`;
	} else {
		elResult.textContent = `${elName.value} Try it next time ;)`;
	}
});