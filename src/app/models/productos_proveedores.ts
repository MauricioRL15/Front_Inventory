export class Productos_Proveedores{ 
    
    constructor(
    public idproductos_proveedores: number,
    public idproveedores: number,
    public idproductos: string,
    public cantidad: number,
    public fecharegistro: Date,
    public status: boolean
) {}
}