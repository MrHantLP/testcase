import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RetirementInterface } from './retirement.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl = 'https://61790bd4aa7f34001740472e.mockapi.io/api';
  private readonly entityPath = 'retirement';

  public getRetirement(): Observable<RetirementInterface> {
    return this.http.get<RetirementInterface>(
      `${this.apiUrl}/${this.entityPath}/1`
    );
  }

  public updateRetirement(retirement: RetirementInterface): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${this.entityPath}/1`,
      retirement
    );
  }
}
