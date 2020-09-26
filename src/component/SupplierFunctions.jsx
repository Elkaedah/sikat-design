import axios from 'axios'

export const getList = (pageNumber = 1) => {
    return axios
        .get('http://localhost:8000/api/supplier?page='+ pageNumber, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = data => {
    return axios
        .post(
            'http://localhost:8000/api/supplier',
            {
                nama: data.nama,
                alamat: data.alamat
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`http://localhost:8000/api/supplier/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (data, id) => {
    return axios
        .put(
            `http://localhost:8000/api/supplier/${id}`,
            {
                nama: data.nama,
                alamat: data.alamat
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}