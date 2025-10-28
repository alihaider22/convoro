import CompanionCard from "@/components/CompanionCard";
import { featuredCompanions } from "@/lib/types";

export default function Home() {
  return (
    <main>
      {/* Dashboard Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Featured Companions Section */}
      <section className="companions-grid mb-12">
        {featuredCompanions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            title={companion.title}
            topic={companion.topic}
            duration={companion.duration}
            subject={companion.subject}
            backgroundColor={companion.backgroundColor}
            bookmarkIcon={companion.bookmarkIcon}
          />
        ))}
      </section>
    </main>
  );
}
