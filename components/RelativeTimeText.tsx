'use client';

import { formatDateRelative } from '@/lib/misc';

export default function RelativeTimeText({ date }: { date: string }) {
	return <span>({formatDateRelative(date)})</span>;
}
