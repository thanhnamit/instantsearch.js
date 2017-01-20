/* eslint-env jest, jasmine */

import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import CurrentRefinements from './CurrentRefinements';

describe('CurrentRefinements', () => {
  it('renders a list of current refinements', () =>
    expect(
      renderer.create(
        <CurrentRefinements
          refine={() => null}
          items={[{
            label: 'Genre',
            value: 'clear all genres',
          }]}
        />
      ).toJSON()
    ).toMatchSnapshot()
  );

  it('allows clearing unique items of a refinement', () =>
    expect(
      renderer.create(
        <CurrentRefinements
          refine={() => null}
          items={[{
            label: 'Genre',
            value: 'clear all genres',
            items: [{
              label: 'Sci-fi',
              value: 'clear sci-fi',
            }],
          }]}
        />
      ).toJSON()
    ).toMatchSnapshot()
  );

  describe('Panel compatibility', () => {
    it('Should notify when empty', () => {
      const isEmpty = jest.fn();
      const wrapper = mount(
        <CurrentRefinements
          refine={() => null}
          items={[{
            label: 'Genre',
            value: 'clear all genres',
            items: [{
              label: 'Sci-fi',
              value: 'clear sci-fi',
            }],
          }]}
        />,
        {context: {
          isEmpty,
        }},
      );

      expect(isEmpty.mock.calls.length).toBe(1);
      expect(isEmpty.mock.calls[0][0]).toEqual(false);

      wrapper.unmount();

      expect(isEmpty.mock.calls.length).toBe(2);
      expect(isEmpty.mock.calls[1][0]).toEqual(true);
    });
  });
});
