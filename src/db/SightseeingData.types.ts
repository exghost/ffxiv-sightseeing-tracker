export type SightseeingLog = {
    number: number,
    name: string,
    region: string,
    zone: string,
    coords: string,
    weatherZone: string,
    weather: string[]
    startTime: number,
    endTime: number,
    emote: string,
    comment: string
}

export type SightseeingLogData = {
    logs: SightseeingLog[]
}