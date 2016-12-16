window.onload = function(){
  var myBox = document.getElementById("myBox");
  var clickCount = document.getElementById("clickCount");
  var counter = 0;

  myBox.addEventListener("click", count, false);

  function count(){
    if(clickCount.innerHTML == 0){
      counter = 0;
    }
    clickCount.innerHTML = ++counter;
  }
}
