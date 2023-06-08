import { render, screen } from '@testing-library/react';
import App from './App';



    // Tests that the component is properly styled and responsive.
    it("test_styling", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App')).toHaveLength(1);
      expect(wrapper.find('.mt-5')).toHaveLength(4);
      expect(wrapper.find('.text-gray-900')).toHaveLength(4);
      // add more style checks as needed
  });