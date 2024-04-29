import Orientation, { isOrientation, isOrientationKey } from "../types/Orientation"
import Rover from "../types/Rover"
import { UPPER_RIGHT_COORDINATES } from "./getDataFromCommandLine"

export default function createRoverFromInput(x: string, y: string, orientationKey: string, commands: string) {

    if (!isOrientationKey(orientationKey)) {
        throw new Error(`Invalid orientation key: ${orientationKey}`)
    }

    const orientation = Orientation[orientationKey]

    if (!isOrientation(orientation)) {
        throw new Error(`Invalid orientation: ${orientation}`)
    }

    return new Rover({ x: parseInt(x), y: parseInt(y) }, orientation as Orientation, commands, UPPER_RIGHT_COORDINATES)
}