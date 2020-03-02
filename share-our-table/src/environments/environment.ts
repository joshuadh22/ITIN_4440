// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const config = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDm8veR-6GzzvNLZD5DZNhU8eIEtW-6SqI",
      authDomain: "share-our-table.firebaseapp.com",
      databaseURL: "https://share-our-table.firebaseio.com",
      projectId: "share-our-table",
      storageBucket: "share-our-table.appspot.com",
      messagingSenderId: "831446005912",
      appId: "1:831446005912:web:c5281990f7e8de5a5d78ed",
  }
};
