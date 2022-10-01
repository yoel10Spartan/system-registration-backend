import sql from "./db.js";

const Attende = function(attende) {
    this.name = attende.name;
    this.lastname = attende.lastname;
    this.email = attende.email;
    this.phone = attende.phone;
    this.level = attende.level;
};

Attende.create = (addAttende, result) => {
  sql.query("INSERT INTO attende SET ?", addAttende, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created attende: ", { id: res.insertId, ...addAttende });
    result(null, { ok: true, id: res.insertId, ...addAttende });
  });
};

Attende.getAll = (title, result) => {
  let query = "SELECT * FROM attende";

  if (title !== '') {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("attende: ", res);
    result(null, res);
  });
};

export default Attende;