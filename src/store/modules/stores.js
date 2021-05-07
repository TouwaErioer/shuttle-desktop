const state = () => ({
    stores: [],
    total: new Map()
});

const getters = {
    getStoresBySid: (state) => (serviceId) => {
        return state.stores.filter(store => store.serviceId === serviceId)
    },
    storesCache: (state) => (sid) => {
        for (let store of state.stores) {
            if (store.serviceId === sid) return true
        }
        return false
    },
    getStoreById: (state) => (id) => {
        return state.stores.filter(store => store.id === id)
    },
    sortStores: (state) => (sort, type, serviceId) => {
        const stores = state.stores.filter(store => store.serviceId === serviceId).concat();
        if (sort === 'name') return stores.sort(function (a, b) {
            if (a.name < b.name) return type === 'up' ? -1 : 1;
            else if (a.name > b.name) return type === 'up' ? 1 : -1;
            return 0;
        });
        else if (sort === 'rate') return stores.sort(function (a, b) {
            return type === 'up' ? b.rate - a.rate : a.rate - b.rate;
        });
        else if (sort === 'sales') return stores.sort(function (a, b) {
            return type === 'up' ? b.sales - a.sales : a.sales - b.sales;
        });
    },
    filterStores: (state) => (category, serviceId) => {
        const stores = state.stores.filter(store => store.serviceId === serviceId);
        if (category === 'all') return stores;
        else return stores.filter(store => store.category.name === category);
    },
    getStoreTotal: (state) => (serviceId) => {
        return state.total.get(serviceId);
    }
};

const mutations = {
    setStores(state, stores) {
        state.stores.push(...stores)
    },
    clearStores(state) {
        state.stores = [];
    },
    setTotal(state, payload) {
        state.total.set(payload.serviceId, payload.total);
    }
};

export default {
    state,
    getters,
    mutations
}