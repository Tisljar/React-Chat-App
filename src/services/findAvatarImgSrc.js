const findAvatarImgSrc = (avatars, currentChatter) => {
    const matchingAvatar = avatars.find((avatar) => (avatar.name === currentChatter.avatar));
    return matchingAvatar.imgSrc;
}

export default findAvatarImgSrc;