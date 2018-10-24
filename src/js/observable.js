"use strict";
export default (target,listeners) => {
    const handler = {
        set: (target,name,value) => {
            const oldTarget = Object.assign({}, target);
            	Reflect.set(target, name, value);
            listeners.forEach(listener => {
                if( typeof listener === "function") {
                    listener(oldTarget, target);
                } else {
                    throw new Error("Listener must be a function!");
                }
            });
            	return {
                	name,
                	value
            }	;
        }
    };

    return new Proxy(target, handler);
};
