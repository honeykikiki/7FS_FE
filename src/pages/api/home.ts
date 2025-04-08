// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const num = await fetch(`http://39.119.222.230:8080/group/list`);
  const number = await num.json();
  console.log(number, "back");

  res.status(200).json({ name: number });
}
