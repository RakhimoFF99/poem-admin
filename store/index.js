export const state = () => ({
    isLoading: false,
    poem:"asdasdsad"
   
});

export const mutations = {
    ACTIVE_LOADING(state) {
        state.isLoading = true;
    },
    FALSE_LOADING(state) {
        state.isLoading = false;
    },
    userCount(state, data) {
        state.userCount = data;
    },
    setPoem (state,data) {
        console.log("dsdsd")
        state.poem = data
    }
};
//Action
export const actions = {};
