const request = require('request');
const mysql = require("mysql");

module.exports = {

    /**
     * Return random image URLs from an API
     * @param string keyword - search term
     * @param int    imageCount - mumber of random images
     * @return array of image URLs
     */
    getRandomImages_cb: function (keyword, imageCount, callback) {
        var requestURL = "https://api.unsplash.com/photos/random?client_id=7faa8dd83f93a07a012d55b17894d6ad28fede6a6d8127cc784e2a4fb38f8c2f&query="+keyword+"&count="+imageCount;
        request(requestURL, function (error, response, body) {
            if (!error) {
                var parsedData = JSON.parse(body);
                // console.log("image url:", parsedData["urls"]["regular"]);
                var imageURLs = [];
                
                for (let i = 0; i < 9; i++) {
                    imageURLs.push(parsedData[i].urls.regular);
                }
                //console.log(imageURLs);
                
                //return imageURLs;
                callback(imageURLs);
            
            } else {
                
                console.log("error", error)
            
            }
            
        });//request
    },
    
    
    
    /**
     * Return random image URLs from an API
     * @param string keyword - search term
     * @param int    imageCount - mumber of random images
     * @return array of image URLs
     */
    getRandomImages: function (keyword, imageCount) {
        var requestURL = "https://api.unsplash.com/photos/random?client_id=7faa8dd83f93a07a012d55b17894d6ad28fede6a6d8127cc784e2a4fb38f8c2f&query="+keyword+"&count="+imageCount;
        
        return new Promise(function(resolve, reject) {
            request(requestURL, function (error, response, body) {
                if (!error) {
                    var parsedData = JSON.parse(body);
                    // console.log("image url:", parsedData["urls"]["regular"]);
                    var imageURLs = [];
                    
                    for (let i = 0; i < imageCount; i++) {
                        imageURLs.push(parsedData[i].urls.regular);
                    }
                    //console.log(imageURLs);
                    
                    //return imageURLs;
                    resolve(imageURLs);
                
                    
                } else {
                    
                    console.log("error", error)
                
                }
                
            });//request
        });//promise
    },//function
    
    /**
     * creates database connection
     * @return database connection
     */
    createConnection: function() {
        var conn = mysql.createConnection({
        host: "cst336db.space",
        user: "cst336_dbUser011",
        password: "zbobrn",
        database: "cst336_db011"
    });
    return conn;
    }
}