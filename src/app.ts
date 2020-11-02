require("dotenv").config();
import express from "express";
import { BadRequestError } from "./response-helpers/bad-request-error";
import { ForbiddenError } from "./response-helpers/forbidden-helper";
import { InternalServerError } from "./response-helpers/internal-server-error";
import { NotFoundError } from "./response-helpers/not-found-error";
import { AlreadyExistsError } from "./response-helpers/already-exists-helper";

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof AlreadyExistsError) {
    res.status(204).json({});
  } else if (err instanceof NotFoundError) {
    res.status(404).json({ errorMessage: err.message, name: err.name, status: err.status });
  } else if (err instanceof BadRequestError) {
    res.status(400).json({ errorMessage: err.message, name: err.name, status: err.status });
  } else if (err instanceof ForbiddenError) {
    res.status(403).json({ errorMessage: err.message, name: err.name, status: err.status });
  } else if (err instanceof InternalServerError) {
    console.log(`${new Date().toISOString()} - error occured: ${err.errorId} - ${JSON.stringify(err.message)}`);
    const errorMessage = `Error occured. ID: ${err.errorId}`;
    res.status(500).json({ errorMessage: errorMessage });
  } else {
    console.log(`${new Date().toISOString()} - error occured: ${JSON.stringify(err.message)}`);
    res.status(500).json({ errorMessage: `Could not process your request at the moment.` });
  }

  next();
});

app.listen(3004, function () {
  console.log("aws express server listening at 3004");
});

export default app;
