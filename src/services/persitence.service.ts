import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class PersistencyService {

    constructor(private sqlite: SQLite) { }

    GetExericiseList(): Promise<any> {

        return this.sqlite.create({
            name: 'gTrack.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {

                db.transaction(function(){ })
                db.executeSql('CREATE TABLE IF NOT EXISTS Exercises (Id INTEGER PRIMARY KEY, Name VARCHAR(200))', {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));


            })
            .catch(e => console.log(e));


        // var ex = new Exercise(2, "");
        // return [ex];
    }
}

export class Exercise {
    constructor(public Id: number,
        public Name: string) {

    }
}

export class Set {
    constructor(public ExerciseId: number,
        public Id: number,
        public Reps: number,
        public Weight: number,
        public SetNumber: number,
        public IsWarmup: boolean,
        public Created: Date) {

    }
}