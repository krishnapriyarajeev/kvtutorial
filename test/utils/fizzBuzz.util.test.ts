
import  FizzBuzz  from "../../src/utils/fizzBuzz.util";


describe('fizzBuzz test', ()=> {
    let fizzBuzz: FizzBuzz;

    beforeEach(()=>{
        fizzBuzz=new FizzBuzz();
    })

    it('should return "Fizz" for numbers divisible by 3', ()=>{
        expect(fizzBuzz.fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz.fizzBuzz(6)).toBe('Fizz');
    });

    it('should return the number itself for number not divisible by 3 or 5', ()=>{

        expect(fizzBuzz.fizzBuzz(1)).toBe(1);
        expect(fizzBuzz.fizzBuzz(2)).toBe(2);
    });

    // it('using mocks', ()=>{
    //     let mockFn = jest.fn()
    //     expect(fizzBuzz.fizzBuzz(2)).toBe(2);
    // });
})

