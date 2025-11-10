"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SubjectOption {
  label: string;
  value: string;
}

interface SubjectFilterProps {
  options: SubjectOption[];
  paramKey?: string;
  resetPageParam?: string;
  placeholder?: string;
  triggerClassName?: string;
  clearValue?: string;
}

export default function SubjectFilter({
  options,
  paramKey = "subject",
  resetPageParam = "page",
  placeholder = "Filter by subject",
  triggerClassName,
  clearValue = "all",
}: SubjectFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const searchParamsString = searchParams.toString();
  const currentValue = searchParams.get(paramKey) ?? "";
  const effectiveValue = currentValue || clearValue;

  const handleValueChange = (nextValue: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParamsString);

      if (nextValue && nextValue !== clearValue) {
        params.set(paramKey, nextValue);
      } else {
        params.delete(paramKey);
      }

      if (resetPageParam) {
        params.delete(resetPageParam);
      }

      params.sort();
      const queryString = params.toString();
      const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
      const currentUrl = searchParamsString
        ? `${pathname}?${searchParamsString}`
        : pathname;

      if (nextUrl === currentUrl) {
        return;
      }

      router.replace(nextUrl);
    });
  };

  return (
    <Select
      value={effectiveValue}
      onValueChange={handleValueChange}
      disabled={isPending}
    >
      <SelectTrigger
        className={cn("w-full md:w-48", triggerClassName)}
        aria-label="Filter companions by subject"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
