"user strict"

const qzList = [{id:0, qz:"점심을 드셨나요?", result: "o"},{id:1, qz:"저녁을 드셨나요?", result: "x"}]
const giftList = ["상품권","식사권","휴가권"]

const content = document.querySelector(".content")
const qzName = document.querySelector("#qz_name");
const buttonBox = document.querySelector("#button_box");
const buttons = document.querySelectorAll(".button")
const modalContainer = document.querySelector("#modal-container")
const modalContent = document.querySelector(".modalContent")
const modal = document.querySelector(".modal")
const qzBox = document.querySelector(".qz-box")
const scoreBox = document.querySelector(".score-box")
const scoreText = document.querySelector("#score")
const homeButton = document.querySelector("#home")
const body = document.body;
let btnId;
let score = 0;
let page = 1;

window.onload = function(){
    qzName.innerText = qzList[0].qz;
}

buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    if(page ===1){
        modalContents(0,e)
    }else if(page === 2){
        modalContents(1,e)
    }
    modalContainer.removeAttribute('class');
    modalContainer.classList.add("rotate-scale-up"); 
    
    content.removeAttribute('class');
    content.classList.add('content');
    
     body.classList.add('modal-active');

     setTimeout(()=>{
        modalContainer.classList.remove("rotate-scale-up");

         qzName.innerText = qzList[1].qz;
     },2000)
     if(page === 3){
        qzBox.style.display = "none";
        scoreBox.style.display = "";
        scoreText.innerText = score;
    }

  });
});

function modalContents(i,e){
    if (qzList[i].result === e.target.dataset.id) {
        modalContent.innerText = "정답입니다.";
        score++
      } else if(qzList[i].result !== e.target.dataset.id) {
        modalContent.innerText = "정답이 아닙니다.";
      }
      page++
}

modalContainer.addEventListener('click', function() {
  this.classList.add('out');
  body.classList.remove('modal-active');
  
if(page === 3){
    qzBox.style.display = "none";
    scoreBox.style.display = "";
    scoreText.innerText = score;
}
});

homeButton.addEventListener("click",()=>{
    qzBox.style.display = "";
    scoreBox.style.display = "none"
    qzName.innerText = qzList[0].qz;
    page = 1;
    score = 0;
})
