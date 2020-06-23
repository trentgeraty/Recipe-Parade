const inputFile = document.getElementById('file');
const image = document.getElementById('image');

inputFile.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        image.style.display = "block";
        reader.addEventListener('load', function() {
            console.log(this)
            image.setAttribute('src', this.result);
        })
        reader.readAsDataURL(file)
    } else {
        image.setAttribute('src', "")
        image.style.display = 'none'
    }
})