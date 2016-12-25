import { Router } from "express";

import DemoService from "../logic/demoService";

const router = Router();
const demoService = new DemoService();

router.get("/", async (req, res, next) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    if (isNaN(from))
    {
        res.status(400).send("the params from must be a Number.");
        return;
    }
    if (isNaN(to))
    {
        res.status(400).send("the params to must be a Number.");
        return;
    }
    console.log(from, to);
    try {
        const result = await demoService.getIndexByTimeRange(new Date(from), new Date(to));
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }

    console.log("get request");
});

router.get("/min-demo/", async (req, res, next) => {
    // min demo
    res.send("ok i get min-demo request.");
});

export default router;
