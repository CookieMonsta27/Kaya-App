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
        id: 'schwarzer-blazer',
        number: '001',
        title: 'Schwarzer Maßblazer',
        tag: 'Maßkleidung',
        year: '2024',
        shortDesc:
          'Taillierter Blazer aus schwerem Wollkrepp, von Hand gefertigt. Schmale Revers, verdeckte Knopfleiste — zeitlos und präzise.',
        images: [
          'assets/portfolio/schwarzer-blazer/main.jpeg',
          'assets/portfolio/schwarzer-blazer/detail1.jpeg',
          'assets/portfolio/schwarzer-blazer/detail2.jpeg',
        ],
        detailedDesc:
          'Dieser charaktervolle Blazer wurde aus schwerem Wollkrepp handgefertigt. Die maßgeschneiderte Silhouette betont die Schultern mit schmalen Revern und einer verdeckten Knopfleiste. Jede Naht wurde mit Präzision gesetzt — ein zeitloser Klassiker, der zu fast allem passt.',
        materials: ['Wollkrepp', 'Seide', 'Horn-Knöpfe'],
        techniques: ['Handgenäht', 'Verdeckte Knopfleiste', 'Schmale Revers'],
      },
      {
        id: 'jacke-mit-schaedeln',
        number: '002',
        title: 'Jacke mit Schädel-Stickerei',
        tag: 'Upcycling',
        year: '2024',
        shortDesc:
          'Upcycled Jacke mit handgestickten Schädelmotiven. Jeder Stich ein Statement — roh, präzise, unverkennbar.',
        images: ['assets/portfolio/JackeMitSchädeln.jpeg'],
        detailedDesc:
          'Diese Statement-Jacke ist das Ergebnis von Upcycling und kunstfertiger Handstickerei. Die Schädelmotive wurden Stich für Stich eingestickt und geben der Jacke einen rohen, präzisen Charakter. Ein echtes Statement-Piece für alle, die sich trauen, anders zu sein.',
        materials: ['Upcycled Denimstoff', 'Stickgarn', 'Metallnieten'],
        techniques: ['Handgestickt', 'Upcycling', 'Detail-Arbeit'],
      },
      {
        id: 'weste-schaedel',
        number: '003',
        title: 'Handbestickte Schädel-Weste',
        tag: 'Upcycling',
        year: '2024',
        shortDesc:
          'Weste mit zentralem Schädelmotiv, vollständig von Hand bestickt. Upcycling trifft Punk — ein Stück, das für sich selbst spricht.',
        images: ['assets/portfolio/WesteSchädel.jpeg'],
        detailedDesc:
          'Die Schädel-Weste vereint Upcycling mit aufwendiger Handstickerei. Das zentrale Schädelmotiv wurde vollständig von Hand bestickt und fällt sofort ins Auge. Upcycling trifft hier auf Punk-Ästhetik — ein Stück, das Charakter und Widerstand ausstrahlt.',
        materials: ['Upcycled Stoff', 'Farbiges Stickgarn', 'Knöpfe'],
        techniques: ['Vollständig handgestickt', 'Upcycling', 'Punk-Ästhetik'],
      },
      {
        id: 'zweifarbige-jacke',
        number: '004',
        title: 'Zweifarbige Jacke',
        tag: 'Maßkleidung',
        year: '2023',
        shortDesc:
          'Jacke in Weiß und Naturbraun aus handverarbeitetem Leinen. Zwei Materialien, ein ruhiger Dialog zwischen Struktur und Wärme.',
        images: ['assets/portfolio/WeißBrauneJacke.jpeg'],
        detailedDesc:
          'Diese zweiteilige Jacke verbindet zwei hochwertige Leinen-Qualitäten: Weiß und Naturbraun. Der Dialog zwischen den Materialien schafft eine subtile, harmonische Ästhetik. Die gesamte Verarbeitung erfolgte von Hand — von der Naht bis zum Futter.',
        materials: ['Leinen Weiß', 'Leinen Naturbraun', 'Baumwoll-Futter'],
        techniques: ['Handgenäht', 'Natürliche Materialien', 'Detailgerechte Verarbeitung'],
      },
      {
        id: 'blaue-hose',
        number: '005',
        title: 'Blaue Maßhose',
        tag: 'Maßkleidung',
        year: '2023',
        shortDesc:
          'Weite Hose in tiefem Blau, maßgefertigt mit hohem Bund und handgefassten Nähten. Klassisch geschnitten, modern getragen.',
        images: ['assets/portfolio/BlaueHose.jpeg'],
        detailedDesc:
          'Eine weite Maßhose in tiefem Blau mit klassischem Schnitt und modernem Tragekomfort. Der hohe Bund bietet Komfort und Eleganz zugleich. Jede Naht wurde von Hand gefasst — ein Klassiker, der zeitlos bleibt.',
        materials: ['Hochwerti Baumwoll-Mix', 'Leinen-Futter', 'Kupferknopf'],
        techniques: ['Maßgefertigt', 'Handgefasste Nähte', 'Klassischer Schnitt'],
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
      const prevIndex =
        (this.currentImageIndex() - 1 + item.images.length) % item.images.length;
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
