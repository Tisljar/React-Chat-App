const randomName = () => {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "dark"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "sea", "morning","snow"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
}

export default randomName;