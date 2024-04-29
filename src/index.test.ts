import { main } from "./index";
import Orientation from "./types/Orientation";
import Rover from "./types/Rover";

describe('Index.ts main tests', function () {
    describe('Examples tests', function () {
        test('Rover should be at 1,3,N to landing position 1,2,N and instructions LMLMLMLMM', () => {
            const r = new Rover({ x: 1, y: 2 }, Orientation.N, 'LMLMLMLMM')
            r.activate()
            expect(r.coordinates.x).toBe(1)
            expect(r.coordinates.y).toBe(3)
            expect(r.orientation).toBe(Orientation.N)
        })


        test.failing('Rover should be at 2,3,S to landing position 3,3,E and instructions MRRMMRMRRM', () => {
            const r = new Rover({ x: 3, y: 3 }, Orientation.E, 'MRRMMRMRRM')
            r.activate()
            expect(r.coordinates.x).toBe(2)
            expect(r.coordinates.y).toBe(3)
            expect(r.orientation).toBe(Orientation.S)
        })
    })
})