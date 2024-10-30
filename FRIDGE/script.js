function onOff() {
    const refrid = document.getElementById('refrid');
    if (refrid.style.display === 'none') {
        refrid.style.display = 'block';
    } else {
        refrid.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const refrid = document.getElementById('refrid');
    const img = document.createElement('img');
    img.src = 'fridge.png';  
    img.alt = 'Original Image';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.id = 'originalImage';  

    refrid.appendChild(img); 
});


function shelf() {
    const refrid = document.getElementById('refrid');
    const shelfImage = document.getElementById('shelfImage');
    const originalImage = document.getElementById('originalImage');

    
    if (shelfImage) {
        refrid.removeChild(shelfImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';  
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);  
    } else {
        
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'shelf.jpg';  
        img.alt = 'Shelf Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'shelfImage';
        refrid.appendChild(img);  
    }
}



function temp() {
    const refrid = document.getElementById('refrid');
    const tempImage = document.getElementById('tempImage');
    const originalImage = document.getElementById('originalImage');

   
    if (tempImage) {
        refrid.removeChild(tempImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';  
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);  
    } else {
        
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'temp.webp';  
        img.alt = 'Temp Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'tempImage';
        refrid.appendChild(img);  
    }
}


function google() {
    const refrid = document.getElementById('refrid');
    const googleImage = document.getElementById('googleImage');
    const originalImage = document.getElementById('originalImage');

    
    if (googleImage) {
        refrid.removeChild(googleImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';  
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);  
    } else {
        
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'google.png';  
        img.alt = 'Google Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'googleImage';
        refrid.appendChild(img);  
    }
}


function youtube() {
    const refrid = document.getElementById('refrid');
    const youtubeImage = document.getElementById('youtubeImage');
    const fridgeImage = document.getElementById('fridgeImage');

    
    if (youtubeImage) {
        refrid.removeChild(youtubeImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';  
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img); 
    } else {
        
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'youtube.png';  
        img.alt = 'YouTube Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'youtubeImage';
        refrid.appendChild(img);  
    }
}


function settings() {
    const refrid = document.getElementById('refrid');
    const settingImage = document.getElementById('settingImage');
    if (settingImage) {
        refrid.removeChild(settingImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';  
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'settings.png';  
        img.alt = 'Setting Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'settingImage'; 

        refrid.appendChild(img);  
    }
}

function updateClock() {
    const now = new Date();  
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 
