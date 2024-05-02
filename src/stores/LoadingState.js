import { reactive } from 'vue';


const state = reactive({
  isLoading: false,
});


export const setLoadingState = (isLoading) => {
  state.isLoading = isLoading;
};


export const loadingState = state;
