import Header from "../common/Header"
import TopMenu from "../common/TopMenu"
export default function AboutMe() {
    return (
        <div>
            <div className="hidden md:block">
                <Header></Header>
            </div>
            <div className="visible xl:block">
                <TopMenu></TopMenu>
            </div>

            <h1>
                ABOUT ME
            </h1>
            <br>
            </br>
            <p className="font-modenine">
                Currently a student/worker, studying my Master's Degree at Nova IMS in Information Management and working at Happy Code Oriente as a IT/Code teacher.
            </p>
        </div>
    )
}