import {sub} from "./sub";

test('Test Subtraction', () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(2, 4)).toMatchSnapshot();
})