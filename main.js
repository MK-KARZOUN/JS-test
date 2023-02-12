//Programming Basics
for (let i = 10; i < 41; i++){
  if(i%2 === 0){
    }if(i%3 == 0 && i%5 == 0){
      console.log(i + "jackpot")
    }else if(i%5 == 0){
      console.log(i + "This is divisible by 5")
    }else if(i%3 == 0){
      console.log(i + "This is divisible by 3")
  }
}
document.addEventListener("DOMContentLoaded",creatBtn)
const body = document.querySelector("body")


//DOM manipulation
function creatBtn(){
  const btn = document.createElement("button")
  btn.innerHTML = "This is a button"
  body.appendChild(btn)
  btn.addEventListener("click", creatHtml)
}

function creatHtml(){
  const h1 = document.createElement("h1")
  h1.innerHTML = "this is an h1 tag"
  body.appendChild(h1)
  btn.style.backgroundColor = "red";
  btn.disabled = true;
}





