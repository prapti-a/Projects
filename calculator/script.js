const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
console.log("Js is connected");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        //function
        if ( value === "␈" )
        {
            display.value = display.value.slice(0, -1);
        }
        else if ( value === "AC")
        {
            display.value = "";
        }
        else if ( value === "=")
        {
            try{
                  let expression = display.value;
                  expression = expression.replace(/×/g, "*");
                  expression = expression.replace(/÷/g, "/");
                  display.value = eval(expression);
                }
            catch{
                 display.value = "Error";
                }
        }
        else {
            display.value += value;
        }
     });
 });