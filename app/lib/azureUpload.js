import multer from "multer";
import MulterAzureStorage from "multer-azure-storage";
import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

// Azure SDK docs
// https://docs.microsoft.com/en-us/javascript/api/overview/azure/storage-overview?view=azure-node-latest
// https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob

const account = process.env.AZURE_ACCOUNT;
const accountKey = process.env.AZURE_ACCOUNT_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential
);

export const blobClient = (container, blob) => {
  const containerClient = blobServiceClient.getContainerClient(container);
  const blobClient = containerClient.getBlobClient(blob);
  return blobClient;
  /* 
    Example Usage:
    blobClient("sales-images", "example.json")
  */
};

export const containerClient = (container) => {
  const containerClient = blobServiceClient.getContainerClient(container);
  return containerClient;
  /* 
    Example Usage:
    containerClient("sales-images")
  */
};

const getBlobName = (file) => {
  const identifier = Math.random().toString().replace(/0\./, ""); // remove "0." from start of string
  return `${identifier}-${file.originalname}`;
};

export const createStorage = (name) => {
  return multer({
    storage: new MulterAzureStorage({
      azureStorageAccessKey: accountKey,
      azureStorageAccount: account,
      containerName: name,
      containerSecurity: "blob",
      fileName: getBlobName,
    }),
  });
};
