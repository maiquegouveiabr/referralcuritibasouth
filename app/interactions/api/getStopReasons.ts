import { prisma } from "@/util/db";

export default async function getStopReasons() {
  try {
    const reasons = await prisma.stop_teaching_reason.findMany({ orderBy: { name: "asc" } });
    return reasons.map((reason) => {
      return {
        ...reason,
        name: reason.name || "",
        id: Number(reason.id),
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
