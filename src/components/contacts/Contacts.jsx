import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
export default function Contacts(){
    return(
        <div>
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            <div className="visible xl:block">
                <NewTopMenu></NewTopMenu>
            </div>
            <h1 className='font-modenine'>CONTACTS
                <br>
                </br>
                UNDER DEVELOPMENT 🛠️
            </h1>
        </div>
    )
}