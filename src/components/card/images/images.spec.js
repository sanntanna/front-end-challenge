import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Images from './images';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Images />', () => {
	it('Component Images should exists', () => {
		assert.isDefined(Images);
	});
});
