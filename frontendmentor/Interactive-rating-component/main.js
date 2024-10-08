const ratingNums = document.querySelectorAll('.raiting-num div');
let selectedRating = null;

ratingNums.forEach(num => {
  num.addEventListener('click', function() {
    selectedRating = num.textContent;
    ratingNums.forEach(num=>{
        num.classList.remove("selected-num" , "num")
    })
    num.classList.add("selected-num" , "num");
    console.log('Selected Rating:', selectedRating);
  });
});

document.getElementById('raiting-form').addEventListener('submit', function(ev) {
    ev.preventDefault();
    if (selectedRating) {
      document.querySelector('.result').textContent = `You selected ${selectedRating} out of 5`;
      document.querySelector('.raiting').classList.add('hidden');
      document.querySelector('.thankYou').classList.remove('hidden');
    } else {
      console.log('Please select a rating.');
    }
  });