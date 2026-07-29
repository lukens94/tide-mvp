'use client';

import * as React from 'react';
import { LayoutDashboard, Rocket, Folder } from 'lucide-react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';
import { Input } from '@/components/atoms';
import { Card } from '@/components/organisms';
import {
  FormField,
  PasswordInput,
  SearchInput,
  NumberField,
  DateField,
  ChipSelect,
  ColorSwatchPicker,
  RadioGroup,
  NavItem,
  Tabs,
  SegmentedControl,
  Badge,
  LevelBadge,
  StreakPill,
  EmptyState,
  StatTile,
  GameStat,
} from '@/components/molecules';

export default function DsmMoleculesPage(): React.ReactElement {
  const [search, setSearch] = React.useState('');
  const [sp, setSp] = React.useState(2.5);
  const [chip, setChip] = React.useState('a');
  const [color, setColor] = React.useState('#0057FF');
  const [radio, setRadio] = React.useState('full');
  const [tab, setTab] = React.useState('sprint');
  const [seg, setSeg] = React.useState('week');

  return (
    <DsmShell title="Molecules" description="Composizioni di 2+ atoms, ancora generiche.">
      <DsmSection title="FormField" description="Label + hint/error intorno a un controllo.">
        <div className="max-w-xl">
          <FormField label="Nome" required hint="Come appari nel team">
            <Input placeholder="Luca" />
          </FormField>
        </div>
      </DsmSection>

      <DsmSection title="PasswordInput" description="Input password con show/hide.">
        <div className="max-w-xl">
          <PasswordInput label="Password" />
        </div>
      </DsmSection>

      <DsmSection title="SearchInput" description="Ricerca con icona e clear.">
        <div className="max-w-xl">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
          />
        </div>
      </DsmSection>

      <DsmSection title="NumberField" description="Stepper numerico (− / +).">
        <NumberField value={sp} onChange={setSp} min={0} max={20} />
      </DsmSection>

      <DsmSection title="DateField" description="Date input stilizzato.">
        <div className="max-w-xs">
          <DateField defaultValue="2026-07-28" />
        </div>
      </DsmSection>

      <DsmSection title="ChipSelect" description="Selezione singola da chip.">
        <ChipSelect
          options={[
            { value: 'a', label: 'Alpha' },
            { value: 'b', label: 'Beta' },
            { value: 'c', label: 'Gamma' },
          ]}
          value={chip}
          onChange={setChip}
        />
      </DsmSection>

      <DsmSection title="ColorSwatchPicker" description="Palette colore progetto.">
        <ColorSwatchPicker value={color} onChange={setColor} />
      </DsmSection>

      <DsmSection title="RadioGroup" description="Gruppo radio inline o stacked.">
        <RadioGroup
          options={[
            { value: 'full', label: 'Full remote' },
            { value: 'hybrid', label: 'Hybrid' },
          ]}
          value={radio}
          onChange={setRadio}
        />
      </DsmSection>

      <DsmSection title="NavItem" description="Voce sidebar con icona e active.">
        <div className="max-w-xs space-y-tide-1 rounded-tide-xl bg-tide-panel-2 p-tide-3">
          <NavItem icon={<LayoutDashboard className="size-4" />} active>
            Dashboard
          </NavItem>
          <NavItem icon={<Folder className="size-4" />}>Tracking</NavItem>
        </div>
      </DsmSection>

      <DsmSection title="Tabs" description="Tab bar orizzontale.">
        <Tabs
          tabs={[
            { value: 'sprint', label: 'Sprint' },
            { value: 'cal', label: 'Calendario' },
            { value: 'ws', label: 'Workspace' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </DsmSection>

      <DsmSection title="SegmentedControl" description="Toggle a segmenti.">
        <SegmentedControl
          options={[
            { value: 'week', label: 'Settimana' },
            { value: 'month', label: 'Mese' },
          ]}
          value={seg}
          onChange={setSeg}
        />
      </DsmSection>

      <DsmSection title="Badge" description="Achievement gamification (locked / unlocked).">
        <div className="grid gap-tide-4 md:grid-cols-2">
          <Badge
            icon={<Rocket className="size-5 text-tide-blue" />}
            name="Primo progetto"
            desc="Crea il tuo primo progetto"
          />
          <Badge
            icon={<Rocket className="size-5" />}
            name="Centurione"
            desc="100 SP in uno sprint"
            locked
          />
        </div>
      </DsmSection>

      <DsmSection title="LevelBadge" description="Indicatore livello circolare.">
        <div className="flex items-center gap-tide-4 rounded-tide-2xl bg-tide-blue p-tide-5">
          <LevelBadge level={1} />
          <LevelBadge level={3} />
          <LevelBadge level={7} />
        </div>
      </DsmSection>

      <DsmSection title="StreakPill" description="Pill stato streak.">
        <div className="flex flex-wrap gap-tide-3 rounded-tide-2xl bg-tide-blue p-tide-5">
          <StreakPill>5 giorni di fila</StreakPill>
          <StreakPill>Nuovo record</StreakPill>
        </div>
      </DsmSection>

      <DsmSection title="GameStat" description="Stat numerica gamification.">
        <div className="max-w-xs">
          <GameStat num="128" label="XP totali" />
        </div>
      </DsmSection>

      <DsmSection title="StatTile" description="Tile statistica con tone.">
        <div className="grid gap-tide-3 sm:grid-cols-3">
          <StatTile num="12" label="Sprint" tone="sand" />
          <StatTile num="67%" label="Done" tone="dark" />
          <StatTile num="2.5" label="SP oggi" tone="yellow" />
        </div>
      </DsmSection>

      <DsmSection title="EmptyState" description="Placeholder con CTA opzionale.">
        <Card>
          <EmptyState
            icon={<Folder className="size-10" />}
            title="Nessun progetto"
            message="Crea il tuo primo progetto per iniziare a tracciare le ore."
            ctaLabel="Nuovo progetto"
          />
        </Card>
      </DsmSection>
    </DsmShell>
  );
}
