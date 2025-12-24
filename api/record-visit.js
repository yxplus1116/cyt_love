export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const now = new Date();
    const ip =
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
      req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"] || "";

    // 生成用户指纹（用于识别同一用户）
    const crypto = require("crypto");
    const fingerprint = crypto
      .createHash("md5")
      .update(ip + userAgent)
      .digest("hex")
      .substring(0, 8);

    // 提取设备信息
    const isBot = /bot|crawler|spider|scraper/i.test(userAgent);
    const isMobile = /mobile|android|iphone|ipad|windows phone/i.test(
      userAgent
    );
    const deviceType = isBot ? "🤖 Bot" : isMobile ? "📱 Mobile" : "💻 Desktop";

    // 提取浏览器信息
    let browser = "Unknown";
    if (/chrome/i.test(userAgent) && !/edg/i.test(userAgent))
      browser = "Chrome";
    else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent))
      browser = "Safari";
    else if (/firefox/i.test(userAgent)) browser = "Firefox";
    else if (/edg/i.test(userAgent)) browser = "Edge";

    const visitData = {
      // 时间信息
      timestamp: now.toISOString(),
      timestampReadable: now.toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
      }),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

      // 访问者信息
      ip: ip,
      userAgent: userAgent,
      acceptLanguage: req.headers["accept-language"] || "",
      fingerprint: fingerprint,
      deviceType: deviceType,
      browser: browser,

      // 页面信息
      referer: req.headers["referer"] || "direct",
      url: req.query.url || "/",
      host: req.headers["host"],

      // 技术信息
      method: req.method,
      protocol: req.headers["x-forwarded-proto"] || "http",
    };

    // 格式化输出到控制台
    console.log("\n🚀 ========== 新的访问记录 ==========");
    console.log("👤 用户标识:", `[${visitData.fingerprint}]`);
    console.log("📅 时间:", visitData.timestampReadable);
    console.log("🌐 IP地址:", visitData.ip);
    console.log(`${visitData.deviceType} 浏览器:`, visitData.browser);
    console.log("🖥️ User Agent:", visitData.userAgent.substring(0, 80) + "...");
    console.log("📍 来源:", visitData.referer);
    console.log("🔗 访问URL:", visitData.url);
    console.log("💻 主机:", visitData.host);
    console.log("🗺️ 时区:", visitData.timezone);
    console.log("🚀 =================================\n");

    res.status(200).json({
      success: true,
      recordedAt: visitData.timestampReadable,
      visitId: now.getTime(), // 唯一标识
    });
  } catch (error) {
    console.error("❌ 记录访问时出错:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
