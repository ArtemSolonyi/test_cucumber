import {sequelize} from "./index.js";

export async function initDb() {
    await sequelize.sync({ force: true });
}