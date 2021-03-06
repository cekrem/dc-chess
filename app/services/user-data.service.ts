declare const tokGen;
declare const firebase;

import {ApplicationRef, Injectable} from "angular2/core";
import {Headers, Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserDataService {
  private _app: ApplicationRef;
  private _http: Http;
  private _baseUrl: string;
  private _baseRef: Firebase;
  private _userRef: Firebase;
  private _user: FirebaseAuthData;
  private _observer: any;

  public userData: any;
  public subscription: Observable<any>;

  constructor(app: ApplicationRef, http: Http) {
    this._app = app;
    this._http = http;
    this._baseRef = firebase.database().ref("users");

    this.subscription = new Observable((observer) => {
      this._observer = observer;
    }).share();

    firebase.auth().onAuthStateChanged((authData) => {
      if (authData) {
        console.log("User is logged in: " + authData.uid);
        this.setUser(authData.uid);
        this._user = authData;
      } else {
        console.log("User is logged out!");
        this._userRef = null;
        this._user = null;
        this.userData = null;
      }
    });

    this.subscription.subscribe((data) => {
      console.log(data);
      this.userData = data || {};
    });
  }

  tryDemo() {
    return firebase.auth().signInAnonymously();
  }

  login(creds) {
    return new Promise((resolve, reject) => {
      // Ignore empty requests
      if (!creds.user || !creds.license) {
        reject("");
      }

      // Don't login twice! :)
      if (this._userRef) {
        resolve("already logged in!");
      }

      // login with account
      let headers = new Headers();
      headers.append(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
      );

      let payload = "user=" + creds.user + "&license=" + creds.license;

      this._http
          .post("http://dc-chess.com/login/index.php", payload, {
            headers: headers,
          })
          .map((res) => res.json())
          .subscribe((res) => {
            if (res.length < 25) {
              reject(res);
            } else {
              // Login with token
              this._baseRef.authWithCustomToken(res, (error, authData) => {
                if (error) {
                  reject(error);
                } else {
                  console.log("Logged in as " + creds.user);
                  resolve("Logged in as user!");
                }
              });
            }
          });
    });
  }

  logout() {
    firebase.auth().signOut()
  }

  getAuthAsync(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((authData) => {
        if (authData) {
          resolve(authData);
        } else {
          reject("Not logged in!");
        }
      });
    });
  }

  private setUser(uid: string = "demo") {
    console.log("setting user to " + uid);

    // set the userRef
    this._userRef = this._baseRef.child(uid);

    // and setup subscription as well
    this._userRef.on("value", (snapshot) => {
      this._observer.next(snapshot.val());
      this._app.tick(); // I THINK THIS WORKS! :D
    });

    // set licenseStart
    let licenseStartRef = this._userRef.child("licenseStart");
    licenseStartRef.once("value", (snapshot) => {
      let licenseStart = snapshot.val();
      if (!licenseStart) {
        console.log("First login!");
        licenseStartRef.set(Date.now());
      }
    });

    // if in demo mode
    if (uid.length > 32) {
      console.log("Setting up demo timer...");
      this._userRef.onDisconnect().remove();

      setTimeout(() => {
        alert("Your time is up!");
        this.logout();
        window.location.assign("http://dc-chess.com");
      }, 300000);
    } else {
      this._userRef.onDisconnect().cancel();
    }
  }

  remove(path: string = "failsafe") {
    let child = this._userRef.child(path);

    child.remove();
  }

  save(path: string, data) {
    let child = this._userRef.child(path);

    child.update(data);
  }

  push(path: string, data?) {
    let child = this._userRef.child(path);

    return child.push(data);
  }
}
