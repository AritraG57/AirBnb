const db = require("../utils/databaseUtil");

class Home {
  constructor(image, homename, rating, price, id, description) {
    this.homename = homename;
    this.price = price;
    this.image = image;
    this.rating = rating;
    this.id = id;
    this.description = description;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE homes SET image=?, homename = ?, rating = ?, price = ?, description = ? WHERE id = ?",
        [
          this.image,
          this.homename,
          this.rating,
          this.price,
          this.description,
          this.id,
        ]
      );
    } else {
      return db.execute(
        "INSERT INTO homes (image, homename, rating, price, description) VALUES (?,?,?,?,?)",
        [this.image, this.homename, this.rating, this.price, this.description]
      );
    }
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id = ?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes where id = ?", [homeId]);
  }
}

module.exports = Home;
