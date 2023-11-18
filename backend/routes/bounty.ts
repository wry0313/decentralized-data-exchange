import express, { Request, Response } from "express";
import { db } from "../db";
import { Bounty, BountyResponse, BountyResponseSchema, BountySchema } from "../types";

const router = express.Router();

async function getBounty(req: Request, res: Response) {
  try {
    const collection = db.collection<Bounty>("bounty");
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
    const collection = db.collection<Bounty>("bounty");
    const result = await collection.insertOne(newBounty);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

router.post("/bounty", postBounty);

async function postBountyResponse(req: Request, res: Response) {
  try {
    const newBountyResponse = BountyResponseSchema.parse(req.body);
    const collection = db.collection<BountyResponse>("bountyResponse");
    const result = await collection.insertOne(newBountyResponse);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export default router;