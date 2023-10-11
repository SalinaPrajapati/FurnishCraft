import UserAuthForm from "@/components/UserAuthForm";

export default function LoginPage() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h3>Login your account</h3>
          <p>Enter yout username below to login your accunt</p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
