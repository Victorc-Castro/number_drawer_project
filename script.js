// select the elements.
const input = document.querySelectorAll(".numbers-only")
const num1 = document.querySelector("#num-1")
const num2 = document.querySelector("#num-2") // Min value
const num3 = document.querySelector("#num-3") // Max value

// formatting inputs to accept only numbers.
input.forEach((input) => {
  input.addEventListener('input', () => {
    const value = input.value.replace(/\D/g, "")
    input.value = value
  })
})

// formatting num1 to accept maximum value of 5.
num1.addEventListener('input', () => {
  let numValue = num1.value

  if (numValue !== '') {
    let number = parseInt(numValue, 10)

    if(number > 3) {
      number = 3
    } else if (number < 1) {
      number = 1
    }

    numValue = number.toString()
  }

  num1.value = numValue
})

// formatting num2 to accept maximum value of 100.
num2.addEventListener('input', () => {
  let numValue2 = num2.value
  
  if (numValue2 !== '') {
    let number = parseInt(numValue2, 10)

    if(number > 100) {
      number = 100
    } else if (number < 1) {
      number = 1
    }

    numValue2 = number.toString()
  }

  num2.value = numValue2 
})

// formatting num3 to accept maximum value of 100.
num3.addEventListener('input', () => {
  let numValue3 = num3.value
  
  if (numValue3 !== '') {
    let number = parseInt(numValue3, 10)

    if(number > 100) {
      number = 100
    } else if (number < 1) {
      number = 1
    }

    numValue3 = number.toString()
  }

  num3.value = numValue3 
})

function validatedMinMax() {
  let minStr = parseInt(num2.value, 10)
  let maxStr = parseInt(num3.value, 10)

  if (minStr === '' || maxStr === '') {
    return;
  }

  let min = parseInt(minStr, 10);
  let max = parseInt(maxStr, 10);

  if (isNaN(min) || isNaN(max)) {
    return
  }

  // Ensures values stay within range [1, 100]
  min = Math.min(Math.max(min, 1), 100)
  max = Math.min(Math.max(max, 1), 100)

  // If minimum is greater than or equal to maximum, adjust maximum to be min + 1
  if (min >= max) {
    max = min + 1
    if (max > 100) {
      max = 100
      min = max -1
    }
  }

  num2.value = min
  num3.value = max
}

num2.addEventListener('input', validatedMinMax())
num3.addEventListener('input', validatedMinMax())
