import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

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
          token = {
            ...token,
            id: profile.discriminator,
          }
          console.log(profile);
        }
        return token;
      },
      session: async (session, token) => {
        if (token) {
          session.user.id = token.id;
        }
        return session;
      }
    }

})