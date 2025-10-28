"use client";
import Image from "next/image";
import { CompletedLesson } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface CompletedLessonsTableProps {
  lessons: CompletedLesson[];
}

export default function CompletedLessonsTable({
  lessons,
}: CompletedLessonsTableProps) {
  const router = useRouter();
  return (
    <div className="companion-list">
      <h2 className="text-2xl font-bold text-gray-800">Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lessons</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lessons.map((lesson, index) => (
            <TableRow
              key={lesson.id}
              onClick={() => router.push(`/companions/${lesson.id}`)}
              className="cursor-pointer"
            >
              <TableCell>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg p-2"
                    style={{ backgroundColor: lesson.iconBackground }}
                  >
                    <Image
                      src={lesson.icon}
                      alt={lesson.subject}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Topic: {lesson.topic}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="subject-badge">{lesson.subject}</div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-gray-600 font-medium">
                  {lesson.duration}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
