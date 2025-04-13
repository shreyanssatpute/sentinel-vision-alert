
"use client"

import React, { useEffect, useRef } from "react"

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Animation variables
    const particles: Particle[] = []
    const particleCount = 50
    const colors = ["#10b981", "#8b5cf6", "#06b6d4"]

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() * canvas.width) / window.devicePixelRatio,
        y: (Math.random() * canvas.height) / window.devicePixelRatio,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 1,
          y: (Math.random() - 0.5) * 1,
        },
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation function
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(229, 231, 235, 0.5)"
      ctx.lineWidth = 0.5

      const gridSize = 30
      for (let x = 0; x < canvas.width / window.devicePixelRatio; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height / window.devicePixelRatio)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height / window.devicePixelRatio; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width / window.devicePixelRatio, y)
        ctx.stroke()
      }

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Update position
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width / window.devicePixelRatio) {
          particle.velocity.x *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height / window.devicePixelRatio) {
          particle.velocity.y *= -1
        }
      })

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Start animation
    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Particle type
  type Particle = {
    x: number
    y: number
    radius: number
    color: string
    velocity: {
      x: number
      y: number
    }
    opacity: number
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30"></div>

      {/* Overlay elements to make it look like a security system */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        <span className="text-xs text-gray-700 font-mono">LIVE FEED</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-xs text-gray-700 font-mono mb-1">CAMERA 1</div>
        <div className="w-full h-1 bg-gray-200 overflow-hidden rounded-full">
          <div className="h-full bg-mint animate-pulse w-3/4"></div>
        </div>
      </div>

      <div className="absolute top-4 right-4 text-xs text-gray-700 font-mono">{new Date().toLocaleTimeString()}</div>
    </div>
  )
}

export default HeroAnimation
