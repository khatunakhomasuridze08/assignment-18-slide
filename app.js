const slideItems = document.querySelectorAll('.slider_item');
const prevBtn = document.querySelector('#prev_slide_btn');
const nextBtn = document.querySelector('#next_slide_btn');
const dots = document.getElementsByClassName('dot');
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
let activeIndex = 0;
let intervalId = null;

function initSlider(){
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);
// N2.2
  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowRight'){
      showNextSlide();
    }
  })

  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowLeft'){
      showPrevSlide();
    }
  })

  startBtn.addEventListener('click', startSlides);
  stopBtn.addEventListener('click',stopSlides);
 
//   N2.3
  for (let i = 0; i < dots.length; i++) {
    const button = dots[i];
    button.addEventListener("click", ()=>{
      activeIndex = i
      renderSliders();
    })
  }

}
initSlider();
// N2.1
function startSlides(){
  intervalId = setInterval(showNextSlide, 3000)
}

function stopSlides(){
  clearInterval(intervalId);
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}
  
function showPrevSlide(){
  activeIndex = activeIndex - 1;
  if(activeIndex < 0){
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
}


// N3

const students = [-1, -3, 4, 2];

function angryProfessor(k, studentsArr){
  let count = 0;

  for (let i = 0; i < studentsArr.length; i++) {
    const student = studentsArr[i];
    if (student<0) {
      count++
    }
  }

   if(count < k){
     return "YES"
   } else {
     return "No"
   }
}


const isProfessorAngry = angryProfessor(2, students)
console.log(isProfessorAngry)


// N1
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}



