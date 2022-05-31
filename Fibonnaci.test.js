const fibo = require("./Fibonnaci");

test("quinto termo", () => {
    expect(fibo(5)).toBe("0 1 1 2 3 ")
})

test('sexto termo', ()=>{
    expect(fibo(6)).toBe('0 1 1 2 3 5 ')
})