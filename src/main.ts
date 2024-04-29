import { storeLogs } from "./es/client";
import startRovers from "./startRovers";
import CommandLineData from "./types/CommandLineData";

const main = async (input: CommandLineData) => {
    const { rovers } = input
    const output = startRovers(rovers)
    await storeLogs(input, output)
    console.log('The logs we\'re stored')
}

export default main