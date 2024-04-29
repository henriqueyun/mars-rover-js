import { prepareElasticsearch, storeLogs } from "./es/client";
import getDataFromCommandLine from "./util/getDataFromCommandLine";
import startRovers from "./startRovers";
import CommandLineData from "./types/CommandLineData";

export const main = async (input: CommandLineData) => {
    const { rovers } = input
    const output = startRovers(rovers)
    await storeLogs(input, output)
}

if (process.env.NODE_ENV?.toLowerCase() !== 'test') {
    (async () => {
        await prepareElasticsearch()
        const input = getDataFromCommandLine()
        await main(input)
    })()
}