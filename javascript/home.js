//Loadmore Start


// let news = [
//     {
//         "name": "Hello"
//     }, 
//     {
//         "name": "World"
//     },
//     {
//         "name": "Hello1"
//     },
//     {
//         "name": "Hello2"
//     },
// ]

// $(document).ready(function(){
//     var newsParent = $("#news_parent");
//     newsParent.append(
//         `<div class="news-section">
//                     <img src="../Images/pexels-nappy-935949.jpg" alt="image not found">
//                     <div class="heading-date">
//                         <h4> <a href="#">${news[0].name}</a></h4>
//                         <p><i class="far fa-clock">&nbsp;&nbsp;</i>Current Date</p>
//                     </div>
//                 </div>`
//         );

//     //$(".news-section").slice(0, 10).show();
//     $("#load").on("click", function(e) {
//       e.preventDefault();

//       for (let i = 1; i < news.length; i++) {
//         newsParent.append(
//             `<div class="news-section">
//                         <img src="../Images/pexels-nappy-935949.jpg" alt="image not found">
//                         <div class="heading-date">
//                             <h4> <a href="#">${news[i].name}</a></h4>
//                             <p><i class="far fa-clock">&nbsp;&nbsp;</i>Current Date</p>
//                         </div>
//                     </div>`
//             );
    
//       }

//     });
//   })

  //Loadmore End

// Image Slider Start


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
showSlides(n);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

//Image Slider End

 