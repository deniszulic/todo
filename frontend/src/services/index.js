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

export { getdata, senddata };