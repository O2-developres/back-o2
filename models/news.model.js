'use strict'

class News{
    constructor(data){
      this.img=data.image.url;
      this.name=data.title;
      this.description=data.description;
      this.body=data.body;
      this.date=data.datePublished

  }
  }


module.exports=News