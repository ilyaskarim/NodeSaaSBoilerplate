
import {get,snakeCase} from "lodash";
import Sequelize from "sequelize";
import moment from "moment";
import {convertFieldsIntoSequelizeFields} from "./helpers/index";
export default function (configuration) {
  let connection = require("./connect").default;
  let modules = process.env.builtinModules.split(",");
  modules = [...modules, ...get(configuration,'modules', [])]
  let tables = {};
  const processModule = (module) => {
    let tableName = module.name;
    let useDatabase = get(module,'useDatabase',true);
    if (useDatabase) {
      let tableFields= convertFieldsIntoSequelizeFields(module.fields.sql);
      tables[tableName] = connection.define(snakeCase(tableName),{
        ...tableFields,
        created_at: {
          type: Sequelize.DATE,
          get() {
            return moment(this.getDataValue('createdAt')).format();
          }
        },
        updated_at: {
          type: Sequelize.DATE,
          get() {
            return moment(this.getDataValue('updatedAt')).format();
          }
        }
      },{
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true
      });
    }
  }
  //1
  modules.forEach(element => {
    let module;
    if (element.constructor === String) {
      module = require(`./../builtinModules/${element}/index`).default;
    }else if (element.constructor === Object) {
      module = element;
    }
    processModule(module);
  });
  //1
  connection.sync();
  return tables;
}