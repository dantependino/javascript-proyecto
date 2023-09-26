
let CODIGO = '1234';

function login (){
    let ingresar = false;
    let intentos = 5
    for (let i = intentos; i > 0; i--){
        let CODIGOUSUARIO = prompt('Codigo de Usuario. Tenes ' + i + ' intentos ');
        if (CODIGOUSUARIO === CODIGO){
            alert('Bienvenido');
            ingresar = true;
            break;
        } else {
            alert('Codigo Incorrecto. Te Quedan ' + (i-1) + 'intentos.');
        }
    }
return ingresar;

}

const resultado = login()
if (resultado) {
    let dinero = 10000
    let opcion = prompt('Que menu desea comprar?: \n1 - Menu del dia. $2300 \n2 -Menu Doble. $4000 \n3 - Menu Epecial. $3000 \n4 - Ingresar Menu Especifico. \n5 - Depositar saldo \nPresiona X para salir. ')

    while (opcion != 'x' && opcion != 'X') {

        switch (opcion){
            case '1':
                if (dinero>2300){
                alert('Elegiste el menu del dia. Su pedido tiene una demora de 45 minutos')
                dinero -= 2300
                alert('Te queda un saldo de $ ' +dinero )
                }
                else{
                    alert('Saldo insuficiente')
                }

                
                break;

            case '2':
                if (dinero>4000){
                alert('Elegiste el menu doble. Su pedido tiene una demora de 45 minutos')
                dinero -= 4000
                alert('Te queda un saldo de $ ' +dinero )
                }
                else{
                    alert('Saldo insuficiente')
                }
                break;

            case '3':
                if (dinero>3000){
                alert('Elegiste el menu Especial. Su pedido tiene una demora de 45 minutos')
                dinero -= 3000
                alert('Te queda un saldo de $ ' +dinero )
                }
                else{
                    alert('Saldo insuficiente')
                }
                break;


            case '4':
                alert('Comuniquese al +12354264 para pedir un menu especifico')
                break;    
            
            case '5':
                let depositar = parseInt(prompt('Ingresar monto'));
                if ( Number.isNaN(depositar)){
                    alert('ingrese el valos en numeros');

                }
                
                dinero += depositar;
                alert ('Su saldo es de $' + dinero);
                break;

            default:
                alert ('Opcion invalida')
                break;




        }
        opcion = prompt('Que menu desea comprar?: \n1 - Menu del dia. $2300 \n2 -Menu Doble. $4000 \n3 - Menu Epecial. $3000 \n4 - Ingresar Menu Especifico. \n5 - Depositar saldo \nPresiona X para salir. ')
    }

} else {
    alert ('Usuario Bloqueado');
}

alert ('Muchas gracias por elegirnos')