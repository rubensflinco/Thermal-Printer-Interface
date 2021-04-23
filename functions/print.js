function run(texto) {
	return new Promise((sucesso, erro) => {
		const SerialPort = require('serialport');
		const serialPort = new SerialPort('/dev/serial0', {
			baudRate: 19200
		});
		const Printer = require('thermalprinter');
		texto = encodeURI(texto);
		const textos = texto.split("%0D%0A")

		console.log('[Print] Carregando...')

		serialPort.on('open', function () {
			const printer = new Printer(serialPort, {
				maxPrintingDots: 10,
				heatingTime: 255,
				heatingInterval: 5,
				charset: "utf8"
			});
			printer.on('ready', function () {
				printer.bold(true)
				printer.center()
				printer.lineFeed(1)
				printer.printLine('-------------------')
				printer.printLine('Thermal Interface')
				printer.printLine('-------------------')
				printer.lineFeed(1)
				
				textos.forEach(linha => {
					printer.printLine(linha)
				});

				printer.lineFeed(3)
				printer.print(function () {
					serialPort.close(() => {
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
