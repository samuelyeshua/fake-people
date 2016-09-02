let randomRg = () => {
	let RG = [
		Math.floor(Math.random() * (90 - 10)),
		Math.floor(Math.random() * (900 - 100)),
		Math.floor(Math.random() * (700 - 160)),
		Math.floor(Math.random() * (90 - 20)),
	];

	return RG.slice(0,3).join('.') + '-' + RG[3]
}

let randomCpf = () => {

	let mod = (a,b) => { return Math.round(a-(Math.floor(a/b)*b)) }
    let n1 = Math.round(Math.random()*9);
    let n2 = Math.round(Math.random()*9);
    let n3 = Math.round(Math.random()*9);
    let n4 = Math.round(Math.random()*9);
    let n5 = Math.round(Math.random()*9);
    let n6 = Math.round(Math.random()*9);
    let n7 = Math.round(Math.random()*9);
    let n8 = Math.round(Math.random()*9);
    let n9 = Math.round(Math.random()*9);
     
    let aux = n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
    aux = mod(aux, 11);
    let nv1 = aux < 2 ? 0 : 11 - aux;    
             
    aux = n1 * 11 + n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + nv1 * 2;
    aux = mod(aux, 11);
    let nv2 = aux < 2 ? 0 : 11 - aux;
     
    return ""+n1+n2+n3+"."+n4+n5+n6+"."+n7+n8+n9+"-"+nv1+nv2;
}

module.exports = {
	randomRg,
	randomCpf
}