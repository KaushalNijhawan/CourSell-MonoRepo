import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_CREDENTIALS as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRETE as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'xyz@gmail.com' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                console.log(req.body);

                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 3600
    },
    jwt: {
        encryption: true
    }
}

export default NextAuth(authOptions);