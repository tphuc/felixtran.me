import Link from "next/link";
import { RiLink } from "react-icons/ri";


export default function Page() {
    return <section>
        <p className="text-xl"> Over the years I’ve had the opportunity to work on various projects.  Here are the ones I’m most proud of.</p>

        <div className="grid pt-4 gap-4 grid-cols-1 md:grid-cols-2">
            <div className="hover:bg-neutral-100 cursor-default p-4 -ml-4 rounded-xl">
                <div className="flex gap-2">
                    <img className="w-12 h-12 rounded-md border border-neutral-200" alt='' src='https://www.tubememo.com/_next/image?url=%2Fico.jpg&w=640&q=75' />
                    <div className="r">
                        <p className="font-medium">TubeMemo</p>
                        <Link target="_blank" rel="noopener noreferrer" href='https://tubememo.com' className="flex cursor-pointe items-center gap-1 text-gray-500">
                            <RiLink />
                            tubememo.com
                        </Link>
                    </div>
                </div>
                <div className="mt-2 text-neutral-700">
                    <p>TubeMemo is a powerful tool (Chrome Extension) designed to make capturing and organizing notes from YouTube videos effortless.</p>
                </div>
            </div>

            <div className="hover:bg-neutral-100 cursor-default p-4 -ml-4 rounded-xl">
                <div className="flex gap-2">
                    <img className="w-12 h-12 rounded-md border border-neutral-200" alt='' src='/laginow.jpeg' />
                    <div className="r">
                        <p className="font-medium">Lagi Now</p>
                        <Link target="_blank" rel="noopener noreferrer" href='https://tubememo.com' className="flex cursor-pointe items-center gap-1 text-gray-500">
                            <RiLink />
                            laginow.com
                        </Link>
                    </div>
                </div>
                <div className="mt-2 text-neutral-700">
                    <p>Lagi Now is a platform for searching for shops and services in local area, helping you easily discover and connect with local businesses.</p>
                </div>
            </div>
        </div>

    </section>
}