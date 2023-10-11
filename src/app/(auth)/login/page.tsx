import UserAuthForm from "@/components/UserAuthForm";

export default function LoginPage() {
  return (
      <div className="flex flex-col items-center w-1/2 h-full p-5 m-auto rounded-md shadow-lg place-items-center">
        <div className="">
          <div className="flex flex-col mb-8 space-y-2 font-mono text-center">
            <h3>Login your account</h3>
            <p>Enter yout username below to login your account</p>
          </div>
        </div>
        <UserAuthForm />
      </div>
  );
}
