import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module'; // imports AppModule from src/app.module.ts
import 'zone.js';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(AppModule) // 'boots' AppModule as our application
  .catch((err) => console.error(err));
