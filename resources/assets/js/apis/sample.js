export default {
    get(id) {
        return axios.get(`/api/sample/${id}`);
    }
};

