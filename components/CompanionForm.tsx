"use client";
import { useForm, Controller } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCompanion } from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";

const subjects = [
  "Science",
  "Maths",
  "Language",
  "History",
  "Coding",
  "Economics",
];

export interface CompanionFormData {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

const CompanionForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<CompanionFormData>({
    defaultValues: {
      voice: "male",
      style: "formal",
      duration: 10,
    },
  });

  const onSubmit = async (data: CompanionFormData) => {
    const companion = await createCompanion(data);
    redirect(`/companions/${companion.id}`);
  };

  return (
    <div className="w-full h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6 space-y-6"
      >
        <h1 className="text-3xl font-bold mb-6">Create New Companion</h1>

        <Field>
          <FieldLabel htmlFor="companionName">Companion Name</FieldLabel>
          <FieldContent>
            <Input
              id="companionName"
              {...register("name", {
                required: "Companion name is required",
                minLength: {
                  value: 3,
                  message: "Companion name must be at least 3 characters",
                },
              })}
              placeholder="Enter companion name"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <FieldError>{errors.name.message}</FieldError>}
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <FieldContent>
            <Controller
              name="subject"
              control={control}
              rules={{
                required: "Please select a subject",
              }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="subject" className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.subject && (
              <FieldError>{errors.subject.message}</FieldError>
            )}
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="topic">
            What should the companion help with
          </FieldLabel>
          <FieldContent>
            <Textarea
              id="topic"
              {...register("topic", {
                required: "Please describe what the companion should help with",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              placeholder="Describe what the companion should help with"
              aria-invalid={errors.topic ? "true" : "false"}
            />
            {errors.topic && <FieldError>{errors.topic.message}</FieldError>}
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="voice">Voice</FieldLabel>
          <FieldContent>
            <Select
              value={watch("voice")}
              onValueChange={(value) => setValue("voice", value)}
            >
              <SelectTrigger id="voice" className="w-full">
                <SelectValue placeholder="Select voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="style">Style</FieldLabel>
          <FieldContent>
            <Select
              value={watch("style")}
              onValueChange={(value) => setValue("style", value)}
            >
              <SelectTrigger id="style" className="w-full">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="duration">
            Estimated session duration in minutes
          </FieldLabel>
          <FieldContent>
            <Input
              id="duration"
              type="number"
              {...register("duration", {
                required: "Duration is required",
                min: {
                  value: 1,
                  message: "Duration must be at least 1 minute",
                },
                max: {
                  value: 120,
                  message: "Duration cannot exceed 120 minutes",
                },
              })}
              placeholder="Enter duration in minutes"
              min="1"
              aria-invalid={errors.duration ? "true" : "false"}
            />
            {errors.duration && (
              <FieldError>{errors.duration.message}</FieldError>
            )}
          </FieldContent>
        </Field>

        <Button type="submit" variant="default" className="w-full mt-4">
          Build Your Companion
        </Button>
      </form>
    </div>
  );
};

export default CompanionForm;
