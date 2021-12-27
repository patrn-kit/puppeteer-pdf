import puppeteer from 'puppeteer'

const exportPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: 'output/page9.pdf',
    format: 'A4',
    printBackground: true
  };
  await page.goto('https://usdd-dev.thinkbluedata.com/lnob', { waitUntil: 'networkidle2' });
  // @Note1: Edit element before export
  await page.evaluate(() => {
    const el = document.querySelector('.new-header-container');
    el.style.backgroundColor = 'red';
  });
  // /@Note1

  // @Note2: Select some element to export
  // const el = await page.$eval('#country-analysis .container-content', (element) => {
  //     return element.innerHTML;
  // }) 
  // await page.setContent(el);
  // /@Note2
  await page.pdf(options);
  await browser.close();
};

exportPdf();