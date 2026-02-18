// Script to drop the old orderId index from orders collection
// Run with: node scripts/dropOrderIdIndex.js

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, '../.env.local');
console.log('Loading .env.local from:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env.local:', result.error);
} else {
  console.log('.env.local loaded successfully');
}

async function dropIndex() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    console.log('MONGODB_URI:', MONGODB_URI ? 'Found' : 'Not found');
    console.log('URI starts with:', MONGODB_URI?.substring(0, 20));
    
    if (!MONGODB_URI || MONGODB_URI === 'your-mongodb-connection-string') {
      console.error('Error: Valid MONGODB_URI not found in environment variables');
      console.error('Please check your .env.local file');
      process.exit(1);
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db;
    const collection = db.collection('orders');

    // Check existing indexes
    const indexes = await collection.indexes();
    console.log('Current indexes:', indexes);

    // Drop the orderId index if it exists
    try {
      await collection.dropIndex('orderId_1');
      console.log('Successfully dropped orderId_1 index');
    } catch (error) {
      if (error.code === 27) {
        console.log('Index orderId_1 does not exist');
      } else {
        throw error;
      }
    }

    // Check indexes after dropping
    const updatedIndexes = await collection.indexes();
    console.log('Updated indexes:', updatedIndexes);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

dropIndex();
