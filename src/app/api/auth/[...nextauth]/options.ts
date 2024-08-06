import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || "",
			clientSecret: process.env.GOOGLE_SECRET || "",
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
	],
	callbacks: {
		async jwt({ token, user, session }) {
			console.log("jwt callback", { token, user, session });
			if (user) {
				return {
					...token,
					id: user.id,
				};
			}
			return token;
		},
		async session({ session, token, user }) {
			console.log("session  callback", { token, user, session });
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				},
			};
		},
	},
	secret: process.env.TOKEN_SECRET,
};
