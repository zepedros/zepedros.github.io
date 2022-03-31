import NewHeader from "../common/NewHeader"
import NewTopMenu from "../common/NewTopMenu"
export default function AboutMe() {
    return (
        <div>
            <div className="hidden md:block">
                <NewHeader></NewHeader>
            </div>
            <div className="visible xl:block">
                <NewTopMenu></NewTopMenu>
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