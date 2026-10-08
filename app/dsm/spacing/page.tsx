import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';

const SPACES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14] as const;
const RADII = [
  ['xs', '6px'],
  ['sm', '8px'],
  ['md', '9px'],
  ['lg', '11px'],
  ['xl', '12px'],
  ['2xl', '14px'],
  ['3xl', '16px'],
  ['4xl', '18px'],
  ['5xl', '20px'],
  ['6xl', '22px'],
  ['pill', '99px'],
] as const;

export default function DsmSpacingPage(): React.ReactElement {
  return (
    <DsmShell
      title="Spacing · Radii · Motion"
      description="Gutter signature 14px. Radii generosi. Motion springy."
    >
      <DsmSection title="Spacing scale">
        <div className="space-y-tide-3">
          {SPACES.map((n) => (
            <div key={n} className="flex items-center gap-tide-4">
              <span className="w-20 font-mono text-mono-xs uppercase text-tide-muted">
                tide-{n}
              </span>
              <div className="h-3 rounded-sm bg-tide-blue" style={{ width: `var(--space-${n})` }} />
            </div>
          ))}
        </div>
      </DsmSection>

      <DsmSection title="Corner radii">
        <div className="flex flex-wrap gap-tide-4">
          {RADII.map(([name, px]) => (
            <div key={name} className="flex flex-col items-center gap-tide-2">
              <div
                className="size-14 border-2 border-tide-blue bg-tide-panel-2"
                style={{ borderRadius: `var(--r-${name === 'pill' ? 'pill' : name})` }}
              />
              <span className="font-mono text-mono-2xs uppercase text-tide-muted">
                {name} · {px}
              </span>
            </div>
          ))}
        </div>
      </DsmSection>

      <DsmSection title="Motion · button" description="Lift / press (duration-fast).">
        <button
          type="button"
          className="rounded-tide-xl bg-tide-blue px-4 py-3 font-mono text-mono-md font-bold uppercase text-tide-cream transition duration-fast hover:-translate-y-px hover:shadow-btn active:translate-y-px active:scale-[0.97]"
        >
          Button lift / press
        </button>
      </DsmSection>

      <DsmSection title="Motion · tile" description="Hover tile (shadow-tile, duration-base).">
        <div className="max-w-xs rounded-tide-2xl bg-tide-sand p-tide-5 text-tide-black transition duration-base hover:-translate-y-px hover:shadow-tile">
          <p className="font-heavy">Tile hover</p>
          <p className="font-mono text-mono-xs uppercase opacity-70">shadow-tile</p>
        </div>
      </DsmSection>
    </DsmShell>
  );
}
