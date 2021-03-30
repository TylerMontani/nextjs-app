import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

interface Data {
  data: string;
}

const route: NextApiHandler = (
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({ data: "test" });
};

export default route;
