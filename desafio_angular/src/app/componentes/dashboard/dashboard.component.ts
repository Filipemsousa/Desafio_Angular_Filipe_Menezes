import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Veiculos, Veiculo } from '../../models/veiculo.model';
import { CarByVin } from '../../models/carbyvin.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle: Veiculo | null = null;
  vehicleData: CarByVin | null = null;

  // Dados para exibir na tabela
  vehicleDetails: CarByVin[] = [];

  // Mapeamento de VINs para veículos (baseado na API)
  private vinMapping = {
    'Ranger': '2FRHDUYS2Y63NHD22454',
    'Mustang': '2RFAASDY54E4HDU34874',
    'Territory': '2FRHDUYS2Y63NHD22455',
    'Bronco Sport': '2RFAASDY54E4HDU34875'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.apiService.getVehicles().subscribe({
      next: (vehicles: Veiculo[]) => {
        this.vehicles = vehicles;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos:', err);
      }
    });
  }

  onVehicleChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const vehicleName = select.value;

    if (vehicleName && this.vinMapping[vehicleName as keyof typeof this.vinMapping]) {
      this.selectedVehicle = this.vehicles.find(v => v.vehicle === vehicleName) || null;
      this.loadVehicleData(vehicleName);
    } else {
      this.selectedVehicle = null;
      this.vehicleData = null;
      this.vehicleDetails = [];
    }
  }

  loadVehicleData(vehicleName: string): void {
    const vin = this.vinMapping[vehicleName as keyof typeof this.vinMapping];

    if (vin) {
      this.apiService.post('vehicleData', { vin }).subscribe({
        next: (data: CarByVin) => {
          this.vehicleData = data;
          this.vehicleDetails = [data]; // Mesmo veículo com diferentes dados? Ou múltiplos veículos?
        },
        error: (err) => {
          console.error('Erro ao carregar dados do veículo:', err);
          this.vehicleData = null;
          this.vehicleDetails = [];
        }
      });
    }
  }

  getVehicleImage(vehicleName: string): string {
    const imageMap: { [key: string]: string } = {
      'Ranger': 'img/ranger.png',
      'Mustang': 'img/mustang.png',
      'Territory': 'img/territory.png',
      'Bronco Sport': 'img/broncoSport.png'
    };
    return imageMap[vehicleName] || 'img/mustang.png';
  }

  getVinByVehicle(vehicleName: string): string {
    return this.vinMapping[vehicleName as keyof typeof this.vinMapping] || '';
  }
}
