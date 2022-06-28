export class CuentasPorCobrar {
    constructor(
    public idcuentasporcobrar: number,
    public idcliente: number,
    public descripcion: string,
    public montoabonado: number,
    public fecharegistro:string,
    public status: boolean
    ){} 
}