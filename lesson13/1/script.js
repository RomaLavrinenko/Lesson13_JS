let bb = document.getElementsByTagName('h2');
console.log(bb);
bb[0].addEventListener('click',function(){
    document.querySelector('.box1').classList.add('bg-red','bor');
    document.querySelector('.box2').classList.add('bg-green','bor');
    document.querySelector('.box3').classList.add('bg-yellow','bor');
    document.querySelector('.box4').classList.add('bg-brown','bor');
    document.querySelector('.box5').classList.add('bg-orange','bor');
    document.querySelector('.box6').classList.add('bg-blue','bor');
    document.querySelector('.box7').classList.add('bg-gray','bor');
    document.querySelector('.box8').classList.add('bg-violet','bor');
    document.querySelector('.box9').classList.add('bg-coral','bor');
    document.querySelector('.box1').classList.remove('b1-img');
    document.querySelector('.box2').classList.remove('b2-img');
    document.querySelector('.box3').classList.remove('b3-img');
    document.querySelector('.box4').classList.remove('b4-img');
    document.querySelector('.box5').classList.remove('b5-img');
    document.querySelector('.box6').classList.remove('b6-img');
    document.querySelector('.box7').classList.remove('b7-img');
    document.querySelector('.box8').classList.remove('b8-img');
    document.querySelector('.box9').classList.remove('b9-img');
    document.body.style.background = 'White';

})

let bc = document.getElementsByClassName('box-con');
for(let i = 0;i<9;i++){
    bc[i].addEventListener('click',addColor)
}
function addColor(event){
    let st = getComputedStyle(this);
    document.body.style.background = st.background;
}

bb[1].addEventListener('click',function(){
    document.querySelector('.box1').classList.remove('bg-red');
    document.querySelector('.box2').classList.remove('bg-green');
    document.querySelector('.box3').classList.remove('bg-yellow');
    document.querySelector('.box4').classList.remove('bg-brown');
    document.querySelector('.box5').classList.remove('bg-orange');
    document.querySelector('.box6').classList.remove('bg-blue');
    document.querySelector('.box7').classList.remove('bg-gray');
    document.querySelector('.box8').classList.remove('bg-violet');
    document.querySelector('.box9').classList.remove('bg-coral');
    document.querySelector('.box1').classList.add('b1-img');
    document.querySelector('.box2').classList.add('b2-img');
    document.querySelector('.box3').classList.add('b3-img');
    document.querySelector('.box4').classList.add('b4-img');
    document.querySelector('.box5').classList.add('b5-img');
    document.querySelector('.box6').classList.add('b6-img');
    document.querySelector('.box7').classList.add('b7-img');
    document.querySelector('.box8').classList.add('b8-img');
    document.querySelector('.box9').classList.add('b9-img');
    document.body.style.background = 'White';
})