//funciona peeeeeero... cantidad de días por cada mes (no son siempre 30), años bisiestos, etc.
//
export function daysToYMD(days) {
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const daysLeft = Math.floor((days % 365) % 30);


    return `${years} years, ${months} months, ${daysLeft} days`;

}