# ng2-component-spinner

## Installation

To install this library, run:

```bash
$ npm install ng2-component-spinner --save
```
## [View Demo](https://shubhi1407.github.io/ng2-component-spinner/)

## Usage

```bash
$ npm install ng2-component-spinner
```
Configure your System.config
```javascript
System.config({
  defaultJSExtensions: true,
  map: {
    "angular2": "node_modules/angular2",
    "rxjs": "node_modules/rxjs",
    ...
    "ng2-component-spinner": "node_modules/ng2-component-spinner/dist"
  },
  packages: {        
    'app': {
      main : './main.ts',
      defaultJSExtensions : 'ts'
    },
    'ng2-component-spinner' : {
      defaultExtension : 'js',
      main : 'index.js'
    }
  }
});
```
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Module
import { SpinnerComponentModule } from 'ng2-component-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    // Add module to imports
    SpinnerComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use it in your Angular application:
NOTE: For this component to work, your template *must* be wrapped in a relative positioned root element.
```xml
<div style="position:relative">
    <h1>
        {{title}}
    </h1>
    <spinner-component [spinnerShow]="<booleanVariable>"></spinner-component>
</div>
```
Use a custom CSS spinner like this
```xml
<spinner-component [spinnerShow]="show">
    <div class="spinner-2">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
</spinner-component>
```
## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Shubhangi Gupta](mailto:shubhangi140793@gmail.com)
