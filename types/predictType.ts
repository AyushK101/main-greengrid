import { number, z } from "zod";

export const predictSchema = z.object({
  relativeCompactNess: z.string(),
  surfaceArea: z.string(),
  wallArea: z.string(),
  roofArea: z.string(),
  overallHeight: z.string(),
  orientation: z.string(),
  glazingArea: z.string(),
  distribution: z.string(),
});

export type predictLoadType = z.infer<typeof predictSchema>;

/** 
 * @orientationMapping
 * 2 = North
 * 3 = East
 * 4 = South
 * 5 = West
 */

export type resType = { heating_load: string, cooling_load: string, fan_hours: string, ac_hours: string }
