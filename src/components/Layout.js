import { Topbar } from "./Topbar"

export const Layout = ({ children }) => {
    return(<>
        <div className="layoutContainer">
            <Topbar />
            <div className="componentContainer"> {children} </div>
        </div>
    </>)
}