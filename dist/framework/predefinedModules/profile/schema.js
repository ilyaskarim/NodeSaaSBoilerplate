System.register(["./../../../framework/graphql/getListByPaginationAndFiltersSchema"], function (exports_1, context_1) {
    "use strict";
    var getListByPaginationAndFiltersSchema_1, DIALECT, relationSchemaType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (getListByPaginationAndFiltersSchema_1_1) {
                getListByPaginationAndFiltersSchema_1 = getListByPaginationAndFiltersSchema_1_1;
            }
        ],
        execute: function () {
            DIALECT = process.env.DIALECT;
            relationSchemaType = "Int";
            if (DIALECT == "MONGO_DB") {
                relationSchemaType = "String";
            }
            exports_1("default", "\n\ttype Profile {\n\t\t_id: String\n\t\tid: Int\n\t\tuser: User\n\t\tdescription: String\n\t\tsuccessMessage: String\n\t\tsuccessMessageType: String\n\t\tcreated_by: User\n\t\tcreated_at: String\n\t\tupdated_at: String\n\t}\n\t" + getListByPaginationAndFiltersSchema_1["default"]("Profile") + "\n\tinput ProfileInput {\n\t\t_id: String\n\t\tid: Int\n\t\tuser: " + relationSchemaType + "\n\t\tdescription: String\n\t}\n");
        }
    };
});
//# sourceMappingURL=schema.js.map