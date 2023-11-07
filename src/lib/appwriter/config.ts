import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    url: import.meta.env.VITE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    storageId: import.meta.env.VITE_STORAGE_ID,
    savesCollectionId: import.meta.env.VITE_SAVES_COLLECTION_ID,
    usersCollectionId: import.meta.env.VITE_USERS_COLLECTION_ID,
    postsCollectionId: import.meta.env.VITE_POSTS_COLLECTION_ID,
}

export const client = new Client;
client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
