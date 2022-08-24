function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function(){
        console.log(title, author, pages, status)
    }
}
const money = new Book('the psycology of money','i am','108','reading');
money.info()
