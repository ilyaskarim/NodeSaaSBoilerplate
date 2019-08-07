let { get } = require("lodash");

import actions from "./actions/index";
import internalServerError from "./../../framework/helpers/internalServerError";
import camelToSnake from "./../../framework/helpers/camelToSnake";

const { create, update, destroy, findOne, view, paginate } = actions;

class Model {
  instance: any;
  tableName: any;
  models: any;
  model: any;
  schema: object;

  constructor(props: any) {
    this.instance = null;
    this.tableName = props.tableName;
    this.models = props.models;
    this.model = this.models[this.tableName];
  }

  async delete(args: any) {
    try {
      let fakeResponse: any = {};
      await destroy(this.model, args);
      return fakeResponse;
    } catch (e) {
      return internalServerError(e);
    }
  }

  async create(args: any, requestedFields: any) {
    try {
      let fakeResponse: any = await create(
        this.model,
        args,
        "",
        requestedFields
      );
      return fakeResponse;
    } catch (e) {
      return internalServerError(e);
    }
  }

  async update(args: any, requestedFields: any) {
    try {
      let response: any = await update(this.model, args, requestedFields);
      return response;
    } catch (e) {
      return internalServerError(e);
    }
  }

  async view(args: any, requestedFields: any) {
    try {
      let response = await view(this.model, args, requestedFields);
      if (!response) {
        return null;
      }
      return response;
    } catch (e) {
      return internalServerError(e);
    }
  }

  async findOne(args: any, requestedFields: any) {
    try {
      let response = await findOne(this.model, args, requestedFields);
      if (!response) {
        return null;
      }
      return response;
    } catch (e) {
      return internalServerError(e);
    }
  }

  async paginate(args: any, requestedFields: any) {
    try {
      let response = await paginate(this.model, args, requestedFields);
      return response;
    } catch (e) {
      return internalServerError(e);
    }
  }

  getInstance() {
    return get(this, "instance", null);
  }

  /*
    Create a random instance, If this model is under relationship for another instance please use it with promises to save relation data.
  */

  async seed(initialData) {
    return new Promise((resolve, reject) => {});
  }
}

export default Model;
