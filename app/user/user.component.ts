declare const firebase;
import { Component, OnInit, ApplicationRef } from "angular2/core";
import { Router, RouteParams } from "angular2/router";

import { AsArrayPipe } from "../services/as-array.pipe";

@Component({
  selector: "user",
  templateUrl: "app/user/user.component.html",
  pipes: [AsArrayPipe],
})
export class UserComponent implements OnInit {
  private _router: Router;
  private _baseUrl: string;
  private _userRef: Firebase;

  public user: string;
  public userData: any;
  public noUser: boolean;

  constructor(router: Router, params: RouteParams, app: ApplicationRef) {
    this._router = router;
    this.user = params.get("user");

    this._userRef = firebase.database().ref("users/" + this.user);

    this._userRef.on("value", (snapshot) => {
      this.userData = snapshot.val();
      console.log("userData loaded!");

      if (!this.userData) {
        this.noUser = true;
      } else {
        this.noUser = false;
      }
      app.tick();
    });
  }

  openTournament(path) {
    this._router.navigate([
      "/Tournament",
      {
        tournamentPath: path,
      },
    ]);
  }

  ngOnInit() {}
}
