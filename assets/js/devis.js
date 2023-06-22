let global1 = document.getElementById("global1");
let global2 = document.getElementById("global2");
let global3 = document.getElementById("global3");
console.log(global1);
console.log(global2);
console.log(global3);


let wrapper1 = document.querySelector('.wrapper1');
let wrapper2 = document.querySelector('.wrapper2');
let wrapper3 = document.querySelector('.wrapper3');
console.log(wrapper1);
console.log(wrapper2);
console.log(wrapper3);

global1.addEventListener('click',(e)=>{
    wrapper1.style.display = "block";
    wrapper2.style.display = "none";
    wrapper3.style.display = "none";
})
global2.addEventListener('click',(e)=>{
    wrapper1.style.display = "none";
    wrapper2.style.display = "block";
    wrapper3.style.display = "none";
})