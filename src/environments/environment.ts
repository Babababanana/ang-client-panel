// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDC7y0AdPGrVZ6wxCBvmEOGy5yhlIxQlA8',
    authDomain: 'client-panel-prod-c655d.firebaseapp.com',
    databaseURL: 'https://client-panel-prod-c655d.firebaseio.com',
    projectId: 'client-panel-prod-c655d',
    storageBucket: 'client-panel-prod-c655d.appspot.com',
    messagingSenderId: '358591637782'
  }
};
