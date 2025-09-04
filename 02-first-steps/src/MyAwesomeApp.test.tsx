import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
     test('Should render firstName and lastname', () => {
       const {container} = render(<MyAwesomeApp/>)
       screen.debug();

      //  console.log(container.innerHTML)
      const h1 = container.querySelector('h1')
      const h3 = container.querySelector('h3')

       expect(h1?.innerHTML).toContain('Raul')
       expect(h3?.innerHTML).toContain('Carbono')
    
      })

    test('Should render firstName and lastname - screen', () => {
       render(<MyAwesomeApp/>)
       screen.debug();

      //  console.log(container.innerHTML)
      // const h1 = screen.getByRole('heading', {
      //   level: 1,
      // })
      
      const h1 = screen.getByTestId('first-name-title');
      expect(h1.innerHTML).toContain('Raul')
      })

      // test('should match snapshot', () => {
      //   const { container } = render(<MyAwesomeApp />);

      //   expect(container).toMatchSnapshot();
      // })
})