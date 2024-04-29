import Coordinates from "./Coordinates"
import Orientation from "./Orientation"
import { Command, DirectionCommand, isArrayOfCommands, isMovementCommand } from "./Commands"

export default class Rover {
    coordinates: Coordinates
    orientation: Orientation
    commands: Command[]

    constructor(coordinates: Coordinates, orientation: Orientation, commands: string) {
        const commandsArray = commands.split('')
        if (!isArrayOfCommands(commandsArray)) {
            throw new Error(`Invalid commands at: ${commands}`)
        }

        this.coordinates = coordinates
        this.orientation = orientation
        this.commands = commandsArray
    }

    activate(roverNumber?: number) {
        if (roverNumber) {
            console.log(`Starting rover number ${roverNumber}...`)
        }

        this.commands.forEach((c: Command) => {
            this.printStatus(c)
            if (isMovementCommand(c)) {
                this.move()
                return
            }
            this.rotate(c as DirectionCommand)
        })
    }


    printStatus(c?: Command) {
        const position = `X: ${this.coordinates.x} Y: ${this.coordinates.y} Orientation: ${Orientation[this.orientation]}`
            + `${c ? '\nNext Command: ' + c : ''}`
        console.log(position)
        return position
    }

    printFinalPosition(roverNumber: number) {
        console.log(`\nROVER NUMBER ${roverNumber} FINAL POSITION: ${this.printStatus()}\n`)
    }

    move() {
        switch (this.orientation) {
            case Orientation.N:
                this.coordinates.y = this.coordinates.y + 1
                break;
            case Orientation.W:
                this.coordinates.x = this.coordinates.x + 1
                break;
            case Orientation.E:
                this.coordinates.x = this.coordinates.x - 1
                break;
            case Orientation.S:
                this.coordinates.y = this.coordinates.y - 1
                break;
        }
    }

    rotate(direction: DirectionCommand) {
        switch (direction) {
            case 'R':
                this.clockwise()
                break;
            case 'L':
                this.antiClockwise()
                break;
        }
    }

    clockwise() {
        const isEast = this.orientation === Orientation.E

        if (!isEast) {
            this.orientation += 1
            return
        }
        this.orientation = Orientation.N
    }

    antiClockwise() {
        const isNorth = this.orientation === Orientation.N

        if (!isNorth) {
            this.orientation -= 1
            return
        }
        this.orientation = Orientation.E
    }
}