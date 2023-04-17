import React from "react";
import SimpleInput from '../SimpleInput'; // Import the input component to be tested
import { render, fireEvent } from '@testing-library/react';


describe('SimpleInput', () => {
    it('should render input component correctly', () => {
      // Mock props for the input component
      const props = {
        placeHolder: 'Test Placeholder',
        type: 'text',
        className: 'w-full md:w-1/2',
        handleData: jest.fn(),
        dataName: 'testDataName'
      };
  
      // Render the input component with the mock props
      const { getByPlaceholderText } = render(<SimpleInput {...props} />);
  
      // Find the input element by its placeholder text
      const inputElement = getByPlaceholderText('Test Placeholder');
  
      // Assert that the input element is rendered
      expect(inputElement).toBeInTheDocument();
  
      // Simulate a change event on the input element
      fireEvent.change(inputElement, { target: { value: 'Test Input' } });
  
      // Assert that the handleData function is called with the correct arguments
      expect(props.handleData).toHaveBeenCalledWith('Test Input', 'testDataName');
    });
  
    // Add more tests for other scenarios, such as input validation, error handling, etc.
  });