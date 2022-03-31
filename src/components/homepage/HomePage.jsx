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
             

            

            <h1 className='font-modenine'>HOME PAGE
                <br>
                </br>
                UNDER DEVELOPMENT 🛠️
            </h1>
        </div>
    )
}