// /**
//  * YOU DON'T HAVE TO MODIFY THIS FILE
//  * UNLESS ABSOLUTELY NECESSARY.
//  *
//  * This file has a lot of commonly used
//  * functions that may be of use. Particularly, send.
//  */

export function send(res, code, data, json = true) {
  /**
   * Send a response
   */
  const action = json ? "json" : "send";
  res.status(code)[action](data);
}

// export function filter(query, data) {
//   /**
//    * Filter quotes in memory based on author
//    */
//   return "author" in query
//     ? data.filter((quote) => quote.author === query.author)
//     : data;
// }

// export function testProp(obj, prop) {
//   /**
//    * Check if property exists and contains at least one character
//    */
//   return prop in obj && !!/\S+/.test(obj[prop]);
// }

// export function validateQuote(quote) {
//   if (!testProp(quote, "text")) {
//     return false;
//   }

//   if (!testProp(quote, "author")) {
//     quote.author = "Anonymous";
//   }
//   return true;
// }
