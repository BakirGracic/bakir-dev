import { ImageResponse } from "next/og";

export function GET(request: Request) {
    const url = new URL(request.url);
    const titleEncoded = url.searchParams.get("title") || "Bakir%20the%20Dev"; // URL Encoded "Bakir the Dev"
    const titleDecoded = decodeURIComponent(titleEncoded.trim());

    return new ImageResponse(
        (
            <div tw="flex flex-col w-full h-full p-10 items-center justify-center bg-black text-white font-serif">
                <h2 tw="text-6xl font-bold text-center">{titleDecoded}</h2>
                <p tw="text-4xl border-t-2 border-white p-3 text-center">bakir.dev</p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
