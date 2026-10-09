import type { CSSProperties, ReactNode } from "react";

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="scr">{children}</div>
    </div>
  );
}

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="ph-field">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function Row({ label, value, status }: { label: string; value: string; status?: "ok" | "wait" }) {
  return (
    <div className="ph-row">
      <span>{label}</span>
      {status ? <span className={status}>{value}</span> : <b>{value}</b>}
    </div>
  );
}

export function Bar({ pct }: { pct: number }) {
  return (
    <div className="ph-bar">
      <i style={{ "--w": `${pct}%` } as CSSProperties} />
    </div>
  );
}
