"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface ImageStackItem {
  id: number
  src: string
  alt: string
  title?: string
  capacity?: string
  location?: string
}

export function HorizontalImageStack({
  images,
  onImageChange,
}: {
  images: ImageStackItem[]
  onImageChange?: (index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400

  const navigate = useCallback((newDirection: number) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      const newIndex = newDirection > 0
        ? prev === images.length - 1 ? 0 : prev + 1
        : prev === 0 ? images.length - 1 : prev - 1
      onImageChange?.(newIndex)
      return newIndex
    })
  }, [images.length, onImageChange])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      navigate(1)
    } else if (info.offset.x > threshold) {
      navigate(-1)
    }
  }


  useEffect(() => {
    // Gallery now only supports arrow buttons and dragging
  }, [])

  const getCardStyle = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 5, rotateY: 0 }
    } else if (diff === -1) {
      return { x: -180, scale: 0.82, opacity: 0.6, zIndex: 4, rotateY: 8 }
    } else if (diff === -2) {
      return { x: -320, scale: 0.7, opacity: 0.3, zIndex: 3, rotateY: 15 }
    } else if (diff === 1) {
      return { x: 180, scale: 0.82, opacity: 0.6, zIndex: 4, rotateY: -8 }
    } else if (diff === 2) {
      return { x: 320, scale: 0.7, opacity: 0.3, zIndex: 3, rotateY: -15 }
    } else {
      return { x: diff > 0 ? 450 : -450, scale: 0.6, opacity: 0, zIndex: 0, rotateY: diff > 0 ? -20 : 20 }
    }
  }

  const isVisible = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-4 pb-20 bg-white overflow-hidden" id="gallery-container">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volto-primary/[0.03] blur-3xl" />
      </div>

      {/* Info Section */}
      <div className="relative z-10 mb-8 text-center max-w-2xl px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{currentImage.title}</h3>
        <div className="flex flex-wrap gap-6 justify-center text-gray-600">
          {currentImage.location && (
            <div>
              <p className="text-sm text-gray-500">Localisation</p>
              <p className="font-semibold text-gray-900">{currentImage.location}</p>
            </div>
          )}
          {currentImage.capacity && (
            <div>
              <p className="text-sm text-gray-500">Puissance</p>
              <p className="font-semibold text-gray-900">{currentImage.capacity}</p>
            </div>
          )}
        </div>
      </div>

      {/* Card Stack with Arrow Buttons */}
      <div className="relative h-[350px] w-full flex items-center justify-center px-4">
        {/* Left Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-[5%] md:left-[10%] lg:left-[15%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white text-volto-primary hover:bg-volto-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Cards */}
        <div className="relative h-[350px] w-full flex items-center justify-center" style={{ perspective: "1200px" }}>
          {images.map((image, index) => {
            if (!isVisible(index)) return null
            const style = getCardStyle(index)
            const isCurrent = index === currentIndex

            return (
              <motion.div
                key={image.id}
                className="absolute cursor-grab active:cursor-grabbing"
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                drag={isCurrent ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: style.zIndex,
                }}
              >
                <div
                  className="relative h-[280px] w-[360px] overflow-hidden rounded-2xl bg-white ring-1 ring-border/20"
                  style={{
                    boxShadow: isCurrent
                      ? "0 25px 50px -12px rgba(16, 193, 165, 0.15), 0 0 0 1px rgba(16, 193, 165, 0.05)"
                      : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Card inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full"
                    draggable={false}
                    priority={isCurrent}
                  />

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => navigate(1)}
          className="absolute right-[5%] md:right-[10%] lg:right-[15%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white text-volto-primary hover:bg-volto-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Navigation dots - horizontal at bottom */}
      <div className="relative z-10 mt-12 flex gap-2 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index)
                onImageChange?.(index)
              }
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "h-2.5 w-8 bg-volto-primary"
                : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="relative z-10 mt-8">
        <div className="flex items-center gap-4 text-center">
          <span className="text-3xl font-light text-volto-primary tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-px w-6 bg-gray-300" />
          <span className="text-sm text-gray-600 tabular-nums">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}
