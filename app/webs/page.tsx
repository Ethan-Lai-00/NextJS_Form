// /Webs.tsx
'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { BiUser,BiCalendarAlt,BiWorld,BiMailSend  } from "react-icons/bi";
import { IoSparklesOutline } from "react-icons/io5";
import {  MdOutlineTouchApp } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";

import { Switch } from "@/components/ui/switch"
import {Card,CardHeader} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
 
const titleSize = "text-xl pt-20";
const subtitleSize = "text-sm font-light pt-1 pb-3";
 
const selectedColor = "#7C45FF";

let creator = "";
let strategy = "";

let accountSelected = "";
let sendLimitValue = "";
let sendDelayValue = "";

let runtimeSelected = "";
let deadlineSelected = "";
let scheduleSelected = "";
let timezoneSelected = "";

let ccEmail = "";
let bccEmail = "";

let openBool = false;
let clickBool = false;
let unsubBool = false;

interface CardProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

interface TaskProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const Webs = () => {

  const [selectedCreator, setSelectedCreator] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  const handleCreatorChange = (option: string) => {
    setSelectedCreator(option);
  };

  const handleTaskChange = (option: string) => {
    setSelectedTask(option);
  };

  const printDetails = () => {

    console.log('Creator Mode : ' + creator);
    console.log('Task Strategy : ' + strategy);

    console.log('Account Selected : ' + accountSelected);
    console.log('Send Limit : ' + sendLimitValue);
    console.log('Throttle Delay : ' + sendDelayValue);

    console.log('Run Time : ' + runtimeSelected);
    console.log('Deadline : ' + deadlineSelected);
    console.log('Schedule : ' + scheduleSelected);
    console.log('Time Zone : ' + timezoneSelected);

    console.log('CC : ' + ccEmail);
    console.log('BCC : ' + bccEmail);

    console.log('Track opening == ' + openBool);
    console.log('Track link clicks == ' + clickBool);
    console.log('Include unsubscribe link == ' + unsubBool);
  }
  
  
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='w-[700px] flex flex-col items-center'>
        <div className='text-left w-[100%]'>
          <div className='text-2xl font-bold pt-5'>Settings</div>
          <div className='text-sm font-light pt-1'>Tweak these settings to fit your campaign and audience</div>
        </div>
        <div className='divider mt-10 mb-10'></div>
        <div className='w-[100%]'>
          <div className='flex flex-row'>
          <CardSoloC selectedOption={selectedCreator} onOptionChange={handleCreatorChange} />
            <div className='w-4'></div>
            <CardGroupC selectedOption={selectedCreator} onOptionChange={handleCreatorChange} />
          </div>
        </div>
        <div className='text-left w-[100%]'>
          <div className={`${titleSize}`}>Task Statregy</div>
          <div className={`${subtitleSize}`}>Choose to automate or manually approve tasks</div>
        </div>
          <div className='w-[100%]'>
            <div className='flex flex-row'>
            <CardTaskA  selectedOption={selectedTask} onOptionChange={handleTaskChange}/>
              <div className='w-4'></div>
              <CardTaskM  selectedOption={selectedTask} onOptionChange={handleTaskChange}/>
            </div>
          </div>
        <div className='text-left w-[100%]'>
          <div className={`${titleSize}`}>Email</div>
          <div className={`${subtitleSize}`}>Outbound email settings</div>
          <Email />
        </div>

        <div className='text-left w-[100%]'>
          <div className={`${titleSize}`}>Scheduling</div>
          <div className={`${subtitleSize}`}>Control when emails are sent out</div>
          <Scheduling />
        </div>

        <div className='text-left w-[100%]'>
          <div className={`${titleSize}`}>Miscellaneous</div>
          <div className={`${subtitleSize}`}>Extra campaign settings</div>
          <Miscellaneous />
        </div>

        <div className='text-left w-[100%]'>
          <div className={`${titleSize}`}>Tracking</div>
          <div className={`${subtitleSize}`}>Know what's happening to your campaign</div>
          <Tracking />       
        </div>

        <div className='pt-10 pb-10'>
          <Button className='w-[300px] h-[50px]'
          onClick={printDetails}>SUBMIT</Button>
        </div>
   

      </div>
      
    </div>
  );
};

export function CardSoloC({ selectedOption, onOptionChange }: CardProps) {
  const handleCardClick = () => {
    onOptionChange(selectedOption === "SOLO" ? "" : "SOLO");
  };

  const handleRadioChange = () => {
    if (selectedOption !== "SOLO") {
      onOptionChange("SOLO");
    }
  };

  // console.log("Selected option between Solo and Group:", selectedOption);
  const newValue = selectedOption;
    creator = newValue;

  return (
    <Card className="w-96" onClick={handleCardClick}  style={{ borderColor: selectedOption === "SOLO" ? selectedColor : '' }}>
      <CardHeader className='p-3'>
        <div className="flex items-center">
          <div className="border rounded-md p-2">
            <BiUser size={20}/>
          </div>
          <div className='pl-3 w-[100%]'>
            <div className='flex flex-row justify-between'>
               <div className="text-sm font-bold">I'm a solo creator</div>
               <input 
                 type="radio" 
                 name="options" 
                 value="SOLO" 
                 checked={selectedOption === "SOLO"} 
                onChange={handleRadioChange} 
               />
            </div>
            <div className="text-[10px] text-gray-500">I'm setting up a storefront for myself</div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export function CardGroupC({ selectedOption, onOptionChange }: CardProps) {
  const handleCardClick = () => {
    onOptionChange(selectedOption === "GROUP" ? "" : "GROUP");
  };
  const handleRadioChange = () => {
    if (selectedOption !== "GROUP") {
      onOptionChange("GROUP");
    }
  };

  const newValue = selectedOption;
  creator = newValue;

  return (
    <Card className="w-96" onClick={handleCardClick} style={{ borderColor: selectedOption === "GROUP" ? selectedColor : '' }}>
      <CardHeader className='p-3'>
        <div className="flex items-center">
          <div className="border rounded-md p-2">
            <BiUser size={20}/>
          </div>
          <div className='pl-3 w-[100%]'>
            <div className='flex flex-row justify-between'>
               <div className="text-sm font-bold">I'm a group creator</div>
               <input 
                 type="radio" 
                 name="options" 
                 value="GROUP" 
                 checked={selectedOption === "GROUP"} 
                 onChange={handleRadioChange} 
               />
            </div>
            <div className="text-[10px] text-gray-500">I'm setting up a storefront for my group</div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export function CardTaskA({ selectedOption, onOptionChange }: TaskProps) {
  const handleCardClick = () => {
    onOptionChange(selectedOption === "AUTOMATIC" ? "" : "AUTOMATIC");
    // console.log('MANUEL HAS BEEN SELECTED');
  };
  const handleRadioChange = () => {
    if (selectedOption !== "AUTOMATIC") {
      onOptionChange("AUTOMATIC");
    }
  };

  // console.log("Selected option between Auto and Manuel:", selectedOption);
  const newValue = selectedOption;
  strategy = newValue;

  return (
    <Card className="w-96" onClick={handleCardClick} style={{ borderColor: selectedOption === "AUTOMATIC" ? selectedColor : '' }}>
      <CardHeader className='p-3'>
        <div className="flex items-center">
          <div className='pl-3 w-[100%]'>
            <div className='flex flex-row justify-between'>
              <IoSparklesOutline size={25}/>
              <input 
              type="radio" 
              name="Auto" 
              id="autoApprove"
              value="AUTOMATIC" 
              checked={selectedOption === "AUTOMATIC"} 
              onChange={handleRadioChange} 
              />
            </div>
            <div className='pt-3'>
              <div className="text-lg font-semibold">Automatic</div> {/* Title */}
              <div className="text-sm text-gray-500">Emails are sent automatically</div> {/* Description */}
            </div>
            
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export function CardTaskM({ selectedOption, onOptionChange }: TaskProps) {
  const handleCardClick = () => {
    onOptionChange(selectedOption === "MANUEL" ? "" : "MANUEL");
  };

  const handleRadioChange = () => {
    if (selectedOption !== "MANUEL") {
      onOptionChange("MANUEL");
    }
  };

  const newValue = selectedOption;
  strategy = newValue;

  return (
    <Card className="w-96" onClick={handleCardClick} style={{ borderColor: selectedOption === "MANUEL" ? selectedColor : '' }}>
      <CardHeader className='p-3'>
        <div className="flex items-center">
          <div className='pl-3 w-[100%]'>
            <div className='flex flex-row justify-between'>
              <MdOutlineTouchApp size={25}/>
              <input
              type="radio" 
              name="Manuel" 
              id="manuelApprove" 
              value="MANUEL" 
              checked={selectedOption === "MANUEL"} 
              onChange={handleRadioChange} 
              />
            </div>
            <div className='pt-3'>
              <div className="text-lg font-semibold">Manuel</div>
              <div className="text-sm text-gray-500">Review & approve tasks manually</div>
            </div>
            
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export function Email() {

  const [sendlimitval, setSendlimitVal] = useState("");
  const [Delayval, setDelayVal] = useState("");

  const handleChangeLimit = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    setSendlimitVal(newValue);
    sendLimitValue = newValue;
  };
  const handleChangeDelay = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    setDelayVal(newValue);
    sendDelayValue = newValue;
  };
  
  const handleAccount = (e: any) => {
    const newValue = e;
    accountSelected = newValue;
  };

  return (
    <div className="grid w-full items-center gap-4">
      <div>
        <Label htmlFor="name">Sender Email Account</Label>
        <Select onValueChange={handleAccount}>
          <SelectTrigger id="stephen">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="Stephen Hakemi">
              <div className="flex flex-row w-[700px]">
                <BiUser size={20} />
                <div className="flex flex-row justify-between w-[100%]">
                  <div className="pl-3">Stephen Hakemi</div>
                  <div style={{ color: selectedColor }}>stephen@wiza.com</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="Ethan Lai">
              <div className="flex flex-row w-[700px]">
                <BiUser size={20} />
                <div className="flex flex-row justify-between w-[100%]">
                  <div className="pl-3">Ethan Lai</div>
                  <div style={{ color: selectedColor }}>ethankeir00@gmail.com</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="John Doe">
              <div className="flex flex-row w-[700px]">
                <BiUser size={20} />
                <div className="flex flex-row justify-between w-[100%]">
                  <div className="pl-3">John Doe</div>
                  <div style={{ color: selectedColor }}>johndoe@outlook.com</div>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-row'>
      <div className="flex flex-col space-y-1.5 w-[50%]">
        <Label htmlFor="name">Send Limit</Label>
        <div className="relative">
          <Input id="sendLimit" placeholder="e.g 100" value={sendlimitval} maxLength={10} onChange={handleChangeLimit}/>
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">per day</span>
        </div>
      </div>
        <div className='w-5'></div>
        <div className="flex flex-col space-y-1.5 w-[50%]">
        <Label htmlFor="name">Throttle delay</Label>
        <div className="relative">
          <Input id="delaySeconds" placeholder="e.g 5" value={Delayval} maxLength={10} onChange={handleChangeDelay}/>
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">seconds</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export function Scheduling() {

  const handleStartime = (e: any) => {
    const newValue = e;
    runtimeSelected = newValue;
  };

  const handleDeadline = (e: any) => {
    const newValue = e;
    deadlineSelected = newValue;
  };

  const handleSchedule = (e: any) => {
    const newValue = e;
    scheduleSelected = newValue;
  };

  const handleTimezone = (e: any) => {
    const newValue = e;
    timezoneSelected = newValue;
  };

  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5 w-[700px]">
      <Label htmlFor="name">Run time</Label>
        <div className='flex flex-row'>
          <div className="w-[49%]">
            <Select onValueChange={handleStartime}>
              <SelectTrigger id="starttime">
                <SelectValue placeholder="Start Time" />
              </SelectTrigger>
              <SelectContent position="popper">
                {/* Customizing the select options */}
                <SelectItem value="Start Now">
                  <div className="flex flex-row w-[650px]">
                    <BiCalendarAlt size={20} />
                      <div className="pl-3">Starts now</div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[2%]"></div>
          <div className="w-[49%]">
            <Select onValueChange={handleDeadline}>
              <SelectTrigger id="deadline">
                <SelectValue placeholder="Deadline" />
              </SelectTrigger>
              <SelectContent position="popper">
                {/* Customizing the select options */}
                <SelectItem value="No Deadline">
                  <div className="flex flex-row w-[650px]">
                    <BiCalendarAlt size={20} />
                      <div className="pl-3">No deadline</div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="name">Sending schedule</Label>
          <Select onValueChange={handleSchedule}>
            <SelectTrigger id="schedule">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              {/* Customizing the select options */}
              <SelectItem value="7AM - 9PM (Monday to Friday)">
                <div className="flex flex-row w-[650px]">
                  <FaRegCalendarCheck size={20} />
                    <div className="pl-3">7am - 9PM</div>
                    <div className="pl-1 text-gray-500">(Monday - Friday)</div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="name">Fallback timezone</Label>
          <Select onValueChange={handleTimezone}>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Time Zone" />
            </SelectTrigger>
            <SelectContent position="popper">
              {/* Customizing the select options */}
              <SelectItem value="Eastern Time">
                <div className="flex flex-row w-[650px]">
                  <BiWorld size={20} />
                    <div className="pl-3">Eastern Time</div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export function Miscellaneous() {

  const [ccval, setCCVal] = useState("");
  const [bccval, setBCCVal] = useState("");

  const handleChangeCC = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    setCCVal(newValue);
    ccEmail = newValue;
  };
  const handleChangeBCC = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    setBCCVal(newValue);
    bccEmail = newValue;
  };

  return (
    <div className='grid w-full items-center gap-4 pt-3'>
      <div className="flex flex-col space-y-1.5 w-[100%] relative">
        <Label htmlFor="name">Global CC</Label>
        <div className="relative">
          <BiMailSend className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
          <Input id="emailCC" placeholder="Add email" value={ccval} onChange={handleChangeCC} style={{ paddingLeft: '2.5rem' }} />
        </div>
      </div>
      <div className="flex flex-col space-y-1.5 w-[100%] relative">
        <Label htmlFor="name">Global BCC</Label>
        <div className="relative">
          <BiMailSend className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
          <Input id="emailBCC" placeholder="Add email" value={bccval} onChange={handleChangeBCC} style={{ paddingLeft: '2.5rem' }} />
        </div>
      </div>
    </div>
  )
}

export function Tracking() {

  const [isCheckedOpening, setIsCheckedOpening] = useState(false);
  const [isCheckedLink, setIsCheckedLink] = useState(false);
  const [isCheckedUnsub, setIsCheckedSub] = useState(false);

  const handleChangeOpening = (e: any) => {
    const booleanToggle = e;
    setIsCheckedOpening(booleanToggle);
    openBool = booleanToggle;
  };

  const handleChangeLink = (e: any) => {
    const booleanToggle = e;
    setIsCheckedLink(booleanToggle);
    clickBool = booleanToggle; 
  };

  const handleChangeUnsub = (e: any) => {
    const booleanToggle = e;
    setIsCheckedSub(booleanToggle);
    unsubBool = booleanToggle; 
  };

  return (
    <div>
      <div className='divider mt-3 mb-3'></div>
      <div className='flex flex-row w-[100%]'>
        <div className="w-[95%] flex flex-col">
          <div className='font-medium'>Track openings</div>
          <div className='text-sm font-light'>Keep track of who's opening your emails</div>
        </div>
        <div className="w-[5%]">
          <Switch
            checked={isCheckedOpening}
            onCheckedChange={handleChangeOpening}
          />
        </div>
      </div>
      <div className='divider mt-5 mb-5'></div>
      <div className='flex flex-row w-[100%]'>
        <div className="w-[95%] flex flex-col">
          <div className='font-medium'>Track link clicks</div>
          <div className='text-sm font-light'>Track which links are the most popular</div>
        </div>
        <div className="w-[5%]">
          <Switch
            checked={isCheckedLink}
            onCheckedChange={handleChangeLink}
          />
        </div>
      </div>
      <div className='divider mt-5 mb-5'></div>
      <div className='flex flex-row w-[100%]'>
        <div className="w-[95%] flex flex-col">
          <div className='font-medium'>Include unsubscribe link</div>
          <div className='text-sm font-light'>Allow recipients to subscribe</div>
        </div>
        <div className="w-[5%]">
          <Switch
            checked={isCheckedUnsub}
            onCheckedChange={handleChangeUnsub}
          />
        </div>
      </div>
      <div className='divider mt-5'></div>
    </div>
  )
}

export default Webs;