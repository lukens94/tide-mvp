import {
  LayoutDashboard,
  BarChart3,
  Folder,
  Calendar,
  Rocket,
  Star,
  Trophy,
  Check,
  Flame,
  Dices,
  Plus,
  Pencil,
} from 'lucide-react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';

const ICONS = [
  { name: 'LayoutDashboard', Icon: LayoutDashboard },
  { name: 'BarChart3', Icon: BarChart3 },
  { name: 'Folder', Icon: Folder },
  { name: 'Calendar', Icon: Calendar },
  { name: 'Rocket', Icon: Rocket },
  { name: 'Star', Icon: Star },
  { name: 'Trophy', Icon: Trophy },
  { name: 'Check', Icon: Check },
  { name: 'Flame', Icon: Flame },
  { name: 'Dices', Icon: Dices },
  { name: 'Plus', Icon: Plus },
  { name: 'Pencil', Icon: Pencil },
];

export default function DsmFoundationsPage(): React.ReactElement {
  return (
    <DsmShell
      title="Foundations"
      description="Voce, casing, icone Lucide. Niente emoji in UI — solo stroke Lucide/SVG."
    >
      <DsmSection title="Voce" description="Italiano, tono incoraggiante e diretto.">
        <ul className="space-y-tide-3 text-tide-sm text-ink">
          <li>
            <span className="font-mono text-mono-xs uppercase text-ink-muted">Titoli · </span>
            Sentence case, Univers heavy — es. “Ciao Luca”, “Workspace progetti”
          </li>
          <li>
            <span className="font-mono text-mono-xs uppercase text-ink-muted">Label · </span>
            <span className="font-mono text-mono-md uppercase text-tide-blue">
              Space Mono · Uppercase
            </span>
          </li>
          <li>
            <span className="font-mono text-mono-xs uppercase text-ink-muted">Errori · </span>
            Chiari e onesti — “Non salvato”, “Inserisci email e password.”
          </li>
        </ul>
      </DsmSection>

      <DsmSection title="Atomic Design" description="Gerarchia obbligatoria della UI library Tide.">
        <div className="grid gap-tide-3 sm:grid-cols-5">
          {['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'].map((level, i) => (
            <div
              key={level}
              className="rounded-tide-xl border border-tide-border bg-tide-panel-2 p-tide-4 text-center"
            >
              <p className="font-mono text-mono-2xs uppercase text-ink-muted">L{i}</p>
              <p className="mt-1 font-heavy text-tide-sm text-ink">{level}</p>
            </div>
          ))}
        </div>
      </DsmSection>

      <DsmSection title="Icone Lucide" description="Stroke ~2, size tipico 13–18px. Pacchetto lucide-react.">
        <div className="grid grid-cols-3 gap-tide-3 sm:grid-cols-4 md:grid-cols-6">
          {ICONS.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-tide-2 rounded-tide-xl border border-tide-border bg-tide-panel-2 p-tide-4"
            >
              <Icon className="size-5 text-ink" strokeWidth={2.2} />
              <span className="font-mono text-mono-2xs uppercase text-ink-muted">{name}</span>
            </div>
          ))}
        </div>
      </DsmSection>
    </DsmShell>
  );
}
