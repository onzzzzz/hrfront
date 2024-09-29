import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Settings } from 'lucide-react'
import { fetchData } from '@/app/fetchData'


const Header = () => {

  const name: any = fetchData()

  return (
    <div
    className='bg-secondary flex flex-col h-[200px] w-screen pl-[322px] pe-[72px] z-0 '>
      <div
      className='flex  h-full items-center justify-between '>
        <h1 className='text-3xl font-semibold'>{name[0]}</h1>
      <div
      className=' flex gap-[8px]'
      >
        <Select>
          <SelectTrigger className="w-auto bg-white rounded-md ">
            <SelectValue placeholder="Request a Change" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">More</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-auto bg-white rounded-md ">
            <Settings/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">More</SelectItem>
          </SelectContent>
        </Select>
      </div>
      </div>
      <div className='flex   '>
        <Button variant="ghost">Personal</Button>
        <Button variant="ghost">Job</Button>
        <Button variant="custom" className='rounded-t-lg'>Time Off</Button>
        <Button variant="ghost">Emergency</Button>
        <Button variant="ghost">Documents</Button>
        <Button variant="ghost">Notes</Button>
        <Button variant="ghost">Benefits</Button>
        <Button variant="ghost">Training</Button>
        <Button variant="ghost">Assets</Button>
        <Select>
          <SelectTrigger className="w-auto rounded-t-md ">
            <SelectValue placeholder="More" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">More</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Header