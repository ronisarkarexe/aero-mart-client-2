import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../image/img_avatar.png'
import logo from '../../../image/logo.png'


const Header = () => {

  const { user, handleSignOut, admin} = useAuth()
  console.log(user.photoURL)

   return (
      <Disclosure as="nav" className="bg-gray-800 sticky-top">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (<XIcon className="block h-6 w-6" aria-hidden="true" />) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to=""><img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="logo"
                  /></Link>
                  <Link to=""><img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="logo"
                  /></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">

                     <Link to="/">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>
                     </Link>
                     <Link to="/exploreAll">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explore All</button>
                     </Link>
                     {user.email && <Link to="/dashboard">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
                     </Link>}
                     {admin && <Link to="/admin">
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</button>
                     </Link>}

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.photoURL ? user.photoURL : img}
                        alt="img" referrerPolicy="no-referrer"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                      <Menu.Item>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Profile
                          </Link>
                      </Menu.Item>

                      <Menu.Item>
                        <Link
                          to="/login"
                          onClick={handleSignOut}
                          className="block px-4 py-2 text-sm text-gray-700"
                          >
                            {user.email? "LogOut" : "logIn"}
                          </Link>
                      </Menu.Item>

                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

         {/* Mobile vew */}
         <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
               <Link to="">
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>
               </Link>
               <Link to="">
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explore All</button>
               </Link>
               <Link to="">
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
               </Link>
               <Link to="">
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</button>
               </Link>
            </div>
         </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   );
};

export default Header;