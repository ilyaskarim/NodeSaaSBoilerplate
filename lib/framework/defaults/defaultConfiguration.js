"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    dbDialect: "mysql",
    name: "Wertik",
    builtinModules: "user,auth,forgetPassword,permission,role,rolePermission,userPermission,userRole,me,storage",
    mysqlOptions: {
        dbUsername: "root",
        dbPassword: "",
        dbName: "graphql",
        dbHost: "localhost",
        dbPort: "3306"
    },
    frontendAppUrl: "http://localhost:8080/",
    frontendAppActivationUrl: "http://localhost:8080/activate-account",
    frontendAppPasswordResetUrl: "http://localhost:8080/reset-password",
    context: {
        data: {
            myName: "My powerful app"
        },
        createContext: function (mode, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return {
                    value: "Value 1"
                };
            });
        }
    },
    graphql: {
        disable: false,
        port: 4000
    },
    restApi: {
        disable: false,
        port: 7000
    },
    forceStartGraphqlServer: true,
    forceStartRestApiServer: true,
    ports: {
        graphql: 4000,
        restApi: 7000
    },
    modules: [
        {
            name: "Article",
            graphql: {
                crud: {
                    query: {
                        generate: true,
                        operations: "*"
                    },
                    mutation: {
                        generate: true,
                        operations: "*"
                    }
                },
                schema: `
          type Article {
            id: Int
            title: String
            description: String
            created_at: String
            updated_at: String
          }
          input ArticleInput {
            title: String
            description: String
          }
        `,
                mutation: {
                    schema: ``,
                    resolvers: {}
                },
                query: {
                    schema: ``,
                    resolvers: {}
                }
            },
            restApi: {
                endpoints: [
                    {
                        docs: {
                            title: "Apple module response.",
                            description: "Just a message.",
                            response: `@apiSuccess {Object} returns an object {message: true}.`
                        },
                        path: "/apple/response",
                        methodType: "get",
                        handler: function (req, res) {
                            res.json({
                                message: true
                            });
                        }
                    }
                ]
            },
            database: {
                sql: {
                    fields: {
                        title: {
                            type: "STRING"
                        },
                        description: {
                            type: "STRING"
                        }
                    }
                }
            }
        }
    ],
    events: {
        beforeGraphqlStart: function () {
            console.log("beforeGraphqlStart");
        },
        beforeRestApiStart: function () {
            console.log("beforeRestApiStart");
        },
        database: {
            Permission: {
                afterCreate() {
                    console.log("permision created");
                }
            }
        }
    },
    seeds: {
        Role: [{ name: "Admin" }, { name: "Kako" }],
        Permission: [
            { name: "ca", cant: "true", can: "true" },
            { name: "ca1", cant: "true1", can: "true1" },
            { name: "ca2", cant: "true2", can: "true2" }
        ]
    },
    sockets: {
        disable: false,
        port: 2000,
        onClientConnected: function (req, wss) {
            console.log("on client connected", `Total connections right now ${wss.clients.size}`);
        },
        onMessageReceived: function (message) {
            console.log("on message received: " + message);
        },
        onClientDisconnect: function (wss) {
            console.log("on client disconnected", `Total connections right now ${wss.clients.size}`);
        }
    },
    security: {
        allowedIpAddresses: ["::1", "::ffff:127.0.0.1"]
    },
    storage: {
        storageDirectory: "storage",
        storages: ["user-images"]
    }
};
//# sourceMappingURL=defaultConfiguration.js.map