'use client';

import * as React from 'react';
import { Plus, Pencil } from 'lucide-react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';
import {
  Button,
  IconButton,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Chip,
  Spinner,
  Avatar,
  ProgressBar,
  WeekButton,
  Toast,
} from '@/components/atoms';

export default function DsmAtomsPage(): React.ReactElement {
  const [checked, setChecked] = React.useState(true);
  const [on, setOn] = React.useState(true);
  const [week, setWeek] = React.useState('w1');

  return (
    <DsmShell title="Atoms" description="Controlli singoli — nessun dominio Tide.">
      <DsmSection title="Button" description="Primary, outline, ghost · size md / sm (densità dashboard).">
        <div className="flex flex-wrap items-center gap-tide-4">
          <Button icon={<Plus className="size-3.5" />}>Crea sprint</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Annulla</Button>
          <Button disabled>Disabilitato</Button>
        </div>
        <div className="mt-tide-4 flex flex-wrap items-center gap-tide-3">
          <Button size="sm" icon={<Plus className="size-3" />}>
            Scrivi daily
          </Button>
          <Button size="sm" variant="outline">
            Richiedi ferie
          </Button>
          <Button size="sm" variant="ghost">
            Esci
          </Button>
        </div>
      </DsmSection>

      <DsmSection title="IconButton" description="Azione icon-only, stato active.">
        <div className="flex flex-wrap items-center gap-tide-4">
          <IconButton title="Modifica">
            <Pencil className="size-4" />
          </IconButton>
          <IconButton active title="Attivo">
            <Pencil className="size-4" />
          </IconButton>
        </div>
      </DsmSection>

      <DsmSection title="Input" description="Campo testo con label.">
        <div className="max-w-xl">
          <Input label="Email" placeholder="tu@thewave.it" />
        </div>
      </DsmSection>

      <DsmSection title="Textarea" description="Area testo multilinea.">
        <div className="max-w-xl">
          <Textarea label="Note" placeholder="Scrivi qualcosa…" />
        </div>
      </DsmSection>

      <DsmSection title="Select" description="Select nativo stilizzato.">
        <div className="max-w-xl">
          <Select options={['Sprint 01', 'Sprint 02', 'Sprint 03']} defaultValue="Sprint 01" />
        </div>
      </DsmSection>

      <DsmSection title="Checkbox" description="Selezione booleana con label.">
        <Checkbox
          label="Completa il task"
          checked={checked}
          onChange={setChecked}
          onCream={false}
        />
      </DsmSection>

      <DsmSection title="Switch" description="Toggle on/off.">
        <Switch checked={on} onChange={setOn} label="Notifiche" />
      </DsmSection>

      <DsmSection title="Chip" description="Tag progetto con colore dinamico.">
        <div className="flex flex-wrap items-center gap-tide-3">
          <Chip>RCA</Chip>
          <Chip color="#FFD400">SUN</Chip>
          <Chip color="#00A98F">WAV</Chip>
        </div>
      </DsmSection>

      <DsmSection title="Avatar" description="Immagine o iniziali, ring opzionale.">
        <div className="flex flex-wrap items-center gap-tide-4">
          <Avatar initials="TW" ring />
          <Avatar initials="LV" />
          <Avatar initials="AB" size={40} />
        </div>
      </DsmSection>

      <DsmSection title="Spinner" description="Loading con arco blu.">
        <div className="flex flex-wrap items-center gap-tide-5">
          <Spinner size={20} />
          <Spinner size={28} />
          <Spinner size={36} />
        </div>
      </DsmSection>

      <DsmSection title="ProgressBar" description="Barra progresso 0–100.">
        <div className="grid max-w-md gap-tide-4">
          <ProgressBar value={33} />
          <ProgressBar value={67} />
          <ProgressBar value={100} />
        </div>
      </DsmSection>

      <DsmSection title="WeekButton" description="Selettore settimana su superficie cream/dark.">
        <div className="flex flex-wrap gap-tide-3">
          <WeekButton active={week === 'w1'} onClick={() => setWeek('w1')}>
            Sett 1
          </WeekButton>
          <WeekButton active={week === 'w2'} onClick={() => setWeek('w2')}>
            Sett 2
          </WeekButton>
          <WeekButton active={week === 'w3'} onClick={() => setWeek('w3')}>
            Sett 3
          </WeekButton>
        </div>
      </DsmSection>

      <DsmSection title="Toast" description="Feedback transient: neutral, success, error.">
        <div className="flex flex-wrap gap-tide-3">
          <Toast>Salvato</Toast>
          <Toast type="success">Livello raggiunto</Toast>
          <Toast type="error">Non salvato</Toast>
        </div>
      </DsmSection>
    </DsmShell>
  );
}
