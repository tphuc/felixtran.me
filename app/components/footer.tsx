
import { MdOutlineRssFeed } from "react-icons/md";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";


export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-row gap-2 space-x-0 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 ">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
              <MdOutlineRssFeed className="w-5 h-5"/>
          
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/tphuc"
          >
            <RiGithubFill className="w-5 h-5"/>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/felixtrandev"
          >
            <RiTwitterFill className="w-5 h-5"/>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/felix-tran-2000"
          >
            <RiLinkedinFill className="w-5 h-5"/>
          </a>
        </li>
        
      </ul>

    </footer>
  )
}
