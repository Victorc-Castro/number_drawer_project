// select the elements.
const input = document.querySelectorAll(".numbers-only")
const num1 = document.querySelector("#num-1")
const num2 = document.querySelector("#num-2")
const num3 = document.querySelector("#num-3")

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

function validateRange() {
  try {
    const minValue = num2.value.trim()
    const maxValue = num3.value.trim()

    if (minValue === '' || maxValue === '') {
      throw new Error('Preencha os dois valores do intervalo.')
    }

    const min = parseInt(minValue, 10)
    const max = parseInt(maxValue, 10)

    if (isNaN(min) || isNaN(max)) {
      throw new Error('Digite apenas números no intervalo.')
    }

    if (min >= max) {
      throw new Error('O valor mínimo deve ser menor que o máximo.')
    }

    return { min, max }
  }catch (erro) {
    alert(erro.message)
    return null
  }
} 

function validateQuantity() {
  try {
    const value = num1.value.trim()

    if(value === '') {
      throw new Error('Digite a quantidade de números a sortear')
    }

    const number = parseInt(value, 10)

    if(isNaN(number)) {
      throw new Error('A quantidade deve estar entre 1 e 3')
    }

    return number
  }catch(erro) {
    alert(erro.message)
    return null
  }
}