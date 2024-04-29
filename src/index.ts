import getDataFromCommandLine from "./util/getDataFromCommandLine";

const { rovers } = getDataFromCommandLine()

rovers.forEach((r, index) => {
    const number = index + 1
    r.activate(number)
    r.printFinalPosition(number)
})