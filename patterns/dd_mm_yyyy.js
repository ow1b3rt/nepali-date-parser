import normalize from "../normalize.js";
import { validateBSDate } from "../validator.js";

export default function parseDDMMYYYY(input) {

    const text = normalize(input);

    const match = text.match(
        /^(\d{1,2})-(\d{1,2})-(\d{4})$/
    );

    if (!match) {
        return null;
    }

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);

    if (!validateBSDate(year, month, day)) {
        return null;
    }

    return {

        score: 95,

        year,
        month,
        day,

        iso: [
            year,
            String(month).padStart(2, "0"),
            String(day).padStart(2, "0")
        ].join("-"),

        format: "DD-MM-YYYY",

        source: input

    };

}