'use strict';

// Identify

// Locate/Find

// Fix

// Prevent from happening again

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C)FIX
    //     value: prompt('Degrees Celsius:'),
    //   };
    value: Number(prompt('Degrees Celsius:')),
  };

  // B) FIND
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify
// - The prompt value always returns a string!!

console.log(measureKelvin());
