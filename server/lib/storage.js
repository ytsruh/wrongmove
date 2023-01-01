import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  endpoint: process.env.STORAGE_ENDPOINT, // Find your endpoint in the control panel, under Settings. Prepend "https://".
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  region: process.env.STORAGE_REGION, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  credentials: {
    accessKeyId: process.env.STORAGE_KEY, // Access key pair. You can create access key pairs using the control panel or API.
    secretAccessKey: process.env.STORAGE_SECRET, // Secret access key defined through an environment variable.
  },
});

const generateFileName = (file) => {
  const identifier = Math.random().toString().replace(/0\./, ""); // remove "0." from start of string
  return `wrongmove/${identifier}-${file.originalname}`;
};

export const createStorage = (name) => {
  return multer({
    storage: multerS3({
      s3: s3,
      acl: "public-read", // Has to be set as the default setting is 'private'
      bucket: process.env.STORAGE_BUCKET,
      key: (req, file, cb) => {
        cb(null, generateFileName(file));
      },
    }),
  });
};
