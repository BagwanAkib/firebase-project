import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
const admin = require("firebase-admin");
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/:token")
  getHello(@Param('token') token: string): string {

    var payload = {
      data: {
        myKey1: "ok"
      },
      notification: {
        "title": "<TITLE>",
        "body": "<BODY>",
        "click_action": "FCM_PLUGIN_ACTIVITY"
      }
    };
    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };
    admin.messaging().sendToDevice(token, payload, options).then(
      function (response) {
        console.log("Success" + response)
      }
    ).catch(function (response) {
      console.log("Failed " + response)
    })

    return "Check logs";
  }
}
