const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function pad0(num, digit) {
	let zero = ''
	for (let i = 0; i < digit; i++) zero += '0'
	return (zero + num).slice(-digit)
}

let main = new Vue({
	el: '#main',
	data: {
		categories: [],
		curCategory: 0,
		date: "",
		time: ""
	},
	methods: {
		getCategories() {
			let self = this
			let req = new XMLHttpRequest()
			req.open('GET', 'category.json')
			req.responseType = 'json'
			req.send()
			req.onload = function() {
				self.categories = req.response
			}
		},
		setTime() {
			let cur = new Date()
			this.date = `${pad0(cur.getFullYear(), 4)}/${pad0(cur.getMonth()+1, 2)}/${pad0(cur.getDate(), 2)}`
			this.date += ` ${week[cur.getDay()]}`
			this.time = `${pad0(cur.getHours(), 2)}:${pad0(cur.getMinutes(), 2)}:${pad0(cur.getSeconds(), 2)}`
		}
	},
	mounted: function() {
		this.getCategories()
		this.setTime()
		setInterval(this.setTime, 1000)
	}
})