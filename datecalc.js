import { DateTime } from './luxon.js';

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}
export const diffToHtml = diff => `
<span>
${diff.years ? 'Лет: ' + diff.years : ''}
${diff.months ? 'Месяцев: ' + diff.months : ''}
${diff.days ? 'Дней: ' + diff.days : ''}
</span>
`;

export function setTime(input) {
    return DateTime.fromISO("1970-01-01T00:00:00").plus({ second: +(input) })
}

export const diffTime = block => {
    return `
        <span>
        ${block.hour ? "Часов: " + block.hour : ''}
        ${block.minute ? "Минут: " + block.minute : ''}
        ${block.second ? "Секунд: " + block.second : ''}
        </span>`
}
