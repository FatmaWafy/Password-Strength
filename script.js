let pass = document.getElementById("password");
let mes = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    mes.style.display = "block";
  } else {
    mes.style.display = "none";
  }

  if (pass.value.length < 4) {
    str.innerHTML = "weak";
    pass.style.borderColor = "red";
    mes.style.color = "red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    mes.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    mes.style.color = "#26d730";
  }
});
