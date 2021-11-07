export const state = () => ({
    isLoading: false,
   
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
    }
};
//Action
export const actions = {};
