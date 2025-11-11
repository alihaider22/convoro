"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";
import { CompanionFormData } from "@/components/CompanionForm";

export const createCompanion = async (formData: CompanionFormData) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data) {
    throw new Error(error.message || "Failed to create a companion");
  }

  return data[0];
};

export const getCompanions = async ({
  limit = 10,
  page = 1,
  topic = "",
  subject = "",
}: {
  limit?: number;
  page?: number;
  topic?: string;
  subject?: string;
}) => {
  const supabase = createSupabaseClient();

  let query = supabase.from("companions").select();

  if (topic && subject) {
    query = query.ilike("topic", `%${topic}%`).ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.ilike("topic", `%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, error } = await query;
  if (error || !data) {
    throw new Error(error.message || "Failed to get companions");
  }
  return data;
};

export const getCompanion = async (id: string) => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);
  if (error || !data) {
    throw new Error(error.message || "Failed to get companion");
  }
  return data[0];
};

export const addToSessionHistory = async (companionId: string) => {
  const { userId } = await auth();
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .insert({ companion_id: companionId, user_id: userId });

  if (error) {
    throw new Error(error.message || "Failed to add to session history");
  }

  return data;
};
