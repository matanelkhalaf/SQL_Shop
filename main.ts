import Sequelize from "sequelize";

const sequelize = new Sequelize("store_management", "usersql@localhost", "Usersql148?", {
  host: "localhost",
  dialect: "mssq",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Client = sequelize.define("Client", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pone_number: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Product = sequelize.define("Product", {
  SKU: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price_customer: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  price_purchase: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = { Client, Product };

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    sequelize.sync({ force: true }).then(() => {
      console.log("Tables have been created.");
    });
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });
