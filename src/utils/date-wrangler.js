// Shift the date by the number of days specified.
export function addDays(date, daysToAdd) {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}

// Generate a week object for a given date
export function getWeek(forDate, daysOffset = 0) {
    const date = addDays(forDate, daysOffset);
    const day = date.getDay(); //Sunday is 0, . . . , Saturday is 6

    return {
        date,
        start: addDays(date, -day), // if it's Tuesday,shift back by 2 days.
        end: addDays(date, 6 - day), // if it's Tuesday, shift forward by 4 days.
    };
}
