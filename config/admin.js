module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c4b9c8a01a21dcd158b2f193ca2f098'),
  },
});
