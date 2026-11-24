import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');cpSync('public','dist',{recursive:true});cpSync('src','dist/src',{recursive:true});cpSync('index.html','dist/index.html');console.log('Static site ready in dist/');
