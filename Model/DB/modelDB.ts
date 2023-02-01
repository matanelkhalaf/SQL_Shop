import { Client, Product } from "../../main";

const createTables = async () => {
  await Client.sync({ force: true });
  await Product.sync({ force: true });
};

module.exports = { createTables };
