import Rover from "../types/Rover"
import Coordinates from "../types/Coordinates"
import CommandLineData from "../types/CommandLineData"
import createRoverFromInput from "./createRoverFromInput"

function getAllUserParameters(): string[] {
    // the first two arguments will almost always be node and path/to/script.js https://shorturl.at/eBT14
    return process.argv?.slice(2)
}

function getUserFirstLineParameter(): number[] {
    return getAllUserParameters()[0]
        .split(',')
        .map((s: string) => parseInt(s)) as number[]
}

function getSecondToLastParameters(): string[] {
    return getAllUserParameters().slice(1)
}

function getRoverData() {
    const ROVER_PARAMETERS = getSecondToLastParameters()
    const inputs: Rover[] = []

    // TODO: ask to GPT simplify that
    for (let i = 0; i < ROVER_PARAMETERS.length; i += 2) {
        const [x, y, orientation]: string[] = ROVER_PARAMETERS[i].split(",")
        const commands = ROVER_PARAMETERS[i + 1]
        const r = createRoverFromInput(x, y, orientation, commands)
        inputs.push(r)
    }
    return inputs
}


export default (): CommandLineData => {
    const [x, y]: number[] = getUserFirstLineParameter()
    const UPPER_RIGHT_COORDINATES: Coordinates = { x, y }
    const LOWER_LEFT_COORDINATES: Coordinates = { x: 0, y: 0 }
    return { rovers: getRoverData(), UPPER_RIGHT_COORDINATES, LOWER_LEFT_COORDINATES }
}