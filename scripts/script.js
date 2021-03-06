//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}


var Settings = {
    container: document.getElementById("guitar-tuner"),
    backgroundColor: "white", // or hex colors "#ffffff"
    notOkayColor: "orange",
    okayColor: "green",
    fontColor: "black"
  };
  
  function initializeTuner() {
    // Create a single or multiple instance of tuners at time
    var tuners = [
      new OnlineTuner.Controller.GuitareTuner(
        new OnlineTuner.Widget.CircleWidget(
          Settings.container, 
          Settings.backgroundColor, 
          Settings.notOkayColor, 
          Settings.okayColor, 
          Settings.fontColor
        )
      )
    ];
  
    // Initialize the tuner with the callbacks
    new OnlineTuner.Analyser(tuners).install(function() {
      console.log("Succesfully initialized");
  
    }, function(errorMessage) {
      console.error("Oops, this shouldn't happen", errorMessage);
    });
  }
    
      // Render the guitar tuner on the canvas by running the function
  initializeTuner();