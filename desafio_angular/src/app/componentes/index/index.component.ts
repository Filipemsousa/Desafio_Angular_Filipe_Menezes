import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  // Campos de formulário
  username: string = '';
  password: string = '';

  // Mensagem para feedback
  message: string = '';

  constructor() {}

  login() {
    // Validação simples
    if (!this.username || !this.password) {
      this.message = 'Preencha todos os campos.';
      return;
    }

    // Exemplo de login estático (troque pela sua API depois)
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Login realizado com sucesso!';
      // Aqui você pode redirecionar usando Router:
      // this.router.navigate(['/home']);
    } else {
      this.message = 'Usuário ou senha incorretos.';
    }
  }

}
