import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouting } from './routes/app.routing';


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    AppRouting
  ],
  declarations: []
})
export class AppRoutingModule { }
