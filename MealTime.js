// 3. Jake's Meal Time
// Stack :  javascript

// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

function minutesSinceMidnight(timeStr) {
    let rg = /(\d{1,2})\:(\d{1,2})\s+([ap])\.?m/
    let [,hour, minute, am] = rg.exec(timeStr);
    hour = Number(hour);
    if (am === 'a' && hour === 12) hour -= 12;
    if (am === 'p' && hour < 12) hour += 12;
    return hour * 60 + Number(minute);
}

function minutesToHoursAndMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return [ hours, minutes]
}

function timeToEat(timeStr) {
    let currentTime = minutesSinceMidnight(timeStr);
    let mealTimes = ['7:00 a.m', '12:00 p.m.', '7:00 p.m.'].map(minutesSinceMidnight);
    let nextMealTime = mealTimes.find(mealTime => mealTime >= currentTime);
    // No meal found...
    if (nextMealTime === undefined) {
        return nextMealTime;
    }
    let timeToNextMealMinutes = nextMealTime - currentTime;
    return minutesToHoursAndMinutes(timeToNextMealMinutes);
} 

console.log(timeToEat("5:50 a.m."))