import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Buttons from './buttons';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Buttons />', () => {
	it('Component Buttons should exists', () => {
		assert.isDefined(Buttons);
	});
});
