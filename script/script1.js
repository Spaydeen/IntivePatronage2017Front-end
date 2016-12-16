window.onload = function(){
  var myBox = document.getElementById("myBox");
  var counter = 0;

  myBox.addEventListener("click", count, false);

  function count(){
    var clickCount = document.getElementById("clickCount");

    clickCount.innerHTML = ++counter;
  }
}
