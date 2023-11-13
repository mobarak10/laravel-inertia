import {defineStore} from "pinia/dist/pinia";
import actions from './actions'
import getters from './getters'
import state from "./state";

export const usePiniaStore = defineStore('pinia', {
    state: () => ({...state}),
    getters: {...getters},
    actions: {...actions}
})
