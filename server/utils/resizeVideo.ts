// import { exec } from "child_process";
// import ffmpeg from "ffmpeg-static";

// export const resizeVideo = (
//   inputPath: string,
//   outputPath: string,
//   width: number,
//   height: number
// ): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const command = `${ffmpeg} -i ${inputPath} -vf "scale=${width}:${height}" ${outputPath}.mp4`;
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(`Error resizing video: ${stderr}`);
//       } else {
//         resolve(`${outputPath}.mp4`);
//       }
//     });
//   });
// };

import ffmpeg from "fluent-ffmpeg";
import { promises as fs } from "fs";

export const compressVideo = async (videoPath: string): Promise<string> => {
  const compressedVideoPath = `${videoPath}.compressed.mp4`;
  await fs.rename(videoPath, compressedVideoPath);

  return new Promise((resolve, reject) => {
    ffmpeg(compressedVideoPath)
      .videoCodec("libx264")
      .audioCodec("aac")
      .format("mp4")
      .size("640x?") // maintain aspect ratio
      .autopad(true)
      .on("end", () => {
        resolve(compressedVideoPath);
      })
      .on("error", (err) => {
        reject(err);
      })
      .save(compressedVideoPath);
  });
};
