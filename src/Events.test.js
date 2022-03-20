import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import ThirdPage from './pages/ThirdPage/thirdPage';
import FourPage from './pages/FourPage/fourPage';


describe("Tests main functions widget", () => {
    test('Render next page after choose', () => {
        render(<App/>);
        const startNextBtn = screen.getByTestId("startNextBtn");
        expect(screen.queryByTestId("startPage")).toBe;
        expect(screen.queryByTestId("firstPage")).toBeNull();
        fireEvent.click(startNextBtn);
        expect(screen.queryByTestId("startPage")).toBeNull();
        expect(screen.queryByTestId("firstPage")).toBe;
    });
    
    test('Render prev page after click "prev" Button', () => {
        render(<App/>);
        const startNextBtn = screen.getByTestId("startNextBtn");
        fireEvent.click(startNextBtn);
        const firstNextBtn = screen.getByTestId("Women");
        fireEvent.click(firstNextBtn);
        const secondPrevBtn = screen.getByTestId("secondPrevBtn");
        expect(screen.queryByTestId("secondPage")).toBe;
        expect(screen.queryByTestId("firstPage")).toBeNull();
        fireEvent.click(secondPrevBtn);
        expect(screen.queryByTestId("secondPage")).toBeNull();
        expect(screen.queryByTestId("firstPage")).toBe;
    });
    
    test('Render start page after click reset', () => {
        render(<App/>);
        const startNextBtn = screen.getByTestId("startNextBtn");
        expect(screen.queryByTestId("startPage")).toBe;
        expect(screen.queryByTestId("firstPage")).toBeNull();
        fireEvent.click(startNextBtn);
        const firstResetBtn = screen.getByTestId("firstResetBtn");
        expect(screen.queryByTestId("startPage")).toBeNull();
        expect(screen.queryByTestId("firstPage")).toBe;
        fireEvent.click(firstResetBtn);
        expect(screen.queryByTestId("startPage")).toBe;
        expect(screen.queryByTestId("firstPage")).toBeNull();
    });
})

test('Rerender page content after click "Yes" on Third Page', () => {
    render(<ThirdPage/>);
    const yesBtn = screen.getByTestId('yesBtn');
    expect(screen.queryByTestId("secondScreenTitle")).toBeNull();
    expect(screen.queryAllByTestId("secondScreenBtn").length).toBe(0);
    fireEvent.click(yesBtn);
    expect(screen.queryByTestId("secondScreenTitle")).toBe;
    expect(screen.queryAllByTestId("secondScreenBtn").length > 1).toBe(true);
});

test('Rerender page content after click "I don’t know" on Four Page', () => {
    render(<FourPage/>);
    const idkBtn = screen.getByTestId('idkBtn');
    expect(screen.queryByTestId("secondScreenTitle")).toBeNull();
    expect(screen.queryAllByTestId("secondScreenBtn").length).toBe(0);
    fireEvent.click(idkBtn);
    expect(screen.queryByTestId("secondScreenTitle")).toBe;
    expect(screen.queryAllByTestId("secondScreenBtn").length > 1).toBe(true);
});