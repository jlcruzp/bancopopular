

/*Las clases son moldes de datos en lo que podemos encajar muchos datos diferentes siempre manteniendo la misma estructura, como en este caso para una base de datos de clientes con sus nombres, numeros de cuenta e identificaciones, etc. para todos los clioentes son el mismo tipo de datos sólo que cambian de cliente a cliente */

export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}