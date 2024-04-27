// TODO: receber parâmetros via linha de comando
type Coordinates = [number, number]

enum Orientation {
    N = 0,
    S = 1,
    W = 2,
    E = 3
}
enum VOrientation { N = 0, S = 1 }
enum HOrientation { W = 2, E = 3 }

class Rover {
    coordinates: Coordinates
    orientation: Orientation

    constructor(coordinates: Coordinates, orientation: Orientation) {
        this.coordinates = coordinates
        this.orientation = orientation
    }

    move() {
        switch (this.orientation) {
            case Orientation.N:
                this.coordinates[1]++
                break;
            case Orientation.W:
                this.coordinates[0]++
                break;
            case Orientation.E:
                this.coordinates[0]--
                break;

            case Orientation.S:
                this.coordinates[1]--
                break;
        }
    }
}

type DirectionCommand = 'R' | 'L'
type Command = DirectionCommand & 'M'

const turnFrom = {
    N: (c: DirectionCommand) => c === 'R' ? Orientation.N + 1 : Orientation.E,
    E: (c: DirectionCommand) => c === 'R' ? Orientation.E + 1 : Orientation.N,
    W: (c: DirectionCommand) => c === 'R' ? Orientation.W + 1 : Orientation.W - 1,
    S: (c: DirectionCommand) => c === 'R' ? Orientation.S + 1 : Orientation.S - 1,
}

const lowerLeftCoordinates: Coordinates = [0, 0]
const upperRightCoordinates: Coordinates = [8, 8]

const movementFunctions = {
    // R: (rover: Rover) => {
    //     rover.orientation = turnFunction[rover.orientation](command)

    //     if (ORIENTATIONS[currentIndex] != 'E') {
    //         newIndex = currentIndex + 1
    //     } else {
    //         newIndex = 0
    //     }

    //     return [_, __, ORIENTATIONS[newIndex]]
    // },
    // L: (position: any) => {
    //     const [_, __, orientation] = position
    //     const currentIndex = ORIENTATIONS.findIndex(o => o === orientation)

    //     let newIndex
    //     if (ORIENTATIONS[currentIndex] != 'N') {
    //         newIndex = currentIndex - 1
    //     } else {
    //         newIndex = ORIENTATIONS.length - 1
    //     }

    //     return [_, __, ORIENTATIONS[newIndex]]
    // },
    M: (rover: Rover) => {
        const { orientation } = rover



        if (['W', 'E'].includes(orientation)) {
            if (orientation == 'W')
                x++
            else
                x--
        }
        >
        return [x, y, orientation]
    },
}

const r = new Rover([2, 3], Orientation.N)
const input = 'LMLMLMLMM'

while (input.length > 0) {
    const command: Command | DirectionCommand = input[0] as Command | DirectionCommand

    if (command instanceof DirectionCommand)
}

console.log('final position:', roverPosition)

console.log(roverPosition)