export class Proveedores{ 
    
    constructor(
    public idproveedor: number,
    public idtienda: number,
    public RFC: string,
    public nombre: string,
    public direccion: string,
    public numerocuenta: number,
    public telefono: string,
    public email: number,
    public banco: string,
    public claveinterbancaria: string,
    public fecharegistro: Date,
    public status: boolean
) {}
}