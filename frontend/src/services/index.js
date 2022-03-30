import axios from "axios";

let Service = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 1000,
});

let getdata = {
    async getalldata() {
        let response = await Service.get('/alldata');
        return response.data
    }
}

let senddata = {
    async putdata(data) {
        return await Service.post("/postdata", data);
    }
}

let deletedata = {
    async deletetodo(id) {
        return await Service.delete(`delete/${id}`)
    }
}

let updatedata = {
    async update(id, data) {
        return await Service.patch(`/update/${id}`, data)
    },
    async updatetxt(id, data) {
        return await Service.patch(`/updatetxt/${id}`, data)
    }
}

export { getdata, senddata, deletedata, updatedata };