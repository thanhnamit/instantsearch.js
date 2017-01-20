import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {
  Panel,
  RefinementList,
  Menu,
  CurrentRefinements,
  HierarchicalMenu,
  RangeInput,
  StarRating,
} from '../packages/react-instantsearch/dom';
import {withKnobs} from '@kadira/storybook-addon-knobs';
import {WrapWithHits} from './util';

const stories = storiesOf('Panel', module);

stories.addDecorator(withKnobs);

stories.add('RefinementList with panel', () =>
  <WrapWithHits>
      <Panel title="category">
        <RefinementList attributeName="category"/>
      </Panel>
  </WrapWithHits>
).add('CurrentRefinements with panel', () =>
  <WrapWithHits linkedStoryGroup="CurrentRefinements">
    <div>
      <Panel title="Current refinements">
        <CurrentRefinements />
      </Panel>
      <div>
        <RefinementList
          attributeName="category"
          defaultRefinement={['Dining']}
        />
      </div>
    </div>
  </WrapWithHits>
).add('HierarchicalMenu with panel', () =>
  <WrapWithHits>
    <Panel title="category">
    <HierarchicalMenu
      attributes={[
        'category',
        'sub_category',
        'sub_sub_category',
      ]}
    />
    </Panel>
  </WrapWithHits>
).add('Menu with panel', () =>
  <WrapWithHits >
    <Panel title="category">
      <Menu
        attributeName="category"
      />
    </Panel>
  </WrapWithHits>
).add('RangeInput with panel', () =>
  <WrapWithHits>
    <Panel title="price">
      <RangeInput attributeName="price"/>
    </Panel>
  </WrapWithHits>
).add('StarRating with panel', () =>
  <WrapWithHits>
    <Panel title="rating">
      <StarRating attributeName="rating" max={6}/>
    </Panel>
  </WrapWithHits>
);
