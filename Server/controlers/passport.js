const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback ) {
			callback(null, profile);
		}
	)
);


passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FB_CLIENT_ID,
			clientSecret: process.env.FB_CLIENT_SECRET,
			callbackURL: "/auth/facebook/callback",
			//profileFields: ['id', 'displayName', 'photos', 'email'],
		},
		function (accessToken, refreshToken, profile, callback ) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});