import normalize from "../normalize.js";
import { ENGLISH_MONTHS } from "../constants.js";
import { validateBSDate } from "../validator.js";

function buildResult(year, month, day, format, source) {

    return {
        score: 90,

        year,
        month,
        day,

        iso: [
            year,
            String(month).padStart(2, "0"),
            String(day).padStart(2, "0")
        ].join("-"),

        format,

        source
    };

}

export default function parseMonthName(input) {

    const text = normalize(input);

    let match;

    //
    // 18 Baisakh 2083
    //
    match = text.match(
        /^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i
    );

    if (match) {

        const day = Number(match[1]);

        const month =
            ENGLISH_MONTHS[
            match[2].toLowerCase()
            ];

        const year = Number(match[3]);

        if (
            month &&
            validateBSDate(year, month, day)
        ) {

            return buildResult(
                year,
                month,
                day,
                "DD MONTH YYYY",
                input
            );

        }

    }

    //
    // Baisakh 18 2083
    //
    match = text.match(
        /^([a-z]+)\s+(\d{1,2})\s+(\d{4})$/i
    );

    if (match) {

        const month =
            ENGLISH_MONTHS[
            match[1].toLowerCase()
            ];

        const day = Number(match[2]);

        const year = Number(match[3]);

        if (
            month &&
            validateBSDate(year, month, day)
        ) {

            return buildResult(
                year,
                month,
                day,
                "MONTH DD YYYY",
                input
            );

        }

    }

    //
    // 2083 Baisakh 18
    //
    match = text.match(
        /^(\d{4})\s+([a-z]+)\s+(\d{1,2})$/i
    );

    if (match) {

        const year = Number(match[1]);

        const month =
            ENGLISH_MONTHS[
            match[2].toLowerCase()
            ];

        const day = Number(match[3]);

        if (
            month &&
            validateBSDate(year, month, day)
        ) {

            return buildResult(
                year,
                month,
                day,
                "YYYY MONTH DD",
                input
            );

        }

    }

    return null;

}