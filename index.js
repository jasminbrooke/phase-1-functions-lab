// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
    const result = distanceFromHqInBlocks(block);
    return (result * 264)
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return (distance * 264)
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    let fare = ((feet - 400) * .02)
    if (feet >= 2500) {
        return "cannot travel that far"
    }
    else if (feet >= 2000) {
        return 25
    }
    else if (feet <= 400) {
        return 0 
    }
    else {
        return fare
    }
}

