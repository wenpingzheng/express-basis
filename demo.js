
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// for(var i of Object.keys(obj)) {
//   console.log(i)
//   console.log(obj[i])
// }



// const generator = function* (){
//   const numbers = [1,2,3]
//   for(let number of numbers) {
//     yield console.log(number)
//   }
// }
// let result = generator()
// result.next()
// // 
// result.next()
// // 
// result.next()



// 测试读取一个文件内容的代码花多少时间
let fs = require('fs')
let time = process.hrtime()
let data = fs.readFileSync('demo.html', 'utf-8')
let diff = process.hrtime(time)
console.log(`读文件操作耗费%d秒,详细%d纳秒`, diff[0], diff[1])


// 怎么玩转SVN命令行？
/**
 * 
 * 拉取代码:svn checkout
 * 添加代码:svn add .
 * 更新代码:svn up .
 * 重置代码:svn revert -R .
 * 提交代码:svn commit -m "message"
 * 删除代码:svn delete
 * 
 * 
 */
