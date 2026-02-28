import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export interface Inquiry extends InsertInquiry {
  id: number;
  createdAt: Date;
}

export type CreateInquiryRequest = InsertInquiry;
export type InquiryResponse = Inquiry;
