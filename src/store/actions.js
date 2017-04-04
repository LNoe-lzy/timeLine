import * as type from './type'

export default {
    addList ({ commit }, list) {
        commit(type.ADD_LIST, list)
    },
    removeList ({ commit }, index) {
        commit(type.REMOVE_LIST, index)
    },
    incrementTime ({ commit }, time) {
        commit(type.INCREMENT_TIME, time)
    },
    decrementTime ({ commit }, time) {
        commit(type.DECREMENT_TIME, time)
    }
}