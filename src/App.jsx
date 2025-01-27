import React, { useState } from 'react'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GiClick } from "react-icons/gi";
import Test from './component/Test';
import clsx from 'clsx';
import AppLayout from './Pattens/LayoutComponents/AppLayout';
import { motion } from 'framer-motion';

const Home = () => (<div>welcome to home page</div>)

export default function App() {


  const [activeTab, setActiveTab] = useState('Home');
  const [showOptions, setShowOptions] = useState(false);

  const TabList = ['Home', 'Layout', 'Test']

  const ActiveTabComponent = () => {


    switch (activeTab) {
      case 'Home':
        return <Home />
        break;
      case 'Layout':
        return <AppLayout />
        break;
      case 'Test':
        return <Test />
        break;

      default:
        break;
    }

  }

  const handelActiveTabChange = (e) => setActiveTab(e)

  return (
    <div className=' relative w-full h-full  bg-teal-800 min-h-screen flex justify-center items-center'>
      <motion.div drag
        dragConstraints={{
          top: 0,
          right: 1000,
          bottom: 0,
          left: 0,
        }}
        translate={{}} className=' absolute top-10 left-5'>
        <div className='  rounded-r-xl px-2 py-1 hover:bg-fuchsia-950 bg-fuchsia-950/30 cursor-pointer flex justify-between items-center gap-2' onClick={(e) => setShowOptions(!showOptions)}>Desing pattens {showOptions ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />} </div>
        <div className={clsx(' w-36  rounded-r-xl top-20 left-5 cursor-pointer flex justify-center  flex-col ', showOptions ? 'block' : 'hidden')}>
          {TabList.map((tabName, index) => (<div key={index} className={clsx(' py-2 px-2 flex justify-between items-center rounded-r-xl', activeTab == `${tabName}` ? 'bg-amber-500/70' : ' hover:bg-fuchsia-900 bg-fuchsia-700')} onClick={() => setActiveTab(tabName)}>{tabName} <GiClick /></div>))}
        </div>
      </motion.div>
      <ActiveTabComponent />
    </div >
  )
}
