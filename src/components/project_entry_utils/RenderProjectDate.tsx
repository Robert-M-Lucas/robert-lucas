import strftime from "strftime";

export interface Props {
    ms_since_epoch: number | null;
}

function getDayWithSuffix(day_string: string): string {
    const day = parseInt(day_string);
    if (day >= 11 && day <= 13) {
        return `${day}th`;
    }

    const suffixes: { [key: number]: string } = {
        1: 'st',
        2: 'nd',
        3: 'rd',
    };

    const suffix = suffixes[day % 10] || 'th';
    return `${day}${suffix}`;
}

function formatDate(ms_since_epoch: number) {
    return getDayWithSuffix(strftime("%d")) + strftime(" %B '%y", new Date(ms_since_epoch));
}

export default function RenderProjectDate({ms_since_epoch}: Props) {
    return <span className="text-muted">{ms_since_epoch ? formatDate(ms_since_epoch) : "Legacy Project - No Date"}</span>;
}