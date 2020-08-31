const question = document.querySelectorAll('.question');
const answer = document.querySelector('.answer');
const svg = document.querySelector('.svg');
const input = document.querySelector('.text');
const arrow = document.querySelector('.uparrow');
//form
const span = document.querySelector('.span');
const form = document.querySelector('.form');
const formBtn = document.querySelector ('.red-btn');
const image = document.querySelector('.svgimage');

question.forEach(function(item) {
  item.addEventListener('click', function (e){
  const target = e.currentTarget;
  console.log(target);
  target.classList.toggle('toggle');
  })
})

arrow.addEventListener('click', function(){
  alert('ahah')
})
// EndOFAcordion

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  var value = input.value; 

  if (pattern.test(value)) {
   input.classList.remove('error');
   input.placeholder = "THANK YOU"
   span.innerHTML = "Success";
   span.style.backgroundColor = "green";
   image.classList.remove('error');
    form.reset();
  }
   
   else{
    input.placeholder = "email@example/com"
    input.classList.add('error');
    span.classList.add('error');
     image.classList.add('error');
     span.style.backgroundColor = " hsl(0, 94%, 66%)";
   }
  });


//navigatio bar 
 
const close  = document.querySelector('.close');
const burger  = document.querySelector('.burger');
const navlink  = document.querySelector('.mobile__links');

burger.addEventListener('click', function(){
  navlink.classList.toggle('toggle');
})

close.addEventListener('click', function(){
  navlink.classList.remove('toggle');
})

