const decbtn=document.getElementById("decrease");
const resetbtn=document.getElementById("reset");
const incbtn=document.getElementById("increase");
const countlable=document.getElementById("count");

let count =0;

incbtn.onclick=function(){
    count++;
    countlable.textContent=count;
}

decbtn.onclick=function(){
    count--;
    countlable.textContent=count;
}

resetbtn.onclick=function(){
    count=0;
    countlable.textContent=count;
}
