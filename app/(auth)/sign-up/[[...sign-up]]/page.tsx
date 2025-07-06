import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp 
        redirectUrl="/dashboard"
        afterSignUpUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </div>
  )
}