let img_slider_array = document.getElementsByClassName("img_slider");
console.log(img_slider_array);
let steps =0;
img_slider_array[0].classList.add('active');
let nbr_img = img_slider_array.length;

let next_btn_clicked = document.querySelector('.next');
let previous_btn_clicked = document.querySelector('.previous');

function removeActiveImage(){
    for(let i=0; i<nbr_img; i++){
         img_slider_array[i].classList.remove('active');
    }
}

next_btn_clicked.addEventListener('click',function(){
    
    steps++;
    if(steps>=nbr_img)steps=0;
    removeActiveImage();
    img_slider_array[steps].classList.add('active');
  

})
previous_btn_clicked.addEventListener('click',function(){
    steps--;
    if(steps<0)steps=nbr_img-1;
    removeActiveImage();
    img_slider_array[steps].classList.add('active');

})

  setInterval(function(){
      steps++;
      if(steps>=nbr_img)steps=0;
      removeActiveImage();
      img_slider_array[steps].classList.add('active');

  },2000)