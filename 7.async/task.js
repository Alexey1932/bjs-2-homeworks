class AlarmClock{
	constructor(){
		this.alarmCollection = [];
		this.intervalID = null;
	}

	addClock(time, callback, canCall=true){
		if(!time || !callback){
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.some((elem) => elem.time === time)){
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({ callback: callback, time: time, canCall: canCall });
	}

	removeClock(time){
		return this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
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
			return;
		}
		this.intervalID = setInterval(() => 
			this.alarmCollection.forEach(i => {
				if(i.time === this.getCurrentFormattedTime() && i.canCall){
					i.canCall = false;
					i.callback();
				}
				}
				 ), 1000)
	}

	stop(){
		clearInterval(this.intervalID);
		this.intervalID = null;
	}

	resetAllCalls(){
		this.alarmCollection.forEach(i => i.canCall = true)
	}

	clearAlarms(){
		this.stop();
		return this.alarmCollection = [];
	}
}
