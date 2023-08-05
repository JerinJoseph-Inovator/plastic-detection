import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter you Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter your Password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                let userObject: {id?: string, username?: string, password?: string} = {}
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    if(doc.data().username === credentials?.username) {
                        userObject = {
                            id: `${doc.id}`,
                            username: `${doc.data().username}`,
                            password: `${doc.data().password}`
                        }
                    }
                });

                if (credentials?.username === userObject.username && credentials?.password === userObject.password) {
                    return userObject
                } else {
                    return null
                }
            }
        })
    ],
}

