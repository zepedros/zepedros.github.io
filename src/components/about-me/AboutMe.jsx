import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
export default function AboutMe() {
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
                Hello, my name is Jose Pedro Jesus. I am currently studying Information Management, with a specialization in Information Systems and Technologies Management at NOVA Information Management School. Previously, I studied Computer Engineering at Instituto Superior de Engenharia de Lisboa, where I obtained my bachelor's degree.
                <br></br>
                <br></br>
                Additionally, I've decided to embark on an exciting journey of becoming an IT/Computer teacher at Happy Code Oriente. There I have contact with children ages ranging from 5 to 14 years old, teaching them coding concepts from a young age as well how to operate computers.
            </div>
        </div>
    )
}