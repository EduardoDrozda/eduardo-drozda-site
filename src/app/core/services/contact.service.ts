import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(formData: ContactFormData): Observable<any> {
    // Aqui você pode implementar a lógica para enviar o formulário
    // Por exemplo, usando um serviço de email ou API
    console.log('Dados do formulário:', formData);

    // Simulando uma resposta de sucesso
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true, message: 'Mensagem enviada com sucesso!' });
        observer.complete();
      }, 1000);
    });
  }
}
