export default `
	type RolePermission {
		_id: String
		id: Int
		permission: Int,
		role: Int
		successMessage: String
		successMessageType: String
		errors: [String]
		statusCode: String
		statusCodeNumber: Int
		created_at: String
		updated_at: String
	}
`;