function find(){
    var book = document.getElementById("book").value;
    if(book == ""){
        alert("please enter a search keyword")
    }else{
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + book)
        .then(response => {
            return response.json()
        })
        .then(result => {
            var html = "<p>"
            for (let i = 0; i < result.items.length; i++) {
               volinfo = result.items[i].volumeInfo;
               title = volinfo.title;
               description = volinfo.description
               author= volinfo.authors
               year = volinfo.publishedDate
               html += "Book title: " + title + "<br>" 
               + "description: " + description + "<br>"
               + "author: " + author + "<br>"
               + "year: " + year + "<br>" + "<hr>"
            
            }
            html += "</p>"
            document.getElementById("books").innerHTML= html;
        })
        .catch(error => {
            console.log(error);
        })
    }
}