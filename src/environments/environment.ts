// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'ec-planos',
    appId: '1:729087978467:web:612bf1fe596e78ec278ed6',
    storageBucket: 'ec-planos.appspot.com',
    apiKey: 'AIzaSyBybrSGHJUV_k7bQeeaO2UW_xblnz4kDbU',
    authDomain: 'ec-planos.firebaseapp.com',
    messagingSenderId: '729087978467',
  },
  production: false,
  backoffice: 'https://ecplanos-bo.ecplanos.com/wp-json/wp/v2/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
