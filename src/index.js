let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
      fetch('http://localhost:3000/toys').then(resp=>resp.json()).then(data=>{
        for (let toy of data){
          createCard(toy);
      }})
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
let createToy = document.querySelector('.add-toy-form').querySelector('.submit')
  console.log(createToy)
  let inputToyName = document.getElementsByClassName('input-text')[0].value
  let inputToyUrl = document.getElementsByClassName('input-text')[1]
  console.log(inputToyName)
  createToy.addEventListener('click', e=> {
    e.preventDefault(),
    console.log(e),
    console.log(inputToyName)
  })
  
  // console.log(inputToyUrl)
          // createToy.addEventListener('click',e=>{
            // fetch('http://localhost:3000/toys/:id',{
            //   method: 'POST',
            //   headers: {
            //     'Content-Type':'application/json',
            //     Accept: "application/json",
            //   },
            //   body: JSON.stringify({
            //     'name': `${}`,
            //     'image':"https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
            //     'likes': 0
            //   })
          //   })
          // })
function createCard(toy){
  let card = document.createElement('div');
          card.classList.add("card");
          card.innerHTML = `<h2>${toy.name}</h2><img src=${toy.image} class="toy-avatar"/>`
          let likes = document.createElement('p');
          likes.textContent = `${toy.likes} Likes`;
          let likeButton = document.createElement('button');
          likeButton.classList.add('like-btn');
          likeButton.setAttribute('id',`${toy.id}`);
          likeButton.textContent = 'Like <3';
          
          
          card.appendChild(likes);
          card.appendChild(likeButton);
          // console.log(card);
          let toyCollection = document.getElementById('toy-collection');
          // console.log(toyCollection);
          toyCollection.appendChild(card)
        
}