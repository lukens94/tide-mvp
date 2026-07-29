import type { ReactElement } from 'react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';
import { ThemeToggle } from '@/components/dsm/theme-toggle';

interface SwatchProps {
  name: string;
  token: string;
  hex: string;
  className?: string;
}

function Swatch({ name, token, hex, className }: SwatchProps): ReactElement {
  return (
    <div className="overflow-hidden rounded-tide-xl border border-tide-border">
      <div className={`h-16 ${className ?? ''}`} style={className ? undefined : { background: hex }} />
      <div className="bg-tide-panel-2 p-tide-3">
        <p className="font-heavy text-tide-xs text-ink">{name}</p>
        <p className="font-mono text-mono-2xs uppercase text-ink-muted">{token}</p>
        <p className="font-mono text-mono-2xs text-ink-muted">{hex}</p>
      </div>
    </div>
  );
}

export default function DsmColorsPage(): ReactElement {
  return (
    <DsmShell
      title="Colors"
      description="Palette brand, superfici dark, inchiostri cream, status e data-viz. Tema light opt-in."
    >
      <div className="mb-gutter">
        <ThemeToggle />
      </div>

      <DsmSection title="Brand core">
        <div className="grid gap-tide-3 sm:grid-cols-3 lg:grid-cols-6">
          <Swatch name="Black" token="--black" hex="#323232" className="bg-tide-black" />
          <Swatch name="Cream" token="--cream" hex="#FAF7EB" className="bg-tide-cream" />
          <Swatch name="Sand" token="--sand" hex="#CDC3BA" className="bg-tide-sand" />
          <Swatch name="Blue" token="--blue" hex="#0057FF" className="bg-tide-blue" />
          <Swatch name="Blue 2" token="--blue-2" hex="#1A66FF" className="bg-tide-blue-2" />
          <Swatch name="Yellow" token="--yellow" hex="#FFD400" className="bg-tide-yellow" />
        </div>
      </DsmSection>

      <DsmSection title="Dark surfaces" description="Shell default del workspace.">
        <div className="grid gap-tide-3 sm:grid-cols-3 lg:grid-cols-6">
          <Swatch name="App bg" token="--app-bg" hex="#1F1F1D" className="bg-tide-app-bg" />
          <Swatch name="Panel" token="--panel" hex="#2A2A28" className="bg-tide-panel" />
          <Swatch name="Panel 2" token="--panel-2" hex="#363633" className="bg-tide-panel-2" />
          <Swatch name="Border" token="--border" hex="#45443F" className="bg-tide-border" />
          <Swatch name="Line" token="--line" hex="#3A3A36" className="bg-tide-line" />
          <Swatch name="Muted" token="--muted" hex="#9B9890" className="bg-tide-muted" />
        </div>
      </DsmSection>

      <DsmSection title="Status" description="Feedback e danger.">
        <div className="grid gap-tide-3 sm:grid-cols-2 lg:grid-cols-4">
          <Swatch name="Danger" token="--danger" hex="#FF6B6B" className="bg-tide-danger" />
          <Swatch name="Danger 2" token="--danger-2" hex="#FF5A5A" className="bg-tide-danger-2" />
        </div>
      </DsmSection>

      <DsmSection title="Data-viz" description="Serie colori per chart e chip progetto.">
        <div className="grid gap-tide-3 sm:grid-cols-4 lg:grid-cols-7">
          {(
            [
              ['1', '#0057FF'],
              ['2', '#FFD400'],
              ['3', '#CDC3BA'],
              ['4', '#323232'],
              ['5', '#1A66FF'],
              ['6', '#00A98F'],
              ['7', '#FF6B35'],
            ] as const
          ).map(([n, hex]) => (
            <div key={n} className="overflow-hidden rounded-tide-xl border border-tide-border">
              <div className="h-16" style={{ background: hex }} />
              <div className="bg-tide-panel-2 p-tide-3">
                <p className="font-heavy text-tide-xs text-ink">Viz {n}</p>
                <p className="font-mono text-mono-2xs uppercase text-tide-muted">--viz-{n}</p>
                <p className="font-mono text-mono-2xs text-tide-muted">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </DsmSection>

      <DsmSection title="Motivo layout">
        <div className="rounded-tide-4xl bg-tide-app-bg p-tide-6">
          <div className="rounded-tide-3xl bg-tide-panel p-tide-5">
            <p className="mb-tide-3 font-mono text-mono-xs uppercase text-tide-muted">
              Dark shell → cream card
            </p>
            <div className="rounded-tide-6xl bg-surface-card p-tide-7 text-tide-black">
              <p className="font-heavy text-tide-xl">Card cream</p>
              <p className="mt-2 text-tide-sm text-tide-cream-mut">
                Contenuto sul paper brand. Shell dark intorno.
              </p>
            </div>
          </div>
        </div>
      </DsmSection>
    </DsmShell>
  );
}
