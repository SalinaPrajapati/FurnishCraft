import SignUpForm from "@/components/forms/SignUpForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center w-1/2 h-full p-5 m-auto rounded-md shadow-lg place-items-center">
      <div className="">
        <div className="flex flex-col mb-8 space-y-2 font-mono text-center">
          <h3>SignUp your account</h3>
          <p>Enter following details</p>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
}
