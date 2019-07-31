import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
/**
 * Packages
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * Custom services, components, etc.
 */
import { AppComponent } from './app.component';
import { ToastService, NewsletterService } from './services';
import { ToastsComponent, NotificationsComponent } from './components';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToastsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule
  ],
  providers: [
    ToastService,
    NewsletterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
