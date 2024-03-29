import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { jsPDF } from "jspdf";

import { chunk } from "@/utils/chunk";
import { formatDate } from "@/utils/formatDate";
import { fetchBlobBase64 } from "@/utils/vercel/fetchBlobBase64";

export const GET: APIRoute = async () => {
  // Source data
  const workHistory = await getCollection("work-history");
  const experience = workHistory.sort(
    (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime(),
  );
  const {
    data: { name, socials, education, email, phone, skills },
  } = await getEntry("resume-data", "i");

  const numCols = 4;
  const colGap = 12;
  const skillColumns = chunk(skills, numCols);

  const year = new Date().getFullYear();
  const contentDisposition = `inline; filename="xander-low-resume-${year}.pdf"`;

  // Fonts
  const DMMonoString = await fetchBlobBase64(import.meta.env.DMMONO_URL);
  const DMSerifTextString = await fetchBlobBase64(
    import.meta.env.DMSERIFTEXT_URL,
  );

  // Icons
  const phoneString = await fetchBlobBase64(import.meta.env.PHONE_ICON_URL);
  const emailString = await fetchBlobBase64(import.meta.env.EMAIL_ICON_URL);
  const githubString = await fetchBlobBase64(import.meta.env.GITHUB_ICON_URL);
  const linkedinString = await fetchBlobBase64(
    import.meta.env.LINKEDIN_ICON_URL,
  );

  // SVG and layout props
  const margin = 48;
  const iconSize = 12;
  const socialSize = iconSize * 1.5;

  // Typography
  const h1 = 36;
  const h2 = 18;
  const h3 = 12;
  const h4 = 10;
  const body = 10;

  const highlightColor = "#fee2e2";
  const textColor = "#1C1917";

  // Instantiate a new PDFDocument
  const doc = new jsPDF({
    format: "letter",
    orientation: "portrait",
    unit: "pt",
  });

  const colWidth = (doc.internal.pageSize.width - margin * 2) / numCols;

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
  let y = margin * 1.25;
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

  y = y + body * 2;
  doc.line(x, y, pageWidth - margin, y);

  // Skills
  y = y + h1;
  doc.setFont("DM-Serif-Text").setFontSize(h2).text("Skills", x, y);

  y = y + body * 2;
  const colTop = y;
  skillColumns.map((column, i) => {
    y = colTop;
    const colX =
      i == 0 || i == skillColumns.length - 1
        ? x + i * colWidth
        : x + i * colWidth + colGap;

    column.map((skill) => {
      const text = doc.splitTextToSize(skill, colWidth);
      doc
        .setFont("DM-Mono")
        .setFontSize(body)
        .text(skill, colX, y, { maxWidth: colWidth });
      y = y + body * text.length + 2;
    });
  });

  // Experience
  y = y + h1 * 1.75;
  doc.setFont("DM-Serif-Text").setFontSize(h2).text("Experience", x, y);

  y = y + textPadding;
  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      // Heading
      doc
        .setFont("DM-Serif-Text")
        .setFontSize(h3)
        .text(`${client} — ${role}`, x, y);

      // Start and end date
      y = y + textPadding * 0.65;
      doc
        .setFont("DM-Mono")
        .setFontSize(body)
        .text(`${formatDate(startDate)} - ${formatDate(endDate)}`, x, y);

      // Responsibilities
      y = y + textPadding * 0.75;
      doc.setFontSize(body);
      responsibilities.map((responsibility) => {
        const text = doc.splitTextToSize(`• ${responsibility}`, maxWidth);
        doc.text(`• ${responsibility}`, x, y, { maxWidth });
        y = y + body * (text.length + 0.5);
      });

      y = y + textPadding;
    },
  );

  // Education
  doc.setFont("DM-Serif-Text").setFontSize(h2).text("Education", x, y);

  y = y + textPadding;
  doc.setFontSize(h3).text(education.school, x, y);

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

  y = y + body * 2;
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
