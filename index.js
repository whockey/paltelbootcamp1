const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto('https://visitpalestine.tech/jobs', {waitUntil: 'networkidle2'});

  const result = await page.evaluate(() => {
    let jobs = [];
    
    document.querySelectorAll('.sqs-gallery-design-list-slide')
      .forEach(elem => {
        const description = elem.querySelector('.summary-title').innerText;

        jobs.push({
          title: description.match(/[^\(]*/)[0],
          Mysummary: description.match(/\(.*/)[0]
        })
      })
    return jobs;
  });

  console.log(result)
  await browser.close();
})();