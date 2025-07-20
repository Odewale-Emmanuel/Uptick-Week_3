"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
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
    await queryInterface.bulkInsert(
      "note",
      [
        {
          id: "f7be22f2-0225-4fc6-8b47-e418b269fef4",
          title: "Home Improvement Ideas",
          content:
            "Repaint the kitchen, replace the bathroom tiles, and add a new garden shed.",
          user_id: "c86b9d32-660f-431d-b747-bd78ac3c9c35",
          created_at: "2025-07-19T17:30:00Z",
          updated_at: "2025-07-19T17:30:00Z",
        },

        {
          id: "27ab44b3-46fc-4a1a-928d-7b0c6d7c678e",
          title: "Meeting Notes",
          content:
            "Discussed project timelines, budget allocations, and resource requirements.",
          user_id: "b94d03b1-dfcd-4f5b-b51f-2c9f1e9b4ac4",
          created_at: "2025-07-19T10:30:00Z",
          updated_at: "2025-07-19T10:30:00Z",
        },
        {
          id: "d3b96d92-cfbd-48fd-b365-bbc8f8d59398",
          title: "Shopping List",
          content: "Milk, Eggs, Butter, Bread, Cheese, Vegetables.",
          user_id: "b94d03b1-dfcd-4f5b-b51f-2c9f1e9b4ac4",
          created_at: "2025-07-19T11:00:00Z",
          updated_at: "2025-07-19T11:00:00Z",
        },
        {
          id: "b9c21f9e-5b9d-4a78-896d-f4f40419d51e",
          title: "Travel Ideas",
          content:
            "Paris, Tokyo, New York, Barcelona. Need to research flights.",
          user_id: "b94d03b1-dfcd-4f5b-b51f-2c9f1e9b4ac4",
          created_at: "2025-07-19T11:30:00Z",
          updated_at: "2025-07-19T11:30:00Z",
        },
        {
          id: "8495db56-437f-4be9-a074-6e6e3edbe3bc",
          title: "Project Brainstorm",
          content:
            "Innovative ideas for the new app. Focus on user experience and performance.",
          user_id: "0fae35ed-8a63-4b6a-92b8-6f2cbb4c9370",
          created_at: "2025-07-19T12:00:00Z",
          updated_at: "2025-07-19T12:00:00Z",
        },
        {
          id: "221073cf-8497-4561-bb3e-743aa9d8e689",
          title: "Books to Read",
          content: "The Great Gatsby, 1984, Brave New World, Moby Dick.",
          user_id: "f365d6b9-00cc-4f9f-869d-bda9e8c5b73c",
          created_at: "2025-07-19T12:15:00Z",
          updated_at: "2025-07-19T12:15:00Z",
        },
        {
          id: "4cfefb4f-40fa-4a6b-9769-1b259d8d9ccf",
          title: "Client Requirements",
          content:
            "Client wants a user-friendly design with a focus on accessibility.",
          user_id: "634450b9-2a13-4bc9-b8ca-40ae11f82738",
          created_at: "2025-07-19T12:30:00Z",
          updated_at: "2025-07-19T12:30:00Z",
        },
        {
          id: "fb6e98c7-1e5d-4a6b-bbc0-b1f167dd3b2c",
          title: "Grocery List",
          content: "Tomatoes, Potatoes, Lettuce, Apples.",
          user_id: "24b5e9c0-c8d1-4026-a741-e99cb2cf42e9",
          created_at: "2025-07-19T13:00:00Z",
          updated_at: "2025-07-19T13:00:00Z",
        },
        {
          id: "1f073aeb-2df7-42f2-9b75-e4f0f1b97ca5",
          title: "Weekend Trip",
          content:
            "Plan for a weekend getaway to the beach. Need to check the weather.",
          user_id: "c86b9d32-660f-431d-b747-bd78ac3c9c35",
          created_at: "2025-07-19T13:15:00Z",
          updated_at: "2025-07-19T13:15:00Z",
        },
        {
          id: "76d57273-b07f-4759-87a9-b7b8fe12f69a",
          title: "Meal Prep",
          content: "Cook chicken, rice, and vegetables for the next few days.",
          user_id: "8e53f94f-d5b0-4705-b935-03f409fe7265",
          created_at: "2025-07-19T13:30:00Z",
          updated_at: "2025-07-19T13:30:00Z",
        },
        {
          id: "ce299987-3c42-4a73-bc11-f4601da0fe7d",
          title: "Vacation Planning",
          content: "Researching beaches and resorts for summer vacation.",
          user_id: "b370ca21-cfd0-4db9-bba6-dbd2d7d0c23d",
          created_at: "2025-07-19T14:00:00Z",
          updated_at: "2025-07-19T14:00:00Z",
        },
        {
          id: "3e825d28-0f45-4a85-9903-d4b922828681",
          title: "Exercise Routine",
          content:
            "Morning stretches, 30 minutes of cardio, strength training.",
          user_id: "34c9a381-4b39-48f0-877b-458227be43d3",
          created_at: "2025-07-19T14:15:00Z",
          updated_at: "2025-07-19T14:15:00Z",
        },
        {
          id: "87556ef5-b67d-4e95-b586-3e5f00e99d36",
          title: "Meeting Recap",
          content: "Discussed team performance and new project priorities.",
          user_id: "ff43a9db-bef6-465b-b04f-c60c8c5ae073",
          created_at: "2025-07-19T14:30:00Z",
          updated_at: "2025-07-19T14:30:00Z",
        },
        {
          id: "dfa7d975-dad3-492a-8838-e9a5610325e3",
          title: "Workout Plan",
          content: "Focus on arms and legs. Add more squats.",
          user_id: "7a55a0c7-3c24-438f-8416-4822c55b6f07",
          created_at: "2025-07-19T14:45:00Z",
          updated_at: "2025-07-19T14:45:00Z",
        },
        {
          id: "ff8f7a4d-8f9f-4d2a-8b64-953fc6e37e99",
          title: "Dinner Ideas",
          content: "Pasta, Salad, Chicken Stir Fry.",
          user_id: "d8fd156b-0a55-45c6-9876-37bce49f0d42",
          created_at: "2025-07-19T15:00:00Z",
          updated_at: "2025-07-19T15:00:00Z",
        },
        {
          id: "d2d6f063-d1be-4e3d-b9f9-3b89b73d3b35",
          title: "Birthday Party Ideas",
          content: "Plan a surprise birthday party for Jane.",
          user_id: "6c506f73-0eab-4f51-8ae1-6b142fa7e56a",
          created_at: "2025-07-19T15:30:00Z",
          updated_at: "2025-07-19T15:30:00Z",
        },
        {
          id: "e3a2686a-2c1c-4ca6-a6fc-45b5d52bcd02",
          title: "New Year Resolutions",
          content:
            "Start journaling every day, drink more water, read more books.",
          user_id: "1e4fbb35-0531-45a9-a153-111d6db456ba",
          created_at: "2025-07-19T16:00:00Z",
          updated_at: "2025-07-19T16:00:00Z",
        },
        {
          id: "7a47711e-bf50-4df8-a9f8-08e548021d43",
          title: "Workout Plan",
          content: "Cardio in the morning, strength training in the evening.",
          user_id: "cf321ada-f5a6-45be-950f-0c87bc0f2782",
          created_at: "2025-07-19T16:15:00Z",
          updated_at: "2025-07-19T16:15:00Z",
        },
        {
          id: "4db57c8c-e961-4b7d-93ea-e78cc897d9d5",
          title: "Coding Challenges",
          content: "Solve LeetCode problems daily to improve algorithm skills.",
          user_id: "b94d03b1-dfcd-4f5b-b51f-2c9f1e9b4ac4",
          created_at: "2025-07-19T16:30:00Z",
          updated_at: "2025-07-19T16:30:00Z",
        },
        {
          id: "125bdb92-5ad7-45b9-842f-96f6d36cc1cd",
          title: "Weekend Getaway",
          content:
            "Plan a two-day trip to the mountains for hiking and relaxation.",
          user_id: "8e53f94f-d5b0-4705-b935-03f409fe7265",
          created_at: "2025-07-19T17:00:00Z",
          updated_at: "2025-07-19T17:00:00Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("note", null, {});
  },
};
