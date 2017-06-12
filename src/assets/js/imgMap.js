/**
 * Created by Stanislav on 12.06.2017.
 */

var marker = document.querySelectorAll('.marker');
var popup = document.querySelectorAll('.marker .popuptext');
console.log(marker);
console.log(popup);
for(var i=0 ; i < marker.length ; i++){
    marker[i].addEventListener('click', function(){
        this.querySelector('.popuptext').classList.toggle('show');
        console.log(this);
    });
}

