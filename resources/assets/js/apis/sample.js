export default {
    get(id) {
        return axios.get(`/api/sample/${id}`);
    },
    save(id, data) {
        return axios.patch(`/api/sample/${id}`, data);
    }
};

