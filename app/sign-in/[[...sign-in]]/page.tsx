import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-[90vh]">
      <SignIn signUpUrl="/sign-up" />
    </main>
  );
};

export default page;
