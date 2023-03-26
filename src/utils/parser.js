import * as cheerio from "cheerio";
// import axios from "axios";

export const parse = async (url) => {
  let text = "";
  try {
    const secureURL = url.replace("https:", "http:");
    console.log("Secure URL:", secureURL);
    const response = await fetch(secureURL, {
      method: "GET",
      //   headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log("Response", response);
    const body = response.text();
    const $ = await cheerio.load(body);
    console.log("Text: ", await $.text());
    await $("script, noscript, style, head, a").each((el) => {
      $(el).remove();
    });
    text = await $.text();
  } catch (err) {
    console.log(err);
  }

  return text;
};