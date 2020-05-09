//here create a reducer and export it.

export default function (state, action) {

    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        default:
            return state; //nothing changed.
    }
}