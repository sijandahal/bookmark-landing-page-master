const about = document.querySelector('.features__about');
const buttons = document.querySelectorAll ('.tab-btn');
const contents = document.querySelectorAll('.features__main');

about.addEventListener('click', function(e){
  e.preventDefault();
  const id = e.target.dataset.id;
  if(id) {
    //remove active from all btns
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      e.target.classList.add ('active');
    });
    //hide th articles
    contents.forEach(function(content) {
      content.classList.remove ('show');
    });
    const content = document.getElementById(id);
    content.classList.add('show');
  }
});