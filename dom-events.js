/*Make a page that has on it an element that is 100px by 100px in size, 
has absolute positioning, and has a solid background color. Add an event 
handler that makes this box center itself directly under the user's 
mouse pointer as it is moved across the screen.*/

(function () {
  var div = document.createElement("div");
  document.addEventListener("mousemove", function (event) {
    console.log(event);
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.backgroundColor = "yellow";
    // div.style.position = "absolute";
    // div.style.left = e.pageX + "px";
    // div.style.top = e.pageY + "px";
    // // div.style.transform = "translate(-50%, -50%)";
    // document.body.appendChild(div);
  });

  // document.addEventListener("click", function (evt) {
  //     var div = document.createElement("div");
  //     div.innerHTML = "🦄";

  //     div.style.position = "absolute";
  //     div.style.left = evt.pageX + "px"; // always remember to tell CSS the unit!
  //     div.style.top = evt.pageY + "px";
  //     document.body.appendChild(div);
  // });
})();

// document
//   .getElementByTagName("TEXTAREA")
//   .addEventListener("input", function (e) {
//     var targ = e.target;
//     targ.value = address.slice(0, targ.value.length);
//   });

/*Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
  When the user mouses down on this box, its background should change to a randomly selected color. 
  When the user mouses up on it, its background should change to another randomly selected color.*/
(function () {
  var newDiv = document.createElement("div");
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  document.body.appendChild(newDiv);

  function randomRgb() {
    var red = Math.random() * 256;
    var green = Math.random() * 256;
    var blue = Math.random() * 256;
    return "rgb(" + red + "," + green + "," + blue + ")";
  }

  newDiv.addEventListener("mousedown", function () {
    newDiv.style.backgroundColor = randomRgb();
  });
  newDiv.addEventListener("mouseup", function () {
    newDiv.style.backgroundColor = randomRgb();
  });
})();
