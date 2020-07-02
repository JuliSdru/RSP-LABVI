import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './paginas/error/error.component';
import { CargaLocalesComponent } from './paginas/carga-locales/carga-locales.component';
import { CargaProductosComponent } from './paginas/carga-productos/carga-productos.component';
import { TableProductosComponent } from './paginas/table-productos/table-productos.component';
import { DescargasComponent } from './paginas/descargas/descargas.component';
import { StockPipe } from './pipes/stock.pipe';
import { TipoPipe } from './pipes/tipo.pipe';
import { ModificarProductoComponent } from './paginas/modificar-producto/modificar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    CargaLocalesComponent,
    CargaProductosComponent,
    TableProductosComponent,
    DescargasComponent,
    StockPipe,
    TipoPipe,
    ModificarProductoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
    NgxQRCodeModule,
    RecaptchaModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
