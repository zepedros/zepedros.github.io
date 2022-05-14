import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

const LINKEDIN_URL = "https://www.linkedin.com/in/zepedroj/"
const GIT_HUB_URL = "https://github.com/zepedros"
const WORK_EMAIL = "zepedro4259@gmail.com"

function openLinkInNewTab(event, link) {
    event.preventDefault();
    window.open(link, "_blank")
}

function openEmailClient() {
    window.open(`mailto:${WORK_EMAIL}`)

}

export default function Contacts() {
    return (
        <div>
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            <div className="visible xl:block">
                <NewTopMenu></NewTopMenu>
            </div>

            <div className="p-computer">
                Here are my work contacts as well as important platforms
                <br></br>
                <br></br>
                If you wish to contact me through my phone number, feel free to message me on LinkedIn or contact me via e-mail
                <div className="centered-icons">
                    <AiFillLinkedin size={"3em"} onClick={(e) => openLinkInNewTab(e, LINKEDIN_URL)}></AiFillLinkedin>
                    <AiFillGithub size={"3em"} onClick={(e) => openLinkInNewTab(e, GIT_HUB_URL)}></AiFillGithub>
                    <MdEmail size={"3em"} onClick={() => openEmailClient()}></MdEmail>
                </div>
            </div>
        </div>
    )
}