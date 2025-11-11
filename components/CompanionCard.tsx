import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  title: string;
  topic: string;
  duration: string;
  subject: string;
  backgroundColor: string;
  bookmarkIcon?: string;
}

export default function CompanionCard({
  id,
  title,
  topic,
  duration,
  subject,
  backgroundColor,
  bookmarkIcon = "/icons/bookmark.svg",
}: CompanionCardProps) {
  return (
    <div className="companion-card" style={{ backgroundColor }}>
      {/* Subject tag */}
      <div className="subject-badge absolute top-4 left-4">{subject}</div>

      {/* Bookmark icon */}
      <div className="companion-bookmark absolute top-4 right-4">
        <Image src={bookmarkIcon} alt="Bookmark" width={16} height={16} />
      </div>

      {/* Content area with top padding for absolute positioned elements */}
      <div className="pt-10 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-xl font-bold">{title}</h3>

        {/* Topic */}
        <p className="text-sm">{topic}</p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm">
          <Image src="/icons/clock.svg" alt="Clock" width={16} height={16} />
          <span>{duration} duration</span>
        </div>
      </div>

      {/* Launch Lesson Button */}
      <Link href={`/companions/${id}`} className="btn-primary">
        Launch Lesson
      </Link>
    </div>
  );
}
