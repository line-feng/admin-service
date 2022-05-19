"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonData = void 0;
class JsonData {
    constructor() {
        this.code = 200;
        this.data = {};
        this.list = [];
        this.message = 'success';
    }
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getList() {
        return this.list;
    }
    setList(list) {
        this.list = list;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    sendData() {
        return {
            code: this.code,
            data: this.data,
            list: this.list,
            message: this.message,
        };
    }
}
exports.JsonData = JsonData;
//# sourceMappingURL=jsonData.js.map