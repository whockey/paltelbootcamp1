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
<<<<<<< HEAD
          Title: description.match(/[^\(]*/)[0],
          Summary: description.match(/\(.*/)[0]
||||||| merged common ancestors
          title: description.match(/[^\(]*/)[0],
          summary: description.match(/\(.*/)[0]
=======
          title: description.match(/[^\(]*/)[0],
          summary: description.match(/\(.*/)[0];;
>>>>>>> 76721bfe1af39936d63dceaea308ac1dfd264819
        })
      })
    return jobs;
  });

  console.log(result)
  await browser.close();
})();