import { setupWorker } from "msw";
import handlers from "./users";

export const worker = setupWorker(...handlers)