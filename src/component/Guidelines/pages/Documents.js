import React, { useState } from 'react';
import BackendRoadmap from '../List/BackendRoadmap';
import FrontendInterview from '../List/FrontendInterview';
import FrontendRoadmap from '../List/FrontendRoadmap';
import FullStackRoadmap from '../List/FullStackRoadmap';
import Questions from '../Data/Questions';
import useWindow from '../../hooks/useWindow';
import { useEffect } from 'react';

const Documents = () => {
    const [content, setContent] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const { width } = useWindow();

    // console.log(width);
    useEffect(() => {
        if (width < 768) {
            setMenu(true);
            setMenuOpen(true);
        }
        else{
            setMenu(false);
            setMenuOpen(false);
        }

    }, [width])

    return (
        <div className='h-[86vh]overflow-y-hidden text-fuchsia-200 backdrop-blur-[10px]'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full  md:w-1/4  rounded-lg p-3 px-5 bg-white/5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>List of Documents</h1>
                        <button onClick={() => setMenu(!menu)} className={`text-2xl font-bold transition-all ease-linear duration-300 ${!menuOpen ? "hidden" : ""}`}>{menu ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-left"></i>}</button>
                    </div>
                    <div className={`h-auto md:h-[75vh] pb-5 mt-5 flex flex-col gap-10 overflow-y-scroll ${menu ? "hidden" : ""}`}>
                        <FrontendInterview
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                        />
                        <FrontendRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            />
                        <BackendRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            />
                        <FullStackRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                        />
                    </div>
                </div>
                <div className='w-full h-[100vh] md:w-3/4 py-5 px-10 bg-white/5 backdrop-blur-[10px] rounded-lg overflow-y-scroll'>
                    {
                        !content ? <h1 className='text-2xl font-bold'>Select a Document To Get start</h1> :
                            <Questions content={content} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Documents