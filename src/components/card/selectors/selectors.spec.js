import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Selectors from './selectors';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Selectors />', () => {
	it('Component Selectors should exists', () => {
		assert.isDefined(Selectors);
	});
});
