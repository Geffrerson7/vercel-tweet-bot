// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config();

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_CUSTOMER_KEY,
  appSecret: process.env.TWITTER_CUSTOMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rwClient = twitterClient.readWrite;

export default async function handler(_req, res) {
  await rwClient.v2
    .tweet("Tyler Durden: La publicidad nos hace codiciar autos y ropa. Trabajos odiosos para comprar mierda que no necesitamos.")
    .then((response) => {

      res.status(200).json({ data: response, message: "El bot ha hecho un tweet" })
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    });


};
