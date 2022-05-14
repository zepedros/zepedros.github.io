import Header from "../common/Header"
import TopMenu from "../common/TopMenu"
import Navbar from "../common/Navbar"
import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
export default function HomePage() {
    return (
        <div>
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            <div className="visible xl:block">
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