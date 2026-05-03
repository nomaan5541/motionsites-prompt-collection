import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <header className='absolute z-20 w-full'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Nomaan</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 border-solid border-2 border-white rounded outline-none inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-indigo-600 dark:text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          <NavLink
            to="."   
            className={({isActive }) => isActive ? "bg-indigo-900 p-1 px-5 rounded transition w-fit" : "text-indigo-600 dark:text-white" }
          >
            Home
          </NavLink>

          <NavLink
            to="About"
            className={({isActive }) => isActive ? "bg-indigo-900 p-1 px-5 rounded transition w-fit" : "text-indigo-600 dark:text-white" }
          >
            About
          </NavLink>

          <NavLink
            to="Projects"
            className={({isActive }) => isActive ? "bg-indigo-900 p-1 px-5 rounded transition w-fit" : "text-indigo-600 dark:text-white" }
          >
            Projects
          </NavLink>


        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavLink
            to="Contact"
            className={({isActive }) => isActive ? "bg-indigo-900 p-1 px-5 rounded transition w-fit" : "text-indigo-600 dark:text-white" }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel style={{background:"#111827"}} className="animate__animated animate__slideInRight fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-black dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 relative right-[10px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
       
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <NavLink
                  to="."
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-fit -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50 ${({isActive }) => isActive ? 'text-indigo-500' : ''}`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="About"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-fit -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50 ${({isActive }) => isActive ? 'text-indigo-500' : ''}`}
                >
                  About
                </NavLink>
                <NavLink
                  to="Projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-fit -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50 ${({isActive }) => isActive ? 'text-indigo-500' : ''}`}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="Contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-fit -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50 ${({isActive }) => isActive ? 'text-indigo-500' : ''}`}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
