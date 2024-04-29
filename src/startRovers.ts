import Rover from "./types/Rover"

const startRovers = (rovers: Rover[]): string[] => {
    const logs: string[] = []
    rovers.forEach((r, index) => {
        const number = index + 1
        r.activate(number)
        logs.push(r.printFinalPosition(number))
    })
    return logs
}
export default startRovers