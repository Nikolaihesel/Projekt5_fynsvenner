function tjekMedlem() {

  const medlemmer = ["Frederik Emil Dreyer", "Maria Solsikke", "Simon Aalbæk", "Nikolai Jørgensen"]
  let input = document.getElementById("tilføj").value;
  let tjek = medlemmer.includes(input);

  if (tjek == true) {
    document.getElementById("medlem").style.display = "block";
    document.getElementById("ikke_medlem").style.display = "none";
  } else if (tjek == false) {
    document.getElementById("ikke_medlem").style.display = "block";
    document.getElementById("medlem").style.display = "none";
  }
}

function closePopup() {
  document.getElementById("medlem").style.display = "none";
  document.getElementById("ikke_medlem").style.display = "none";
}

var s = "";
for(var i = 1; i <= 11; i += 1) {
  s += i + " ";
}
console.log(s);
