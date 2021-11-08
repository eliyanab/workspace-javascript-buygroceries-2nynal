/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});
// traverse the elements
$('#one').next().next().text('milk');
  //$('#one').remove();
// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');
$('#add').click(addElement);
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
    //$('#todo').append('<li> </li>')
  // add a input text box
  $('#todo').append('<li><input type="text" id="newE"></li');
  // whenever the user are done add the element
  $('#newE').blur(function(){
    $(this).parent().addClass('cool');
    var items = $(this).val();
    // replace input box by the text
    $(this).parent().text(items);

    //click the new list item will change style
    $('li').click(changeStyle);
  });
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } 
  else if ($(this).hasClass('complete')) {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  } 
  else {
    $(this).addClass('complete');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  $('li.complete').remove();
}