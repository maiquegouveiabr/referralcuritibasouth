import { prisma } from "@/util/db";

export default async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users.map((user) => {
      return {
        ...user,
        name: user.name || "",
        user_id: Number(user.user_id),
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
