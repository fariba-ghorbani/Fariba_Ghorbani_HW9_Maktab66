function timeToEat(string) {
    function subtractTime(time1, time2){
        let timeOneObject = new Date();
        let timeTwoObject = new Date();
        timeOneObject.setHours(time1[0], time1[1], 0);
        timeTwoObject.setHours(time2[0], time2[1], 0);
        let difference = Math.abs(timeOneObject - timeTwoObject)
        return [Math.floor(difference/(60*1000*60)), (difference % (60*1000*60))/(1000*60)]
    }
    let temp = string.split(" ")
    let timeHourMinute = temp[0].split(":").map((item) => Number(item))
    if (temp[1] == "a.m." && timeHourMinute[0] == 12) {
        timeHourMinute[0] = 0
    }
    else if (temp[1] == "p.m." && timeHourMinute[0] != 12) {
        timeHourMinute[0] = timeHourMinute[0] + 12
    }
    
    if (timeHourMinute[0] >= 0 && timeHourMinute[0] < 7) {
        console.log(subtractTime(timeHourMinute, [7, 0]))
    }
    else if (timeHourMinute[0] >= 7 && timeHourMinute[0] < 12) {
        console.log(subtractTime(timeHourMinute, [12, 0]))
    }
    else if (timeHourMinute[0] >= 12 && timeHourMinute[0] < 19) {
        console.log(subtractTime(timeHourMinute, [19, 0]))
    }
    else if (timeHourMinute[0] >= 19 && timeHourMinute[0] < 24) {
        let temp = subtractTime(timeHourMinute, [24, 0])
        temp[0] += 7
        console.log(temp)
    }
}

timeToEat("2:00 p.m.")
timeToEat("5:50 a.m.")