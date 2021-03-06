import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute} from '@angular/router';
import {UserInterface} from '../../user-interface';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
    user: UserInterface;

    constructor(private blogService: BlogService,
                private activatedRoute: ActivatedRoute,
                private auth: AuthService) {
        this.user = {
            name: null,
            email: null,
            dob: null,
            phone: null,
            address: null,
            image: null
        };
    }

    ngOnInit() {
         this.blogService.getUserData().subscribe(user => this.user = user);
    }

}
