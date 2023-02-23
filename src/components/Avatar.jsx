

const Avatar = ({avatar,imgSrc,checked}) => {
    // const avatarLink = '../../assets/img/' + avatar + '.png';
    return (<>
        <label className='radio-label'>
        <input type="radio" name='avatar' value={avatar} className="radio-input" defaultChecked={checked}/>
        <img src={imgSrc} alt="" className='avatar-png' width="100px" height="100px"/>
        </label>
    </>);
}

export default Avatar;

