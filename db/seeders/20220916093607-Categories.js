"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("categories", [
      {
        name: "category1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "category2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "category3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "category4",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("categories", null, {});
  },
};
