import React, {Component} from 'react';
import Slide from './slide';
import Heading from './heading';
import SubHeading from './subheading';
import CodeArea from './codearea';

const SlideDeck = [
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
];

export default SlideDeck;