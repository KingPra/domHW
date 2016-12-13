function init () {

    let button = document.querySelector('#getNew');
    button.addEventListener('click', function() {
       // console.log('test');
        let parent = document.createElement('li');
        parent.classList.add('profile')

        let image = document.createElement('image');
        

        let header = document.createElement('h2');
        header.textContent = 'Person Name';
        parent.appendChild(header);
                    
        let likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        parent.appendChild(likeButton);
        likeButton.addEventListener('click', function() {
            console.log('like');
        })

        let nopeButton = document.createElement('button');
        nopeButton.textContent = 'Nope';
        parent.appendChild(nopeButton);
        nopeButton.addEventListener('click', function() {
            console.log('nope');
        })
        

        let grandparent = document.querySelector('ul');
        grandparent.appendChild(parent);

    });
}
window.addEventListener('load', init);

//value
//textContent- words between start and end tags
//classList.add - adds classes on elements
//classList.remove - method to remove an event handler that has been attached with the addEventListner() // method
//addEventListener - method attaches an event handler to the specified element.