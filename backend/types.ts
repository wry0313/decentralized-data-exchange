import * as z from 'zod';

// Define the Zod schema for a Bounty
export const BountySchema = z.object({
  title: z.string(),
  location: z.object({
    type: z.string(),
    coordinates: z.array(z.number()),
  }),
  description: z.string(),
  created_at: z.date(),
  
});

// Type alias for the validated data
export type Bounty = z.infer<typeof BountySchema>;

export const BountyResponseSchema = z.object({
  bounty_id: z.string(),
  answerer_user_id: z.string(),
  answer_content: z.string(),
  images: z.array(z.string()), // Array of image URLs
  created_at: z.date(),
});

export type BountyResponse = z.infer<typeof BountyResponseSchema>;
