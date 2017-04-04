# ng2-component-spinner

## Installation

To install this library, run:

```bash
$ npm install ng2-component-spinner --save
```

## Usage

```bash
$ npm install ng2-component-spinner
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    SpinnerComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use it in your Angular application:

```xml
<h1>
  {{title}}
</h1>
<spinner-component [spinnerShow]="<booleanVariable>"></spinner-component>
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
