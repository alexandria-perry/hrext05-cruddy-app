
var removeSVG = '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 96.000001 120.0000025" version="1.1" x="0px" y="0px"><g transform="translate(0,-956.36216)"><path d="m 80.67476,972.04099 0,0 -64.495966,64.49591 0,0 z" style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.00000012;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"/><path d="m 79.747979,1036.5369 0,0 -64.495959,-64.49591 0,0 z" style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.00000012;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"/></g></svg>'
// var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><circle fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.875" cy="50" r="40.625"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35" y1="50.125" x2="45.062" y2="60.188"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="45.062" y1="60.188" x2="68.875" y2="36.375"/></svg>'
var curKeyValue;
var curTextValue;

console.log(curKeyValue + "top")

// ADD ITEM ----->

var count = 0;

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItemToDo(value);



    curKeyValue = "Destination" + count;
    curTextValue = $('#item').val();
    localStorage.setItem(curKeyValue, curTextValue);



    document.getElementById('item').value = '';
    count++
    console.log(count);
  }
});
  
// EDIT ITEM ------>

var saveButton = document.getElementById('save');
var todo = document.getElementById('todo');
var localStore = {
  saveLocalStorage: function() {
    localStorage.setItem('item', todo.innerHTML);
  }
}

saveButton.addEventListener('click', function() {
  localStore.saveLocalStorage();
}, false);





// // REMOVE ITEM ----->

// function removeItem(e) {
//   var item = this.parentNode.parentNode;
//   var parent = item.parentNode;

//   parent.removeChild(item);
//   //localStorage.clear();

//   localStorage.removeItem(curKeyValue);
//   console.log(curKeyValue + "removeItem");
//   curKeyValue = curKeyValue--; 
// }

// $(".clear-cache-btn").on("click", function(){
//     // clear local storage
//     localStorage.clear();
//     $(".show-text").empty();
//   });
document.getElementById('clear').addEventListener('click', function() {
  localStorage.clear();
});





// HELPER FUNCTION ADD ITEM ---->

function addItemToDo (text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;


// REMOVE ITEM -----> 

  remove.addEventListener('click', function removeItem(e) {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
  //localStorage.clear();

  localStorage.removeItem(todo.innerHTML);
  localStorage.removeItem(curKeyValue);
  localStorage.removeItem(curTextValue);
  // console.log(curKeyValue + "removeItem");
  // curKeyValue = curKeyValue--; 
});


// HELPER FUNC CONT ----->

  // var complete = document.createElement('button');
  // complete.classList.add('complete');
  // complete.innerHTML = completeSVG;

  var edit = document.createElement('input');
  edit.classList.add('edit');

  buttons.appendChild(remove);
  //buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);

  console.log(curKeyValue + "bottom")

}




