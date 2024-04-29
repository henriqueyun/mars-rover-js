import Coordinates from "./Coordinates";
import Rover from "./Rover";

type CommandLineData = {
    rovers: Rover[];
    UPPER_RIGHT_COORDINATES: Coordinates;
    LOWER_LEFT_COORDINATES: Coordinates;
}

export default CommandLineData