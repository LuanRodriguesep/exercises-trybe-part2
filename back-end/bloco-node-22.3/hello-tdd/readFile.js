const fs = require('fs/promises')

const readFile = async (fileName) => {
  try {  
    const data = await fs.readFile(fileName)
    return data.toString()
  } catch (err) {
    return null;
  }
}

module.exports = readFile;