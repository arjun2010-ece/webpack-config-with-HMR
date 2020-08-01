import React from "react";
// import { shallow } from "enzyme";

// // Components
// import WelcomeMessage from "./WelcomeMessage";

// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
//   const wrapper = shallow(<WelcomeMessage />);
//   return { wrapper, props };
// }

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an h1 tag', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('h1').exists()).toBe(true);
//   });
// });

import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import WelcomeMessage from "./WelcomeMessage";

describe('WelcomeMessage component', () => {
  beforeAll(() => {
    render(<WelcomeMessage />)
  })

  it('should have the right message in the dom', () => {
    const message = "Welcome To";
    // console.log(screen);getByText:
    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})