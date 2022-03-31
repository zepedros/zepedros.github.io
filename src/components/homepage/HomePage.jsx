import Header from "../common/Header"
import TopMenu from "../common/TopMenu"
export default function HomePage() {
    console.log(process.env.PUBLIC_URL);
    return (
        <div>

            <div className="hidden md:block">
                <Header></Header>
            </div>
            <div className="visible xl:block">
                <TopMenu></TopMenu>
            </div>

            <h1 className='font-modenine'>HOME PAGE
                <br>
                </br>
                UNDER DEVELOPMENT 🛠️
            </h1>
        </div>
    )
}