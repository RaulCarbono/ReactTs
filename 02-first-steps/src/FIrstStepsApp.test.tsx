import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props : unknown) => {
    return (
        <div data-testid="ItemCounter"/>
    )
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter : (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter : (props : unknown) => <div data-testid="ItemCounter" name={props.name} quantity={props.quantity}/>
// }))

describe('FirsStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {
        const {container} = render(<FirstStepsApp />)

        expect(container).toMatchSnapshot()
    })

    test('Should render the correct number of ItemCounter components', () => {

    render(<FirstStepsApp/>)

    const itemCounters = screen.getAllByTestId('ItemCounter')
    
    expect(itemCounters.length).toBe(4)
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(4)
    })
})