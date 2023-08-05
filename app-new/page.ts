import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import Register from "./components/Register"

export default async function Home() {
  const session = await getServerSession(options)

  console.log(session);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
       <Register />
      )}
    </>
  )
}


