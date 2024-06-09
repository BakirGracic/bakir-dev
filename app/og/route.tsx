import { ImageResponse } from 'next/og'

export function GET(request: Request) {
    let url = new URL(request.url)
    let title = url.searchParams.get('title') || 'Bakir the Dev'

    return new ImageResponse(
        (
            <div tw="flex flex-col w-full h-full items-center justify-center bg-white bg-black text-white">
                <h2 tw="text-4xl font-semibold">
                    {title}
                </h2>
                <p tw="text-2xl">
                    bakir.dev
                </p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}
