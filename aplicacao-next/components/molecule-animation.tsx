"use client"

import { useEffect, useRef } from "react"

interface MoleculeNode {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
}

interface Bond {
  from: number
  to: number
}

export default function MoleculeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuração inicial
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = canvas.clientHeight)

    // Criar moléculas aleatórias
    const molecules: MoleculeNode[] = []
    const bonds: Bond[] = []

    const createMolecules = () => {
      molecules.length = 0
      bonds.length = 0

      // Criar átomos - quantidade baseada no tamanho da tela, mas reduzida para ficar mais sutil
      const atomCount = Math.min(Math.floor((width * height) / 50000), 15)

      for (let i = 0; i < atomCount; i++) {
        molecules.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 6 + 8, // Tamanho reduzido
          color: i % 3 === 0 ? "rgb(0, 74, 152)" : i % 3 === 1 ? "rgb(0, 93, 191)" : "rgb(66, 184, 253)",
          vx: (Math.random() - 0.5) * 0.3, // Velocidade reduzida
          vy: (Math.random() - 0.5) * 0.3, // Velocidade reduzida
        })
      }

      // Criar ligações entre átomos
      for (let i = 0; i < molecules.length; i++) {
        const connections = Math.floor(Math.random() * 2) + 1
        for (let j = 0; j < connections; j++) {
          const target = Math.floor(Math.random() * molecules.length)
          if (target !== i) {
            bonds.push({ from: i, to: target })
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = canvas.clientHeight
      createMolecules()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Desenhar ligações com opacidade reduzida
      ctx.lineWidth = 1.5 // Linha mais fina
      bonds.forEach((bond) => {
        const from = molecules[bond.from]
        const to = molecules[bond.to]

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = "rgba(66, 184, 253, 0.15)" // Opacidade reduzida
        ctx.stroke()
      })

      // Atualizar e desenhar átomos
      molecules.forEach((molecule, index) => {
        // Movimento natural
        molecule.x += molecule.vx
        molecule.y += molecule.vy

        // Verificar bordas
        if (molecule.x < molecule.radius || molecule.x > width - molecule.radius) {
          molecule.vx *= -1
        }

        if (molecule.y < molecule.radius || molecule.y > height - molecule.radius) {
          molecule.vy *= -1
        }

        // Interação com o mouse
        const dx = mouseRef.current.x - molecule.x
        const dy = mouseRef.current.y - molecule.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - distance) / 150
          molecule.vx -= Math.cos(angle) * force * 0.15 // Força reduzida
          molecule.vy -= Math.sin(angle) * force * 0.15 // Força reduzida
        }

        // Desenhar átomo com opacidade reduzida
        ctx.beginPath()
        ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2)

        // Extrair componentes RGB e aplicar opacidade reduzida
        let color = molecule.color
        if (color.startsWith("rgb(")) {
          color = color.replace("rgb(", "").replace(")", "")
          const [r, g, b] = color.split(",").map((c) => Number.parseInt(c.trim()))
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.4)` // Opacidade reduzida para 0.4
        } else {
          ctx.fillStyle = molecule.color
        }

        ctx.fill()

        // Adicionar brilho com opacidade reduzida
        ctx.beginPath()
        ctx.arc(
          molecule.x - molecule.radius * 0.3,
          molecule.y - molecule.radius * 0.3,
          molecule.radius * 0.2,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)" // Opacidade reduzida
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    createMolecules()
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
