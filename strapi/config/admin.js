module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f72a93823ea39f4e02e21a66def6fe1'),
  },
});
