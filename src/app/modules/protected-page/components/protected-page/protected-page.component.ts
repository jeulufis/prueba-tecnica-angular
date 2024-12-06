import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-protected-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.scss'],
})
export class ProtectedPageComponent {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
