import Coordinates from "./Coordinates"
import Orientation from "./Orientation"
import { Command, DirectionCommand, isArrayOfCommands, isMovementCommand } from "./Commands"

export default class Rover {
    coordinates: Coordinates
    orientation: Orientation
    commands: Command[]
    limits: Coordinates

    constructor(coordinates: Coordinates, orientation: Orientation, commands: string, limits: Coordinates) {
        const commandsArray = commands.split('')
        if (!isArrayOfCommands(commandsArray)) {
            throw new Error(`Invalid commands at: ${commands}`)
        }

        this.coordinates = coordinates
        this.orientation = orientation
        this.commands = commandsArray
        this.limits = limits
    }

    activate(roverNumber?: number) {
        if (roverNumber) {
            console.log(`Starting rover number ${roverNumber}...`)
        }

        this.commands.forEach((c: Command) => {
            this.printStatus(c)
            if (isMovementCommand(c)) {
                this.move()
                this.checkLimits(roverNumber)
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
        const finalPosition = `\nROVER NUMBER ${roverNumber} FINAL POSITION: ${this.printStatus()}\n`
        console.log(finalPosition)
        return finalPosition
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

    checkLimits(roverNumber?: number) {
        const isLeftBelow = this.coordinates.x < 0 || this.coordinates.y < 0
        const isRightAbove = this.coordinates.x > this.limits.x || this.coordinates.y > this.limits.y
        const isBeyondTheGrid = isLeftBelow || isRightAbove

        if (isBeyondTheGrid) {
            console.log(`Rover ${roverNumber ? `number ${roverNumber}`: ''} is beyond the grid/plateau`)
        }
    }
}