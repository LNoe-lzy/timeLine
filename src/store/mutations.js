import * as type from './type'

export default {
    [type.ADD_LIST](state, list) {
        state.lists.push(list)
    },
    [type.REMOVE_LIST](state, index) {
        state.lists.splice(index, 1)
    },
    [type.INCREMENT_TIME](state, time) {
        state.totalTime += time
    },
    [type.DECREMENT_TIME](state, time) {
        state.totalTime -= time
    }
}