import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

// function exclude<User, Key extends keyof User>(
//   user: User,
//   keys: Key[]
// ): Omit<User, Key> {
//   for (let key of keys) {
//     delete user[key]
//   }
//   return user
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid User ID');
    }
    // check if the userId exist in db
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId
      },
    });
    // const userWithoutPassword = exclude(existingUser, ['hashedPassword'])
    // check an calculate number of records
    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId
        }
      }
    })

    return res.status(200).json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}