import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
        <Image alt='' src={'/profile.jpg'} width={300} height={300} className='rounded-full' />
      </div>
      <div className='space-y-1'>
      <h1 className="pt-2 text-2xl font-semibold tracking-tighter">
        Felix Tr
      </h1>
      <h2 className=''> A hands-on problem solver. Creating experiences that feel effortless and fun while solving real-world problems. </h2>
      <h2 className=''>Recently, I launched <a target="_blank" rel="noopener noreferrer" className='underline cursor-pointer font-medium' href={'https://tubememo.com'}>Tube Memo</a>, a tool that simplifies note-taking from YouTube videos with AI-powered summaries and timestamped notes.</h2>
      </div>


      <div className="mt-20">
        <BlogPosts />
      </div>

    </section>
  )
}
