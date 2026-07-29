'use client';

import * as React from 'react';
import { DsmShell } from '@/components/templates/dsm-shell';
import { DsmSection } from '@/components/dsm/dsm-section';
import { Button } from '@/components/atoms';
import { Card, Hero, Modal, ConfirmDialog, SprintProjectRow } from '@/components/organisms';

export default function DsmOrganismsPage(): React.ReactElement {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  return (
    <DsmShell title="Organisms" description="Blocchi UI ricchi / dominio.">
      <DsmSection title="Hero" description="Blocco dati sprint · default display o compact dashboard.">
        <div className="grid max-w-3xl gap-tide-4 lg:grid-cols-2">
          <Hero name="Sprint 07" range="14–25 Lug 2026" done={18.5} total={28} />
          <Hero compact name="Sprint 07" range="14–25 Lug 2026" done={18.5} total={28} />
        </div>
      </DsmSection>

      <DsmSection title="Card" description="Surface paper cream · default o dense (dashboard).">
        <div className="grid max-w-3xl gap-tide-4 sm:grid-cols-2">
          <Card>
            <h3 className="font-heavy text-tide-xl">Card cream</h3>
            <p className="mt-2 text-tide-sm text-tide-cream-mut">
              Radius 22px — panel hero / contenuto ampio.
            </p>
          </Card>
          <Card dense>
            <h3 className="font-heavy text-tide-lg">Card dense</h3>
            <p className="mt-2 text-tide-sm text-tide-cream-mut">
              Radius più stretto e pad ridotto per griglie stats.
            </p>
          </Card>
        </div>
      </DsmSection>

      <DsmSection title="SprintProjectRow" description="Riga progetto in sprint: codice, SP, progress.">
        <div className="grid max-w-2xl gap-tide-3">
          <SprintProjectRow code="RCA" name="Acme redesign" color="#0057FF" assigned={12} worked={8} />
          <SprintProjectRow code="SUN" name="Sun tracker" color="#FFD400" assigned={6} worked={6} />
          <SprintProjectRow code="WAV" name="Tide MVP" color="#00A98F" assigned={10} worked={3.5} />
        </div>
      </DsmSection>

      <DsmSection title="Modal" description="Dialog centrato, header blu, overlay blurred.">
        <Button onClick={() => setModalOpen(true)}>Apri modal</Button>
      </DsmSection>

      <DsmSection title="ConfirmDialog" description="Conferma compatta, variante danger.">
        <Button variant="ghost" onClick={() => setConfirmOpen(true)}>
          Apri confirm
        </Button>
      </DsmSection>

      {modalOpen ? (
        <Modal
          title="Nuovo sprint"
          onClose={() => setModalOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Annulla
              </Button>
              <Button onClick={() => setModalOpen(false)}>Salva</Button>
            </>
          }
        >
          <p className="text-tide-sm text-tide-muted">
            Dialog con header blu, overlay blurred e footer azioni.
          </p>
        </Modal>
      ) : null}

      {confirmOpen ? (
        <ConfirmDialog
          message="Eliminare questo sprint? L’azione non si può annullare."
          onCancel={() => setConfirmOpen(false)}
          onOk={() => setConfirmOpen(false)}
        />
      ) : null}
    </DsmShell>
  );
}
