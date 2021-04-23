function run(){
	return new Promise((sucesso, erro)=>{
		const SerialPort = require('serialport');
		const serialPort = new SerialPort('/dev/serial0', {
			baudRate: 19200
		});
		const Printer = require('thermalprinter');
		
	console.log('[Print] Carregando...')

	serialPort.on('open',function() {
		const printer = new Printer(serialPort, {
			maxPrintingDots:10,
			heatingTime: 255,
			heatingInterval: 5,
			charset: "utf8"
			});
		printer.on('ready', function() {
			printer
				.bold(true)
				.center()
				.lineFeed(1)
				.printLine('-------------------')
				.printLine('Thermal Interface')
				.printLine('-------------------')
				.lineFeed(1)
				.printLine('Olá Mundo')
				.printLine('Test')
				.lineFeed(3)
				.print(function() {
					serialPort.close(()=>{
						console.log('[Print] Imprimiu.');
						sucesso("Impresso!")
					})
				});
		});
	});
	})
}

module.exports = {
	run
}
