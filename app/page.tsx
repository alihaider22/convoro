import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTACard from "@/components/CTACard";
import {
  getCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export default async function Home() {
  const companions = await getCompanions({ limit: 3 });
  const recentSessionsCompanions: Companion[] = await getRecentSessions({
    limit: 10,
  });

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
            title={companion.name}
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
        <CompanionsList companions={recentSessionsCompanions} />
        <CTACard />
      </section>
    </main>
  );
}
