import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
} from "graphql";
import {get} from "lodash";

import schemaResponse from "@framework/schema/schemaResponse.js";
import schemaAttribute from "@framework/schema/schemaAttribute.js";

export default new GraphQLObjectType({
	name: "RoleSchema",
	description: "RoleSchema...",
	fields() {
		return {
			...schemaResponse,
			...schemaAttribute('user','number'),
			...schemaAttribute('created_by','number'),
			...schemaAttribute('type','string'),
		}
	}
});