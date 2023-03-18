const category = document.querySelectorAll('.item');
console.log('Number of categories:', category.length);

category.forEach((element) => {

    console.log('Category:', element.firstElementChild.textContent);
  
    console.log('Elements:', element.lastElementChild.childElementCount);

});