// Trial only: writes the NAMES (never values) of build env variables to public/ci-env-<stage>.txt.
import { writeFileSync } from 'node:fs';
const stage = process.argv[2];
const names = Object.keys(process.env).filter(n => /CLOUDFLARE|TOKEN|API|WORKERS|CF_|SECRET|KEY/i.test(n)).sort();
const text = `ENV-NAMES [${stage}]: ${names.join(' ') || '(none)'}\nWORKERS_CI_BRANCH=${process.env.WORKERS_CI_BRANCH || '(unset)'} WORKERS_CI_COMMIT_SHA=${process.env.WORKERS_CI_COMMIT_SHA || '(unset)'}\n`;
console.log(text);
writeFileSync(`public/ci-env-${stage}.txt`, text);
