import { Component, OnInit } from '@angular/core';
import { AtoresModel } from 'src/app/services/harry-potter-model';
import { HarryPotterService } from 'src/app/services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.page.html',
  styleUrls: ['./harry-potter.page.scss'],
})
export class HarryPotterPage implements OnInit {

  atores: AtoresModel[] = [];

  constructor(private service: HarryPotterService) { }

  ngOnInit(): void {
    this.service.getAtores().
      subscribe(lista => {
        this.atores = lista;
      });
  }

}
