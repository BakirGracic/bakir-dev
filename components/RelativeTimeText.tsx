import { formatDateRelative } from "@/app/blog/utils";

export const dynamic = 'force-dynamic'

export default async function RelativeTimeText({ date }: { date: string }) {
    return (
        <span>{formatDateRelative(date)}</span>
    );
}
