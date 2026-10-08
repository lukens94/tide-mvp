import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';

export default function DsmTypographyPage(): React.ReactElement {
  return (
    <DsmShell
      title="Typography"
      description="Univers LT Pro (display/UI) + IBM Plex Mono (voce system, UPPERCASE)."
    >
      <DsmSection title="Display scale — Univers">
        <div className="space-y-tide-5 text-ink">
          <p className="font-heavy text-tide-hero leading-none">92 Hero</p>
          <p className="font-heavy text-tide-4xl">48 Headline</p>
          <p className="font-heavy text-tide-3xl">32 Title</p>
          <p className="font-heavy text-tide-2xl">24 Pane</p>
          <p className="text-tide-md">16 Body — The Wave workspace.</p>
          <p className="text-tide-xs text-tide-muted">13 Caption</p>
        </div>
      </DsmSection>

      <DsmSection title="Mono scale — IBM Plex Mono">
        <div className="space-y-tide-4">
          <p className="font-mono text-mono-md font-bold uppercase text-ink">
            Mono md · Buttons / tabs
          </p>
          <p className="font-mono text-mono-sm uppercase text-tide-muted">
            Mono sm · Section labels
          </p>
          <p className="font-mono text-mono-xs uppercase text-tide-muted">
            Mono xs · Hints / captions
          </p>
          <p className="font-mono text-mono-2xs uppercase text-tide-muted">
            Mono 2xs · Dense meta
          </p>
        </div>
      </DsmSection>
    </DsmShell>
  );
}
