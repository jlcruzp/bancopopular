

/*Las clases son moldes de datos en lo que podemos encajar muchos datos diferentes siempre manteniendo la misma estructura, como en este caso para una base de datos de clientes con sus nombres, numeros de cuenta e identificaciones, etc. para todos los clioentes son el mismo tipo de datos sólo que cambian de cliente a cliente */
import { Cliente } from "./cliente.js";
export class cuentaCorriente
{
    #cliente;/*Se crea el atributo de clase que va a alojar los valores de la clase que vamos a relacionar posteriormente */
    numero;
    #saldo; //al ponerle el numeral # justo antes del nombre de la variable la hacemos privada, quiere decir que solo puede modificarse su valor con los metodos declarados dentro de la clase y no podría modificarse su valor fuera con algun cuentacorriente.saldo=1millon, spolo podrma modificarse en este caso con las funciones de retirarDeCuenta y depositoEnCuenta y cuando hagamos un consolelog de cuentacorriente esa variable no será visible.
    agencia;

    set setCliente(valor){ /*Se usa la palabra resertvada set para crear la funcion para asignar un valor a un atributo privado de tipo string o booleano */
    if (valor instanceof Cliente){ //Con este if aseguramos que para que se ppueda asignar valores a (por ejemplo cuentaMaria.cliente= ) el valor deberá ser una instancia de la clase Cliente de lo contrario no permitirá que le asignemos un valor como por ejemplo un 0.

        this.#cliente = valor; /*Esta función nos sirve para poder asignarle un nuevo valor de string a un atributo privado de tipo string, en el caso de números es más sencillo ya que se hace cómo en el caso de saldo, pero en caso de strings o booleanos usamos la palabra reservada "set" */
    } /*Esta funcion se mandará llamar cuando le atribuyamos el valor al atributo cliente dentro de la instancia de cuentacorriente que hayamos creado y se manda llamar asi: cuentaMaria.setCliente= "cliente002" "setCliente es el nombre que nosotros le asignamos aqui en la funcion pero puede ser cualquier nombre*/
        
        
    }

    get getCliente(){ //En este emeplo le dimos el nombre de getCliente a esta funcion pero en realidad puede ser cualquier nombre, despues para mandarla llamar como en un console log se hace asi: console.log(cuentaMaria.getCliente)
        return this.#cliente;
    }

   // constructor(cliente, numero, saldo, agencia){/*El constructor sirve para definir los valores y las conddiciones por defaul que tendran las variables al crrar una nueva instancia (cada new cuentacorriente(); ejecutará el contructor al inicio y asignará un valor numerico 0 al saldo de cada instancia) */
     //   this.#cliente = null;/*Se le asigan el valor null para evitar que cada que se cra una nueva instancia de cuentacorriente, se cree un nuevo cliente. */
     //   this.#saldo=0;
     //   this.numero="";//Aqui declaramos el valor iniciar de todas las variables para que una vez que creamos una nueva instancia ningun valor de atributo nos salga undefined
     //   this.agencia="";
    //}

    constructor(cliente, numero, agencia){/*El constructor sirve para definir los valores y las conddiciones por defaul que tendran las variables al crrar una nueva instancia (cada new cuentacorriente(); ejecutará el contructor al inicio y asignará un valor numerico 0 al saldo de cada instancia) */
        this.cliente = cliente;
        this.numero = numero;
        this.#saldo = 0;
        this.agencia = agencia;        
    }


    depositoEnCuenta(valor){ /*Métodos: son las operaciones o funciones que podrán ejecutarse de forma automatica para la clase en cualquiera de sus instancias, se usa "this" para que pueda usarse esta operacion en cualquiera de las instancias (cuentacorriente1, cuentacorriente2, etc.) this hace referencia a la instancia en la que nos encontremos y con sus atributos es con los que trabaja */
        if(valor>0){
        this.#saldo = this.#saldo + valor;
        return this.#saldo;

        }else{
            console.log("Por favor verifica la cantidad a depositar, el monto ingresado debe ser mayor a $0 MXN. El monto que intentas depositar es: "+ valor);
        }
    }

    retirarDeCuenta(valor){
        if(this.#saldo>=valor){
        this.#saldo = this.#saldo - valor;
        return this.#saldo;
        } else{
            console.log("No tienes saldo suficiente para realizar la operación. Tu saldo es: " + this.#saldo +" e intentas retirar: " + valor);
        }
    }

    verSaldo(){
        return this.#saldo;
    }

    transferenciaDesdeMiCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);

    }
}