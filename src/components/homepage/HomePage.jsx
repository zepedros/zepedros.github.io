import Header from "../common/Header"
import TopMenu from "../common/TopMenu"
import Navbar from "../common/Navbar"
import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
export default function HomePage() {
    return (
        <div>
            {/* This makes sure the Header is only shown from md (MEDIUM) and above*/}
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            {/*Hides everything from Medium AND  up to 2xl */}
            <div className="md:hidden">
                <NewTopMenu></NewTopMenu>
            </div>
            <div className="p-computer">
                Hello, My name is Jose Jesus and this is my personal website.
                <br></br>
                In the About Me section you will find all my academic and professional career.
                <br></br>
                Feel free to see how to reach me in the Contacts section!
            </div>
        </div>
    )
}