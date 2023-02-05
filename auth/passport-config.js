import passport from 'passport';
import passportJwt from 'passport-jwt';
import dotenv from 'dotenv';
dotenv.config();

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

import User from '../database/models/user-model.js';

function verify(jwtPayload, done) {
  User.findById(jwtPayload.id, (err, user) => {
    if (err) return done(err, false);
    if (user) done(null, user);
    else done(null, false);
  })
}

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;
const jwtStrategy = new JwtStrategy(options, verify);
passport.use(jwtStrategy);

export default passport;
