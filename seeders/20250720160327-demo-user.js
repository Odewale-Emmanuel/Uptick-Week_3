"use strict";

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert("user", [
      {
        id: "b94d03b1-dfcd-4f5b-b51f-2c9f1e9b4ac4",
        name: "John Doe",
        email: "johndoe@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "0fae35ed-8a63-4b6a-92b8-6f2cbb4c9370",
        name: "Jane Smith",
        email: "janesmith@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "f365d6b9-00cc-4f9f-869d-bda9e8c5b73c",
        name: "Emily Johnson",
        email: "emilyj@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "634450b9-2a13-4bc9-b8ca-40ae11f82738",
        name: "Michael Brown",
        email: "michaelb@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "24b5e9c0-c8d1-4026-a741-e99cb2cf42e9",
        name: "Sarah Davis",
        email: "sarahd@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "c86b9d32-660f-431d-b747-bd78ac3c9c35",
        name: "Chris Wilson",
        email: "chrisw@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "8e53f94f-d5b0-4705-b935-03f409fe7265",
        name: "Jessica Lee",
        email: "jessical@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "b370ca21-cfd0-4db9-bba6-dbd2d7d0c23d",
        name: "David Harris",
        email: "davidh@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "34c9a381-4b39-48f0-877b-458227be43d3",
        name: "Laura Martin",
        email: "lauram@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "ff43a9db-bef6-465b-b04f-c60c8c5ae073",
        name: "James Taylor",
        email: "jamest@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "7a55a0c7-3c24-438f-8416-4822c55b6f07",
        name: "Anna Anderson",
        email: "annaanderson@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "d8fd156b-0a55-45c6-9876-37bce49f0d42",
        name: "Matthew Thomas",
        email: "matthewt@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "6c506f73-0eab-4f51-8ae1-6b142fa7e56a",
        name: "Megan Moore",
        email: "meganm@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "1e4fbb35-0531-45a9-a153-111d6db456ba",
        name: "Daniel Garcia",
        email: "danielg@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "cf321ada-f5a6-45be-950f-0c87bc0f2782",
        name: "Sophia Martinez",
        email: "sophiam@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "6c88163a-7088-4261-b517-0a043b0b9d59",
        name: "William White",
        email: "williamw@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "11b73f58-c3d0-468b-b059-83a15cdba6c0",
        name: "Olivia Clark",
        email: "oliviac@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "a4ff68f4-cad6-4318-aecf-64bfa4971b39",
        name: "Alexander Rodriguez",
        email: "alexander@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
      },
      {
        id: "859e43f0-dfa2-4f8d-b7ed-2efb8ad3e68b",
        name: "Lucas Walker",
        email: "lucasw@example.com",
        created_at: "2025-07-20T12:00:00Z",
        updated_at: "2025-07-20T12:00:00Z",
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
    await queryInterface.bulkDelete("user", null, {});
  },
};
