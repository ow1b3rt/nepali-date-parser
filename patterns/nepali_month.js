import normalize from "../normalize.js";
import { NEPALI_MONTHS } from "../constants.js";
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

export default function parseNepaliMonth(input) {

    const text = normalize(input);

    let match;

    //
    // १८ बैशाख २०८३
    //
    match = text.match(
        /^(\d{1,2})\s+([^\d\s]+)\s+(\d{4})$/u
    );

    if (match) {

        const day = Number(match[1]);

        const month =
            NEPALI_MONTHS[
            match[2]
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
    // बैशाख १८ २०८३
    //
    match = text.match(
        /^([^\d\s]+)\s+(\d{1,2})\s+(\d{4})$/u
    );

    if (match) {

        const month =
            NEPALI_MONTHS[
            match[1]
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
    // २०८३ बैशाख १८
    //
    match = text.match(
        /^(\d{4})\s+([^\d\s]+)\s+(\d{1,2})$/u
    );

    if (match) {

        const year = Number(match[1]);

        const month =
            NEPALI_MONTHS[
            match[2]
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