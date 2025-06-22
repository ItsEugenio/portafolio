import { exec } from 'child_process';

const port = process.env.PORT || 4321;

exec(`astro preview --port ${port} --host`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting preview: ${error.message}`);
    return;
  }
  if (stderr) console.error(stderr);
  console.log(stdout);
});
