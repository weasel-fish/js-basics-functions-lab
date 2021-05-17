// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2);
    
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}