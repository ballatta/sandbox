/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths: string[][]): string {
  let destinationCities = getDestinationCities(paths)
  return getFinalDestinationCity(paths, destinationCities)
};

/*
   Get array of destination cities from paths
   @param {string[][]} paths
   @return {string[]} destinationCities
 */

const getDestinationCities = (paths): string[] => {
  let destinationCities = []
  for (let i = 0; i < paths.length; i++) {
    destinationCities.push(paths[i][1])
  }
  return destinationCities
};

/**
  Find final desintation city from array of destination cities
  @param {string[]} destinationCities
  @param {string[][]} paths
  @return {string} finalDestinationCity
 */

const getFinalDestinationCity =(paths, destinationCities): string => {
  for (let i = 0; i < destinationCities.length; i++) {
    let isFinalDestCity: boolean = true
    for (let j = 0; j < paths.length; j++) {
      if (paths[j][0] === destinationCities[i]) {
        isFinalDestCity = false
        break
      }
    }
    if (isFinalDestCity) {
      return destinationCities[i]
    }
  }
}; 
