const defaultMiddleware = (store) => (next) => (action) => {
    if (action !== undefined) {
        // console.group(action.type);
        // console.log('Action', action);
        // console.log('Prev State', store.getState())
        const result = next(action);
        // console.log('Current State', store.getState())
        // console.groupEnd();
        return result;
    }
}

export {defaultMiddleware}