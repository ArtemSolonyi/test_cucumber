import {DataTypes} from "sequelize"
import {sequelize} from "./index.js";


export const Test = sequelize.define('Test', {
    dayOfWeek: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

