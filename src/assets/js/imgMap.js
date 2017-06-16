
var marker = document.querySelectorAll('.marker');
for(var i=0 ; i < marker.length ; i++){
    marker[i].addEventListener('click', function(){
        console.log(this.querySelector('.popuptext'));
        this.querySelector('.popuptext').classList.toggle('show');
    });
}