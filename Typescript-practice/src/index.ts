function log(message: string, userId?: string){
    let time = new Date().toLocaleTimeString()
    console.log(time,message,userId || 'Not signed in')
}

log('User signed in', 'A0001')

// 第二引数を使用しない
log('Page loaded')
