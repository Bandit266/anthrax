const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const logger = winston.createLogger({
	transports: [
	  new winston.transports.Console(),
	  new winston.transports.File({ filename: 'combined.log' })
	]
  });

  const levels = { 
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	verbose: 4,
	debug: 5,
	silly: 6
  };

  const { format } = require('logform');
const { combine, timestamp, label } = format;

const labelTimestamp = combine(
  label({ label: 'right meow!' }),
  timestamp()
);

const info = labelTimestamp.transform({
  level: 'info',
  message: 'What time is the testing at?'
});

console.dir(info);
// { level: 'info',
//   message: 'What time is the testing at?',
//   label: 'right meow!',
//   timestamp: '2017-09-30T03:57:26.875Z' }

const colorizeFormat = format.colorize({ colors: { info: 'blue' }});



const { format } = require('logform');

const jsonFormat = format.json();

const info = jsonFormat.transform({
  level: 'info',
  message: 'my message',
});
console.log(info);
// { level: 'info',
//   message: 'my message',
//   [Symbol(message)]: '{"level":"info","message":"my message"}' }