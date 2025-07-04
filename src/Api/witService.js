const WIT_TOKEN = "AYNBIX7SYB4YNFORZ6QHAPTCHVGVI4WT";

export const getIntent = async (message) => {
  try {
    const url = `https://api.wit.ai/message?v=20250616&q=${encodeURIComponent(message)}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${WIT_TOKEN}`
      }
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Wit.ai error:", error);
    return null;
  }
};
