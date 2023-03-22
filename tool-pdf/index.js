import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { globSync } from "glob";

const TARGET_DIR = "../docs/typedoc";

(async () => {
  const files = globSync(TARGET_DIR + "/**/*.html");
  console.log(files);

  // 出力先
  if (fs.existsSync("dist")) {
    fs.rmdirSync("dist", { recursive: true });
  }
  fs.mkdirSync("dist");

  // ブラウザを起動
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < files.length; i++) {
    // ファイルプロトコルに変換
    const file = files[i];
    const url = "file://" + path.resolve(file);

    // ブラウザでアクセス
    await page.goto(url);
    await page.setViewport({ width: 640, height: 1024 });

    // 保存時のファイル名
    const pdfName =
      file.split(TARGET_DIR).join("").split("/").join("_") + ".pdf";

    await page.pdf({
      path: `dist/${pdfName}`,
    });
  }

  await browser.close();
})();
