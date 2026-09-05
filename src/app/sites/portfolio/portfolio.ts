import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItem } from './portfolio.types';

@Component({
  selector: 'portfolio-component',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent implements OnInit {
  workItems = signal<WorkItem[]>([]);
  selectedItem = signal<WorkItem | null>(null);
  currentImageIndex = signal<number>(0);
  isModalOpen = signal<boolean>(false);

  ngOnInit(): void {
    this.initializeWorkItems();
  }

  private initializeWorkItems(): void {
    this.workItems.set([
      {
        id: 'blazer-zier',
        number: '001',
        title: 'Taillierter Blazer mit Ziersteppung',
        tag: 'Konfektion',
        year: '2026',
        images: [
          'assets/portfolio/BlazerZier/BlazerZier1.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier2.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier3.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier4.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier5.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier6.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier7.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier8.jpeg',
          'assets/portfolio/BlazerZier/BlazerZier9.jpeg',
        ],
        details: [
          'Reverskragen mit fallendem Fasson',
          'Längsteilungsnähte und versenkte Leistentasche im Vorderteil',
          'Kantenabstich abgerundet',
          'Verschluss mit 3 Schneiderknopflöchern und schwarzen Metallknöpfen',
          'Hinten Passe mit Ziersteppung und Perlen',
          '2-Naht-Ärmel mit unechtem Schlitz, abgesteppt',
          'ganz gefüttert, geflochtener Aufhänger',
        ],
        materials: [
          'Oberstoff: Cool Wool Melange, anthrazit, Wolle',
          'Futter: Faconne, schwarz, Viskose',
          'Knöpfe: Metall, schwarz, 4-loch',
        ],
      },
      {
        id: 'red-blazer',
        number: '002',
        title: 'Roter Blazer',
        tag: 'Konfektion',
        year: '2026',
        images: [
          'assets/portfolio/RedBlazer/BlazerRed6.jpeg',
          'assets/portfolio/RedBlazer/BlazerRed4.jpeg',
          'assets/portfolio/RedBlazer/BlazerRed1.jpeg',
          'assets/portfolio/RedBlazer/BlazerRed2.jpeg',
          'assets/portfolio/RedBlazer/BlazerRed3.jpeg',
          'assets/portfolio/RedBlazer/BlazerRed5.jpeg',
        ],
        details: [
          'V-Auschnitt',
          'Längsteilungsnähte in Vorder- und Rückteil',
          'Je eine Paspeltasche im Vorderteil',
          'Verschluss mit 2 Knopflöchern und Knöpfen',
          'Kantenabstich abgerundet',
          '2-Naht-Ärmel mit Schlitz, mit 2 Knopflöchern und Knöpfen geschlossen',
        ],
        materials: [
          'Oberstoff: Gewebe, Rot, Leinen-Baumwoll-Gemisch',
          'Futter: Futtertaft, Dunkelrot, Viskose',
          'Knöpfe: Metall, Gold',
        ],
      },
      {
        id: 'taillierter-blazer',
        number: '003',
        title: 'Taillierter Blazer',
        tag: 'Konfektion',
        year: '2026',
        images: [
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer9.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer3.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer2.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer1.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer4.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer5.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer6.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer7.jpeg',
          'assets/portfolio/TaillierterBlazer/TaillierterBlazer8.jpeg',
        ],
        details: [
          'Reverskragen mit steigendem Fasson',
          'Längsteilungsnähte und versenkte Leistentasche im Vorderteil',
          'Kantenabstich abgerundet',
          'Verschluss mit 3 Knopflöchern und schwarzen Metallknöpfen',
          '5 Längsteilungsnähte im Rückteil',
          '2-Naht-Ärmel mit Schlitz, mit 4 Knopflöchern und 4 Metallknöpfen geschlossen',
          'ganz gefüttert, geflochtener Aufhänger',
        ],
        materials: [
          'Oberstoff: Wollgewebe, rot-schwarz-weiß, Wolle',
          'Futter: Futterponge, Rot. Viskose',
          'Knöpfe: Metall, schwarz, 4-loch',
        ],
      },
      {
        id: 'guertel-blazer',
        number: '004',
        title: 'Blazer mit Gürtel',
        tag: 'Konfektion',
        year: '2026',
        images: [
          'assets/portfolio/GuertelBlazer/GuertelBlazer6.jpeg',
          'assets/portfolio/GuertelBlazer/GuertelBlazer1.jpeg',
          'assets/portfolio/GuertelBlazer/GuertelBlazer3.jpeg',
          'assets/portfolio/GuertelBlazer/GuertelBlazer2.jpeg',
          'assets/portfolio/GuertelBlazer/GuertelBlazer4.jpeg',
          'assets/portfolio/GuertelBlazer/GuertelBlazer5.jpeg',
        ],
        details: [
          'Reverskragen mit fallendem Fasson',
          'Längs- und Querteilungsnähte im Vorderteil',
          'Verschluss mit 2 Knopflöchern und 2 Knöpfen',
          'Kantenabstich abgerundet',
          'Längsteilungsnähte im Rückteil',
          'Ziersteppung im Vorder- und Rückteil und über die Schulter',
          '2-Naht-Ärmel mit unechtem Schlitz, abgesteppt',
          'Auf den Seitennähten Gürtelschlaufen',
          'Ganz gefüttert',
        ],
        materials: [
          'Oberstoff: Wollgewebe, blau mit weißen Punkten, Wolle',
          'Futter: Futterponge, schwarz-rot, Viscose-Polyester-Mischung',
          'Knöpfe: Holz, braun, 2-loch',
        ],
      },
      {
        id: 'hose-aufschlag',
        number: '005',
        title: 'Hose mit Aufschlag',
        tag: 'Konfektion',
        year: '2026',
        images: [
          'assets/portfolio/HoseAufschlag/HoseAufschlag1.jpeg',
          'assets/portfolio/HoseAufschlag/HoseAufschlag2.jpeg',
          'assets/portfolio/HoseAufschlag/HoseAufschlag3.jpeg',
          'assets/portfolio/HoseAufschlag/HoseAufschlag4.jpeg',
          'assets/portfolio/HoseAufschlag/HoseAufschlag5.jpeg',
        ],
        details: [
          'Eingriffstaschen im Vorderteil, einfach abgesteppt',
          'Reißverschluss und Druckknopf vorn',
          'Im Rückteil 4 Abnäher',
          'Seitennähte einfach abgesteppt',
          'Bügelfalte in Vorder- und Rückhose',
          'Breiter Aufschlag',
          'Angesetzter Bund mit 8 Gürtelschlaufen',
        ],
        materials: [
          'Oberstoff: Gewebe mit Karo in schwarz-weiß',
          'Zutaten: Druckknopf aus Metall, Kunststoff Reißverschluss',
        ],
      },
      {
        id: 'zweiteiler',
        number: '006',
        title: 'Zweiteiler',
        tag: 'Maßgeschneidert',
        year: '2023',
        images: [
          'assets/portfolio/Zweiteiler/Zweiteiler1.jpeg',
          'assets/portfolio/Zweiteiler/Zweiteiler2.jpeg',
          'assets/portfolio/Zweiteiler/Zweiteiler3.jpeg',
          'assets/portfolio/Zweiteiler/Zweiteiler4.jpeg',
          'assets/portfolio/Zweiteiler/Zweiteiler5.jpeg',
        ],
        details: [
          'Jacke: Ärmelloses, taillenlanges Jäckchen',
          'Jacke: Vordere Kante mit Spitzenband verziert',
          'Hose: Nachttaschen in der Seitennaht',
          'Hose: Gummibund',
          'Hose: Bügelfalte in Vorder- und Rückhose',
          'Hose: Breiter Aufschlag, festgesteppt',
        ],
        materials: [
          'Oberstoff: Baumwollgewebe, mit Totenköpfen und Blumen bedruckt, Baumwolle',
          'Zutaten: Spitzenband in schwarz',
        ],
      },
      {
        id: 'dinoHemdjacke',
        number: '007',
        title: 'Dinohemd-Jacke',
        tag: 'Maßgeschneidert',
        year: '2025',
        images: [
          'assets/portfolio/DinoHemdjacke/DinoHemdjacke3.jpeg',
          'assets/portfolio/DinoHemdjacke/DinoHemdjacke2.jpeg',
          'assets/portfolio/DinoHemdjacke/DinoHemdjacke1.jpeg',
          'assets/portfolio/DinoHemdjacke/DinoHemdjacke5.jpeg',
        ],
        details: [
          'Taillenlang',
          'Steh-Umlegekragen mit Steg',
          'Angeschnittener Beleg im Vorderteil, außen abgesteppt',
          'Verschluss vorn mit 4 Knopflöchern und Dino-Knöpfen',
          'Blusenärmel mit Rollierschlitz und je 2 Falten, Manschette mit einem Knopfloch und Dino-Knopf geschlossen',
        ],
        materials: [
          'Oberstoff 1: schwarzes Gewebe, Baumwolle',
          'Oberstoff 2: Blaues Gewebe mit aufgedruckten Dino-Skeletten, Baumwolle',
          'Zutaten: Kunststoff Knöpfe in Dino-Form, in Gelb, Rot, Blau, Lila und Magenta',
        ],
      },
      {
        id: 'oversizedHemdjacke',
        number: '008',
        title: 'Oversized Hemdjacke',
        tag: 'Konfektion',
        year: '2023',
        images: [
          'assets/portfolio/OversizedHemdjacke/OversizedHemdjacke1.jpeg',
          'assets/portfolio/OversizedHemdjacke/OversizedHemdjacke2.jpeg',
          'assets/portfolio/OversizedHemdjacke/OversizedHemdjacke3.jpeg',
          'assets/portfolio/OversizedHemdjacke/OversizedHemdjacke4.jpeg',
          'assets/portfolio/OversizedHemdjacke/OversizedHemdjacke5.jpeg',
        ],
        details: [
          'Steh-Umlegekragen mit Steg',
          'Verschlusslos',
          'Im Rückteil abgetrennte Passe, Quetschfalte',
          'Schulternähte, Ärmeleinsatzähte, Passe und Saum doppelt abgesteppt',
          'Manschetten und Kragen doppelt abgesteppt, mit Kontrastgarn',
          'Blusenärmel mit Rollierschlitz und 2 Falten, Manschette mit Sicherheitsnadel geschlossen',
        ],
        materials: [
          'Oberstoff 1: Baumwollgewebe, mit Totenköpfen und Blumen bedruckt, Baumwolle',
          'Oberstoff 2: feines Gewebe, schwarz, Baumwolle',
          'Zutaten: Sicherheitsnadeln',
        ],
      },
      {
        id: 'oversizedFliesjacke',
        number: '009',
        title: 'Oversized Fliesjacke',
        tag: 'Maßgeschneidert',
        year: '2025',
        images: [
          'assets/portfolio/OversizedFliesjacke/OversizedFliesjacke2.jpeg',
          'assets/portfolio/OversizedFliesjacke/OversizedFliesjacke1.jpeg',
          'assets/portfolio/OversizedFliesjacke/OversizedFliesjacke3.jpeg',
          'assets/portfolio/OversizedFliesjacke/OversizedFliesjacke4.jpeg',
          'assets/portfolio/OversizedFliesjacke/OversizedFliesjacke5.jpeg',
        ],
        details: [
          'Angesetzter Stehkragen',
          'Aufgesetzte Tasche im Vorderteil',
          'Reißverschluss vorne bis zum Kragen',
          'Einnahtärmel',
        ],
        materials: [
          'Oberstoff: Fließstoff, blau, Polyester',
          'Futter: Single Jersey, grau, Baumwolle',
          'Zutaten: Kunststoff-Reißverschluss',
        ],
      },
    ]);
  }

  openModal(item: WorkItem): void {
    this.selectedItem.set(item);
    this.currentImageIndex.set(0);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedItem.set(null);
    this.currentImageIndex.set(0);
  }

  nextImage(): void {
    const item = this.selectedItem();
    if (item) {
      const nextIndex = (this.currentImageIndex() + 1) % item.images.length;
      this.currentImageIndex.set(nextIndex);
    }
  }

  previousImage(): void {
    const item = this.selectedItem();
    if (item) {
      const prevIndex = (this.currentImageIndex() - 1 + item.images.length) % item.images.length;
      this.currentImageIndex.set(prevIndex);
    }
  }

  hasMultipleImages(): boolean {
    const item = this.selectedItem();
    return !!item && item.images.length > 1;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen()) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.isModalOpen()) {
      this.nextImage();
    }
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.isModalOpen()) {
      this.previousImage();
    }
  }
}
