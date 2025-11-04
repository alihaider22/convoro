import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default page;
