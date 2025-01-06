let words:string[] = [
    'STRING',
    'LOVE',
    'ANIMAL',
    'CAR',
    'PLANET',
    'STAR',
    'COUNTRY',
    'MUSIC',
    'TRANCE',
    'TECHNO',
    'SYNTHWAVE',
    'WINDOW',
    'DESERT',
    'CLOUD',
    'GALAXY',
    'PULSAR',
    'NEBULA',
    'CHEMICALS',
    'GAMES',
    'NEUTRON',
    'PHOTON',
    'CARBON',
    'EXOPLANET'    
]

export function getRandomWord() {

    const randomIndex:number = Math.floor(Math.random() * words.length);
    return words[randomIndex];

}