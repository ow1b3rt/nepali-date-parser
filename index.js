import parseYYYYMMDD from "./patterns/yyyy_mm_dd.js";
import parseDDMMYYYY from "./patterns/dd_mm_yyyy.js";
import parseMonthName from "./patterns/month_name.js";
import parseNepaliMonth from "./patterns/nepali_month.js";

const PARSERS = [
    parseYYYYMMDD,
    parseDDMMYYYY,
    parseMonthName,
    parseNepaliMonth
];

export function parseBS(input) {

    if (!input || typeof input !== "string") {
        return null;
    }

    const candidates = [];

    for (const parser of PARSERS) {

        try {

            const result = parser(input);

            if (result) {
                candidates.push(result);
            }

        } catch (_) {
            // Ignore parser errors
        }

    }

    if (candidates.length === 0) {
        return null;
    }

    candidates.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return b.iso.localeCompare(a.iso);

    });

    return candidates[0];

}

export default parseBS;
