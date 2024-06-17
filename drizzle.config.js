/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://test_owner:GZ2Ni3CBVPUr@ep-curly-dawn-a5krrraw-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
    }
  };