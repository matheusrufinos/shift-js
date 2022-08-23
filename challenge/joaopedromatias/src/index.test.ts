import { shift } from './index'

window.testArray;

describe('shift()', () => { 

    beforeEach(() => { 
        window.testArray = ['dog', 'cat', 'fish'];
    })

    it('should return the first element of the array', () => { 
        const result = shift(window.testArray);

        expect(result).toBe('dog');
    })

    it('should change the original array by removing the first item', () => { 
        shift(window.testArray);

        const resultExpected = ['cat', 'fish']
    
        expect(window.testArray).toEqual(resultExpected);
    })
})