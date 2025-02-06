import { exec } from "child_process";
const ffprobe = require("ffprobe-static");

export const getVideoDuration = (videoPath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(
      `${ffprobe.path} -v quiet -show_format -show_streams -i ${videoPath}`,
      (err, stdout) => {
        if (err) return reject(err);

        const durationMatch = stdout.match(/duration="?(\d*\.\d*)"?/);
        if (durationMatch && durationMatch[1]) {
          const durationInSeconds = parseFloat(durationMatch[1]);
          const duration = new Date(durationInSeconds * 1000)
            .toISOString()
            .substr(11, 8); // HH:mm:ss format
          resolve(duration);
        } else {
          reject("Duration not found");
        }
      }
    );
  });
};
