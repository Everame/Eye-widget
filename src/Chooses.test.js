import {render, screen} from '@testing-library/react';
import SecondPage from "./pages/SecondPage/secondPage";
import FifthPage from "./pages/FifthPage/fifthPage";


test('Render women choose on Second Page', () => {
    render(<SecondPage prevValue={"5"}/>);
    const womenEye = screen.getByTestId('WomenEye');
    const womenSun = screen.getByTestId('WomenSun');
    expect(womenEye).toBe;
    expect(womenSun).toBe;
});

test('Render men choose on Second Page', () => {
    render(<SecondPage prevValue={"4"}/>);
    const menEye = screen.getByTestId('MenEye');
    const menSun = screen.getByTestId('MenSun');
    expect(menEye).toBe;
    expect(menSun).toBe;
});

test('Render eyeglasses protect choose on Fifth Page', () => {
    render(<FifthPage prevValue={"210"}/>);
    const eyeDef = screen.getByTestId('eyeDef');
    expect(eyeDef).toBe;
});

test('Render sunglasses shade of lenses choose on Fifth Page', () => {
    render(<FifthPage prevValue={"211"}/>);
    const sunDef = screen.getByTestId('sunDef');
    expect(sunDef).toBe;
});