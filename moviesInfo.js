let movies = null
    // get data from file json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            movies = data;
            showDetail();
    })

    function showDetail(){

// remove data default from HTML
    const moviesInfo = document.querySelector('.moviesInfo');
    let movieId =  new URLSearchParams(window.location.search).get('id');
    let thisMovie = movies.filter(value => value.id  == movieId)[0];

    //if there is no product with id = productId => return to home page
    if(!thisMovie){
        window.location.href = "/";
    }

    (movies.filter(value => value.id == movieId)).forEach(mov => {
        moviesInfo.innerHTML = `
        <div class="boxInfo">
        <div class="box movieImg">
            <div class="imgBoxInfo"><img src="${mov.poster}" alt="" class="boxImgInfo"></div>
        </div>
        <div class="box movieText">
            <h2 class="movieTitle">${mov.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. Mollitia culpa 
                dignissimos sint dolores obcaecati quam
                 iure atque asperiores recusandae quis
                 quia molestias libero, voluptas nulla quaerat. 
                 Vitae voluptates explicabo error!</p>
        </div>
      </div> 
        `;
       
        });
}
