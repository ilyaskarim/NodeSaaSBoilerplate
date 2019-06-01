import validations from "./validations.ts";
import dynamic from "./../../../framework/dynamic/index.ts";
import allModels from "./../../../framework/dynamic/allModels.ts";
import relateResolver from "./../../../framework/database/relateResolver.ts";

let {userModel,profileModel} = allModels;


let profileResolver = dynamic.resolvers({
  moduleName: 'Profile',
  validations: {
    create: validations.createProfile,
    delete: validations.deleteProfile,
    update: validations.updateProfile,
    view: validations.profile
  },
  model: profileModel
});

export default {
	Profile: {
		async user(profile) {
      return await relateResolver(userModel,profile,'user');
		}
  },
  queries: {
    ...dynamic.loader("Profile",profileResolver).queries
  },
  mutations: {
    ...dynamic.loader("Profile",profileResolver).mutations
  },
}