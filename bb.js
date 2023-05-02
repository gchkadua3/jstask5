function checkNumber() {
    let num = document.getElementById("num").value;
    if (num > 0) {
      console.log(num + " is a positive number.");
    } else if (num < 0) {
      console.log(num + " is a negative number.");
    } else {
      alert("Can't be zero");
    }
  }