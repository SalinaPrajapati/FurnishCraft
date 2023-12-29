import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
      <div className="flex flex-col items-center w-4/5 md:w-1/2 h-full p-5 m-auto rounded-md shadow-lg place-items-center">
        <div className="">
          <div className="flex flex-col mb-8 space-y-2 text-center">
            <h3>SignUp your account</h3>
            <p>Enter your Detail</p>
          </div>
        </div>
        <SignUpForm />
      </div>
  );
}
