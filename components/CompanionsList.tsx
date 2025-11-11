import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { getSubjectColor } from "@/lib/utils";

interface CompanionsListProps {
  companions: Companion[];
}

export default function CompanionsList({ companions }: CompanionsListProps) {
  console.log(companions);
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
          {companions.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell>
                <Link href={`/companions/${companion.id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg p-2"
                      style={{
                        backgroundColor: getSubjectColor(companion.subject),
                      }}
                    >
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        alt={companion.subject}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{companion.name}</h3>
                      <p className="text-sm">{companion.topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge">{companion.subject}</div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-gray-600 font-medium">
                  {companion.duration} mins
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
