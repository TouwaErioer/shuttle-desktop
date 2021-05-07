const state = () => ({
    products: [],
    total: new Map()
});

const getters = {
    getProducts: (state) => (storeId) => {
        return state.products.filter(product => product.storeId === storeId);
    },
    productsCache: (state) => (storeId) => {
        for (let product of state.products) {
            if (product.storeId === storeId) return true;
        }
        return false;
    },
    getTotal: (state) => (storeId) => {
        if (state.total.has(storeId)) {
            return state.total.get(storeId);
        }
        return 0;
    }
};

const mutations = {
    setProducts(state, products) {
        state.products.push(...products);
    },
    setProductTotal(state, payload) {
        state.total.set(payload.storeId, payload.total);
    }
};

export default {
    state,
    getters,
    mutations
}