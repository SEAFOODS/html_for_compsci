function getInputVal() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var name = fname + " " + lname;
  
  document.getElementById("nameDisplay").innerHTML = (name);
}
