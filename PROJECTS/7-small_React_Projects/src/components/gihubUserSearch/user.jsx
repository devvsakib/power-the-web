export default function User({ img_src, link, username }) {
    return (
        <div className="userProfile">

            <img className="profile-img" src={img_src} alt={username} width="80" height="80" />
            <div>
                <p>{username}</p>
                <a href={link}>{username}</a>
            </div>

        </div>
    )
}