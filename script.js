const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

c.fillStyle = 'rgb(100,100,100)'
c.fillRect(10,10,40,40)