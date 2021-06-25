/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    var destinationCities = getDestinationCities(paths);
    return getFinalDestinationCity(paths, destinationCities);
};
/*
   Get array of destination cities from paths
   @param {string[][]} paths
   @return {string[]} destinationCities
 */
var getDestinationCities = function (paths) {
    var destinationCities = [];
    for (var i = 0; i < paths.length; i++) {
        destinationCities.push(paths[i][1]);
    }
    return destinationCities;
};
/**
  Find final desintation city from array of destination cities
  @param {string[]} destinationCities
  @param {string[][]} paths
  @return {string} finalDestinationCity
 */
var getFinalDestinationCity = function (paths, destinationCities) {
    for (var i = 0; i < destinationCities.length; i++) {
        var isFinalDestCity = true;
        for (var j = 0; j < paths.length; j++) {
            if (paths[j][0] === destinationCities[i]) {
                isFinalDestCity = false;
                break;
            }
        }
        if (isFinalDestCity) {
            return destinationCities[i];
        }
    }
};
console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
var run = function () {
    return (destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
};
