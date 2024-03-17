import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClientModule, HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),

    { provide: HttpClient, useClass: HttpClient }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
