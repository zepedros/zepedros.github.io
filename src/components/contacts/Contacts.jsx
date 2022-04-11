import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import {MdEmail} from "react-icons/md"
export default function Contacts() {
    return (
        <div>
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            <div className="visible xl:block">
                <NewTopMenu></NewTopMenu>
            </div>

            <p>
                Here are my work contacts as well as important platforms
                <br></br>
                <br></br>
                If you wish to contact me through my phone number, feel free to message me on LinkedIn or contact me via e-mail
            </p>
            <br></br>
            <div className="centered-icons">
                <AiFillLinkedin size={"5em"}></AiFillLinkedin>
                <AiFillGithub size={"5em"}></AiFillGithub>
                <MdEmail size={"5em"}></MdEmail>
            </div>

        </div>
    )
}