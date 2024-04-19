const { spawn } = require('child_process');

const repos = [
    {
        name: 'client',
        startArgs: ['run', 'dev']
    },
    {
        name: 'server',
        startArgs: ['run', 'server']
    }
];


// 启动子仓库的函数
function startRepo(proj) {
  const startCommand = 'npm';
  const startOptions = { cwd: `packages/${proj.name}`, stdio: 'inherit' };
  const child = spawn(startCommand, proj.startArgs, startOptions);
  child.on('error', (error) => {
    console.error(`Error starting ${proj.name}:${error.message}`);
  });
}

// 启动所有子仓库
repos.forEach(startRepo);
