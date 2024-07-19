export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return "foo"
	},
	async myFun2 () {
		var res = await Query1.run();

		return res.map(x => {
			return {
				name: "Watashi no namae wa " + x.name,
				gender: x.gender
			}
		})
			.filter(x => x.name && x.gender);
	}
}