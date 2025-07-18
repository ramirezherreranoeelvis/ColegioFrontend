import {
      ApplicationConfig,
      provideBrowserGlobalErrorListeners,
      provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from '../../infrastructure/routes/app.routes';
import {
      provideClientHydration,
      withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
      providers: [
            provideBrowserGlobalErrorListeners(),
            provideZonelessChangeDetection(),
            provideRouter(routes, withComponentInputBinding()),
            provideClientHydration(withEventReplay()),
            provideHttpClient()
      ],
};
