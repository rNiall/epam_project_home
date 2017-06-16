/**
 * Created by Stanislav on 12.06.2017.
 */
/*
var marker = document.querySelectorAll('.marker');
var popup = document.querySelectorAll('.popuptext');
var myVar;

for(var i=0 ; i < marker.length ; i++){
    document.querySelector('.popuptext').remove('show');
    marker[i].addEventListener('click', function(){
        // if (popup[i].contains('show') === true){
        //     popup[i].remove('show');
        // }

        this.querySelector('.popuptext').classList.toggle('show');

        // this.querySelector('.popuptext').remove('show');
        console.log(this.querySelector('.popuptext').classList);
        console.log(this.getElementsByClassName('popuptext'));
    });
}
*/
var marker = document.querySelectorAll('.marker');
for(var i=0 ; i < marker.length ; i++){
    marker[i].addEventListener('click', function(){
        console.log(this.querySelector('.popuptext'));
        this.querySelector('.popuptext').classList.toggle('show');
    });
}