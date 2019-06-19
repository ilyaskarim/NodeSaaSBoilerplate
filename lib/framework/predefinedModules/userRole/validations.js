"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DIALECT } = process.env;
const getIdName_1 = __importDefault(require("./../../../framework/helpers/getIdName"));
exports.default = {
    createUserRole: {
        user: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        role: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    deleteUserRole: {
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    updateUserRole: {
        user: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        role: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    userRole: {
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
};
//# sourceMappingURL=validations.js.map