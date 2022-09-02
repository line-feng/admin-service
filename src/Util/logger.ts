import { addColors, createLogger, format, transports } from 'winston'
const {  printf } = format;

const logFormat = printf((msg) => `[${msg.timestamp}] ${msg.level}: ${msg.message}`);
const logger = createLogger({
    format: format.combine(
        format.label({ label: 'right meow!' }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.prettyPrint(),
        logFormat
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.prettyPrint(),
                logFormat
            )
        }),
        // new winston.transports.File({ filename: 'combined.log' })
        new transports.File({ filename: './log/log.log' })
    ]
})



addColors({
    debug: 'blue',
    error: 'red',
    info: 'green',
    warn: 'yellow',
});
export {
    logger
}