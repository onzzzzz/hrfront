
import { FileClock, Clock4, Cross , PiggyBank, History, MountainSnow } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import HistoryTable from './HistoryTable';



function Info() {
  return (
    <div className='flex flex-col w-screen ml-[322px] mr-[70px] mb-[30px] px-[16px] bg-foreground rounded-b-2xl'>
      
      {/* //Time off */}
      <div className='flex justify-between items-center  mb-[13px] mt-[35px] '>
        <div className='flex items-center gap-[12px] '>
          <FileClock  className='h-[16px] w-[16px]'/>
          <h2>Time Off</h2>
        </div>
        <div className='flex items-center gap-[30px]'>
          <div className='flex items-center'>
            <p>Accrual Level Start Date</p>
            <p className='ps-[8px] text-[14px] font-medium text-link'>03/09-2020</p>
          </div>
          <Button variant="outline" className='h-[33px]'>Add Time Off Policy</Button>
        </div>
      </div>

      <hr/>

      <div className='flex justify-center gap-[48px] my-[24px] '>
        
        <div className='flex flex-col items-center'>
          <div className='time_card'>
            <h2 className='text-[20px] font-semibold'>Sick</h2> 
            <div className='flex items-center gap-[10px]'>
              <Cross className='h-[30px] w-[30px]' />
              <h1 className='text-3xl font-semibold text-icon'>3</h1>
            </div>
            <p className='text-[14px] font-semibold'>Days Available</p> 
            <p className='text-[14px] font-semibold text-grey'>1 day scheduled</p>
          </div>
          <p className='mt-[8px] text-[14px] font-medium text-grey'>Sick Full-Time</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='time_card'>
            <h2 className='text-xl font-semibold'>Annual Leave </h2> 
            <div className='flex items-center gap-[10px]'>
              <MountainSnow className='h-[30px] w-[30px]' />
              <h1 className='text-3xl font-semibold text-icon'>10.3</h1>
            </div>
            <p className='text-[14px] font-semibold'>Days Available</p> 
          </div>
          <p className='mt-[8px] text-[14px] font-medium text-grey'>Holiday Full-Time</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='time_card'>
          <h2 className='text-xl font-semibold'>Comp/in Lieu Time</h2> 
            <div className='flex items-center gap-[10px]'>
              <FileClock className='h-[30px] w-[30px]' />
              <h1 className='text-3xl font-semibold text-icon'>0</h1>
            </div>           
            <p className='text-[14px] font-semibold' >Human Used(YTD)</p>
          </div>
          <p className='mt-[8px] text-[14px] font-medium text-grey'>Comp/in Lieu Time Flexible Policy</p>
        </div>

      </div>
      <div className='flex items-center gap-[8px] mb-[16px]'>
        <Clock4  className='h-[16px] w-[16px]' />
        <h3 className='text-xs font-semibold'>Upcoming Time Off</h3>
      </div>

      <hr/>

      <div className='flex items-center my-[24px]  gap-[14px] h-[38px]'>
        <Cross className='h-[30px] w-[30px]' />
        <div className='flex flex-col '>
          <p className='text-xs'>Jan 27</p>
          <p className='text-xs'>• 1 day of Sick</p>
        </div>
      </div>

      <hr/>

      <div className='flex items-center my-[24px] gap-[14px] h-[38px]'>
        <PiggyBank className='h-[30px] w-[30px]'/>
        <div className='flex flex-col'>
          <p className='text-xs font-semibold'>Jul 4</p>
          <p className='text-xs font-semibold'>Independence Day</p>
        </div>
      </div>

      <hr/>

      <div className='flex items-center gap-[8px] mt-[24px] mb-[16px] '>
        <History  className='h-[16px] w-[16px]' />
        <p className='text-xs font-semibold'>History</p>
      </div>

      <div className='flex justify-between mb-[16px] '>
        <div className='flex gap-[16px]'>
          <Select>
            <SelectTrigger className=" rounded-md bg-background w-[256px]">
              <SelectValue placeholder="Sick" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sick</SelectItem>
            </SelectContent>
          </Select>

          <Select>
          <SelectTrigger className="w-[96px] rounded-md bg-background">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
        <Select>
          <SelectTrigger className="w-[176px] rounded-md bg-background">
            <SelectValue placeholder="Balance History" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Balance History</SelectItem>
          </SelectContent>
        </Select>
        </div>
      </div>

      {/* Table */}

      <HistoryTable/>
    </div>
  )
}

export default Info