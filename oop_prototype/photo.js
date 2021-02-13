function Photo(id, name, size, type, description) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.type = type;
    this.description = description;
}

Photo.prototype.photoInfo = function () {
    console.log(`Photo name: ${this.name}\n size: ${this.size}kb.\n type: ${this.type}\n description: ${this.description}`)
}

module.exports = Photo;