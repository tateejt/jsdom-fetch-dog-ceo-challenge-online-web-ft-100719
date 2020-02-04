let breeds = []

document.addEventListener('DOMContentLoaded', function(){
  loadImages();
  loadBreedOptions();
});

function addImage(dogPicUrl) {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(res=> res.json())
  .then(results => {
    results.message.forEach(image => addImage(image))
  });
}

