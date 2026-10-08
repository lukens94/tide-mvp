'use client';

import * as React from 'react';
import { LayoutDashboard, Clock } from 'lucide-react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';
import { AppShell } from '@/components/templates/app-shell';
import { NavItem } from '@/components/molecules';
import { Card, Hero } from '@/components/organisms';
import { Avatar } from '@/components/atoms';

export default function DsmTemplatesPage(): React.ReactElement {
  const [nav, setNav] = React.useState('dash');

  return (
    <DsmShell
      title="Templates"
      description="AppShell è lo shell condiviso: stessa sidebar (logo, collapse 210→72, NavItem) per dashboard e DSM."
    >
      <DsmSection
        title="AppShell"
        description="Layout base: brand header + nav + footer opzionale + main. Usato da / e da DsmShell."
      >
        <div className="overflow-hidden rounded-tide-4xl border border-tide-border">
          <div className="h-[420px] overflow-hidden">
            <AppShell
              className="!min-h-0 h-full"
              footer={
                <div className="flex items-center gap-tide-3">
                  <Avatar initials="TW" size={32} />
                  <span className="font-mono text-mono-2xs uppercase text-tide-muted">Footer</span>
                </div>
              }
              sidebar={
                <>
                  <NavItem
                    icon={<LayoutDashboard className="size-4" />}
                    active={nav === 'dash'}
                    onClick={() => setNav('dash')}
                  >
                    Dashboard
                  </NavItem>
                  <NavItem
                    icon={<Clock className="size-4" />}
                    active={nav === 'track'}
                    onClick={() => setNav('track')}
                  >
                    Tracking
                  </NavItem>
                </>
              }
            >
              <div className="grid gap-gutter lg:grid-cols-2">
                <Hero done={12} total={20} name="Preview sprint" />
                <Card>
                  <h3 className="font-heavy text-tide-lg">Main content</h3>
                  <p className="mt-2 text-tide-sm text-tide-cream-mut">
                    Stesso chrome sidebar della dashboard e del DSM.
                  </p>
                </Card>
              </div>
            </AppShell>
          </div>
        </div>
      </DsmSection>

      <DsmSection
        title="DsmShell"
        description="Specializzazione di AppShell: stesse NavItem + header pagina + footer «Torna a Tide»."
      >
        <p className="text-tide-sm text-tide-muted">
          Questa pagina è già dentro DsmShell — logo The Wave, collapse, voci Foundations → Templates.
        </p>
      </DsmSection>
    </DsmShell>
  );
}
