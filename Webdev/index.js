let button = document.getElementById("myButton");

// Step 2: Listen for the "click" event


i=1
let c =button.addEventListener("click", function() {
  // Step 3: Do something when the button is clicked
  if(i<15){
    min = Math.ceil(1);
    max = Math.floor(3);
    j= Math.floor(Math.random() * (max - min + 1) + min);
    a="Ellipse"+" "+j+".png"
    document.querySelector("img").src = a;
    console.log(i)
    i++
  }
})

console.log(c)
