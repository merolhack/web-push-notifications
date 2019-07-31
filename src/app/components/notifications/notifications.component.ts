import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../../services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NewsletterService]
})
export class NotificationsComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BITLlO1s0H6GAcDXBE2JqXgzAaDk-hamCOcsIjM5FhBb0zV3hb0DWIHjJww3__P1HYKtfeOvObxwvtqQ4EFYZL0';

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) { }

  ngOnInit() {
  }

  /**
   * Subcribe to the notifications service
   */
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

  /**
   * Send a new push message
   */
  sendNewsletter() {
    console.log('Sending Newsletter to all Subscribers ...');
    this.newsletterService.send().subscribe();
  }
}
