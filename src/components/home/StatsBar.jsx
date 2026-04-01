import React from "react";

const STATS = [
  { value: "10K+", label: "Users" },
  { value: "5M+", label: "Renders" },
  { value: "1M+", label: "Animations" },
  { value: "600+", label: "Companies" },
  { value: "10+", label: "Countries" },
];

const StatsBar = () => {
  return (
    <>
      <style>{`
        .stats-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(3, 6, 18);
          font-family: "Inter", sans-serif;
          padding: 32px 0;
          box-sizing: border-box;
        }
        .stats-bar__inner {
          box-sizing: border-box;
          width: 100%;
          max-width: 762px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @media (min-width: 640px) {
          .stats-bar__inner { padding: 0 32px; }
        }
        @media (min-width: 768px) {
          .stats-bar {
            min-height: 300px;
            padding: 0;
          }
          .stats-bar__inner { padding: 0 60px; }
        }

        .stats-bar__value {
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.02em;
          font-size: 22px;
        }
        .stats-bar__label {
          margin-top: 6px;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
          color: #98a2b3;
          text-align: center;
          max-width: 100%;
          word-break: break-word;
          padding: 0 4px;
        }

        /* Mobile: 3 + 2 — map wrapper: top/bottom border */
        .stats-bar__mob {
          display: block;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          box-sizing: border-box;
        }
        .stats-bar__row3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
        .stats-bar__row3-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 88px;
          padding: 20px 8px;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }
        .stats-bar__row3-cell:last-child {
          border-right: none;
        }
        .stats-bar__row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: min(100%, 280px);
          margin: 0 auto;
          padding: 20px 0;
          box-sizing: border-box;
        }
        .stats-bar__row2-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 88px;
          padding: 4px 16px;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }
        .stats-bar__row2-cell:last-child {
          border-right: none;
        }

        /* Desktop: one row — map wrapper: top/bottom border */
        .stats-bar__desk {
          display: none;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          overflow-x: auto;
          padding: 12px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          box-sizing: border-box;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .stats-bar__desk::-webkit-scrollbar {
          display: none;
        }
        .stats-bar__desk-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-shrink: 0;
        }
        .stats-bar__desk-v {
          width: 1px;
          height: 40px;
          flex-shrink: 0;
          align-self: center;
          background: rgba(255, 255, 255, 0.15);
          margin-right: 24px;
        }
        .stats-bar__desk-cell {
          width: 90px;
          min-width: 70px;
          max-width: 90px;
          height: 65px;
          flex: 0 0 90px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .stats-bar__desk .stats-bar__value {
          font-size: 24px;
        }

        @media (min-width: 768px) {
          .stats-bar__mob {
            display: none;
          }
          .stats-bar__desk {
            display: flex;
            overflow: visible;
            padding: 16px 0;
          }
        }
      `}</style>

      <section className="stats-bar">
        <div className="stats-bar__inner">
          <div className="stats-bar__mob">
            <div className="stats-bar__row3">
              {STATS.slice(0, 3).map((stat) => (
                <div key={stat.label} className="stats-bar__row3-cell">
                  <span className="stats-bar__value">{stat.value}</span>
                  <span className="stats-bar__label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="stats-bar__row2">
              {STATS.slice(3, 5).map((stat) => (
                <div key={stat.label} className="stats-bar__row2-cell">
                  <span className="stats-bar__value">{stat.value}</span>
                  <span className="stats-bar__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-bar__desk">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="stats-bar__desk-item">
                {i > 0 && <div className="stats-bar__desk-v" aria-hidden />}
                <div className="stats-bar__desk-cell">
                  <span className="stats-bar__value">{stat.value}</span>
                  <span className="stats-bar__label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsBar;
