import { ImageResponse } from "next/og";

export function GET(request: Request) {
    let url = new URL(request.url);
    let title_encoded = url.searchParams.get("title") || "Bakir the Dev";
    let title = decodeURIComponent(atob(title_encoded));

    return new ImageResponse(
        (
            <div tw="flex flex-col w-full h-full p-10 items-center justify-center bg-white bg-black text-white">
                <h2 tw="text-6xl font-bold text-center">{title}</h2>
                <p tw="text-4xl border-t-2 border-white p-3 text-center">
                    bakir.dev
                </p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
