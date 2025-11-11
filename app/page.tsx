import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTACard from "@/components/CTACard";
import { getCompanions } from "@/lib/actions/companion.actions";
import { completedLessons } from "@/lib/types";
import { getSubjectColor } from "@/lib/utils";

export default async function Home() {
  const companions = await getCompanions({ limit: 3 });
  return (
    <main>
      {/* Dashboard Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Featured Companions Section */}
      <section className="companions-grid mb-12">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            title={companion.title}
            topic={companion.topic}
            duration={companion.duration}
            subject={companion.subject}
            backgroundColor={getSubjectColor(companion.subject)}
            bookmarkIcon={companion.bookmarkIcon}
          />
        ))}
      </section>

      {/* Bottom Section - Recently Completed Lessons and CTA */}
      <section className="home-section">
        <CompanionsList lessons={completedLessons} />
        <CTACard />
      </section>
    </main>
  );
}
