import { useState, React } from 'react'
import './style.css';
const ppUrl = "https://avatars.githubusercontent.com/u/88339569"
function Header({ title, length }) {
    const [burgMenu, setState] = useState(false)
    function showHide() {
        setState(!burgMenu)
        setState(false)
        document.getElementById('menuHam').style.display = 'none'
    }
    return (
        <>
            {/* {console.log(title)} */}
            <div className="container mt-5 z-50">
                <div className="logo">
                    <div className="group flex items-center bg-slate-300">
                        {/* <img className="shrink-0 h-12 w-12 rounded-md" src={ppUrl} alt="" /> */}
                        <div className="ltr:ml-3 rtl:mr-3">
                            <p className="text-sm font-bold text-slate-300 group-hover:text-white">{title}</p>
                            <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">Frontend Developer</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        length !== 0 ?
                            (
                                <span><b>{length}</b> list {length === 1 ? "item" : "Items"}</span>
                            ) : (
                            "No item left!"
                        )
                    }

                </div>
            </div>
        </>
    )
}
Header.defaultProps = {
    title: "Default Title"
}
export default Header