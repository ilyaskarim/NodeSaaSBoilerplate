System.register(["./../helpers/fileExists", "./../dynamic/index"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var fileExists_1, index_1, join, _a, camelCase, upperFirst;
    var __moduleName = context_1 && context_1.id;
    function default_1(rootDirectory) {
        var _this = this;
        var path = rootDirectory + "/app/modules/";
        var frameworkPath = rootDirectory + "/frameworkPath/";
        var modules = process.env.MODULES_ENABLED.split(",");
        var predefinedModules = process.env.PREDEFINED_MODULES.split(",");
        var output = "";
        predefinedModules.forEach(function (name) { return __awaiter(_this, void 0, void 0, function () {
            var filePath, isQueryFileExists, content;
            return __generator(this, function (_a) {
                filePath = join(__dirname, "../../framework/predefinedModules", name, "query");
                isQueryFileExists = fileExists_1["default"](filePath);
                content = "";
                if (!isQueryFileExists) {
                    content = index_1["default"].queries.generateQueriesSchema(upperFirst(camelCase(name)));
                }
                else {
                    content = require(filePath)["default"];
                }
                content = content.replace("type Query {", "");
                content = content.replace("}", "");
                output = output + content;
                return [2];
            });
        }); });
        return output;
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (fileExists_1_1) {
                fileExists_1 = fileExists_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            join = require("path").join;
            _a = require("lodash"), camelCase = _a.camelCase, upperFirst = _a.upperFirst;
        }
    };
});
//# sourceMappingURL=loadAllQueries.js.map