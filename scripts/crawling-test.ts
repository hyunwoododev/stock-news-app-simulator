import puppeteer from "puppeteer";

class Crawler {
  browser: any = null;
  page: any = null;
  targetUrl = "https://coding-lks.tistory.com/category";
  blogData: any = null;

  async setConfig() {
    this.browser = await puppeteer.launch({
      headless: false,
    });
    this.page = await this.browser.newPage();
    this.blogData = [];
  }

  async accessSite() {
    await this.page.goto(this.targetUrl);
  }

  async getPartOfPost() {
    await this.page.waitForSelector("#body > ul > li", {
      timeout: 1000,
    });

    const posts = await this.page.$$("#body > ul > li");
    for (const post of posts) {
      const name = await post.$eval("a", (e: any) => e.innerText);
      const date = await post.$eval(".date", (e: any) => e.innerText);
      this.blogData.push({
        name,
        date,
      });
    }
  }
}

async function crawl() {
  const crawler = new Crawler();
  await crawler.setConfig();
  await crawler.accessSite();
  await crawler.getPartOfPost();
  console.log(crawler.blogData);
}

crawl();
