export class Clientes{ 
    
    constructor(
    public idcliente: number,
    public RFC: string,
    public nombre: string,
    public direccion: string,
    public telefono: string,
    public email: number,
    public fecharegistro: Date,
    public telmovil: number,
    public imagen: Blob,
    public status: boolean,
    public idtienda: number
) {}
}