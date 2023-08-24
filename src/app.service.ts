import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { StripeService } from './stripe/stripe.service';

@Injectable()
export class AppService {
  constructor(private readonly stripeService: StripeService) {}

  // getHello(): string {
  //   return 'Hello World!';
  // }

  getHello(email: string): string {
    return 'Hello ' + email + '!';
  }

  getToken() {
    const uid = '64WDRtj1IzVVrniVD4klRv0qnGo2'; // Replace with the UID of the user you want to authenticate

    admin
      .auth()
      .createCustomToken(uid)
      .then((customToken) => {
        // This is the Firebase authentication token for the user
        console.log(customToken);
      })
      .catch((error) => {
        console.error('Error creating custom token:', error);
      });
  }

  getCustomers() {
    return this.stripeService.stripe.customers.list();
  }
}
