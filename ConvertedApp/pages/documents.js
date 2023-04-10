import React, { useState } from "react"
import BackendRoadmap from "/components/Guidelines/List/BackendRoadmap"
import FrontendInterview from "/components/Guidelines/List/FrontendInterview"
import FrontendRoadmap from "/components/Guidelines/List/FrontendRoadmap"
import FullStackRoadmap from "/components/Guidelines/List/FullStackRoadmap"
import Questions from "/components/Guidelines/Data/Questions"
import useWindow from "/components/hooks/useWindow"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DocumentInterface from "/components/DocumentInterface"
import { FaSun, FaMoon } from "react-icons/fa"

const Documents = () => {
	const { page } = useParams()
	console.log(page)

	const [content, setContent] = useState("")
	const [menuOpen, setMenuOpen] = useState(false)
	const [menu, setMenu] = useState(false)
	const [theme, setTheme] = useState(true)
	const { width } = useWindow()

	// console.log(width);
	useEffect(() => {
		if (width < 768) {
			setMenu(true)
			setMenuOpen(true)
		} else {
			setMenu(false)
			setMenuOpen(false)
		}
	}, [width])

	const handleTheme = (e) => {
		e.stopPropagation()

		setTheme(!theme)
	}

	return (
		<div className='h-[86vh]overflow-y-hidden font-[inter] backdrop-blur-[10px]'>
			<div className='flex flex-col md:flex-row'>
				<div
					className={`w-full md:w-1/4 p-3 px-5 ${
						theme ? "bg-[#F5F7F9] text-black" : "bg-[#242A31] text-white"
					}]`}
				>
					<div
						className='flex justify-between cursor-pointer mt-3 md:cursor-auto items-center'
						onClick={() => {
							width < 768 ? setMenu(!menu) : setMenu(menu)
						}}
					>
						<h1 className={`text-2xl font-bold select-none ${theme ? "text-black" : "text-white"}`}>
							Documents
						</h1>
						<div className='w-1/4 lg:w-fit flex justify-around items-center'>
							<button
								className={`${theme ? "text-black" : "text-white"} text-3xl z-10`}
								onClick={handleTheme}
							>
								{theme ? <FaMoon /> : <FaSun />}
							</button>
							<button
								className={`text-2xl font-bold transition-all ease-linear duration-300 ${
									!menuOpen ? "hidden" : ""
								}`}
							>
								{menu ? (
									<i className='fas fa-chevron-right'></i>
								) : (
									<i className='fas fa-chevron-left'></i>
								)}
							</button>
						</div>
					</div>
					<div
						className={`h-auto md:h-[75vh] pb-5 mt-5 text-md font-semibold  flex flex-col overflow-x-hidden gap-10 overflow-y-scroll ${
							menu ? "hidden" : ""
						} ${theme ? "text-black" : "text-white"}`}
					>
						<FrontendInterview
							setContent={setContent}
							content={content}
							theme={theme}
						/>
						<FrontendRoadmap
							setContent={setContent}
							setMenu={setMenu}
							menu={menu}
							theme={theme}
						/>
						<BackendRoadmap
							setContent={setContent}
							setMenu={setMenu}
							menu={menu}
							theme={theme}
						/>
						<FullStackRoadmap
							setContent={setContent}
							setMenu={setMenu}
							menu={menu}
							theme={theme}
						/>
					</div>
				</div>
				<div
					className={`w-full h-[100vh] md:w-3/4 py-5 px-10 ${
						theme ? "bg-white text-black" : "bg-black text-white"
					} backdrop-blur-[10px] overflow-y-scroll`}
				>
					{!content ? <DocumentInterface /> : <Questions content={content} />}
				</div>
			</div>
		</div>
	)
}

export default Documents
