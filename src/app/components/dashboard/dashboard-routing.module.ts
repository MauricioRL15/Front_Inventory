import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonosComponent } from './abonos/abonos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CortedecajaComponent } from './cortedecaja/cortedecaja.component';
import { CreditoComponent } from './credito/credito.component';
import { DashboardComponent } from './dashboard.component';
import { GecodigoComponent } from './gecodigo/gecodigo.component';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { PieComponent } from './pie/pie.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosproveedoresComponent } from './productosproveedores/productosproveedores.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VerificadorComponent } from './verificador/verificador.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, children:[
    { path: '',component: HomeComponent },
    { path: 'tiendas',component: TiendasComponent },
    { path: 'pie',component: PieComponent },
    { path: 'home', component: HomeComponent },
    { path: 'abonos', component: AbonosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path:'cortedecaja',component:CortedecajaComponent},
    { path:'credito',component:CreditoComponent},
    { path:'generador',component:GecodigoComponent},
    { path:'ingresos',component:IngresosComponent},
    { path:'productos',component:ProductosComponent},
    { path:'pproveedores', component:ProductosproveedoresComponent },
    { path:'proveedores', component:ProveedoresComponent },
    { path:'usuarios', component:UsuariosComponent },
    { path:'verificador', component:VerificadorComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
