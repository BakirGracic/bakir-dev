import { ImageResponse } from 'next/og';

export async function GET(request: Request): Promise<ImageResponse> {
	const url = new URL(request.url);
	const titleEncoded = url.searchParams.get('title') || null;
	const titleDecoded = titleEncoded == null ? 'Bakir Gracić | The Bosnian Dev' : decodeURIComponent(titleEncoded.trim());

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full p-10 items-center justify-center bg-black text-white'>
				<h2 tw='text-6xl font-bold text-center'>{titleDecoded}</h2>
				<p tw='text-4xl border-white border-t-2 pt-3 px-3 text-center'>bakir.dev</p>
			</div>
		),
	);
}
