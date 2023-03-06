function $(placeHolder) {
    return document.getElementById(placeHolder);
  }

var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

//line breaks
function nl2br(txt) {
  return txt.replace(/\n/g, '');
}


function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  w.innerHTML = nl2br(tw);
}