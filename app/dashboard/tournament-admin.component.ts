import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor, FormBuilder } from 'angular2/common';

import { RouteParams } from 'angular2/router';
import { DataService } from '../services/data-service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tournamentAdmin',
    templateUrl: 'app/dashboard/tournament-admin.component.html',
    directives: [NgIf, NgFor]
})

export class TournamentAdminComponent implements OnInit {
    private _tournamentPath: string;
    private _data: DataService;
    private _fb: FormBuilder;

    public tournamentData: any;
    public playerKeys: Array<string>;
    public tournamentForm: any;

    constructor(params: RouteParams, data: DataService, fb: FormBuilder) {
        this._data = data;
        this._fb = fb;
        
        // Connect and subscribe to the tournament object
        this._tournamentPath = params.get('user') +
            '/tournaments/' + params.get('tournamentId');
        data.setRef(this._tournamentPath);

        data.subscription
            .map(data => {
                try {
                    this.playerKeys = Object.keys(data.players);
                } catch (error) {
                    this.playerKeys = [];
                }
                return data;
            })
            .subscribe(data => {
                this.tournamentData = data;
                this.initForm();
            });
    }

    initForm() {
        // Tournament form / settings
        this.tournamentForm = this._fb.group({
            name: [this.tournamentData.name],
            desc: [this.tournamentData.desc]
        });
    }
    
    submit() {
        console.log(this.tournamentForm.value);
        this._data.save(this.tournamentForm.value);
    }

    ngOnInit() { }
}