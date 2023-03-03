import { useParams } from 'react-router-dom';
const Documents = () => {
    // const { page } = useParams();
    // console.log(page);
    return (
        <div className='h-[86vh] overflow-y-hidden text-fuchsia-200 bg-white/10 backdrop-blur-[10px]'>
            <div className='flex flex-col md:flex-row mt-[20rem]'>
                <div className='w-full  md:w-1/4  rounded-lg p-3'>
                    <h1 className='text-2xl font-bold'>List of Documents</h1>
                    <ul className='h-[55%] overflow-y-scroll'>
                        <li className='mb-2 p-3'>Document 1</li>
                        <li className='mb-2 p-3'>Document 2</li>
                        <li className='mb-2 p-3'>Document 3</li>
                        <li className='mb-2 p-3'>Document 4</li>
                        <li className='mb-2 p-3'>Document 5</li>
                        <li className='mb-2 p-3'>Document 6</li>
                        <li className='mb-2 p-3'>Document 7</li>
                        <li className='mb-2 p-3'>Document 8</li>
                        <li className='mb-2 p-3'>Document 9</li>
                        <li className='mb-2 p-3'>Document 10</li>
                        <li className='mb-2 p-3'>Document 11</li>
                        <li className='mb-2 p-3'>Document 12</li>
                        <li className='mb-2 p-3'>Document 13</li>
                        <li className='mb-2 p-3'>Document 14</li>
                        <li className='mb-2 p-3'>Document 15</li>
                    </ul>
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
{/* Design concept
    1. this page will be 2part. 1st part will be the list of all the documents. 2nd part will be the content of the document.
    2. list will be in the left side of the screen and content will be in the right side of the screen.
    3. left side is a sidebar.
    4. like tailwindcss.com/docs
    
*/}