"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DIALECT } = process.env;
const getIdName_1 = __importDefault(require("./../../../framework/helpers/getIdName"));
exports.default = {
    createUserPermission: {
        user: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        permission: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    deleteUserPermission: {
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    updateUserPermission: {
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        user: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
        permission: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    },
    userPermission: {
        [getIdName_1.default]: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
    }
};
//# sourceMappingURL=validations.js.map