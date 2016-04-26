export default (store) => {
    store.subscribe(() => {
        console.log(store.getState());
        window.localStorage.setItem("currentState", JSON.stringify(store.getState().toJS()));
    })
};