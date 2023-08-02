if(document.querySelectorAll('#footer').length>0){
document.querySelector('#footer').innerText="Footer text changed";
}
else {
  document.querySelector('#container').innerHTML="Page text changed";
}
