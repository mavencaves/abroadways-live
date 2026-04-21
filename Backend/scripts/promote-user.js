require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

const ALLOWED_TARGET_ROLES = ['admin', 'content-manager'];

async function main() {
  const [, , emailArg, roleArg] = process.argv;
  const email = emailArg ? emailArg.trim().toLowerCase() : '';
  const targetRole = roleArg ? roleArg.trim() : '';

  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Please configure the backend environment first.');
    process.exit(1);
  }

  if (!email || !targetRole) {
    console.error('Usage: npm run promote-user -- user@example.com admin');
    process.exit(1);
  }

  if (!ALLOWED_TARGET_ROLES.includes(targetRole)) {
    console.error(`Role must be one of: ${ALLOWED_TARGET_ROLES.join(', ')}`);
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.error(`No user found for email: ${email}`);
      process.exit(1);
    }

    const previousRole = user.role;
    user.role = targetRole;
    user.status = 'active';
    await user.save();

    console.log(`Updated ${email}: ${previousRole} -> ${targetRole}`);
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
