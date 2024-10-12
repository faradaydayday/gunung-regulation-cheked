import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logoGunung from "../assets/svgs/logoGunung.svg";
import User from "../assets/svgs/Users.svg";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <Link to={to} className="text-gray-700 hover:text-blue-500">
    {children}
  </Link>
);

const DropdownItem = ({ to, children }) => (
  <Menu.Item>
    {({ active }) => (
      <Link
        to={to}
        className={`${
          active ? "bg-gray-100" : ""
        } block px-4 py-2 text-sm text-gray-700`}
      >
        {children}
      </Link>
    )}
  </Menu.Item>
);

export default function NavListMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src={logoGunung} alt="Logo Gunung" className="h-8 w-auto" />
              <span className="font-bold text-xl ml-2">MountainChecked</span>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItem to="/">Dashboard</NavItem>
              <NavItem to="/Bawakaraeng">Mountain</NavItem>

              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-gray-700 hover:text-blue-500">
                  Regulation
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <DropdownItem to="/regulasi-barang">
                      Regulasi Barang
                    </DropdownItem>
                    <DropdownItem to="/sampah">Sampah</DropdownItem>
                    <DropdownItem to="/regulasi-pendaki">
                      Regulasi Pendaki
                    </DropdownItem>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center">
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <img
                    src={User}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </Menu.Button>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <DropdownItem to="Login">Masuk</DropdownItem>
                    <DropdownItem to="/daftar">Daftar</DropdownItem>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem to="/">Dashboard</NavItem>
              <NavItem to="/Bawakaraeng">Mountain</NavItem>
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center w-full text-gray-700 hover:text-blue-500 px-3 py-2">
                  Regulation
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Menu.Button>
                <Menu.Items className="mt-2 w-full bg-gray-100 rounded-md shadow-lg">
                  <DropdownItem to="/regulasi-barang">
                    Regulasi Barang
                  </DropdownItem>
                  <DropdownItem to="/sampah">Sampah</DropdownItem>
                  <DropdownItem to="/regulasi-pendaki">
                    Regulasi Pendaki
                  </DropdownItem>
                </Menu.Items>
              </Menu>
              <div className="relative mt-3 px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>

              <button className="py-2 px-4 border border-blue-400 rounded-md mx-4">
                <NavItem to="Login">Masuk</NavItem>
              </button>
              <button className="py-2 px-4 border border-blue-950 rounded-md">
                <NavItem to="/daftar">Daftar</NavItem>
              </button>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
}
