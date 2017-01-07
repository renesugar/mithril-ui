import {Base} from "./../base.js";
import {required, within} from "validatex";

export class SubMenu extends Base {
	attrSchema = {
		right: [required(false), within([true, false])]
	}

	getClassList ({attrs}) {
		return [
			attrs.right && "right",
			"menu"
		];
	}
}


export const subMenu = new SubMenu();
