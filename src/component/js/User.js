import axios from "axios";

export default class User {
    constructor(data) {
        this.data = data
    }
    get data() {
        return this._data;
    }
    set data(value) {

    }

}