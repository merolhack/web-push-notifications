import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * we declare that this service should be created
 * by the root application injector.
 */
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  addPushSubscriber(sub: any) {
    return this.http.post('/api/notifications', sub);
  }

  send() {
    return this.http.post('/api/newsletter', null);
  }
}
