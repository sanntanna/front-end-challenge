import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {expect, assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Header from './header';
import IconCart from './../../icons/iconCart';
import IconLogo from './../../icons/iconLogo';

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Header />', () => {
	it('Component Header should exists', () => {
		assert.isDefined(Header);
	});

	it('Component IconCart should exists', () => {
		assert.isDefined(IconCart);
	});

	it('Component IconLogo should exists', () => {
		assert.isDefined(IconLogo);
	});
});
