import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <SignIn signUpUrl="/sign-up" afterSignInUrl="/home" />
    </main>
  )
  // return <p>Sign In</p>
}
