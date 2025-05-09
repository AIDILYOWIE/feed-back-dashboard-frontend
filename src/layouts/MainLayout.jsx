import Sidebar from "../scenes/global/Sidebar"
import Topbar from "../scenes/global/Topbar"

 const MainLayout = ({children, isSidebar, setIsSidebar}) => {
    return (
        <div className="app">
            <Sidebar isSidebar={isSidebar}/>
            <main className="content">
                <Topbar setIsSidebar={setIsSidebar}/>
                {children}
            </main>
        </div>
    )
}

export default MainLayout