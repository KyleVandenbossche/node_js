(() => {

    fetch("https://www.reddit.com/r/aww/.json")
    .then(response => response.json())
    .then(myData => {
        const pictureContainer = document.getElementById('pictureContainer');
        console.log(myData.data.children.source.url);
        

        // for (let photos of myData.data[0]){
        //     const pictureElement = document.createElement('img');
        //     pictureElement.innerHTML = photos;
        //     pictureContainer.append(pictureElement);
        // }



//     fetch('https://www.reddit.com/r/aww/.json')
//     .then(response => response.json())
//     .then(data => {
//     // Iterate over the posts in the response data
//     data.data.children.forEach(post => {
//       // Get the thumbnail URL from the post
//       const thumbnailUrl = post.data.thumbnail;

//       // Create an image element and set its source to the thumbnail URL
//       const img = document.createElement('img');
//       img.src = thumbnailUrl;

//       // Append the image element to the image container
//       pictureContainer.appendChild(img);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data from Reddit API:', error);
//   });
    
    });




})();