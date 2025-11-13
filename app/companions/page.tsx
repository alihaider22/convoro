// @ts-nocheck
import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { SearchParams } from "next/dist/server/request/search-params";

const subjectOptions = [
  { label: "All subjects", value: "all" },
  { label: "Science", value: "Science" },
  { label: "Maths", value: "Maths" },
  { label: "Language", value: "Language" },
  { label: "History", value: "History" },
  { label: "Coding", value: "Coding" },
  { label: "Economics", value: "Economics" },
];

const CompanionsPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const topic = filters?.topic || "";
  const subject = filters?.subject || "";
  const limitParam = filters?.limit || 10;
  const pageParam = filters?.page || 1;

  const companions = await getCompanions({
    topic,
    subject,
    limit: Number(limitParam),
    page: Number(pageParam),
  });

  return (
    <main className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold max-w-full">Companions Library</h1>
        <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
          <SearchInput
            paramKey="topic"
            placeholder="Search companions by topic..."
            className="w-full max-w-xs md:max-w-xs"
          />
          <SubjectFilter
            options={subjectOptions}
            placeholder="Filter by subject"
            triggerClassName="w-full max-w-xs md:w-48"
          />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            backgroundColor={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsPage;
