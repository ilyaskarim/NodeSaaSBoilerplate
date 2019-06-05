System.register(["./../../../framework/helpers/getIdName"], function (exports_1, context_1) {
    "use strict";
    var _a, _b, _c, DIALECT, getIdName_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (getIdName_1_1) {
                getIdName_1 = getIdName_1_1;
            }
        ],
        execute: function () {
            DIALECT = process.env.DIALECT;
            exports_1("default", {
                createRolePermission: {
                    role: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    permission: (DIALECT == "MONGO_DB") ? "string|required" : "integer|required"
                },
                deleteRolePermission: (_a = {},
                    _a[getIdName_1["default"]] = (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    _a),
                updateRolePermission: (_b = {},
                    _b[getIdName_1["default"]] = (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    _b.role = (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    _b.permission = (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    _b),
                rolePermission: (_c = {},
                    _c[getIdName_1["default"]] = (DIALECT == "MONGO_DB") ? "string|required" : "integer|required",
                    _c)
            });
        }
    };
});
//# sourceMappingURL=validations.js.map