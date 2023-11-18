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