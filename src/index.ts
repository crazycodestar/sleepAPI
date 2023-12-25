// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;

const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", async (req: Request, res: Response) => {
	const time = req.query.sleep;
	if (typeof time !== "string") return res.sendStatus(400);
	const timeInt = parseInt(time);
	await sleep(timeInt);
	res.sendStatus(200);
});

app.use((req, res) => {
	console.log("responding with not found");
	res.sendStatus(404);
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
