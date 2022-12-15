import test from 'ava';
import {encrypt} from '../../../ds.js';

  test('test 1', t => {

    // Setup
    const num = 2;
    const str = 'I love to code!'
    const expectedResult = 'K NQXG VQ EQFG!';

    
    // Exercise
    const result = encrypt(str, num);
  
    // Verify
    t.is(result, expectedResult);
  });