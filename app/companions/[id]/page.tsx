import { getCompanion } from "@/lib/actions/companion.actions";
import Image from "next/image";
import { getBackgroundColor } from "../page";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CompanionDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const {
    id: companionId,
    title,
    topic,
    duration,
    subject,
  } = await getCompanion(id);

  const { userId } = await auth();
  if (!userId) {
    redirect(`/sign-in?redirect_url=/companions/${id}`);
  }

  if (!companionId) {
    return <div>Companion not found</div>;
  }

  return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
            style={{ backgroundColor: getBackgroundColor(companionId) }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt="Companion icon"
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">{title}</p>
              <div className="subject-badge max-md:hidden">{subject}</div>
            </div>
            <p className="text-lg">{topic}</p>
          </div>
        </div>
        <div className="items-start text-2xl max-md:hidden">
          {duration} minutes
        </div>
      </article>
    </main>
  );
};

export default CompanionDetailPage;
