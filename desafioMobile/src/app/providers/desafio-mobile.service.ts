import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DesafioMobileService {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: "desafioMobile.db",
      location: "default"
    })
  }

  public createDB() {
    return this.getDB().then((db: SQLiteObject) => {
      this.createTables(db)
    }).catch(()=>{console.log("deu ruim")})
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ["CREATE TABLE IF NOT EXISTS comments (id integer primary key AUTOINCREMENT NOT NULL, tagName text, comment text)"]
    ])
  }
}
