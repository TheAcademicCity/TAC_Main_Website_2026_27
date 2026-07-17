import { existsSync, mkdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir =
  "C:/Users/harsh/.cursor/projects/d-Main-TAC-Website/assets";
const destDir = join(root, "public/images/home/campus/partners");

const files = [
  [
    "c__Users_harsh_AppData_Roaming_Cursor_User_workspaceStorage_0d5a68667b31b0556259257508ebafed_images_allen_white-57f3c70f-f439-45d7-b5db-03ba1ebfed52.png",
    "allen-white.png",
    28,
  ],
  [
    "c__Users_harsh_AppData_Roaming_Cursor_User_workspaceStorage_0d5a68667b31b0556259257508ebafed_images_trisha_logo_White-5847e92b-0020-4a11-9d98-c395a0542f1d.png",
    "trisha-classes-white.png",
    32,
  ],
  [
    "c__Users_harsh_AppData_Roaming_Cursor_User_workspaceStorage_0d5a68667b31b0556259257508ebafed_images_Nahata_White-8aec7a03-2408-4dde-ad07-56daccb9bc9a.png",
    "nahata.png",
    28,
  ],
];

async function toTransparentPng(sourcePath, destPath, threshold) {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    if (data[i] <= threshold && data[i + 1] <= threshold && data[i + 2] <= threshold) {
      data[i + 3] = 0;
    }
  }

  const tmp = `${destPath}.tmp.png`;
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 10 })
    .png()
    .toFile(tmp);

  renameSync(tmp, destPath);
}

mkdirSync(destDir, { recursive: true });

for (const [sourceName, destName, threshold] of files) {
  const sourcePath = join(assetsDir, sourceName);
  const destPath = join(destDir, destName);

  if (!existsSync(sourcePath)) {
    console.error(`Missing source file: ${sourcePath}`);
    process.exit(1);
  }

  await toTransparentPng(sourcePath, destPath, threshold);
  console.log(`Converted ${destName} → transparent PNG`);
}
