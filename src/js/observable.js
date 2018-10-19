"use strict";
export default (target,listeners) => {
    const handler = {
        set: (target,name,value) => {
		const oldTarget = Object.assign({}, target);
            	Reflect.set(target, name, value);
		listeners.forEach(listener => listener(oldTarget, target));
            	return {
                	name,
                	value
            }	;
        },
        get: (target,name) => {
            return Object.freeze(target[name]);
        }
    };

    return new Proxy(target, handler);
};
