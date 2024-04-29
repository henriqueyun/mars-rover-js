import { storeLogs, prepareElasticsearch } from "./es/client";
import getDataFromCommandLine from "./util/getDataFromCommandLine";

(async () => {
    await prepareElasticsearch()

    const input = getDataFromCommandLine()
    const { rovers } = input

    rovers.forEach(async (r, index) => {
        const number = index + 1
        r.activate(number)
        const output = r.printFinalPosition(number)

        await storeLogs(input, output)
    })
})()