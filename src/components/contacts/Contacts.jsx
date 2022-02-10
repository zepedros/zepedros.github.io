import Header from "../common/Header"
import TopMenu from "../common/TopMenu"
export default function Contacts(){
    return(
        <div>
            <div className="hidden md:block">
                <Header></Header>
            </div>
            <div className="visible xl:block">
                <TopMenu></TopMenu>
            </div>
            <h1 className='font-modenine'>CONTACTS
                <br>
                </br>
                UNDER DEVELOPMENT 🛠️
            </h1>
        </div>
    )
}