import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule],
  exports:[CustomersComponent],
  providers: [],
})
export class CustomersModule { }
