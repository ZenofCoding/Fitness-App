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
  function (req, accessToken, refreshToken, results, done) {

    // Set the provider data and include tokens
    var providerData = results._json;
    var fullName = providerData.user.fullName;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    var splitName = fullName.split(' ');

    // Create the user OAuth profile
    var providerUserProfile = {
      firstName: splitName[0],
      lastName: splitName[1],
      displayName: splitName[0] + ' ' + splitName[1],
      email: results.emails ? results.emails[0].value : undefined,
      username: splitName[1] + providerData.user.encodedId,
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      profileImageURL: (providerData.user.avatar) ? providerData.user.avatar : undefined,
      // jscs:enable
      provider: 'fitbit',
      providerIdentifierField: 'id',
      providerData: providerData
    };

    // Save the user OAuth profile
    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};