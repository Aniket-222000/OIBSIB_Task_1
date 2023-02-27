let userinput = document.getElementById("screen");

function display(num) {
  userinput.value += num;
}

function calculate() {
  try {
    userinput.value = eval(userinput.value);
  } catch (error) {
    alert("Invalid...Please enter valid input and as per the mathematical rules...");
  }
}

function clearscreen() {
  userinput.value = "";
}

function del() {
  userinput.value = userinput.value.slice(0, -1);
}
Footer