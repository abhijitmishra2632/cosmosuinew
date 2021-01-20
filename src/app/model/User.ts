export class Users {
  addedDate:Date;
    constructor(
      public mobileNumber: number,
      public userSource: string,
      public userName: string,
      public location: string,
      public gotWhatsapp: boolean,
      public usefull: boolean
    ) {  }
  }