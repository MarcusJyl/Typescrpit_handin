const { callbackify } = require('util')
const { filterDirMyPromise } = require('./filterdir')
 
 
async function tester() {
  try {
    const promise1 = await filterDirMyPromise("Folder1", ".js")
    const promise2 = await filterDirMyPromise("Folder2", ".js")
    const promise3 = await filterDirMyPromise("Folder3", ".js")
    const promise4 = await filterDirMyPromise("Folder4", ".js")
    const promise5 = await filterDirMyPromise("Folder5", ".js")
    const allParralel = await Promise.all([promise1, promise2, promise3, promise4, promise5])
    return allParralel.join(', ')
    } catch (err) {
    console.log(err)
  }
}
async funtion call(){ 
    const files = await tester()
    console.log(tester)
}
