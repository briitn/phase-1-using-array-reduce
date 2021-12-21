const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries=batteryBatches.reduce(function(acummulator,batteries){return batteries+acummulator},0)
console.log(totalBatteries)