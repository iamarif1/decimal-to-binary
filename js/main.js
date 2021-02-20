const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(e) {
  e.preventDefault();

  const inputNumber = document.getElementById("number").value;

  if (inputNumber === "") {
    alert("Please Input a Number");
  } else if (inputNumber < 0) {
    alert("Please Input a Positive Number");
  } else {
    result.style.visibility = "visible";
  }

  //convert to Binary
  //console.log(typeof Number(inputNumber));

  binaryNumber = Number(inputNumber).toString(2);
  result.innerText = binaryNumber;
}

submit.addEventListener("click", binary);
