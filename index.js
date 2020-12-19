




buttons = document.getElementsByClassName('remove-product') ;
for (i=0; i < buttons.length ;i++ ) 
{
    button = buttons [i] ;
    button.addEventListener('click',function(){
        this.parentElement.parentElement.remove() ;
    })
}

pluses =  document.getElementsByClassName('max') ;
for (i=0; i < pluses.length ;i++ )  {
    max = pluses[i] ;
    max.addEventListener('click',function(){
        var numero = this.previousElementSibling.innerHTML
        numero = parseFloat(numero)
        console.log(numero)
        numero = numero + 1 ;
        this.previousElementSibling.innerHTML = numero
    })

}
moinses =  document.getElementsByClassName('min') ;
for (i=0; i < moinses.length ;i++ )  {
    min= moinses[i] ;
    min.addEventListener('click',function(){
        var num = this.nextElementSibling.innerHTML
        num = parseFloat(num)
        console.log(num)
        if (num != 0) {
            num = num - 1 ;
        }
       
        this.nextElementSibling.innerHTML = num
    })

}