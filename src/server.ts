import express, { Application } from "express";
import { env } from "./helpers";
import connectDB from "./config/database";
import logger from "./config/logger";
import routes from "./routes";
import { errorConverter, errorHandler } from "./middlewares/error";
import cors from "cors";

const port = env.get("PORT") || 3000;

const app: Application = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// enable cors
app.use(cors());

app.use("/v1", routes);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
