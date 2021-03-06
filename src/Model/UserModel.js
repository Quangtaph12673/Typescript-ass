var User = /** @class */ (function () {
    function User(_id, _name, _email, _password, _permissions) {
        if (_permissions === void 0) { _permissions = 0; }
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._permissions = _permissions;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (_password) {
            this._password = _password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        set: function (_permissions) {
            this._permissions = _permissions;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
export { User };
