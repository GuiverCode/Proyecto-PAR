var btnList = document.querySelectorAll('#destacados button');//obtiene todos los botones agregar
var elItems = document.getElementById('items');//obtiene el contador de items del carrito

for(i = 0; i<btnList.length; i++){
    btnList[i].addEventListener('click',function(e){addCart(e);}, false);
}

/*agrega un item al carrito*/
function addCart(e){
    var numItems = Number(elItems.textContent);//numero actual de items
    elItems.textContent = numItems + 1;

}




