import rfs from 'rotating-file-stream';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

const logDirectory = path.join(__dirname, '../log');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const pad = num => ((num > 9 ? '' : '0') + num);

const generator = (time, index) => {
  if (!time) {
    return 'file.log';
  }
  const month = `${time.getFullYear()} ${pad(time.getMonth() + 1)}`;
  const day = pad(time.getDate());
  const hour = pad(time.getHours());
  const minute = pad(time.getMinutes());

  return `${month}/${month}${day}-${hour}${minute}-${index}-file.log`;
};

const stream = rfs(generator, {
  path: logDirectory,
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  compress: 'gzip', // compress rotated files
});

export default morgan('dev', { stream });
