var result = document.querySelector('[name="display"]');
var buttons = document.querySelectorAll('input[type="button"]');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (this.value === "clear") {
      result.value = "";
    } else if (this.value === "=") {
      result.value = eval(result.value);
    } else if (this.value === "DEL") {
      result.value = result.value.slice(0, -1);
    } else {
      result.value += this.value;
    }
  });
}
