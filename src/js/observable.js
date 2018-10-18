"use strict";
export default ({target,listener}) => {
    const handler = {
        set: (target,name,value) => {
            target[name] = value;
            listener(target);
            return {
                name,
                value
            };
        },
        get: (target,name) => {
            return Object.freeze(target[name]);
        }
    };

    return new Proxy(target, handler);
};