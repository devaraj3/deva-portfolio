import fs from "node:fs/promises";
import path from "node:path";

export async function loadPortfolio() {
  const dir = path.join(process.cwd(), "data");
  const main = path.join(dir, "portfolio.content.json");
  const fallback = path.join(dir, "portfolio.content.example.json");
  const file = await fs.readFile(main, "utf8").catch(async () => {
    return fs.readFile(fallback, "utf8");
  });
  return JSON.parse(file);
}

