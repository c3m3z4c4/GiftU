export default async function login(req, res) {
	try {
		await auth0.handleLogin(req, res, {});
	} catch (error) {
		console.error(error);
		res.status(error.status || 500).end(error.mesages);
	}
}
