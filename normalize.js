import { NEPALI_DIGITS } from "./constants.js";

function replaceNepaliDigits(text) {
    return text.replace(/[०-९]/g, (digit) => NEPALI_DIGITS[digit]);
}

export default function normalize(input) {

    if (!input || typeof input !== "string") {
        return "";
    }

    let text = input.trim();

    text = text.toLowerCase();

    text = replaceNepaliDigits(text);
    text = text.replace(/[./,_]+/g, "-");


    text = text.replace(/\s+/g, " ");

    text = text.replace(
        /(\d)\s+(?=\d)/g,
        "$1-"
    );

    text = text.replace(/\s*-\s*/g, "-");


    text = text.replace(/-+/g, "-");

    text = text.replace(/^-|-$/g, "");

    return text;
}


