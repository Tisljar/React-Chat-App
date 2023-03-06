

const Avatar = ({avatar, imgSrc, handleAvatarChange}) => {
    return (<>
        <label className='radio-label'>
        <input type="radio" name='avatar' value={avatar} className="radio-input" onClick={handleAvatarChange}  />
        <img src={imgSrc} alt="" className='avatar-png' width="100px" height="100px" id={avatar}/>
        </label>
    </>);
}

export default Avatar;

