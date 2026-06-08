import { z } from "zod";

const todoSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "Title is required" })
      .max(100, { message: "Title must be less than 100 characters" }),

    description: z
      .string()
      .min(1, { message: "Description is required" })
      .max(750, { message: "Description must be less than 750 characters" }),

    date: z.string().min(1, { message: "Date is required" }),

    startTime: z.string().min(1, { message: "Start Time is required" }),

    endTime: z.string().min(1, { message: "End Time is required" }),

    attachmentLink: z.string().optional(),

    isImportant: z.boolean(),
  })
  .refine((data) => data.startTime < data.endTime, {
    message: "End time must be after start time",
    path: ["endTime"],
  });

export type TodoFormValues = z.infer<typeof todoSchema>;
export { todoSchema };
