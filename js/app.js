//hamburger menu

//slider code starts here
const banner = document.getElementById('main_banner');
const slider = banner.getElementsByTagName('img')[0];
const titles = ['Live in Paris', 'Travel alone', 'Feel freedom'];
const indicators = document.querySelectorAll('.slide_inidicator');

let title = document.getElementById('latest_news_title');
let currentImage = 0;
setTimeout(changeOpacity, 5000);

function changeOpacity() {
  slider.classList.toggle('fadeOut');
}

function changeCurrentImage() {
  currentImage == 2
    ? currentImage = 0
    : currentImage++;
  slider.src = `./images/banner_${currentImage}.jpg`;
  title.innerText = titles[currentImage];
  indicators.forEach((indicator,index)=>{
    currentImage == index
    ? indicator.innerText= '⬛'
    : indicator.innerText = '⬜';
  });
}

slider.addEventListener('transitionend', () => {
  if (slider.classList == 'fadeOut') {
    changeCurrentImage();
    changeOpacity();
  } else {
    setTimeout(changeOpacity, 5000);
  }
})
//slider code ends here

//form validation code starts here
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const name = document.getElementById('name');
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
  if(validateName() && validateEmail()){
  }else{
    e.preventDefault();
    console.log('check form');
  }
});

function validateName(){
  if(name.value.length > 5){
    return true;
  }else{
    return false;
  }
}

function validateEmail(){
  if(email.value.length>3 && email.value.includes('@')){
    return true;
  }else{
    return false;
  }
}
