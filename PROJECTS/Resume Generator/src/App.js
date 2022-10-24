import React, { useEffect, useRef, useState, useCallback } from 'react'
import { HouseDoorFill, Linkedin, Github, Globe2, PhoneFill, At } from 'react-bootstrap-icons'
import { HexColorPicker } from "react-colorful"
import halfmoon from 'halfmoon'
import ReactToPdf from 'react-to-pdf'
import { toPng } from 'html-to-image'
import 'halfmoon/css/halfmoon.css'

export default function App() {
	const page = useRef()
	const [ includePhoto, setIncludePhoto ] = useState(false)
	const [ color, setColor ] = useState('#000000')
	const [ photo, setPhoto ] = useState('')
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ phone, setPhone ] = useState('')
	const [ address, setAddress ] = useState('')
	const [ github, setGithub ] = useState('')
	const [ linkedin, setLinkedin ] = useState('')
	const [ website, setWebsite ] = useState('')
	const [ education, setEducation ] = useState([])
	const [ workExperience, setWorkExperience ] = useState([])
	const [ certifications, setCertifications ] = useState([])
	const [ misc, setMisc ] = useState([])
	useEffect(() => {
		halfmoon.onDOMContentLoaded()
	}, [])
	useEffect(() => {
		if(!includePhoto) setPhoto('')
	}, [ includePhoto ])
	const handlePhoto = (e) => {
		let reader = new FileReader()
		reader.readAsDataURL(e.target.files[0])
		reader.onload = () => setPhoto(reader.result) 
		reader.onerror = (error) => console.log('Error: ', error)
	}
	const handleEducation = (e, index, flag) => {					// flag = true for title, false for content
		let _education = [ ...education ]
		switch(flag) {
			case 1:
				_education[index].title = e.target.value
				break
			case 2:
				_education[index].content = e.target.value
				break
			default:
				_education.splice(index, 1)
		}
		setEducation(_education)
	}
	const handleWorkExperience = (e, index, flag) => {					// flag = true for title, false for content
		let _workExperience = [ ...workExperience ]
		switch(flag) {
			case 1:
				_workExperience[index].title = e.target.value
				break
			case 2:
				_workExperience[index].content = e.target.value
				break
			default:
				_workExperience.splice(index, 1)
		}
		setWorkExperience(_workExperience)
	}
	const handleCertifications = (e, index, flag) => {					// flag = true for title, false for content
		let _certifications = [ ...certifications ]
		switch(flag) {
			case 1:
				_certifications[index].title = e.target.value
				break
			case 2:
				_certifications[index].content = e.target.value
				break
			default:
				_certifications.splice(index, 1)
		}
		setCertifications(_certifications)
	}
	const handleMisc = (e, index, flag) => {					// flag = true for category, false for content
		let _misc = [ ...misc ]
		switch(flag) {
			case 1:
				_misc[index].category = e.target.value
				break
			case 2:
				_misc[index].info.push({ title: '', content: '' })
				break
			default:
				_misc.splice(index, 1)
		}
		setMisc(_misc)
	}
	const handleInfo = (e, index, index2, flag) => {					// flag = true for title, false for content
		let _misc = [ ...misc ]
		switch(flag) {
			case 1:
				_misc[index].info[index2].title = e.target.value
				break
			case 2:
				_misc[index].info[index2].content = e.target.value
				break
			default:
				_misc[index].info.splice(index2, 1)
		}
		setMisc(_misc)
	}
	const generate = useCallback(() => {
		if (page.current === null) return
		toPng(page.current, { cacheBust: true, })
			.then((dataUrl) => {
			const link = document.createElement('a')
			link.download = 'resume.png'
			link.href = dataUrl
			link.click()
			})
			.catch((err) => {
			console.log(err)
			})
	}, [page])
	return (
		// Page wrapper start
		<div className="page-wrapper">

			{/* Content wrapper start */}
			<div className="content-wrapper">
			{/* Add your page's main content here */}
				<div className="row h-full">
					<div className="col-12 col-md-5 bg-dark overflow-y-auto" style={{ height: "100vh" }}>
						<div className="card">
							<div className="form-row row-eq-spacing mb-20">
								<div className="col-3">
									<div className="dropdown">
										<button className="btn btn-secondary" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
											Title Font Color
										</button>
										<div className="dropdown-menu dropdown-menu-center">
										<HexColorPicker color={color} onChange={setColor} />
										</div>
									</div>
								</div>
								<div className="col-9">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Name</span>
										</div>
										<input type="text" className="form-control" placeholder="Your Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
									</div>
								</div>
							</div>
							<textarea value={address} className="form-control form-control-sm font-size-14 mb-20" onChange={(e) => setAddress(e.target.value)} placeholder="Address"></textarea>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Email</span>
										</div>
										<input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/>
									</div>
								</div>
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">LinkedIn</span>
										</div>
										<input type="text" value={linkedin} className="form-control" onChange={(e) => setLinkedin(e.target.value)}/>
									</div>
								</div>
							</div>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Github</span>
										</div>
										<input type="text" value={github} className="form-control" onChange={(e) => setGithub(e.target.value)}/>
									</div>
								</div>
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Website</span>
										</div>
										<input type="text" value={website} className="form-control" onChange={(e) => setWebsite(e.target.value)}/>
									</div>
								</div>
							</div>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Phone</span>
										</div>
										<input type="tel" value={phone} className="form-control" onChange={(e) => setPhone(e.target.value)}/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-group">
										<div className="custom-switch mt-5 mr-10">
											<input type="checkbox" id="includePhoto" onChange={(e) => setIncludePhoto(e.target.checked)} />
											<label htmlFor="includePhoto">Add Photo?</label>
										</div>
										{includePhoto ? <div className="custom-file">
											<input type="file" id="photo" onChange={handlePhoto} />
											<label htmlFor="photo" className="m-0">Choose Photo</label>
										</div> : null}
									</div>
								</div>
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Education</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setEducation(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Educational Qualification</button>
							<div>
								{education.map((edu, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={edu.title} onChange={(e) => handleEducation(e, index, 1)} />
									<input type="text" className="form-control" placeholder="Content" value={edu.content} onChange={(e) => handleEducation(e, index, 2)} />
									<button className="btn btn-secondary" onClick={(e) => handleEducation(e, index, 0)}>Remove</button>
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Work Experience</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setWorkExperience(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Work Experience</button>
							<div>
								{workExperience.map((work, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={work.title} onChange={(e) => handleWorkExperience(e, index, 1)} />
									<input type="text" className="form-control" placeholder="Content" value={work.content} onChange={(e) => handleWorkExperience(e, index, 2)} />
									<button className="btn btn-secondary" onClick={(e) => handleWorkExperience(e, index, 0)}>Remove</button>
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Certifications</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setCertifications(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Certifications</button>
							<div>
								{certifications.map((cert, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={cert.title} onChange={(e) => handleCertifications(e, index, 1)} />
									<input type="text" className="form-control" placeholder="Content" value={cert.content} onChange={(e) => handleCertifications(e, index, 2)} />
									<button className="btn btn-secondary" onClick={(e) => handleCertifications(e, index, 0)}>Remove</button>
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Miscellaneous</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setMisc(prevstate => prevstate.concat({ category: '', info: [] }))}>Add Miscellaneous Content</button>
							<div>
								{misc.map((category, index) => <div key={index}>
									<div className="input-group mt-15">
										<input type="text" className="form-control" placeholder="Category" value={category.category} onChange={(e) => handleMisc(e, index, 1)} />
										<button className="btn btn-success" onClick={(e) => handleMisc(e, index, 2)}>Add Info</button>
										<button className="btn btn-danger" onClick={(e) => handleMisc(e, index, 0)}>Remove Category</button>
									</div>
									{category.info.map((info, index2) => <div key={index2} className="input-group mt-5">
										<input type="text" className="form-control" placeholder="Title" value={info.title} onChange={(e) => handleInfo(e, index, index2, 1)} />
										<input type="text" className="form-control" placeholder="Content" value={info.content} onChange={(e) => handleInfo(e, index, index2, 2)} />
										<button className="btn btn-secondary" onClick={(e) => handleInfo(e, index, index2, 0)}>Remove</button>
									</div>)}
								</div>)}
							</div>
							<div className="text-center mt-20">
							<ReactToPdf targetRef={page} filename="resume.pdf" options={{ orientation: 'p', unit: 'pt' }} x={0} y={0} scale={1}>
								{({toPdf}) => <button className="btn btn-lg btn-success mr-5" onClick={toPdf}>Generate PDF</button>}
							</ReactToPdf>
							<button className="btn btn-lg btn-success ml-5" onClick={generate}>Generate PNG</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7 bg-dark overflow-y-auto" style={{ height: "100vh" }}>
						<div ref={page} className="mx-auto card bg-white" style={{ width: "21cm", height: "29.7cm"}}>
							<div className="h-200 mb-20">
								<div className="d-inline-block mt-20 float-left">
									<div className="d-flex">
										{photo ? <img src={photo} className="rounded-circle" width="100" height="100" alt="Profile" /> : null}
										<h1 className="m-20">{name}</h1>
									</div>
									<p style={{ color: color }} className="font-size-18">{address ? <span style={{ whiteSpace: "pre-wrap" }}><HouseDoorFill className="mr-5" /> {address}</span> : null}</p>
								</div>
								<div className="d-inline-block float-right text-right">
									<p style={{ color: color }} className="font-size-18">{email ? <span>{email} <At /></span> : null}</p>
									<p style={{ color: color }} className="font-size-18">{linkedin ? <span>{linkedin} <Linkedin /></span> : null}</p>
									<p style={{ color: color }} className="font-size-18">{github ? <span>{github} <Github /></span> : null}</p>
									<p style={{ color: color }} className="font-size-18">{website ? <span>{website} <Globe2 /></span> : null} </p>
									<p style={{ color: color }} className="font-size-18">{phone ? <span>{phone} <PhoneFill /></span> : null}</p>
								</div>
							</div>
							<div className="mb-20">
								{education.length > 0 ? <h3 style={{ color: color }} className="text-decoration-underline">Education</h3> : null}
								<dl>
									{education.map((edu, index) => <div className="mb-10" key={index}>
										<dt className="font-size-22 font-weight-semi-bold">{edu.title}</dt>
										<dd className="font-size-18">{edu.content}</dd>
									</div>)}
								</dl>
							</div>
							<div className="mb-20">
								{workExperience.length > 0 ? <h3 style={{ color: color }} className="text-decoration-underline">Work Experience</h3> : null}
								<dl>
									{workExperience.map((work, index) => <div className="mb-10" key={index}>
										<dt className="font-size-22 font-weight-semi-bold">{work.title}</dt>
										<dd className="font-size-18">{work.content}</dd>
									</div>)}
								</dl>
							</div>
							<div className="mb-20">
								{certifications.length > 0 ? <h3 style={{ color: color }} className="text-decoration-underline">Certifications</h3> : null}
								<dl>
									{certifications.map((cert, index) => <div className="mb-10" key={index}>
										<dt className="font-size-22 font-weight-semi-bold">{cert.title}</dt>
										<dd className="font-size-18">{cert.content}</dd>
									</div>)}
								</dl>
							</div>
							{misc.map((category, index) => <div key={index} className="mb-20">
								{category.info.length > 0 ? <h3 style={{ color: color }} className="text-decoration-underline">{category.category}</h3> : null}
								<dl>
									{category.info.map((info, index2) => <div className="mb-10" key={index2}>
										<dt className="font-size-22 font-weight-semi-bold">{info.title}</dt>
										<dd className="font-size-18">{info.content}</dd>
									</div>)}
								</dl>
							</div>)}
						</div>
					</div>
				</div>
			</div>
			{/* Content wrapper end */}

		</div>
		//Page wrapper end
	)
}


