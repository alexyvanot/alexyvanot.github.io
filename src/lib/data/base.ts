const firstName = 'Alexy';
const lastName = 'VANOT';
const suffix = firstName + ' ' + lastName + ' - Full Stack Developer & Software Engineer';
const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
