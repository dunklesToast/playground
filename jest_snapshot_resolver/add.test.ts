import {add} from "./add";

test('Test Addition', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 4)).toMatchSnapshot();
})