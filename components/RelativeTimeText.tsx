"use client";

function formatDateRelative(date: string) {
    const currentDate = new Date();
    const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);
    const diffTime = currentDate.getTime() - targetDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 365 ? `${Math.floor(diffDays / 365)}y ago` : diffDays > 30 ? `${Math.floor(diffDays / 30)}mo ago` : diffDays > 0 ? `${diffDays}d ago` : "Today";
}

export default function RelativeTimeText({ date }: { date: string }) {
    return <span>{formatDateRelative(date)}</span>;
}
