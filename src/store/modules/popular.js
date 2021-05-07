const state = () => ({
    stores: [],
    products: []
});

const getters = {
    getPopularStores: (state) => () => {
        return state.stores;
    },
    getPopularProducts: (state) => () => {
        return state.products;
    },
    PopularCache: (state) => (type) => {
        if (type === 'product') return state.products.length !== 0;
        else if (type === 'store') return state.stores.length !== 0;
    }
};

const mutations = {
    setPopularStores(state, stores) {
        state.stores = stores;
    },
    setPopularProducts(state, products) {
        state.products = products;
    }
};

export default {
    state,
    getters,
    mutations
}