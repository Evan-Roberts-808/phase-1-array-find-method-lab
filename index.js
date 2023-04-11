// code your solution here
function superbowlWin(record) {
    const resultWin = record.find(record => record.result === "W");

    if (resultWin) {
        return result.year;
    } else {
        return undefined;
    }
}
