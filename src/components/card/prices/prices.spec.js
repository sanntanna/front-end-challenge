import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Prices from './prices';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Prices />', () => {
	it('Component Prices should exists', () => {
		assert.isDefined(Prices);
	});
});
