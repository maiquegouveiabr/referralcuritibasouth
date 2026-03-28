import { prisma } from "@/util/db";

export default async function getAreas() {
  try {
    const areas = await prisma.area.findMany({
      where: {
        is_active: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return areas.map((area) => {
      return {
        ...area,
        name: area.name || "",
        id: Number(area.id),
        zone_id: Number(area.zone_id),
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
