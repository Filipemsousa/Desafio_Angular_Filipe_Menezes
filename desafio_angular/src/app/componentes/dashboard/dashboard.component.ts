import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Veiculos, Veiculo } from '../../models/veiculo.model';
import { CarByVin } from '../../models/carbyvin.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle: Veiculo | null = null;
  vehicleData: CarByVin | null = null;

  
  vehicleDetails: CarByVin[] = [];

  // Mapeamento de VINs para veículos (baseado na API)
  private vinMapping = {
    'Ranger': '2FRHDUYS2Y63NHD22454',
    'Mustang': '2RFAASDY54E4HDU34874',
    'Territory': '2FRHDUYS2Y63NHD22455',
    'Bronco Sport': '2RFAASDY54E4HDU34875',
    'RangerExtra1': '2FRHDUYS2Y63NHD22654', 
    'RangerExtra2': '2FRHDUYS2Y63NHD22854'  
  };

  
  private vehicleMapping: { [key: string]: string } = {};

  vinEntered: string = '';
  isTableVisible: boolean = false;
  validationMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.vehicleMapping = Object.fromEntries(
      Object.entries(this.vinMapping).map(([vehicle, vin]) => [vin, vehicle])
    );
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.apiService.getVehicles().subscribe({
      next: (data: Veiculos) => {
        this.vehicles = data;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos:', err);
        this.vehicles = [];
      }
    });
  }

  onVehicleChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const vehicleName = select.value;

    if (vehicleName && this.vinMapping[vehicleName as keyof typeof this.vinMapping]) {
      this.selectedVehicle = this.vehicles.find(v => v.vehicle === vehicleName) || null;
      this.validationMessage = '';
      this.isTableVisible = false;
      this.vehicleData = null;
      this.vehicleDetails = [];
      this.vinEntered = '';
    } else {
      this.selectedVehicle = null;
      this.vehicleData = null;
      this.vehicleDetails = [];
      this.isTableVisible = false;
      this.vinEntered = '';
      this.validationMessage = '';
    }
  }

  loadVehicleData(vehicleName: string): void {
    const vin = this.vinMapping[vehicleName as keyof typeof this.vinMapping];

    if (vin) {
      this.apiService.post('vehicleData', { vin }).subscribe({
        next: (data: CarByVin) => {
          this.vehicleData = data;
          this.vehicleDetails = [data]; 
        },
        error: (err) => {
          console.error('Erro ao carregar dados do veículo:', err);
          this.vehicleData = null;
          this.vehicleDetails = [];
        }
      });
    }
  }

  loadVehicleDataByVin(vin: string): void {
    this.apiService.post('vehicleData', { vin }).subscribe({
      next: (data: CarByVin) => {
        this.vehicleData = data;
        this.vehicleDetails = [data];
        this.validationMessage = 'VIN válido.';
        this.isTableVisible = true;
      },
      error: (err) => {
        console.error('Erro ao carregar dados do veículo por VIN:', err);
        this.vehicleData = null;
        this.vehicleDetails = [];
        this.validationMessage = 'VIN inválido.';
        this.isTableVisible = false;
        this.selectedVehicle = null;
        this.vehicleData = null;
        this.vehicleDetails = [];
        this.vinEntered = '';
      }
    });
  }

  onVinInput(): void {
    if (this.vinEntered.trim()) {
      const vehicleName = this.vehicleMapping[this.vinEntered.trim()];
      if (vehicleName) {
        this.validationMessage = 'Verificando VIN...';
        this.loadVehicleDataByVin(this.vinEntered.trim());
      } else {
        this.validationMessage = 'VIN inválido.';
        this.isTableVisible = false;
        this.vehicleData = null;
        this.vehicleDetails = [];
      }
    } else {
      this.validationMessage = '';
      this.isTableVisible = false;
      this.vehicleData = null;
      this.vehicleDetails = [];
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

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/index']);
  }
}
