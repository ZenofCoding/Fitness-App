'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  url = require('url'),
  FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy,
  users = require('../../controllers/users.server.controller');

module.exports = function (config) {
  // Use github strategy
  passport.use(new FitbitStrategy({
    clientID: '22828X',
    clientSecret: 'd24dfc6f7bb64f374459e04747b67cf8',
    callbackURL: '/api/auth/fitbit/callback'
  },
  function (req, accessToken, refreshToken, profile, done) {

    // Set the provider data and include tokens
    var providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    console.log(providerData);

    // Create the user OAuth profile
    var providerUserProfile = {
      firstName: providerData.user.displayName,
      lastName: providerData.user.displayName,
      displayName: providerData.user.displayName,
      email: "fitbit@fitbit.com",
      username: "fitbit1",
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      profileImageURL: (providerData.user.avatar) ? providerData.user.avatar : undefined,
      // jscs:enable
      provider: 'fitbit',
      providerIdentifierField: 'id',
      providerData: providerData
    };

    console.log("PROVIDERRRRRRRRR: " + providerUserProfile);

    // Save the user OAuth profile
    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};