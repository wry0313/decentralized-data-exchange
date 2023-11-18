import express, { Request, Response } from "express";
import { db } from "../db";
import { Bounty, BountySchema } from "../types";

const router = express.Router();

async function getBounty(req: Request, res: Response) {
  try {
    const collection = db.collection<Bounty>("bounties");
    const bountyItems = await collection.find({}).toArray();
    res.status(200).json(bountyItems);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

router.get("/bounty", getBounty);

async function postBounty(req: Request, res: Response) {
  try {
    const newBounty = BountySchema.parse(req.body);
    const collection = db.collection<Bounty>("bounties");
    const result = await collection.insertOne(newBounty);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

router.post("/bounty", postBounty);

export default router;