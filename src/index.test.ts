import { main } from './index'
import { searchByIndexName } from "./es/client";
import CommandLineData from "./types/CommandLineData";
import Coordinates from "./types/Coordinates";
import Orientation from "./types/Orientation";
import Rover from "./types/Rover";


describe('Index.ts main tests', function () {
    test('Should store program input and output logs', async function () {
        const rover1 = new Rover({ x: 1, y: 2 }, Orientation.N, 'LMLMLMLMM')
        const rover2 = new Rover({ x: 3, y: 3 }, Orientation.E, 'MRRMMRMRRM')

        const UPPER_RIGHT_COORDINATES: Coordinates = { x: 4, y: 4 } // 4x4 (5x5?) grid
        const LOWER_LEFT_COORDINATES: Coordinates = { x: 0, y: 0 }

        const CLIData: CommandLineData = { rovers: [rover1, rover2], UPPER_RIGHT_COORDINATES, LOWER_LEFT_COORDINATES }

        await main(CLIData)

        const input = await searchByIndexName('input-logs')
        const output = await searchByIndexName('output-logs')

        expect(input.hits.hits.length).toBeGreaterThan(0)
        expect(output.hits.hits.length).toBeGreaterThan(1)
    })
})