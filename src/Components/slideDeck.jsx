import React from 'react';
import Slide from './slide';
import Heading from './heading';
import SubHeading from './subheading';
import CodeArea from './codearea';
import ComponentSlide from './Slides/Component';
import LegoImage from '../Content/missing-pieces.jpg';
import RiverImage from '../Content/tributaries.jpg';
import CallbackImage from '../Content/callback.jpg';
import LifeCycleImage from '../Content/life.jpg';
import BulletedList from './Slides/BulletedList';
import VirtualDomImage from '../Content/virtualDom.png';
import QuestionImage from '../Content/questions.gif';

const SlideDeck = [
	<Slide>
		<Heading>Components of Good UI: Intro to ReactJS</Heading>
	</Slide>,
	/* BEGIN RYAN'S STUFF */
	<Slide>
		<Heading>What is React?</Heading>
		<SubHeading>(Hint: it's not Angular)</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Other things it's not: Ember, Mithril, Backbone, or Aurelia</Heading>
	</Slide>
	,
	<Slide>
		<Heading>We think that's a good thing</Heading>
	</Slide>
	,
	<Slide>
		<Heading>It's a library for writing user interfaces</Heading>
		<SubHeading>It's not a "framework"</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>What's a framework?</Heading>
	</Slide>
	,
	<Slide>
		<Heading>Routing Tools</Heading>
		<SubHeading>À la Mithril</SubHeading>
		<CodeArea>{
`
const root = document.body

const Index = {
    view: () => {
        return m("main", [
            m("h1", "See the Custom Route?"),
            m("a", { href: "#!/mandatory" }, "It can be really neat!")
        ]);
    }
}

var Mandatory = {
    view: () => { return m("h1", "It's also kind of mandatory"); }
}

m.route(root, "/", {
    "/": Index,
    "/mandatory": Mandatory,
})
`}
		</CodeArea>
	</Slide>
	,
	<Slide>
		<Heading>Custom HTTP Libraries</Heading>
		<SubHeading>À la Angular 2</SubHeading>
		<CodeArea>{
`
import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Widget } from './widget';

@Injectable()
export class widgetService {
    private widgetUrl = 'api/widgets';
    constructor(private http: Http) { }

    getWidgets(): Promise<Widget[]> {
        return this.http.get(this.widgetUrl)
            .toPromise()
            .then(response => response.json().data as Widget[])
            .catch((error: any): Promise<any> => {
                console.error('Oh no!', error);
                return Promise.reject(error.message);
            });
    }
}
`}
		</CodeArea>
	</Slide>
	,
	<Slide>
		<Heading>Custom Objects and Classes?</Heading>
		<SubHeading>À la Ember</SubHeading>
		<CodeArea>{
`
const Logger = Ember.Object.extend({
    log(message) {
        console.log(\`\${this.get('proccessName')} information: \${message}\`);
    }
});

const ErrorLogger = Logger.extend({
    log(message) {
        this._super(\`\${message}, logged as error\`);
    }
});

let presentationLogger = ErrorLogger.create({
    processName: 'React Presentation'
});
`}
		</CodeArea>
	</Slide>
	,
	<Slide>
		<Heading>This isn't necessarily a bad thing</Heading>
		<SubHeading>Please keep that in mind!</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>This isn't necessarily a good thing either</Heading>
		<SubHeading>Please keep that in mind, too!</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>"How do I do this in ${'{Framework}'}?"</Heading>
		<SubHeading>And leaking abstractions...</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Framework specific knowledge</Heading>
		<SubHeading>Which can lead to...</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Framework specific code</Heading>
		<SubHeading>Which can be inflexible...</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>React is a library</Heading>
	</Slide>
	,
	<Slide>
		<Heading>The only problem it attempts to solve is the view itself</Heading>
	</Slide>
	,
	<Slide>
		<Heading>Things React Doesn't Have</Heading>
		<BulletedList listItems={[
			'A built-in router',
			'Custom objects and classes',
			'A "special" HTTP/AJAX library',
			'Its own unit testing framework',
			'Custom array extensions, filtering tools, etc',
			'Wrappers to access window, document, or other globals'
		]} />
	</Slide>
	,
	<Slide>
		<Heading>Things React Does Have</Heading>
		<BulletedList listItems={[
			'Tools to build User Interfaces',
		]} />
	</Slide>
	,
	<Slide>
		<Heading>How do I do all of the other stuff?</Heading>
	</Slide>
	,
	<Slide>
		<Heading>JavaScript</Heading>
	</Slide>
	,
	<Slide>
		<Heading>All up-to-date modern browsers support all of ECMAScript 2015</Heading>
		<SubHeading>For IE Support, Babel's a great choice</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Embrace web standards</Heading>
		<SubHeading>And your developers get...</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Framework agnostic knowledge</Heading>
		<SubHeading>Which can lead to...</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Framework agnostic code</Heading>
	</Slide>
	,
	<Slide>
		<Heading>How's this affect you?</Heading>
	</Slide>
	,
	<Slide>
		<Heading>React has a small API</Heading>
		<SubHeading>Compared to the previously mentioned frameworks</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>Major React-specific API concepts</Heading>
		<BulletedList listItems={[
			'Component "props" and "state"',
			'JSX',
			'Lifecycle functions'
		]} />
	</Slide>
	,
	<Slide>
		<Heading>Fast ramp-up time</Heading>
		<SubHeading>(We've had great success with this at Direct Supply)</SubHeading>
	</Slide>
	,
	<Slide>
		<Heading>How easy is it to throw something together in React?</Heading>
	</Slide>
	,
	/*Begin Vince Stuff */
	<Slide>
		<Heading>This isn't a Powerpoint slide</Heading>
	</Slide>,
	<Slide>
		<Heading>Components</Heading>
		<SubHeading>What are they?</SubHeading>
	</Slide>,
	<Slide>
		<Heading>Components - What are they?</Heading>
		<img src={LegoImage} />
		<CodeArea>{
`class Foo extends Component {
    render() {
        return (
            <p>{this.getText}</p>
        );
    }

    getText = () => 'Hello World';
}`
        }
        </CodeArea>
    </Slide>,
    <Slide>
        <ComponentSlide/>
    </Slide>,
    <Slide>
        <Heading>Data Flow</Heading>
        <SubHeading>How do components communicate?</SubHeading>
    </Slide>,
    <Slide>
        <Heading>Data Flow</Heading>
        <img src={RiverImage}/>
    </Slide>,
    <Slide>
        <Heading>Data Flow - Props and State</Heading>
        <CodeArea>{
`class Foo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            aThing: 'Hello',
            bThing: 'World'
        };
    }

    render () {
        return (
            <ChildComponent
                firstWord={this.state.aThing}
                secondWord={this.state.bThing}
                />
        );
    }
}
`
        }</CodeArea>
	</Slide>,
	<Slide>
		<ComponentSlide/>
	</Slide>,
	<Slide>
		<Heading>Event Handling</Heading>
		<SubHeading>AKA How do you tell tell your parent that something happened?</SubHeading>
	</Slide>,
	<Slide>
		<Heading>Event Handling - Callbacks</Heading>
		<img src={CallbackImage} />
		<CodeArea>{
`handleChange = (event) => {
    this.setState ({
        aThing: event.target.value
    });
}
...
<input
    type='text'
    value={this.state.aThing}
    onChange={this.handleChange}
    />
`
        }</CodeArea>
	</Slide>,
	<Slide>
		<ComponentSlide/>
	</Slide>,
	<Slide>
		<Heading>React Lifecycle</Heading>
		<SubHeading>The birth, growth, and death of a component</SubHeading>
		<img src={LifeCycleImage} />
	</Slide>,
	<Slide>
		<Heading>React Lifecycle - API Hooks</Heading>
		<BulletedList listItems={[
			'componentWillMount()**',
			'componentDidMount()*',
			'componentWillReceiveProps(nextProps)*',
			'shouldComponentUpdate(nextProps, nextState)',
			'componentWillUpdate(nextProps, nextState)',
			'render()',
			'componentDidUpdate(prevProps, prevState)*',
			'componentWillUnmount()'
		]}/>
		<span>* - Can call setState</span>
		<span>** - Can call setState, but don't do it</span>
	</Slide>,
	<Slide>
		<ComponentSlide/>
	</Slide>,
	<Slide>
		<Heading>Virtual DOM</Heading>
		<SubHeading>I.E. What makes React really good</SubHeading>
		<img src={VirtualDomImage} />
	</Slide>,
	<Slide>
		<Heading>Questions?</Heading>
		<img src={QuestionImage} />
	</Slide>
];

export default SlideDeck;
