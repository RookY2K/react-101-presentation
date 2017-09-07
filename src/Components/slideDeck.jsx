import React, {Component} from 'react';
import Slide from './slide';
import Heading from './heading';
import SubHeading from './subheading';
import ComponentSlide from './Slides/Component';

const SlideDeck = [
	<Slide>
		<SubHeading>(Hint: it's not Angular)</SubHeading>
		<p className='flex-item'>Lorem ipsem dolor poop</p>
	</Slide>,
	<Slide>
		<Heading>Other things it's not: Ember, Mithril, Vue, or Aurelia</Heading>
	</Slide>,
	<Slide>
		<Heading>This is a good thing*</Heading>
	</Slide>,
	<Slide>
		<ComponentSlide/>
	</Slide>
];

export default SlideDeck;