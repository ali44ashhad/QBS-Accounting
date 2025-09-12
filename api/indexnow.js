// /api/indexnow.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { urlList } = req.body;
    if (!Array.isArray(urlList) || urlList.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "urlList must be a non-empty array" });
    }

    // Safety limits
    const MAX_URLS = 1000;
    if (urlList.length > MAX_URLS) {
      return res
        .status(400)
        .json({
          success: false,
          message: `urlList length must be <= ${MAX_URLS}`,
        });
    }

    // Read config from env (set these in Vercel — instructions below)
    const HOST = process.env.INDEXNOW_HOST; // e.g. "qbsaccounting.us"
    const KEY = process.env.INDEXNOW_KEY; // your key
    const KEY_LOCATION =
      process.env.INDEXNOW_KEY_LOCATION || `https://${HOST}/${KEY}.txt`;

    if (!HOST || !KEY) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Missing INDEXNOW_HOST or INDEXNOW_KEY env variables",
        });
    }

    // Validate each url belongs to your host (allowing both host and www.host)
    const allowedHost1 = HOST.toLowerCase();
    const allowedHost2 = ("www." + HOST).toLowerCase();

    const sanitizedUrls = [];
    for (const u of urlList) {
      if (typeof u !== "string" || !u.trim()) {
        return res
          .status(400)
          .json({
            success: false,
            message: "All urls must be non-empty strings",
          });
      }
      let parsed;
      try {
        parsed = new URL(u.trim());
      } catch (e) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid URL: ${u}` });
      }
      const hostname = parsed.hostname.toLowerCase();
      if (hostname !== allowedHost1 && hostname !== allowedHost2) {
        return res
          .status(422)
          .json({
            success: false,
            message: `URL does not belong to host: ${u}`,
          });
      }
      sanitizedUrls.push(parsed.toString());
    }

    // Build payload for IndexNow
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: sanitizedUrls,
    };

    // Send to IndexNow
    const indexNowResp = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const text = await indexNowResp.text();

    // Map IndexNow status codes to meaningful responses
    if (indexNowResp.ok) {
      return res
        .status(200)
        .json({ success: true, status: indexNowResp.status, body: text });
    } else {
      return res
        .status(502)
        .json({ success: false, status: indexNowResp.status, body: text });
    }
  } catch (error) {
    console.error("IndexNow handler error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
