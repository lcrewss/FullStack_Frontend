$(document).ready(function(){
  // const baseURL = 'https://polar-mesa-16379.herokuapp.com/'
  const baseURL = 'http://localhost:5000/'
  // const form = document.querySelector(".submitButton")
  // form.addEventListener('click', submitForm)

  $('.submitButton').click(submitForm)


  function submitForm(event){
    event.preventDefault()
    const nameInput = document.querySelector('#name')
    const typeInput = document.querySelector('#type')
    const abvInput = document.querySelector('#abv')
    const likeInput = document.querySelector('input[name=like]:checked')
    const name = nameInput.value
    const type = typeInput.value
    const abv = abvInput.value
    // const like = likeInput.value

  var  post = {
      name: name,
      type: type,
      abv: abv
      // like: like
    }
  console.log(post)
    $.post(baseURL,post)
      .then(function(newPost) {
        location.href = '/index.html';
      })

    nameInput.value = ""
    typeInput.value = ""
    abvInput.value = ""
    // likeInput.value = ""
}

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

    // function createLiquor(post){
    //   fetch(baseURL, {
    //     method:'POST',
    //     body: post,
    //     headers: {'content-type': 'application/json'}
    //   })
    //   .then(function(data){
    //     console.log(data);
    //     data.json()
    //   })
    // }
})
