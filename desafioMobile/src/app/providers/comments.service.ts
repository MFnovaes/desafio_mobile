import { Injectable } from '@angular/core';
import { DesafioMobileService } from './desafio-mobile.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private sqlite: DesafioMobileService) {}

  public create(tagName: string, comment: string){
    
    return this.sqlite.getDB()
    .then((db: SQLiteObject) => {
      let sql = "insert into comments (tagName, comment) values (?, ?)"
      let data = [tagName, comment]

      return db.executeSql(sql, data).catch((e) => console.error(e))
    })
    .catch((e) => console.error(e))
  }

  public remove(id: number) {
    return this.sqlite.getDB()
    .then((db: SQLiteObject) => {
      let sql = "delete from comments where id = ?"
      let data = [id]

      return db.executeSql(sql, data).catch((e) => console.error(e))
    }).catch((e) => console.error(e))
  }

  public update(id: number, newTagName: string, newComment: string) {
    return this.sqlite.getDB()
      .then((db: SQLiteObject) => {
        let sql = "update comments set tagName = ?, comment = ? where id = ?";
        let data = [newTagName, newComment, id]
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.sqlite.getDB()
      .then((db: SQLiteObject) => {
        let sql = "select * from comments"
        let commentList: any[] = []
        return db.executeSql(sql, [])         
        .catch((e) => console.error(e.message));
      })
      .catch((e) => console.error(e.message));
  }
}
