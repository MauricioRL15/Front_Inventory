import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { FrmTiendasComponent } from './tiendas/frm-tiendas/frm-tiendas.component';
import { ListTiendasComponent } from './tiendas/list-tiendas/list-tiendas.component';
import { AbonosComponent } from './abonos/abonos.component';
import { FrmAbonosComponent } from './abonos/frm-abonos/frm-abonos.component';
import { ListAbonosComponent } from './abonos/list-abonos/list-abonos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FrmClientesComponent } from './clientes/frm-clientes/frm-clientes.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { CortedecajaComponent } from './cortedecaja/cortedecaja.component';
import { FrmCortedecajaComponent } from './cortedecaja/frm-cortedecaja/frm-cortedecaja.component';
import { ListCortedecajaComponent } from './cortedecaja/list-cortedecaja/list-cortedecaja.component';
import { CreditoComponent } from './credito/credito.component';
import { FrmCreditoComponent } from './credito/frm-credito/frm-credito.component';
import { ListCreditoComponent } from './credito/list-credito/list-credito.component';
import { GecodigoComponent } from './gecodigo/gecodigo.component';
import { FrmGecodigoComponent } from './gecodigo/frm-gecodigo/frm-gecodigo.component';
import { ListGecodigoComponent } from './gecodigo/list-gecodigo/list-gecodigo.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { FrmIngresosComponent } from './ingresos/frm-ingresos/frm-ingresos.component';
import { ListIngresosComponent } from './ingresos/list-ingresos/list-ingresos.component';
import { ProductosComponent } from './productos/productos.component';
import { FrmProductosComponent } from './productos/frm-productos/frm-productos.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { ProductosproveedoresComponent } from './productosproveedores/productosproveedores.component';
import { FrmProductosproveedoresComponent } from './productosproveedores/frm-productosproveedores/frm-productosproveedores.component';
import { ListProductosproveedoresComponent } from './productosproveedores/list-productosproveedores/list-productosproveedores.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FrmProveedoresComponent } from './proveedores/frm-proveedores/frm-proveedores.component';
import { ListProveedoresComponent } from './proveedores/list-proveedores/list-proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FrmUsuariosComponent } from './usuarios/frm-usuarios/frm-usuarios.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { VerificadorComponent } from './verificador/verificador.component';
import { FrmVerificadorComponent } from './verificador/frm-verificador/frm-verificador.component';
import { ListVerificadorComponent } from './verificador/list-verificador/list-verificador.component';





@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    PieComponent,
    HomeComponent,
    TiendasComponent,
    FrmTiendasComponent,
    ListTiendasComponent,
    AbonosComponent,
    FrmAbonosComponent,
    ListAbonosComponent,
    ClientesComponent,
    FrmClientesComponent,
    ListClientesComponent,
    CortedecajaComponent,
    FrmCortedecajaComponent,
    ListCortedecajaComponent,
    CreditoComponent,
    FrmCreditoComponent,
    ListCreditoComponent,
    GecodigoComponent,
    FrmGecodigoComponent,
    ListGecodigoComponent,
    IngresosComponent,
    FrmIngresosComponent,
    ListIngresosComponent,
    ProductosComponent,
    FrmProductosComponent,
    ListProductosComponent,
    ProductosproveedoresComponent,
    FrmProductosproveedoresComponent,
    ListProductosproveedoresComponent,
    ProveedoresComponent,
    FrmProveedoresComponent,
    ListProveedoresComponent,
    UsuariosComponent,
    FrmUsuariosComponent,
    ListUsuariosComponent,
    VerificadorComponent,
    FrmVerificadorComponent,
    ListVerificadorComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
