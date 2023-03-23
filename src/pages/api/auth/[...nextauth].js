import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_ID;
  const clientSecret = process.env.GOOGLE_SECRET;
  return { clientId, clientSecret };
}

function getFacebookCredentials() {
  const clientId = process.env.FACEBOOK_ID;
  const clientSecret = process.env.FACEBOOK_SECRET;

  return {
    clientId,
    clientSecret,
  };
}

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/login',
  },
  providers: [
    //Google Provider
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
    FacebookProvider({
      clientId: getFacebookCredentials().clientId,
      clientSecret: getFacebookCredentials().clientSecret,
    }),
    // ...add more providers here
  ],
  callbacks: {
    // async session({ token, session }) {
    //   if (token) {
    //     session.user.id = token.id;
    //     session.user.name = token.name;
    //     session.user.email = token.email;
    //     session.user.image = token.picture;
    //   }
    //   return session;
    // },
    async redirect() {
      return '/';
    },
  },
};

export default NextAuth(authOptions);
