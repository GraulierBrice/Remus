import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Player } from 'src/app/models/player.models';
import { Conversation } from 'src/app/models/conversation.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlayersService } from 'src/app/providers/players/players.service';
import { ModalController, IonContent } from '@ionic/angular';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-session-chat',
  templateUrl: './session-chat.page.html',
  styleUrls: ['./session-chat.page.scss'],
})
export class SessionChatPage implements OnInit {

  myForm : FormGroup;
  @ViewChild(IonContent,null) content: IonContent;
  @Input() player: Player;
  @Input() conv: Conversation;

  constructor(private formBuilder: FormBuilder, private playerServ: PlayersService,
    private modalController: ModalController) {
    this.player = {
      name: '',
      conn: undefined
    }
    this.conv = new Conversation()
  }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {    
    this.myForm = this.formBuilder.group({
        message: null
    })
    setTimeout(() => {  this.content.scrollToBottom(0) }, 100);
  }


  async send() {
    console.log(this.playerServ.playersList)
    var host = this.playerServ.getPlayerByName("Host");
    console.log(host)
    const message = this.myForm.getRawValue().message
    this.myForm.reset()
    console.log("sending ", message, "to player ", this.player)
    this.player.conn.send({message:message});
    if(!this.playerServ.isHost)
      this.playerServ.getPlayerByName("Host").conn.send({message:message,target:this.player.name})
    this.conv.addMessage(new Message(new Date(),this.playerServ.me(),message, this.player));
    setTimeout(() => {  this.content.scrollToBottom(100) }, 100);
    
  }

}
