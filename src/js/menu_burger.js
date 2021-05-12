// const burger = document.querySelector('.burger')
// burger.addEventListener('click', (e)=>{
//     let middleLine = document.querySelector('.middle');
//     let lines = document.querySelectorAll('.burger-line');
//     let topLine = lines[0];
//     let bottomLine = lines[2];
//     topLine.style.transformOrigin='center'
//     topLine.style.transform = 'translateY(4px) rotate(45deg)'
//     bottomLine.style.transformOrigin='center'
//     bottomLine.style.transform = 'translateY(-4px) rotate(-45deg)'
//     middleLine.style.opacity='0';
// })

const burger = document.querySelector('.burger')
burger.addEventListener('click',(e)=>{
    burger.classList.toggle('opened_burger')
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('opened_menu')
})