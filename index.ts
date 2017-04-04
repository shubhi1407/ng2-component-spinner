import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './src/spinner.component';

export * from './src/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent   
  ],
  exports: [
    SpinnerComponent 
  ]
})
export class SpinnerComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpinnerComponentModule,     
    };
  }
}
