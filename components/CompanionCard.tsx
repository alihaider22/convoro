"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import {
  bookmarkCompanion,
  unbookmarkCompanion,
} from "@/lib/actions/companion.actions";

interface CompanionCardProps {
  id: string;
  title: string;
  topic: string;
  duration: string;
  subject: string;
  backgroundColor: string;
  bookmarked?: boolean;
}

export default function CompanionCard({
  id,
  title,
  topic,
  duration,
  subject,
  backgroundColor,
  bookmarked: initialBookmarked = false,
}: CompanionCardProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [isPending, startTransition] = useTransition();

  const handleBookmarkToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newBookmarked = !bookmarked;
    setBookmarked(newBookmarked); // Optimistic update

    startTransition(async () => {
      try {
        if (newBookmarked) {
          await bookmarkCompanion(id);
        } else {
          await unbookmarkCompanion(id);
        }
      } catch (error) {
        // Revert on error
        setBookmarked(!newBookmarked);
        console.error("Failed to toggle bookmark:", error);
      }
    });
  };

  return (
    <div className="companion-card" style={{ backgroundColor }}>
      {/* Subject tag */}
      <div className="subject-badge absolute top-4 left-4">{subject}</div>

      {/* Bookmark icon */}
      <button
        onClick={handleBookmarkToggle}
        disabled={isPending}
        className="companion-bookmark absolute top-4 right-4"
        aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        <Image
          src={
            bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
          }
          alt={bookmarked ? "Bookmarked" : "Bookmark"}
          width={16}
          height={16}
        />
      </button>

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
