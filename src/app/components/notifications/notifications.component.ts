import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BITLlO1s0H6GAcDXBE2JqXgzAaDk-hamCOcsIjM5FhBb0zV3hb0DWIHjJww3__P1HYKtfeOvObxwvtqQ4EFYZL0';

  /* constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) { } */

  ngOnInit() {
  }

  /**
   * 
   */
  subscribeToNotifications() {
/*     this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err)); */
  }

}
