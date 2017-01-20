/* eslint-env jest, jasmine */

import React from 'react';
import {mount} from 'enzyme';

import Panel from './Panel';

describe('Panel', () => {
  it('panel should add a classname when empty', () => {
    const wrapper = mount(
        <Panel title="category">
            <div className="content"/>
        </Panel>
    );

    const title = wrapper.find('.ais-Panel__title');

    expect(title.text()).toEqual('category');
    expect(wrapper.find('.ais-Panel__empty').length).toBe(0);

    wrapper.setState({isEmpty: true});

    expect(wrapper.find('.ais-Panel__empty').length).toBe(1);
  });
});
