import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'jsonwebtoken'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: '842183907347660851',
      clientSecret: 'Ei8npuktRqVt86zd-dHZdy6nF3bVYDSx',
    }),
    // ...add more providers here
  ],
    jwt: {
    },
    callbacks: {
    
      jwt: async (token, user, account, profile, isNewUser) => {
        if (profile) {
          console.log(profile)
          token = {
            ...token,
            id: profile.discriminator,
            uid: profile.id,
          }
        }
        return Promise.resolve(token);
      },
      session: async (session, token) => {
        const encodedToken = jwt.sign(token, 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw', { algorithm: 'HS256'});
        if (token) {
          session.user.id = token.id;
          session.user.uid = token.uid;
        }
        return session;
      }
    },

    debug: true,

})