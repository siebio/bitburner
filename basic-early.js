/** @param {NS} ns **/

export async function main(ns) {
	let target = "n00dles";
	let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
	let securityThresh = ns.getServerMinSecurityLevel(target) + 3;

	if (ns.getServerSecurityLevel(target) > securityThresh){
		//ns.exec("weak-target.js")
		await ns.weaken(target)
	} else if(ns.getServerMaxMoney < moneyThresh){
		//ns.exec("grow-target.js")
		await ns.grow(target)
	} else{
		//ns.exec("hack-target.js")
		await ns.hack(target)
	}
}