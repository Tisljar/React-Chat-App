const randomName = () => {
    const adjectives = ["Autumn", "Hidden", "Bitter", "Misty", "Dark"];
    const nouns = ["Waterfall", "River", "Breeze", "Moon", "Rain", "Sea", "Morning","Snow"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
}

export default randomName;