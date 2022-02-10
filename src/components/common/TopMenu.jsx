import { useState, useEffect } from 'react'
import logo from '../../logo.svg'

let light_gray = "text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium font-modenine"
let dark_gray = "text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium font-modenine"

export default function TopMenu() {

    const [burguerColor, setBurguerColor] = useState("text-gray-800")
    const [burguerIsOpen, setBurguerIsOpened] = useState(false)

    function burguerMenuOnClick() {
        if(burguerIsOpen){
            setBurguerColor("text-gray-800")
            setBurguerIsOpened(false)
        }else{
            setBurguerColor("dark:text-white hover:text-gray-300")
            setBurguerIsOpened(true)
        }
    }

    return (
        <div className="md:hidden">
            <nav className="bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="-mr-2 flex md:hidden" onClick={burguerMenuOnClick}>
                            <button className={burguerColor + " inline-flex items-center justify-center p-2 rounded-md focus:outline-none"}>
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={(burguerIsOpen? "visible" : "invisible") + " max-w-7xl mx-auto px-5"} >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a className={window.location.pathname === "/" ? dark_gray : light_gray} href="/">
                            HOME
                        </a>
                        <a className={window.location.pathname === "/about-me" ? dark_gray : light_gray} href="/about-me">
                            ABOUT ME
                        </a>
                        <a className={window.location.pathname === "/contacts" ? dark_gray : light_gray} href="/contacts">
                            CONTACTS
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}