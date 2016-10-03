import m from "mithril";
import component from "mithril-componentx";
import {required, within} from "validatex";
import {base} from "./../base.js";


export const modalPool = component({
	name: "modalPool",
	base: base,
	modals: [],
	getStyle ({attrs, children, state}) {
		return {
			".ui.dimmer > .content > .center > *": {
				"color": "#000",
				"text-align": "left"
			},
		};
	},
	validateAttrs (attrs) {
		
	},
	add (modal) {
		modalPool.modals.push(modal);
	},
	remove (modal) {
		let index = modalPool.modals.indexOf(modal);
		modalPool.modals.splice(index, 1);
	},
	getClassList (attrs) {
		return [
			"ui",
			{"inverted": attrs.inverted},
			"page",
			"dimmer",
			modalPool.modals.length === 0? undefined: "active"
		];
	},
	view ({attrs, children, state}) {
		let modals = modalPool.modals.length;
		return m("div", attrs.rootAttrs, modals === 0? null: modalPool.modals);
	}
});
