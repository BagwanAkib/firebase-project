<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="https://firebase.google.com/" target="blank"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffirebase.google.com%2Fimages%2Fbrand-guidelines%2Flogo-standard.png&f=1&nofb=1" width="320" alt="Nest Logo" /></a>
</p>

# firebase push notification with nest.js

1. This is demo to create firebase push notification by token
2. To us this you can do following steps:

    1. <a href="https://console.firebase.google.com/">Sign into Firebase</a> using your Google account.
    2. download sdk file form it form existing app Project Settings> service account > Firebase Admin SDK and click on generate new privet key it will download a key file use it for serviceAccountFile.json in main.ts you can create an env variable to give path also.
    ```node
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://<yoru_app_name>.firebaseio.com"
    });
    ```
    copy the same from firebase UI from the same screen and pest in main.ts


    3. Now just take any of the firebase registered token and send message. ```http:\\localhost:3000\<FIREBASE_TOKEN>```



for more firebase guide https://firebase.google.com/docs/admin/setup
## License

  Nest is [MIT licensed](LICENSE).
