import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Import firebase-admin
import * as admin from 'firebase-admin';
import * as serviceAccount from './firestore-sa-key.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
