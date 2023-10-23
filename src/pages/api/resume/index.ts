import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { jsPDF } from "jspdf";

import { token } from "@/styled-system/tokens";
import { formatDate } from "@/utils/formatDate";
import { fetchBlobBase64 } from "@/utils/vercel/fetchBlobBase64";

export const GET: APIRoute = async () => {
  // Source data
  const workHistory = await getCollection("work-history");
  const experience = workHistory.sort(
    (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime(),
  );
  const {
    data: { name, socials, education, email, phone },
  } = await getEntry("resume-data", "index");

  const year = new Date().getFullYear();
  const contentDisposition = `inline; filename="xander-low-resume-${year}.pdf"`;

  // Fonts
  const DMMonoString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/DMMono-Regular-3Q3Wbo5cowAnxmRwnIPCQqpgL5kul6.ttf",
  );
  const DMSerifTextString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/DMSerifText-Regular-P8hzJpVkvihGuKy1WhVgDjWKjE7q70.ttf",
  );

  // Icons
  const phoneString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/phone-wr1juRORQLT0qAellET7h5QQFxvbWH.png",
  );
  const emailString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/email-XJsHwL5KebFovz3OzCJuKfk7SaBOBV.png",
  );
  const githubString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/github-c82NiYMJWN3mLBccdn8dNzhRkBdEJC.png",
  );
  const linkedinString = await fetchBlobBase64(
    "https://pr63tkdud6xj8zub.public.blob.vercel-storage.com/linkedin-tTAkInH0hto6PcYRWavb2ttqhLeYAg.png",
  );

  // SVG and layout props
  const margin = 36;
  const iconSize = 12;
  const socialSize = iconSize * 1.5;

  // Typography
  const h1 = 36;
  const h2 = 20;
  const h3 = 18;
  const h4 = 14;
  const body = 12;

  const highlightColor = token("colors.red.100");
  const textColor = token("colors.gray.900");

  // Instantiate a new PDFDocument
  const doc = new jsPDF({
    format: "letter",
    orientation: "portrait",
    unit: "pt",
  });

  // Add fonts
  // doc.addFileToVFS("DM-Mono.ttf", DMMonoString);
  doc.addFileToVFS("DM-Mono.ttf", DMMonoString);
  doc.addFont("DM-Mono.ttf", "DM-Mono", "normal", 400);
  doc.addFileToVFS("DM-Serif-Text.ttf", DMSerifTextString);
  doc.addFont("DM-Serif-Text.ttf", "DM-Serif-Text", "normal", 400);

  // Document vars
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;
  const textPadding = body * 2;
  let y = margin * 1.75;
  const x = margin;

  /** -----------------------------------------------------------------
   *  Render document
   *  -----------------------------------------------------------------
   */

  doc.setTextColor(textColor);

  // Heading
  doc.setFont("DM-Serif-Text").setFontSize(h1).text(name, x, y);

  y = y + h2;
  // Contact info
  // Socials
  doc.addImage(githubString, "PNG", x, y, socialSize, socialSize);
  doc.link(x, y, socialSize, socialSize, {
    url: new URL(socials["github"].url).href,
  });
  doc.addImage(
    linkedinString,
    "PNG",
    x + socialSize * 1.25,
    y,
    socialSize,
    socialSize,
  );
  doc.link(x + socialSize * 1.25, y, socialSize, socialSize, {
    url: new URL(socials["linkedin"].url).href,
  });

  doc.setFont("DM-Mono");

  // Phone
  const phoneWidth = doc.getTextWidth(phone) * 0.33 + iconSize * 1.5;
  const phoneX = pageWidth - margin - phoneWidth;
  doc.setFillColor(highlightColor);
  doc.rect(phoneX, y + body * 0.5, phoneWidth, body * 0.5, "F");
  doc.addImage(phoneString, "PNG", phoneX, y, iconSize, iconSize);
  doc
    .setFontSize(body)
    .text(phone, phoneX + iconSize * 1.5, y + iconSize * 0.75);

  // Email
  y = y + body;
  const emailWidth = doc.getTextWidth(email) + iconSize * 1.5;
  const emailX = pageWidth - margin - emailWidth;
  doc.setFillColor(highlightColor);
  doc.rect(emailX, y + body * 0.5, emailWidth, body * 0.5, "F");
  doc.addImage(emailString, "PNG", emailX, y, iconSize, iconSize);
  doc
    .setFontSize(body)
    .text(email, emailX + iconSize * 1.5, y + iconSize * 0.75);

  // Experience
  y = y + h1;
  doc.setFont("DM-Serif-Text").setFontSize(h2).text("Experience", x, y);

  y = y + textPadding * 1.5;
  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      // Heading
      doc
        .setFont("DM-Serif-Text")
        .setFontSize(h3)
        .text(`${client} — ${role}`, x, y);

      // Start and end date
      y = y + textPadding * 0.75;
      doc
        .setFont("DM-Mono")
        .setFontSize(body)
        .text(`${formatDate(startDate)} - ${formatDate(endDate)}`, x, y, {});

      // Responsibilities
      y = y + textPadding;
      doc.setFontSize(body);
      responsibilities.map((responsibility) => {
        const text = doc.splitTextToSize(`• ${responsibility}`, maxWidth);
        doc.text(`• ${responsibility}`, x, y, { maxWidth });
        y = y + body * (text.length + 1);
      });

      y = y + textPadding;
    },
  );

  // Education
  doc.setFont("DM-Serif-Text").setFontSize(h2).text("Education", x, y);

  y = y + textPadding;
  doc.setFontSize(h4).text(education.school, x, y);

  y = y + textPadding * 0.75;
  doc.setFont("DM-Mono");
  doc.setFontSize(body);
  doc.text(education.program, x, y);

  y = y + body;
  doc
    .setFontSize(body)
    .text(
      `${formatDate(education.startDate)} - ${formatDate(education.endDate)}`,
      x,
      y,
    );

  y = y + body;
  doc.text(education.description, x, y, { maxWidth });

  /** -----------------------------------------------------------------
   *  Return document
   *  -----------------------------------------------------------------
   */

  return new Response(doc.output("arraybuffer"), {
    headers: {
      "Content-Disposition": contentDisposition,
      "Content-Type": "application/pdf",
    },
  });
};
