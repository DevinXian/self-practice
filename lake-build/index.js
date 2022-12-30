const fs = require('fs');
const crypto = require('crypto');

const yarnCacheBasePath = `${WORKSPACE}/yarn-cache`;
const srcBasePath = `${WORKSPACE}/${PROJECT_NAME}`;

const readFileSync = (file) => (fs.existsSync(file) ? fs.readFileSync(file) : '');

// 检查当前目录下 yarn.lock package.json 及 yarn-cache下的 node_modules
const checkNpmCached = (baseDir, microPath = '') => {
  const dir = baseDir + microPath;
  const lockFile = `${dir}/yarn.lock`;
  const packageFile = `${dir}/package.json`;

  // 对应缓存目录
  const cacheDir = yarnCacheBasePath + microPath;
  const lastMD5File = `${cacheDir}/md5.txt`;

  // 确保cacheDir存在
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }

  const lockData = readFileSync(lockFile);
  const pkg = require(packageFile);
  const dependencies = { ...pkg.dependencies, ...pkg.devDependencies };
  const depStr = Object.keys(dependencies)
    .sort()
    .map((key) => `${key}:${dependencies[key]}`)
    .join(',');
  const md5 = crypto
    .createHash('md5')
    .update(depStr + lockData)
    .digest('hex');

  const lastMD5 = readFileSync(lastMD5File);
  const isMD5Changed = md5 === lastMD5;

  if (isMD5Changed) {
    fs.writeFileSync(lastMD5File, md5);
  }

  const cacheExist = fs.existsSync(`${cacheDir}/node_modules`);

  // 缓存有效
  return !isMD5Changed && cacheExist;
};

setEnv('MAIN_NPM_DEPENDENCIES_CACHED', checkNpmCached(srcBasePath));
setEnv('CSIG_NPM_DEPENDENCIES_CACHED', checkNpmCached(srcBasePath, '/micro/csig'));
setEnv('PCG_NPM_DEPENDENCIES_CACHED', checkNpmCached(srcBasePath, '/micro/pcg'));
