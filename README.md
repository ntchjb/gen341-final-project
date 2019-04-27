# Phuket folk wisdom: Phuket local food

This is GEN341 Final Project at KMUTT.

This is a website storing local food recipes to help preserves food wisdom in Phuket. However, the tool can be used to store any food you desired.

## Requirement

This project require Node.js 10 or later and npm.

## Installation

Just run the following command to publish the website on your server.

```bash
npm install
npm run build
npm start
```

Run `npm run dev` to run as developer mode. This mode will locally publish the website at `http://localhost:3000`

## Setup & Usage

To create a post of food recipes, please follow this instructions

1. Create `posts` folder at the root project directory
2. Create a folder with food name you want (e.g. `food-name`) inside the `posts` directory
3. Create `index.md` and ``meta.json` inside the food name folder. Then put a picture file named `thumbnail` to the food name folder as the thumbnail of the post. Thumbnail image can be any file type that the browser support (e.g. JPEG, PNG, GIF, etc.) Put any pictures to the folder as the image content of the post and reference in the markdown by using only picture name and its extension.
4. Inside the `meta.json` put the following string to the file.

```json
{
  "header": {
    "title": "Phuket Cuisine",
    "subtitle": "About & Contact",
    "publishedDate": "2019-04-23T07:05:12Z",
    "modifiedDate": "2019-04-23T13:17:10Z",
    "author": "Somkid Thongdee",
    "meta": {
      "description": "The history of phuket, local wisdom, and Phuket local food",
      "tags": [
        "food",
        "recipes",
        "Phuket",
        "History"
      ]
    }
  }
}
```

The content inside `meta.json` is the header information that will be shown as the summary of the post. Title, subtitle, and any other keys can be edited as you wish.

Here is the folder structure that we have created. We have created food name called `food-name`.

```
<root project>
      |
      |- posts
           |
           |- food-name
                  |
                  |- index.md
                  |- meta.json
                  |-thumbnail.jpg
                  |-content1.png
                  |-content2.jpg
                     
```

5. The content inside `index.md`, markdown language will be used as a post content. However, HTML tag can be added for the display customization.
6. After write all content for the post, run `npm run dev` in the terminal to check the content. Go to any browser and go to `localhost:3000`

## Deployment

This project can deploy to any serverless service that can run Node.js. For example, now.sh, Netlify, Google App Engine, etc.

For example, deploying to now.sh services can be done by firstly install necessary tools. Go to terminal and run the following command.

```bash
npm install -g now
```

then run `now` at the root of the project with following its instructions. and Done! The software will finally tells you the website URL.

The website can also be exported as static website files. Just run `npm run build` and `npm run export` in the terminal to export the project. It will then generate static website files at `out` folder at the root project directory. The `out` folder can be put in any web hosting service with lower cost than the previous method.

## Credit

This project is made by Nathachai Jaiboon