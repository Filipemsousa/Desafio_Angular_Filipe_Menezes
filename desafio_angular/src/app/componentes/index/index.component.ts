import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  
  username: string = '';
  password: string = '';

  
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.message = 'Preencha todos os campos.';
      return;
    }

    const body = {
      nome: this.username,
      senha: this.password
    };

    const endpoint = 'login';
    this.apiService.post(endpoint, body).subscribe({
      next: (res: any) => {
        this.message = 'Login realizado com sucesso!';
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error(err);
        this.message = err.error?.message || 'Erro ao conectar ao servidor.';
      }
    });
  }

}
