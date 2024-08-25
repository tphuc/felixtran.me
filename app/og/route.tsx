import { ImageResponse } from 'next/og'

export function GET(request: Request) {

  // let url = new URL(request.url)
  // let title = url.searchParams.get('title') || "FelixTr's Portfolio"
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center" style={{background:'radial-gradient(78.99% 79.5% at 58.91% 30.62%, #FFFFFF 0%, #FFF6D6 100%)'}}>
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            FelixTr's Portfolio
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
