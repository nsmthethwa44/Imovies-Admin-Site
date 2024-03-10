var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    },
  });

  var swiper = new Swiper(".mySlide", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
},
breakpoints: {

// 200: {
//   slidesPerView: 1,
// },

567: {
  slidesPerView: 3,
},
 992: {
  slidesPerView: 5,
},
 1000: {
  slidesPerView: 6,
},
},
  });

  // when img list on  cover image show in big box
let coverList = document.querySelectorAll(".imageContent .images .imgBox img");
let imgMovieList = document.querySelector(".leftBox .imgBox .boxImg");
Array.from(coverList).forEach((item, index) => {
  item.onclick = () => { 
    imgMovieList.src = item.src;
  }
});

// enable darkMode 
let darkMode = document.querySelector(".darkMode");
let mode = document.querySelector(".mode");
darkMode.onclick = () =>{
  document.body.classList.toggle("darkTheme");
}


// toggle sidebar and search bar 
let sidebar = document.querySelector(".sideBar");
let closeSideBar = document.querySelector(".closeSideBar")
let menuBox = document.querySelector(".menuBox");

menuBox.onclick = () =>{
  sidebar.classList.toggle("active");
}
closeSideBar.onclick = () =>{
  sidebar.classList.remove("active");
}
window.onscroll = () => {
    sidebar.classList.remove("active");
}

        let movies = null;

        // get data from file json
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                movies = data;
                addDataToHTML();
        })

        function addDataToHTML(){

       // remove data default from HTML
       let listMoviesHTML = document.querySelector('.popularWrapper');
        let outPut = "";
        for (var i = 0; i <= movies.length; i++) {
          outPut += `
          <div class="box swiper-slide">
          <div class="imgBox"><img src="${movies[i].poster}" alt="" class="boxImg"></div>
            <div class="text">
              <span class="rating"><img src="${movies[i].star}" alt="">${movies[i].rating}</span>
              <h3 class="title">${movies[i].title}</h3>
           </div>
         </div>
          `
        listMoviesHTML.innerHTML = outPut;

        let listMovieBox = document.querySelectorAll('.popularWrapper .box');
        Array.from(listMovieBox).forEach((item, id) => {
            item.onclick = (e) => {
              // Redirect to the movie details page with the selected movie ID
                window.location.href = 'movieDetails.html?id=' + id;
              } }
              )
        }
     
          }
  
       
   


