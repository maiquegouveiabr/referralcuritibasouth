import { prisma } from "@/util/db";

export default async function getUba() {
  try {
    const ubas = await prisma.uba_area.findMany({ orderBy: { name: "asc" } });
    return ubas.map((uba) => {
      return {
        ...uba,
        id: Number(uba.id),
        name: uba.name || "",
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
