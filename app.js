$(document).ready(function(){
  const baseURL = 'https://polar-mesa-16379.herokuapp.com/'

  $.get(baseURL)
    .then(function(data){
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        let liquor = data[i];

        $('.liquor').append(`
          <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title name">${liquor.name}</span>

              <div class="type"</div>Type of Liquor: ${liquor.type}</a>
              <br><br>
              <div class="abv"</div>ABV: ${liquor.abv}</a>
              <br><br>
              <div class="like"</div>Like: ${liquor.like}</a>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn">Remove From List</a>
            </div>
          </div>
        </div>`)
      }


    })
})
