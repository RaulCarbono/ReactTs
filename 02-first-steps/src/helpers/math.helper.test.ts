import {describe, expect, test} from 'vitest'
import { add, divide, multiply, subtract } from './math.helper'

describe('add', () => {
    test('Should add two positives numbers', () => {
        const a= 4;
        const b = 2; 
        const result = add( a, b )
        console.log({result})   
        expect(result).toBe(a + b)
    })
})

describe('subtract', () => {
    test('Should subtract two positives number', () => {
        const a = 4
        const b = 6 
        
        const result = subtract(a, b)
        console.log({result})
        expect(result).toBe(a - b)
    })

    test('substract numbers', () => {
        const a = 20
        const b = 16

        const result = subtract(a, b)
        console.log({result})
        expect(result).toBe(a - b )

    })
})

describe('multiply', () => {
    test('should multiply two positives number', () => {
        const a = 8 
        const b = 12

        const result = multiply(a, b)
        console.log({result})
        expect(result).toBe(a * b)
    })
})

describe('divide', () => {
    test('should divide two positives number', () => {
        const a = 64 
        const b = 8

        const result = divide(a, b)
        console.log({result})
        expect(result).toBe(a / b)
    })
})