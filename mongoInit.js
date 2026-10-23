const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'test') {
    const createMockModel = () => {
        const dummyDoc = { _id: '507f1f77bcf86cd799439011', name: 'Mock' };

        function makeQuery(result) {
            const q = {
                populate: () => q,
                exec: (cb) => {
                    if (cb) cb(null, result);
                    return Promise.resolve(result);
                },
                then: (resolve, reject) => Promise.resolve(result).then(resolve, reject)
            };
            return q;
        }

        return {
            find: function (query, cb) {
                const res = [dummyDoc];
                if (typeof query === 'function') {
                    query(null, res);
                    return;
                }
                if (cb) {
                    cb(null, res);
                    return;
                }
                return makeQuery(res);
            },
            findOne: function (query, cb) {
                if (typeof query === 'function') {
                    query(null, dummyDoc);
                    return;
                }
                if (cb) {
                    cb(null, dummyDoc);
                    return;
                }
                return makeQuery(dummyDoc);
            },
            create: function (body, cb) {
                const doc = Object.assign({ _id: '507f1f77bcf86cd799439011' }, body);
                if (cb) cb(null, doc);
                return Promise.resolve(doc);
            },
            update: function (query, body, cb) {
                const callback = typeof query === 'function' ? query : (typeof body === 'function' ? body : cb);
                const res = { ok: 1, nModified: 1 };
                if (callback) callback(null, res);
                return Promise.resolve(res);
            },
            findOneAndUpdate: function (query, body, cb) {
                const doc = Object.assign({ _id: '507f1f77bcf86cd799439011' }, body);
                if (cb) cb(null, doc);
                return Promise.resolve(doc);
            },
            remove: function (doc, cb) {
                if (cb) cb(null, { ok: 1 });
                return Promise.resolve({ ok: 1 });
            }
        };
    };

    const models = {};
    global.db = {
        model: function (name) {
            if (!models[name]) {
                models[name] = createMockModel();
            }
            return models[name];
        },
        on: () => {}
    };
} else {
    global.db = mongoose.createConnection('mongodb://localhost/lost');
}
