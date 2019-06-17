//Hi!

const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

///some comment for trail
///new branch 
  await page.goto('https://visitpalestine.tech/jobs', {waitUntil: 'networkidle2'});

  const result = await page.evaluate(() => {
    let jobs = [];

    document.querySelectorAll('.sqs-gallery-design-list-slide')
      .forEach(elem => {
        const description = elem.querySelector('.summary-title').innerText;

        jobs.push({
          title: description.match(/[^\(]*/)[0],
          summary: description.match(/$\(.*/)[0],
          author: "William"

        })
      })
    return jobs;
  });

  console.log(result)
  await browser.close();
 // adding a coomient
})();
