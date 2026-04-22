require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

async function main() {
  const [, , emailArg, passwordArg] = process.argv;
  const email = emailArg ? emailArg.trim().toLowerCase() : '';
  const newPassword = passwordArg ? passwordArg.trim() : '';

  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Please configure the backend environment first.');
    process.exit(1);
  }

  if (!email || !newPassword) {
    console.error('Usage: npm run set-user-password -- user@example.com NewPassword123');
    process.exit(1);
  }

  if (newPassword.length < 8) {
    console.error('Password must be at least 8 characters long.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      console.error(`No user found for email: ${email}`);
      process.exit(1);
    }

    user.password = newPassword;
    await user.save();

    console.log(`Password updated successfully for ${email}`);
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
