import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect_url=/companions/new");
  }

  return <CompanionForm />;
};

export default page;
