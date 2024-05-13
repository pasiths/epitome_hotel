import { createLogger, format, transports } from "winston";
const { combine, json, timestamp, printf, metadata, prettyPrint } = format;

const customFormat = printf(
  ({ level, timestamp, userID, message, originalUrl }) => {
    return `>${timestamp} ${userID} ${originalUrl} ${level}: ${message}`;
  }
);

export const customLogger = createLogger({
  transports: [
    // new transports.Console(),
    new transports.File({
      filename: "./logsFiles/logs.log",
    }),
  ],
  format: combine(timestamp(), customFormat),
});

export const logger = createLogger({
  transports: [
    // new transports.Console(),
    new transports.File({
      filename: "./logsFiles/reqLogs.log",
    }),
  ],
  format: format.combine(timestamp(), json(), metadata()),
});
