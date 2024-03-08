// const { MongoClient } = require("mongodb");

// class MongoDB {
//     static connect = async (uri) => {
//         if (this.client) return this.client;
//         this.client = await MongoClient.connect(uri);
//         return this.client;
//     };
// }

// module.exports = MongoDB;

const { MongoClient } = require("mongodb");

class MongoDB {
    constructor() {
        this.connect = async (uri) => {
            if (this.client) return this.client;
            this.client = await MongoClient.connect(uri);
            return this.client;
        };
    }
}

module.exports = MongoDB;
