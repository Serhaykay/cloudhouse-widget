// app/routes/admin/save-settings.jsx
import { json } from "@remix-run/node";
import prisma from "~/db.server";

export const action = async ({ request }) => {
  const data = await request.json();
  const { shop, whatsappNumber, greetingText, buttonText, pageTarget } = data;

  try {
    const existing = await prisma.widgetSettings.findUnique({ where: { shop } });

    if (existing) {
      // Update
      await prisma.widgetSettings.update({
        where: { shop },
        data: { whatsappNumber, greetingText, buttonText, pageTarget },
      });
    } else {
      // Create
      await prisma.widgetSettings.create({
        data: { shop, whatsappNumber, greetingText, buttonText, pageTarget },
      });
    }

    return json({ success: true });
  } catch (error) {
    console.error(error);
    return json({ success: false, error: "Failed to save settings" }, { status: 500 });
  }
};
