///<reference path="../typings/express/express.d.ts"/>
import {NextFunction, Request, Response, Router} from 'express';
import {BaseRoute} from './route';


/**
 * / route
 *
 * @class User
 */
export default class UsersRoute extends BaseRoute {

	private msg: string = 'respond with a users resource';
	private userInfo: string = 'respond with the user: ';


	/**
	 * Create the routes.
	 *
	 * @class IndexRoute
	 * @method create
	 * @static
	 */
	public static create(router: Router) {
		//log
		console.log("[UsersRoute::create] Creating users route.");


		//add users page route
		router.get("/users", (req: Request, res: Response, next: NextFunction) => {
			new UsersRoute().index(req, res, next);
		});


		//add users page route
		router.get("/users/:d", (req: Request, res: Response, next: NextFunction) => {
			new UsersRoute().detail(req, res, next);
		});


	}

	/**
	 * Constructor
	 *
	 * @class IndexRoute
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * The home page route.
	 *
	 * @class UsersRoute
	 * @method index
	 * @param req {Request} The express Request object.
	 * @param res {Response} The express Response object.
	 * @param next {NextFunction} Execute the next method.
	 */
	public index(req: Request, res: Response, next: NextFunction) {
		res.send(this.msg);
	}


	public detail(req: Request, res: Response, next: NextFunction) {
		res.send(this.getUserById());
	}

	private getUserById(): string {
		let sn = Math.random().toString();
		return this.userInfo + sn;
	}
}