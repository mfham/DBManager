export default {
    get(id) {
        return axios.post(`/api/sample/${id}`);
    }
};

