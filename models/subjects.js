const db = require('./connection.js')

class Subjects {
    constructor(id, subject, rating){
        this.id = id;
        this.subject = subject;
        this.rating = rating;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM newfulltable ORDER BY subject`);
            console.log(response);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async update(subject, rating) {
        const query = `UPDATE newfulltable SET rating='${rating}' WHERE subject = '${subject}'`;

        try {
            let response = await db.result(query);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }

    // static async add(subject, rating) {
    //     const query = `INSERT INTO newfulltable (subject, rating) VALUES ('${subject}', '${rating}')`;

    //     try {
    //         let response = await db.result(query);
    //         return response;
    //     } catch(err) {
    //         console.log("ERROR", err.message);
    //         return err;
    //     };
    // }
}

module.exports = Subjects;