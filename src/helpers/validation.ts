const password = (value: string, helpers: any) => {
	if (value.length < 8) {
		return helpers.message('Password must be at least 8 characters');
	}
	if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
		return helpers.message('Password must contain at least a letter and a number');
	}
	return value;
};

export { password };
