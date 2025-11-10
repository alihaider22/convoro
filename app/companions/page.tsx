import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import { getCompanions } from "@/lib/actions/companion.actions";
import { SearchParams } from "next/dist/server/request/search-params";

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
      <section className="flex flex-col gap-4 justify-between md:flex-row md:items-center">
        <h1 className="text-3xl font-bold text-gray-800">Companions Library</h1>
        <SearchInput
          paramKey="topic"
          placeholder="Search companions by topic..."
          className="md:max-w-xs"
        />
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} />
        ))}
      </section>
    </main>
  );
};

export default CompanionsPage;
