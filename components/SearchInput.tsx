"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<typeof Input>;

interface SearchInputProps
  extends Omit<InputProps, "value" | "defaultValue" | "onChange"> {
  paramKey?: string;
  resetPageParam?: string;
  debounceMs?: number;
}

export default function SearchInput({
  paramKey = "topic",
  resetPageParam = "page",
  debounceMs = 300,
  className,
  ...props
}: SearchInputProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const searchParamsString = searchParams.toString();
  const paramValue = searchParams.get(paramKey) ?? "";
  const [value, setValue] = useState(paramValue);

  useEffect(() => {
    setValue(paramValue);
  }, [paramValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      startTransition(() => {
        const params = new URLSearchParams(searchParamsString);

        if (value) {
          params.set(paramKey, value);
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
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [
    value,
    debounceMs,
    pathname,
    router,
    paramKey,
    resetPageParam,
    searchParamsString,
    startTransition,
  ]);

  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={cn("w-full max-w-sm", isPending && "animate-pulse", className)}
      aria-label="Search companions by topic"
      {...props}
    />
  );
}
