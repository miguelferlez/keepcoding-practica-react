import { z } from "zod";

export const AdvertSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  name: z.string(),
  sale: z.boolean(),
  price: z.number(),
  tags: z.array(z.string()),
});

export type Advert = z.infer<typeof AdvertSchema>;

export const AdvertsSchema = z.array(AdvertSchema);
