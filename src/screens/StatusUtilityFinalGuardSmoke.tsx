// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Final Guard Smoke
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CheckCircle2, Clock, RefreshCw } from "lucide-react";


export type StatusUtilityFinalGuardSmokeActionId = "button-1-1" | "refresh-status-2";

export interface StatusUtilityFinalGuardSmokeProps {
  actions?: Partial<Record<StatusUtilityFinalGuardSmokeActionId, () => void>>;

}

export function StatusUtilityFinalGuardSmoke({ actions }: StatusUtilityFinalGuardSmokeProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface fixed top-0 w-full border-b border-outline-variant flat no shadows flex justify-between items-center px-container-padding h-12 z-50">
      <div className="font-headline-md text-headline-md font-bold text-primary">Final Guard Smoke Status</div>
      <div className="font-mono-label text-mono-label text-on-surface-variant flex items-center gap-2">
      <Clock  style={{fontVariationSettings: "'FILL' 0", fontSize: "16px"}} aria-hidden={true} focusable="false" />
                  Last Updated: 12:45 PM
              </div>
      </header>
      {/* Main Container */}
      <main className="w-full max-w-[800px] mt-16 flex flex-col gap-gutter">
      {/* Status Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-component-gap flex flex-col justify-between h-24">
      <div className="font-mono-label text-mono-label text-secondary uppercase border-b border-surface-container-low pb-1 mb-1">System Health</div>
      <div className="flex items-center gap-2 mt-auto">
      <span className="w-2 h-2 rounded-full bg-success"></span>
      <span className="font-headline-md text-headline-md text-on-surface">Operational</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-component-gap flex flex-col justify-between h-24">
      <div className="font-mono-label text-mono-label text-secondary uppercase border-b border-surface-container-low pb-1 mb-1">Network Latency</div>
      <div className="flex items-center gap-2 mt-auto">
      <span className="w-2 h-2 rounded-full bg-warning"></span>
      <span className="font-mono-data text-mono-data text-on-surface">84ms - Elevated</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-component-gap flex flex-col justify-between h-24">
      <div className="font-mono-label text-mono-label text-secondary uppercase border-b border-surface-container-low pb-1 mb-1">Data Integrity</div>
      <div className="flex items-center gap-2 mt-auto">
      <span className="w-2 h-2 rounded-full bg-success"></span>
      <span className="font-headline-md text-headline-md text-on-surface">Verified</span>
      </div>
      </div>
      </section>
      {/* Controls */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-component-gap flex justify-between items-center">
      <div className="flex items-center gap-tight-gap">
      <span className="font-mono-label text-mono-label text-on-surface">System Mode: Ready</span>
      <button className="w-8 h-4 bg-primary-fixed rounded-full relative flex items-center transition-colors" type="button" aria-label="Button 1" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <span className="w-3 h-3 bg-primary rounded-full absolute right-[2px]"></span>
      </button>
      </div>
      <button className="bg-primary text-on-primary font-mono-label text-mono-label px-3 py-2 rounded flex items-center gap-1 hover:opacity-90 transition-opacity" type="button" data-action-id="refresh-status-2" onClick={actions?.["refresh-status-2"]}>
      <RefreshCw  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                      Refresh Status
                  </button>
      </section>
      {/* Activity Log */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
      <div className="bg-surface-container-low p-component-gap border-b border-outline-variant">
      <h3 className="font-mono-label text-mono-label text-on-surface">Recent Activity</h3>
      </div>
      <ul className="flex flex-col font-mono-data text-mono-data text-on-surface-variant divide-y divide-surface-container-low">
      <li className="p-component-gap flex gap-2">
      <span className="text-secondary w-16">12:44 PM</span>
      <span>Status check completed successfully.</span>
      </li>
      <li className="p-component-gap flex gap-2">
      <span className="text-secondary w-16">12:40 PM</span>
      <span>System mode changed to Ready.</span>
      </li>
      <li className="p-component-gap flex gap-2">
      <span className="text-secondary w-16">12:35 PM</span>
      <span className="text-warning">Connection spike detected (84ms).</span>
      </li>
      </ul>
      </section>
      {/* Feedback Area */}
      <section className="bg-surface-container flex items-center gap-2 p-component-gap rounded border border-surface-variant">
      <CheckCircle2  style={{fontSize: "16px"}} className="text-success" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">All systems stable. No recovery actions required.</span>
      </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface fixed bottom-0 w-full border-t border-outline-variant flat no shadows flex justify-center items-center py-2 px-container-padding z-40 opacity-80">
      <span className="font-mono-label text-mono-label text-secondary">© 2024 Final Guard Systems. Internal Utility Use Only.</span>
      </footer>
    </>
  );
}
