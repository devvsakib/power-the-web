import { Link } from 'react-router-dom';
const Post = ({ post, idx }) => {
    return (
        <div className='flex flex-row m-2' key={idx}>
            <div className="p-4 text-left mt-4 rounded-md w-[350px] shadow-md shadow-gray-300/30 bg-[#21053b]">
                <Link to={`/postpage/${post.id}`}>
                    <h2 className='font-bold mb-1'>{post.title}</h2>
                    <p className="text-[12px]">{post.datetime}</p>
                    <p className="text-[16px] pt-4">{
                        (post.body).length <= 25
                            ? post.body
                            : `${(post.body).slice(0, 100)}...`
                    }</p>
                    <button className='px-5 py-[5px] rounded-md mt-3 text-sm text-gray-800 bg-gray-400'>Read</button>
                </Link>
            </div>
        </div>
    )
}

export default Post