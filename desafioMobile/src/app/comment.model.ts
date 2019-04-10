class CommentModel {
   id: number
   tagName: string
   comment: string

   constructor(id, tagName, comment) {
       this.id = id;
       this.tagName = tagName;
       this.comment = comment;
   }
}