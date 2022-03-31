import logo from '../../logo.svg'
let light_gray= "text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium font-modenine"
let dark_gray = "text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium font-modenine"
export default function Header() {

    return (
        <div >
            <nav className="bg-white dark:bg-gray-800  ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0 invisible" href="/">
                                <img className="h-8 w-8" src={logo} alt="Workflow" />
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a className={window.location.pathname==="/"? dark_gray : light_gray} href="/">
                                        HOME
                                    </a>
                                    <a className={window.location.pathname==="/about-me"? dark_gray : light_gray}href="/about-me">
                                        ABOUT ME 
                                    </a>
                                    <a className={window.location.pathname==="/contacts"? dark_gray : light_gray}href="/contacts">
                                        CONTACTS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}