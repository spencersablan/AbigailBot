module.exports = (sequelize, DataTypes) => {
	return sequelize.define('apex_users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
	}, {
		timestamps: false,
	});
};