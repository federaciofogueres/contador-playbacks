import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { TimerFullscreenComponent } from './timer-fullscreen/timer-fullscreen.component';
import { AsociacionesComponent } from './asociaciones/asociaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { SesionesComponent } from './sesiones/sesiones.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    TimerFullscreenComponent,
    AsociacionesComponent,
    SesionesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PagesModule { }
