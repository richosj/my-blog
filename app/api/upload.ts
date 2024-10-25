import { NextApiRequest, NextApiResponse } from "next";

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    return await response.json();
  } catch (err) {
    console.error("Error uploading image:", err);
    throw err;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { file } = req.body;
      const result = await uploadImage(file);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to upload image" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
