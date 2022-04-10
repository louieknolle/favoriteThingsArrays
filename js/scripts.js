$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    const foodInput = $('#food').val();
    const colorInput = $('#color').val();
    const iceCreamInput = $('#iceCream').val();

    const favoriteThings = [foodInput, colorInput, iceCreamInput];

    // let favoriteThings2 = [];
    // favoriteThings2.push(favoriteThings[0]);
    // favoriteThings2.push(favoriteThings[1]);
    // favoriteThings2.push(favoriteThings[2]);

    const secondElement =favoriteThings[1];
    const firstElement = favoriteThings[0];
    const thirdElement = favoriteThings[2];

    let newArray =[];
    newArray.push(secondElement);
    newArray.push(firstElement);
    newArray.push(thirdElement);
    

    $('.secondElement').text(secondElement);
    $('.firstElement').text(firstElement);
    $('.thirdElement').text(thirdElement);
  });  
});