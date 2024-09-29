import Image from 'next/image'
import {
  Bell,
  CircleHelp,
  Search,
  Settings
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'

const Nav = () => {

  return (
    <div
    className='h-[86px] w-full  flex pt-[32px] px-[24px] justify-between z-0 bg-foreground'>
      <Image
        src="/Harmonyhr.svg"
        alt="logo"
        width={116}
        height={24}
      />
      <div className='flex items-end '>
        <Button variant="ghost">Home</Button>
        <Button variant="secondary" className='rounded-t-lg'>My Info</Button>
        <Button variant="ghost">People</Button>
        <Button variant="ghost">Hiring</Button>
        <Button variant="ghost">Reports</Button>
        <Button variant="ghost">Files</Button>
      </div>
      <div className="relative w-[395px]">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-black" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>

      <div className='flex gap-[24px] items-center  mb-[16px] '>
        <Settings />
        <CircleHelp />
        <Bell />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Av</AvatarFallback>
        </Avatar>
      </div>

    </div>
  )
}

export default Nav