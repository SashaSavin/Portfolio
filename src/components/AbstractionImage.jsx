import React, { useEffect, useRef } from 'react'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateAbstractImage(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')

  const backgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
    0,
    255
  )}, ${getRandomNumber(0, 255)})`
  context.fillStyle = backgroundColor
  context.fillRect(0, 0, width, height)

  const numShapes = getRandomNumber(5, 10)
  for (let i = 0; i < numShapes; i++) {
    const shapeColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
      0,
      255
    )}, ${getRandomNumber(0, 255)})`
    context.fillStyle = shapeColor
    const shapeWidth = getRandomNumber(10, 100)
    const shapeHeight = getRandomNumber(10, 100)
    const shapeX = getRandomNumber(0, width - shapeWidth)
    const shapeY = getRandomNumber(0, height - shapeHeight)
    context.fillRect(shapeX, shapeY, shapeWidth, shapeHeight)
  }

  return canvas.toDataURL()
}

function AbstractImage({ width, height }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const abstractImage = generateAbstractImage(width, height)

    const image = new Image()
    image.onload = () => {
      context.drawImage(image, 0, 0)
    }
    image.src = abstractImage
  }, [width, height])

  return (
    <canvas
      className='rounded-md opacity-60'
      ref={canvasRef}
      width={width}
      height={height}
    />
  )
}


export default AbstractImage