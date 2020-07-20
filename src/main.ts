import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const admin = require("firebase-admin");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // use \\ if windows // if linux
  var serviceAccount = require(process.cwd() + "\\serviceAccountFile.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<Apphost>.firebaseio.com"
  });
}
bootstrap();
