import { get, snakeCase } from "lodash";
import Sequelize from "sequelize";
import moment from "moment";
import { convertFieldsIntoSequelizeFields } from "./helpers/index";
import { errorMessage } from "../logger/consoleMessages";

const checkDatabaseOptions = (moduleName, tableName) => {
  if (moduleName && !tableName) {
    errorMessage(`Module ${moduleName} didn't provided table name. Exiting process.`);
    process.exit();
  }
};

export default function (connection, configuration) {
  let dialect = process.env.dbDialect;
  let modules = process.env.builtinModules.split(",");
  modules = modules.filter((c) => c);
  modules = [...modules, ...get(configuration, "modules", [])];
  let tables = {};
  const processModule = (module) => {
    let moduleName = get(module, "name", "");
    let useDatabase = get(module, "useDatabase", true);

    if (useDatabase) {
      if (dialect == "mysql" || dialect == "postgres") {
        let tableName = get(module, "database.sql.tableName", "");
        checkDatabaseOptions(moduleName, tableName);
        let tableFields = convertFieldsIntoSequelizeFields(module.database.sql.fields);
        let tableOptions = get(module, "database.sql.tableOptions", {
          timestamps: true,
          paranoid: false,
          underscored: false,
          freezeTableName: true,
        });
        tables[moduleName] = connection.define(
          tableName,
          {
            ...tableFields,
            created_at: {
              type: Sequelize.DATE,
              get() {
                return moment(this.getDataValue("created_at")).format();
              },
            },
            updated_at: {
              type: Sequelize.DATE,
              get() {
                return moment(this.getDataValue("updated_at")).format();
              },
            },
          },
          {
            ...tableOptions,
          }
        );
      } else if (dialect == "mongodb") {
        let mongoose = require("mongoose");
        let tableName = get(module, "database.mongodb.tableName", "");
        let tableSchema = get(module, "database.mongodb.schema", null);
        checkDatabaseOptions(moduleName, tableName);
        if (tableSchema && tableName) {
          tables[moduleName] = connection.model(tableName, new mongoose.Schema(tableSchema));
        }
      }
    }
  };
  modules.forEach((element) => {
    let module;
    if (element.constructor === String) {
      module = require(`./../builtinModules/${element}/index`).default;
    } else if (element.constructor === Object) {
      module = element;
    }
    processModule(module);
  });
  return tables;
}
