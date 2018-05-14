import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import ShoppingCart from './shoppingCart';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <ShoppingCart />', () => {
	it('Component ShoppingCart should exists', () => {
		assert.isDefined(ShoppingCart);
	});
});
