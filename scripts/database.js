const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],

    villains: [
        {
            id: 1,
            name: "Dr. Doom",
            power:"energy absorption and projection"
        },
        {
            id: 2,
            name:"Beyonder",
            power: "generate, absorb, and manipulate near-limitless amounts of energy"
        }
]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}