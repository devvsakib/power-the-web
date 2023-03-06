import React from 'react';
import BackendRoadmap from '../List/BackendRoadmap';
import FrontendInterview from '../List/FrontendInterview';
import FrontendRoadmap from '../List/FrontendRoadmap';
import FullStackRoadmap from '../List/FullStackRoadmap';

const Documents = () => {
    return (
        <div className='h-[86vh] overflow-y-hidden text-fuchsia-200 bg-white/10 backdrop-blur-[10px]'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full  md:w-1/4  rounded-lg p-3'>
                    <h1 className='text-2xl font-bold'>List of Documents</h1>
                    <div className='h-[75vh] pb-5 mt-5 flex flex-col gap-10 overflow-y-scroll'>
                        <FrontendInterview />
                        <FrontendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <BackendRoadmap />
                        <FullStackRoadmap />
                    </div>
                </div>
                <div className='w-full md:w-3/4 px-10 bg-white/10 backdrop-blur-[10px] rounded-lg p-3'>
                    <h1 className='text-2xl font-bold'>Document 1</h1>
                    <p className='text-lg'>
                        Lorem10 ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quod
                        voluptatum. Quisquam, quod voluptatum. Quisquam, quod
                        voluptatum. Quisquam, quod voluptatum. Quisquam, quod  volu
                        ptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum.
                        Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam,
                        quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum.
                        Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum.
                        Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Documents