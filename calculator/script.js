


var input_field = document.querySelector("#exp")
var ans_field = document.querySelector("#ans")



var nums = document.querySelectorAll(".nums, .ops")


function appendInnerHTMLtoInput (button){
  button.addEventListener('click' , (event) => {

    if (input_field.value === "_") input_field.value = button.innerHTML;
    else input_field.value += button.innerHTML;
  } )
}

for (let elem of nums) appendInnerHTMLtoInput(elem);


var del = document.querySelector(".del")


del.addEventListener('click' , (event) => {
  let n = input_field.value.length;
  if (n === 1) input_field.value = '_';
  else {
    input_field.value = input_field.value.slice(0,n-1);
  }
})


var clear = document.querySelector(".clear")

clear.addEventListener('click' , (event) => {
  input_field.value = '_';
  ans_field.value = '0'
})


var equal = document.querySelector(".equal")

equal.addEventListener("click", (event)=>{
  try {
    const result = eval(input_field.value); 
    ans_field.value = result;
} catch (error) {
  ans_field.value = "Syntax Error";
}
})

