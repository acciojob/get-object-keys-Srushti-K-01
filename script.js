//your JS code here. If required.
const student = {
	name: "John",
};
function getKeys(obj){
	return Object.keys(obj);
}
Object.prototype.getKeys = function(){
	return Object.keys(this);
};
console.log(getKeys(student));