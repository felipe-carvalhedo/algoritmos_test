const primo = require("./numero_primo");

test("numero 3 é primo", () =>{
    expect(primo(3)).toBe('é primo')
})

test("numero 7 é primo", () =>{
    expect(primo(7)).toBe('é primo')
})