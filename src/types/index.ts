
// Type Driver  definition
export type Driver = {
    id: number
    name: string
    gamertag: string
    team: string 
    teamCSS: string
}

export type DriverRace = Driver & {
    racePosition: number
    racePoints: number
}

export type DriverGeneral = Driver & {
    championshipPosition: number
    championshipPoints: number
}