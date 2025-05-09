import moment, { Moment } from "moment";
import { iGreetingAndDate } from "@/interfaces/interfaces";

export const getGreetingAndDate = (): iGreetingAndDate => {
    const current: Moment = moment();
    const hour: number = current.hour();
    const greeting: string = `Good ${hour < 6
        ? "night"
        : hour < 12
            ? "morning"
            : hour < 17
                ? "afternoon"
                : hour < 22
                    ? "evening"
                    : "night"
        }!`;
    const formattedDate: string = current.format("Do MMMM YYYY, dddd");
    return { greeting, formattedDate };
};
