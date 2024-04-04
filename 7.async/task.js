class AlarmClock{
	constructor(){
		this.alarmCollection = [];
		this.intervalID = null;
	}

	addClock(time, callback, canCall=true){
		if(!time || !callback){
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.find(item => item.time === time)){
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({callback,time,canCall})
	}

	removeClock(time){
		this.alarmCollection.filter(item => item.time !== time)
	}

	getCurrentFormattedTime() {
		let Data = new Date();
		let Hour = Data.getHours();
		let Minutes = Data.getMinutes();
		let Time = `${(Hour < 10 ? "0" : "") + Hour}:${(Minutes < 10 ? "0" : "") + Minutes}`;
		return Time;
	}

	start(){
		if(this.intervalID){
			return
		}
		this.intervalID = setInterval(() => {
			this.alarmCollection.forEach(i => {
				if(i.time === this.getCurrentFormattedTime() && i.canCall === true){
					i.canCall === false;
					i.callback();
				}
				}
				 )
				}, 1000)
	}

	stop(){
		clearInterval(this.intervalID);
		this.intervalID = 0;
	}

	resetAllCalls(){
		this.alarmCollection.forEach(i => i.canCall = true)
	}

	clearAlarms(){
		this.stop();
		this.alarmCollection = []
	}
}
