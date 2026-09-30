function findRainfallPeaks(rainfall) {

  let peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {

    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1);
    }

  }

  return peaks;
}



// let test = findRainfallPeaks([1, 3, 2]);


// let test = findRainfallPeaks([5, 2, 4, 1, 6]);


let test = findRainfallPeaks([1, 3, 2, 4, 2]);
console.log(test);