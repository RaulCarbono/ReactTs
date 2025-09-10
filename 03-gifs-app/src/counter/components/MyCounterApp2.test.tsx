import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 40,
        handleAdd : handleAddMock,
        handleSubstract : handleSubstractMock,
        handleReset:handleResetMock,
    })
 })) 

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />)

    })

    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp />)

        const button = screen.getByRole('button', {name : '+1'})

        fireEvent.click(button)

        expect(handleAddMock).toHaveBeenCalled()
        expect(handleAddMock).toHaveBeenCalledTimes(1)
        expect(handleSubstractMock).not.toHaveBeenCalled()
        expect(handleResetMock).not.toHaveBeenCalled()
    })

    test('should call handleSubstract if button is clicked', () => {
        render(< MyCounterApp/>)

        const button = screen.getByRole("button", {name : '-1'})

        fireEvent.click(button)

        expect(handleSubstractMock).toHaveBeenCalled()
        expect(handleSubstractMock).toHaveBeenCalledTimes(1)
        expect(handleResetMock).not.toHaveBeenCalled()
    })
}) 