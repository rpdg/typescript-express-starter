"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_1 = require('./route');
/**
 * / route
 *
 * @class User
 */
var UsersRoute = (function (_super) {
    __extends(UsersRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function UsersRoute() {
        _super.call(this);
        this.msg = 'respond with a users resource';
        this.userInfo = 'respond with the user: ';
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    UsersRoute.create = function (router) {
        //log
        console.log("[UsersRoute::create] Creating users route.");
        //add users page route
        router.get("/users", function (req, res, next) {
            new UsersRoute().index(req, res, next);
        });
        //add users page route
        router.get("/users/:d", function (req, res, next) {
            new UsersRoute().detail(req, res, next);
        });
    };
    /**
     * The home page route.
     *
     * @class UsersRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @param next {NextFunction} Execute the next method.
     */
    UsersRoute.prototype.index = function (req, res, next) {
        res.send(this.msg);
    };
    UsersRoute.prototype.detail = function (req, res, next) {
        res.send(this.getUserById());
    };
    UsersRoute.prototype.getUserById = function () {
        var sn = Math.random().toString();
        return this.userInfo + sn;
    };
    return UsersRoute;
}(route_1.BaseRoute));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersRoute;
