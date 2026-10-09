import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Chapaa · Haba na haba hujaza kibaba. Little by little fills the measure.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const W = size.width;
const H = size.height;

// Same diamond-and-dot kanga motif as the hero canvas, frozen as an SVG
function kangaPattern() {
  const s = 46;
  let shapes = "";
  for (let row = 0, y = -s; y < H + s; y += s, row++) {
    const shift = row % 2 ? 14 : -14;
    for (let x = -s + shift; x < W + s; x += s) {
      const cx = x + (row % 2 ? s / 2 : 0);
      const d = s * 0.3;
      const strong = row % 3 === 0;
      shapes += `<path d="M${cx} ${y - d}L${cx + d} ${y}L${cx} ${y + d}L${cx - d} ${y}Z" fill="none" stroke="rgba(107,214,191,${strong ? 0.45 : 0.22})" stroke-width="1.2"/>`;
      shapes += `<circle cx="${cx}" cy="${y}" r="2.2" fill="${strong ? "#6BD6BF" : "rgba(255,255,255,.35)"}"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1C2A64"/><stop offset="1" stop-color="#13203F"/></linearGradient>
      <radialGradient id="v" cx="0.3" cy="0.45" r="0.75"><stop offset="0" stop-color="#182048" stop-opacity=".72"/><stop offset="0.5" stop-color="#182048" stop-opacity=".35"/><stop offset="1" stop-color="#182048" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>${shapes}<rect width="${W}" height="${H}" fill="url(#v)"/>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default async function Image() {
  const root = process.cwd();
  const [display, bodySemi, bodyBold, logo] = await Promise.all([
    readFile(join(root, "assets/fonts/BricolageGrotesque-ExtraBold.ttf")),
    readFile(join(root, "assets/fonts/Manrope-SemiBold.ttf")),
    readFile(join(root, "assets/fonts/Manrope-ExtraBold.ttf")),
    readFile(join(root, "public/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", position: "relative", fontFamily: "Manrope", color: "#fff" }}>
        <img src={kangaPattern()} width={W} height={H} style={{ position: "absolute", top: 0, left: 0 }} />

        {/* Kanga double border */}
        <div style={{ position: "absolute", top: 24, left: 24, right: 24, bottom: 24, border: "2px solid rgba(255,255,255,.35)", borderRadius: 28, display: "flex" }} />
        <div style={{ position: "absolute", top: 34, left: 34, right: 34, bottom: 34, border: "1px dashed rgba(255,255,255,.35)", borderRadius: 22, display: "flex" }} />

        <div style={{ position: "absolute", top: 72, left: 80, right: 80, bottom: 64, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", color: "#6BD6BF", marginBottom: 22 }}>
              Jina la kanga
            </div>
            <div style={{ fontFamily: "Bricolage", fontSize: 92, lineHeight: 1, letterSpacing: -2.5, maxWidth: 760 }}>
              Haba na haba hujaza kibaba.
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: "rgba(255,255,255,.82)", marginTop: 26 }}>
              Little by little fills the measure.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignSelf: "flex-start", background: "#fff", borderRadius: 18, padding: "14px 22px" }}>
                <img src={logoSrc} width={196} height={55} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, color: "#B9C2DE", marginTop: 16 }}>
                Save alone or with your chama · chapaa.co.tz
              </div>
            </div>

            {/* Savings ticket */}
            <div style={{ display: "flex", flexDirection: "column", width: 340, background: "#fff", color: "#182048", borderRadius: 22, padding: "22px 24px", boxShadow: "0 24px 48px rgba(0,0,0,.4)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, fontWeight: 600, color: "#55607E" }}>
                <span>Mama&apos;s shop stock</span>
                <span>Week 7</span>
              </div>
              <div style={{ fontFamily: "Bricolage", fontSize: 40, letterSpacing: -1, marginTop: 8 }}>TSh 420,000</div>
              <div style={{ display: "flex", height: 12, borderRadius: 99, background: "#E7F5F3", marginTop: 12, overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", borderRadius: 99, backgroundImage: "linear-gradient(90deg,#6BD6BF,#2A96A3)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, fontWeight: 600, color: "#55607E", marginTop: 10 }}>
                <span>Target TSh 600,000</span>
                <span style={{ color: "#2A96A3", fontWeight: 800 }}>70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: display, weight: 800, style: "normal" },
        { name: "Manrope", data: bodySemi, weight: 600, style: "normal" },
        { name: "Manrope", data: bodyBold, weight: 800, style: "normal" },
      ],
    },
  );
}
