# facebook-ad-builder

This is a project to learn the basics of AngularJS 1.x. It is a simple ad builder for Facebook that includes a way to pick images (picking from a pre-canned list), and edit text for the various components of the ad.  Data into a preview that updates live as the fields are edited and very closely match what is [on Facebook](https://www.facebook.com/business/ads-guide).

![Left: original. Right: copy](http://i.imgur.com/tT4641N.png)

## Setup Instructions
This project does not include a backend. The focus was on AngularJS and presentation. To run the project:

1. Git clone this repo.

2. Open index.html using your browser of choice (as long as your choice is not IE).

---

## Testing

For testing, I used mocha-jsdom. Note mocha-jsdom uses the old jsdom api, you will need to go into `node_modules/mocha-jsdom/index.js` (Don't forget to `npm install` first) and change line 52 from:
`require('jsdom').env(`
to:
`require('jsdom/lib/old-api.js').env(`
