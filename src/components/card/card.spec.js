import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {expect, assert} from 'chai';
import Adapter from "enzyme-adapter-react-16";
import products from './../../mocks/products.json';
import Card from './card';
import card from './card.styl';
import Selectors from './selectors/selectors';
import Prices from './prices/prices'
import Images from './images/images'

Enzyme.configure({ adapter: new Adapter() });

describe('Component <Card />', () => {
    let wrapper = shallow(<Card data={products} />);

	it('Component Card should exists', () => {
        assert.isDefined(Card);
	});

	it('should have a <div> with the products', () => {
        const wrapper = shallow(<Card data={products} />);
		expect(wrapper.find('div')).to.have.length(22);
	});
	
	it('Component Prices should exists', () => {
        assert.isDefined(Prices);
	});
	
	it('Component Selectors should exists', () => {
        assert.isDefined(Selectors);
	});
	
	it('Component Image should exists', () => {
        assert.isDefined(Images);
    });
});
