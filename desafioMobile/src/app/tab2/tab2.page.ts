import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesafioMobileService } from '../providers/desafio-mobile.service';
import { CommentsService } from '../providers/comments.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  commentList: any[] = [];

  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private commentsService: CommentsService,
              public alertCtrl: AlertController,
              private toast: ToastController) {
    this.commentForm = this.formBuilder.group({
      tagName: ["", Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      comment: ["", Validators.compose([
        Validators.required,
        Validators.maxLength(200)
      ])]
    })

    this.getAllComments();
  }

  addComment() {
    let {tagName, comment} = this.commentForm.controls
    this.commentsService.create(tagName.value, comment.value);
    this.getAllComments();
  }

  removeComment(id: number, index) {
    this.commentsService.remove(id).then(() => {
      this.commentList.splice(index, 1)
    });
  }

  async updateComment(id: number) {
    let newTagName: string;
    let newComment: string;
    const alert = await this.alertCtrl.create({
      header: "Update Tag",
      inputs: [
        {
          name: "newTagName",
          placeholder: "New TagName"
        },
        {
          name: "newComment",
          placeholder: "New Comments",
          max: 20
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Confirm",
          handler: async (data) => {
            if(this.validateString(data.newTagName, 20) && this.validateString(data.newComment, 200)) {
              newTagName = data.newTagName,
              newComment = data.newComment
              this.commentsService.update(id, newTagName, newComment);
              this.getAllComments();
            } else if(!this.validateString(data.newTagName, 20)) {
              let toast = await this.toast.create({
                message: "Tag Name max 20 characters!",
                duration: 3000,
                position: "bottom"
              })
              await toast.present()
              return false;
            } else if(!this.validateString(data.newComment, 200)) {
              let toast = await this.toast.create({
                message: "Comment max 200 characters!",
                duration: 3000,
                position: "bottom"
                
              })
              await toast.present()
              return false;
            } else {
              let toast = await this.toast.create({
                message: "Exceeded the chatacters limit!",
                duration: 300,
                position: "bottom"
              })
              await toast.present()
            }
            
          }
        }
      ]
    });
    await alert.present()
  }

  getAllComments() {
    this.commentList = [];
    this.commentsService.getAll().then((data) => {
      for (var x = 0; x < data.rows.length; x++) {
        this.commentList.unshift(data.rows.item(x))
      }
    })
  }

  validateString(text: string, max: number) {
    if(text.length > max) {
      return false
    } else {
      return true
    }
  }
  
}
