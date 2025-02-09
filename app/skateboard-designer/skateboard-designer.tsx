"use client"

import type React from "react"
import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RotateCw, Download } from "lucide-react"
import SkateboardTemplate from "./skateboard-template"
import html2canvas from "html2canvas"
import * as pdfjsLib from 'pdfjs-dist'

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

const SkateboardDesigner: React.FC = () => {
  const [image, setImage] = useState<string | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 2976, height: 720 })
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [showSnapLines, setShowSnapLines] = useState({ vertical: false, horizontal: false })
  const [sizePercentage, setSizePercentage] = useState(100)
  const [isDarkImage, setIsDarkImage] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)

  const skateboardMaskBase64 =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk3NiIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAyOTc2IDcyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI2MTYsMEMyODE0LjgyLDAsMjk3NiwxNjEuMTgsMjk3NiwzNjBDMjk3Niw1NTguODIsMjgxNC44Miw3MjAsMjYxNiw3MjBIMzYwQzE2MS4xOCw3MjAsMCw1NTguODIsMCwzNjBDMCwxNjEuMTgsMTYxLjE4LDAsMzYwLDBIMjYxNloiLz48L3N2Zz4="

  const calculateAverageBrightness = useCallback((imageElement: HTMLImageElement) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return 0

    canvas.width = imageElement.width
    canvas.height = imageElement.height
    ctx.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    let sum = 0

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      sum += (r + g + b) / 3
    }

    const averageBrightness = sum / (imageData.width * imageData.height)
    return averageBrightness / 255
  }, [])

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Check file size (minimum 100KB recommended for decent quality)
    const MIN_FILE_SIZE = 100 * 1024; // 100KB in bytes
    if (file.size < MIN_FILE_SIZE && file.type !== 'application/pdf') {
      alert('The image quality is too low. Please upload a higher quality image (minimum 100KB).')
      return
    }

    if (file.type === 'application/pdf') {
      // Handle PDF file
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 1.0 })

      // Create canvas to render PDF
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) return

      canvas.height = viewport.height
      canvas.width = viewport.width

      // Render PDF page to canvas
      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise

      // Convert canvas to image data URL
      const imageDataUrl = canvas.toDataURL('image/png')
      setImage(imageDataUrl)

      if (containerRef.current) {
        const img = new Image()
        img.onload = () => {
          const containerWidth = containerRef.current!.offsetWidth
          const containerHeight = containerRef.current!.offsetHeight
          const imageAspectRatio = img.width / img.height

          let newWidth, newHeight

          if (containerWidth / containerHeight > imageAspectRatio) {
            newHeight = containerHeight
            newWidth = newHeight * imageAspectRatio
          } else {
            newWidth = containerWidth
            newHeight = newWidth / imageAspectRatio
          }

          setSize({ width: newWidth, height: newHeight })
          setPosition({
            x: (containerWidth - newWidth) / 2,
            y: (containerHeight - newHeight) / 2,
          })

          const brightness = calculateAverageBrightness(img)
          setIsDarkImage(brightness < 0.5)
        }
        img.src = imageDataUrl
      }
    } else {
      // Handle image file
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          // Check image dimensions (minimum 1000px on shortest side recommended)
          const MIN_DIMENSION = 1000;
          if (img.width < MIN_DIMENSION || img.height < MIN_DIMENSION) {
            alert('The image resolution is too low. Please upload a higher resolution image (minimum 1000px on shortest side).')
            setImage(null)
            return
          }

          if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            const containerHeight = containerRef.current.offsetHeight
            const imageAspectRatio = img.width / img.height

            let newWidth, newHeight

            if (containerWidth / containerHeight > imageAspectRatio) {
              newHeight = containerHeight
              newWidth = newHeight * imageAspectRatio
            } else {
              newWidth = containerWidth
              newHeight = newWidth / imageAspectRatio
            }

            setSize({ width: newWidth, height: newHeight })
            setPosition({
              x: (containerWidth - newWidth) / 2,
              y: (containerHeight - newHeight) / 2,
            })

            const brightness = calculateAverageBrightness(img)
            setIsDarkImage(brightness < 0.5)
          }
          setRotation(0)
          setSizePercentage(100)
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
    setRotation(0)
    setSizePercentage(100)
  }

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    },
    [position],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && containerRef.current) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y

        const containerRect = containerRef.current.getBoundingClientRect()
        const snapThreshold = 10
        const centerX = containerRect.width / 2 - size.width / 2
        const centerY = containerRect.height / 2 - size.height / 2

        setShowSnapLines({
          vertical: Math.abs(newX - centerX) < snapThreshold,
          horizontal: Math.abs(newY - centerY) < snapThreshold,
        })

        setPosition({
          x: Math.abs(newX - centerX) < snapThreshold ? centerX : newX,
          y: Math.abs(newY - centerY) < snapThreshold ? centerY : newY,
        })
      }

      if (isResizing && containerRef.current) {
        const newWidth = resizeStart.width + (e.clientX - resizeStart.x)
        const newHeight = resizeStart.height + (e.clientY - resizeStart.y)

        setSize({
          width: Math.max(newWidth, 50),
          height: Math.max(newHeight, 50),
        })
      }
    },
    [isDragging, isResizing, dragStart, resizeStart, size],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsResizing(false)
    setShowSnapLines({ vertical: false, horizontal: false })
  }, [])

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsResizing(true)
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height,
      })
    },
    [size],
  )

  const handleRotate = useCallback(() => {
    setRotation((prevRotation) => (prevRotation + 90) % 360)
  }, [])

  const handleExport = useCallback(() => {
    if (!designRef.current) return

    html2canvas(designRef.current, {
      backgroundColor: null,
      scale: 4, // Increase scale for higher resolution
      useCORS: true, // Enable CORS for better image quality
      allowTaint: true, // Allow cross-origin images
      logging: false, // Disable logging for better performance
      imageTimeout: 0, // Remove timeout for image loading
    }).then((canvas) => {
      const link = document.createElement("a")
      link.download = "skateboard-design.png"
      link.href = canvas.toDataURL("image/png", 1.0) // Use maximum quality
      link.click()
    })
  }, [])

  const handleSizeChange = useCallback((value: number[]) => {
    const newPercentage = value[0]
    setSizePercentage(newPercentage)
    if (containerRef.current && imageRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const containerHeight = containerRef.current.offsetHeight
      const imageAspectRatio = imageRef.current.naturalWidth / imageRef.current.naturalHeight

      let newWidth, newHeight

      if (containerWidth / containerHeight > imageAspectRatio) {
        newHeight = (containerHeight * newPercentage) / 100
        newWidth = newHeight * imageAspectRatio
      } else {
        newWidth = (containerWidth * newPercentage) / 100
        newHeight = newWidth / imageAspectRatio
      }

      setSize({ width: newWidth, height: newHeight })
      setPosition({
        x: (containerWidth - newWidth) / 2,
        y: (containerHeight - newHeight) / 2,
      })
    }
  }, [])

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging || isResizing) {
        handleMouseMove(e as unknown as React.MouseEvent)
      }
    }

    window.addEventListener("mouseup", handleGlobalMouseUp)
    window.addEventListener("mousemove", handleGlobalMouseMove)

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
      window.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [isDragging, isResizing, handleMouseMove])

  return (
    <div className="p-6 relative w-full max-w-3xl mx-auto">
      <div ref={containerRef} className="relative px-[1px]" style={{ paddingBottom: "25%" }}>
        <div ref={designRef} className="absolute inset-0 overflow-hidden">
          {image && (
            <div
              className="absolute inset-0"
              onMouseDown={handleMouseDown}
              style={{
                maskImage: `url(${skateboardMaskBase64})`,
                WebkitMaskImage: `url(${skateboardMaskBase64})`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            >
              <div
                className="absolute"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  width: `${size.width}px`,
                  height: `${size.height}px`,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <img
                  ref={imageRef}
                  src={image || "/placeholder.svg"}
                  alt="Uploaded design"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
                <div
                  className="absolute bg-blue-500 cursor-se-resize w-4 h-4 -bottom-2 -right-2 z-10"
                  onMouseDown={handleResizeStart}
                />
              </div>
            </div>
          )}
          <SkateboardTemplate
            className="absolute inset-0 w-full h-full pointer-events-none"
            color={isDarkImage ? "white" : "black"}
          />
        </div>
        {isDragging && showSnapLines.vertical && (
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-500 pointer-events-none" />
        )}
        {isDragging && showSnapLines.horizontal && (
          <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-500 pointer-events-none" />
        )}
      </div>
      <div className="mt-4 flex flex-col space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.pdf"
          className="hidden"
          id="file-upload"
        />
        <div className="flex space-x-4">
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              Upload Design
            </label>
          </Button>
          {image && (
            <>
              <Button variant="secondary" onClick={handleRotate}>
                <RotateCw className="mr-2 h-4 w-4" />
                Rotate
              </Button>
              <Button onClick={handleExport}>
                <Download className="mr-2 h-4 w-4" />
                Export Image
              </Button>
            </>
          )}
        </div>
        {image && (
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Image Size:</span>
            <Slider value={[sizePercentage]} onValueChange={handleSizeChange} max={400} step={1} className="w-64" />
            <span className="text-sm font-medium">{sizePercentage}%</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkateboardDesigner

