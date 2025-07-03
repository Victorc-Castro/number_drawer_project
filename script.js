// select the elements.
let input = document.querySelectorAll(".numbers-only")

// formatting inputs to accept only numbers.
input.forEach((input) => {
  input.addEventListener("input", () => {
    let value = input.value.replace(/\D/g, "")
    input.value = value
    
  })
})