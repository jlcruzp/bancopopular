/*Paso1.- creamos el molde/clase con el conjunto de datos que vamos a necesitar repetidamente para multiples clientes.
Paso2.- creamos una nueva pieza de cliente con el molde con el comando new cliente();
paso3.- Atribuimos la pieza nueva de cliente que creamos a una variable (cliente1) para poder diferenciarla cuando creemos nuevas piezas.
paso4.- asignamos atributos a la nueva variable cliente1 con la siguiente forma: cliente1.nombreCliente = "José / cliente1.dniCliente/ cliente1.saldoCuenta */ 

/*Las clases son moldes de datos en lo que podemos encajar muchos datos diferentes siempre manteniendo la misma estructura, como en este caso para una base de datos de clientes con sus nombres, numeros de cuenta e identificaciones, etc. para todos los clioentes son el mismo tipo de datos sólo que cambian de cliente a cliente */


//const cliente1 = new cliente(); /*Asi es como creamos a nuestro nuevo cliente o nuestra nueva ppieza con el molde que cramos arriba con la clase */

/*cliente1.nombreCliente="José";
cliente1.dniCliente="13232";/*Asi es como le damos valor a cada atributo de la variable cliente1 que a su vez cliente 1 contiene una nueva pieza de la clase cliente */
/*cliente1.rutCliente="133434";

const cuentaCorriente1 = new cuentaCorriente ();

cuentaCorriente1.numero="232323";
cuentaCorriente1.saldo=5000;
cuentaCorriente1.agencia=1001;


const cliente2 = new cliente();
cliente2.nombreCliente="Leonardo";
cliente2.dniCliente="13804050";
cliente2.rutCliente="V13804050"

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero="23434343";
cuentaCorriente2.saldo=1000;
cuentaCorriente2.agencia=1002;


console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(150); --asi se manda llamar la funcion para depositar en cuenta dentro de la instanci cuentacorriente2 en altributo saldo
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.retirarDeCuenta(150);
console.log(cuentaCorriente2.saldo); */

//const saldo = (cuentaCorriente)=>{/* Se creo la funcion para mostrar el saldo, solo que la hice como funcion anonima pero podría funcionar tambien con function saldo(cuentacorriente{aqui en console y todo lo demás de la funcion}) */
//    let saldo = cuentaCorriente.verSaldo();
//    console.log(`El saldo de tu cuenta es: ${saldo}`)
 //} 

 
import {cuentaCorriente} from "./cuentacorriente.js";
import {Cliente} from "./cliente.js";


/*cliente001.nombreCliente = "Leonardo";
cliente001.dniCliente = "13804050";
cliente001.rutCliente = "123224";*/

//const cuentaLeonardo = new cuentaCorriente();
//cuentaLeonardo.numero = "1";
//cuentaLeonardo.agencia = "001";
//cuentaLeonardo.setCliente = cliente001; /* Asi es como se relacionan las clases, dentro de clase cuentacorriente se declaró el atributo cliente y en el constructor se le asignó un valor inicial null para que exista pero no sea creado un nuevo cliente cada vez que se cree una nueva instancia de la clase cuenta corriente */


const cliente001 = new Cliente("Leonardo", "13804050", "123224");
 const cliente002 = new Cliente("María", "33804051", "223225");

 const cuentaMaria = new cuentaCorriente(cliente002, "2", "002");
const cuentaLeonardo = new cuentaCorriente(cliente001, "1" ,"001");

function saldo (cuentaCorriente){/* Se creo la funcion para mostrar el saldo, solo que la hice como funcion anonima pero podría funcionar tambien con function saldo(cuentacorriente{aqui en console y todo lo demás de la funcion}) */
    let saldo = cuentaCorriente.verSaldo();
    console.log(`El saldo de tu cuenta es: ${saldo}`)
 } 

/*cliente002.nombreCliente = "María";
cliente002.dniCliente = "33804051";
cliente002.rutCliente = "223225";*/

//const cuentaMaria = new cuentaCorriente();
//cuentaMaria.numero = "2";
//cuentaMaria.agencia = "002";
//cuentaMaria.setCliente = cliente002;//así se le asigna un valor de cliente al atributo privado #cliente dentro de la instancia de cuentacorriente


cuentaLeonardo.depositoEnCuenta(150);
saldo(cuentaLeonardo);
cuentaLeonardo.transferenciaDesdeMiCuenta(50,cuentaMaria);
saldo(cuentaMaria);
saldo(cuentaLeonardo);

console.log(cuentaLeonardo);
console.log(cuentaLeonardo.getCliente);


console.log(cuentaMaria);
console.log(cuentaMaria.getCliente);

//console.log(cuentaMaria.getCliente);//Asi se manda llamar la función para obtener el dato privado #cliente de una instancia de cuenta
//console.log(cuentaLeonardo.getCliente);



