import path from "path";

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "gen-types": {
    enabled: true,
    config: {
      outputLocation: path.join(
        __dirname,
        "../../../../RepWise/src/lib/strapi"
      ),
      // If this is true, then the outputLocation should be the location to a .ts file
      // singleFile: true,
    },
  },
});
