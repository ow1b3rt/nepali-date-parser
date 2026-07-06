import { BSToAD } from "bikram-sambat-js";

export function validateYear(year) {
    return Number.isInteger(year)
        && year >= 1970
        && year <= 2200;
}

export function validateMonth(month) {
    return Number.isInteger(month)
        && month >= 1
        && month <= 12;
}

export function validateDay(day) {
    return Number.isInteger(day)
        && day >= 1
        && day <= 32;
}

export function validateBSDate(year, month, day) {

    if (!validateYear(year)) {
        return false;
    }

    if (!validateMonth(month)) {
        return false;
    }

    if (!validateDay(day)) {
        return false;
    }

    try {

        const bs = [
            year,
            String(month).padStart(2, "0"),
            String(day).padStart(2, "0")
        ].join("-");

        BSToAD(bs);

        return true;

    } catch {

        return false;

    }

}