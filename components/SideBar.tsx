
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserRound, Clock4, Earth, Facebook, Globe, Hash, Linkedin, Mail, MapPin, Phone, Twitter, UserCircle, UsersRound } from 'lucide-react';
import user from '../const/data'
import { fetchData } from '@/app/fetchData';

const SideBar = () => {

  const avatar: any = fetchData()

  return (
    <div className='absolute flex flex-col align-middle items-center' >

      <Avatar className='absolute ml-[72px] w-[150px] h-[150px] mt-[-140px] z-50'>
        <AvatarImage src={avatar[1]} />
        <AvatarFallback>Av</AvatarFallback>
      </Avatar>
    
      <div
      className=' hidden md:flex flex-col w-[225px] ml-[72px] gap-[16px]  '
      >
        <div className='bg-foreground  flex flex-col p-[24px] gap-[16px] rounded-[16px] '>
          <div className='flex gap-[8px]  flex-row  '>
            <Phone className='w-[16px] h-[16px]'/>
            <p className='text-[14px] ' >07911 654321</p>
          </div>

          <div className='flex gap-[8px] flex-row  '>
            <Mail className='w-[16px] h-[16px]'/>
            <p className='text-[14px] '>avd.yana@videorollnet</p>
          </div>

          <div className='flex gap-[14px] flex-row'>
            <Linkedin className='w-[16px] h-[16px]'/>
            <Facebook className='w-[16px] h-[16px]'/>
            <Twitter className='w-[16px] h-[16px]'/>
          </div>
        </div>

        <div className='bg-foreground  flex flex-col p-[24px] gap-[16px] rounded-[16px] '>
          <p>Hire Date</p>
          <div className='gap-[8px]'>
            <p>Sep. 3,2020</p>
            <p>3y - 9m - 20d</p>
          </div>
        </div>
        
        <div className='bg-foreground  flex flex-col p-[24px] gap-[8px] rounded-[16px] '>
          <div className='flex items-center gap-[8px]  flex-row  '>
              <Hash className='w-[16px] h-[16px]'/>
              <p className='psmall ' >5</p>
          </div>

          <div className='flex items-center gap-[8px]  flex-row  '>
              <Clock4 className='w-[16px] h-[16px]'/>
              <p className='psmall' >Full-Time</p>
          </div>

          <div className='flex items-center gap-[8px]  flex-row  '>
              <UserCircle className='w-[16px] h-[16px]'/>
              <p className='psmall' >Operations</p>
          </div>

          <div className='flex items-center gap-[8px]  flex-row  '>
              <Globe className='w-[16px] h-[16px]'/>
              <p className='psmall' >Europe</p>
          </div>

          <div className='flex items-center gap-[8px]  flex-row  '>
              <MapPin className='w-[16px] h-[16px]'/>
              <p className='psmall' >London, UK</p>
          </div>

        </div>

        <div className='bg-foreground  flex flex-col p-[24px] gap-[8px] rounded-[16px] '>
          
              <p className='psmall ' >Direct Reports</p>
          
          {user.report.map((name) =>
            <div key={name} className='flex items-center gap-[8px]  flex-row  '>
              <Clock4 className='w-[16px] h-[16px]'/>
              <p className='psmall' >{name}</p>
            </div>

          )}

          <div className='flex items-center gap-[8px]  flex-row  '>
              <UsersRound className='w-[16px] h-[16px]'/>
              <p className='psmall' >4 More...</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SideBar