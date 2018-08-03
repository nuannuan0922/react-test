export default {
    namespace: 'product',
    state: {
        list: []
    },
    reducers: {
        'delete'(state, {payload: id}) {
            return {
                list: state.list.filter(item => item.id !== id)
            };
        }
    }
}