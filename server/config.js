var path = require('path');

module.exports = {
  postgres: {
    dbUrl: 'postgres://username:password@host:port/database'
  },
  security: {
    dbName: 'cepal_test',                                   // Not used
    usersCollection: 'users'                            // not used
  },
  server: {
    listenPort: 8888,                                   // The port on which the server is to listen (means that the app is at http://localhost:8888 for instance)
    distFolder: path.resolve(__dirname, '../client/dist'),  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    staticUrl: '/app',                               // The base url from which we serve static files (such as js, css and images)
    cookieSecret: 'angular-app',
    workers: 4                        // The secret for encrypting the cookie
  },
  eventConfiguration:{
    eventcodes:["AP","SP","DP","PB"],//These are valid event codes. If any other event codes are used, the registration will throw validation error. For new options, add the option here
    sponsorshipOptions:["Platinum","Gold","Silver","Bronze"] //These are valid sponsorship options. If any other option are used, the registration will throw validation error. For new options, add the option here
  }
};
