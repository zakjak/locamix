import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
        <SignUp />
    </div>
  )
}

export default page