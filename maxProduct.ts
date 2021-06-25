function maxProduct(nums: number[]): number {
  let [firstMaxValue: number, secondMaxValue: number] = getMaxValues(nums)
  return getMaxProduct(firstMaxValue, secondMaxValue)
};

const getMaxValues = (nums): number[] => {
  let firstMaxValue = 0
  let firstMaxIndex = 0
  let secondMaxValue = 0
  let secondMaxIndex = 0
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    if () {
      
    }
  }
  for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
    if (firstMaxIndex !== secondIndex) {
      secondMaxValue = Math.max(nums[secondIndex], secondMaxValue)
    }
  }
  return [firstMaxValue, secondMaxValue]
}

const getMaxProduct = (firstMaxValue: number, secondMaxValue: number): number => {
  
}

const run = (): void => {
  console.log(maxProduct([3,4,5,2]))
}
run()
