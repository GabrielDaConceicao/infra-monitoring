"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Server,
  Cloud,
  Database,
  Shield,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["inicio", "sobre", "tecnologias", "projetos", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const technologies = [
    {
      name: "Redes",
      icon: <Server className="w-8 h-8" />,
      description: "Configuração e gerenciamento de infraestrutura de rede",
    },
    { name: "Linux", icon: <Code className="w-8 h-8" />, description: "Administração avançada de sistemas Linux" },
    {
      name: "Docker",
      icon: <Database className="w-8 h-8" />,
      description: "Containerização e orquestração de aplicações",
    },
    { name: "Python", icon: <Code className="w-8 h-8" />, description: "Automação e desenvolvimento de scripts" },
    { name: "Terraform", icon: <Cloud className="w-8 h-8" />, description: "Infrastructure as Code (IaC)" },
    { name: "Kubernetes", icon: <Cpu className="w-8 h-8" />, description: "Orquestração de containers em produção" },
  ]

  const projects = [
    {
      title: "Terraform + AWS",
      description: "Infraestrutura como código usando Terraform para provisionamento de recursos AWS",
      link: "https://github.com/GabrielDaConceicao/InstanceEC2-AWS",
      image: "/terafformaws.png",
    },
    {
      title: "Docker + AppService",
      description: "Containerização de aplicações e deploy em Azure App Service",
      link: "https://github.com/GabrielDaConceicao/AppService-Docker",
      image: "/docker-azure-app-service.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-black text-xl text-primary">Gabriel da Conceição</div>
            <div className="hidden md:flex space-x-6">
              {["inicio", "sobre", "tecnologias", "projetos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div
          className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-float">
            <Shield className="w-20 h-20 mx-auto mb-6 text-primary" />
          </div>
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
            DevOps
            <span className="text-primary block">Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            DevOps Engineer com experiência em SRE. Sempre busco o melhor para mim e para os outros. Com minha
            experiência, atuo como um facilitador entre Desenvolvedores e equipes de Operações/Infraestrutura,
            aprimorando a produção e gerando impactos positivos para toda a equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("sobre")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
            >
              Conheça meu trabalho
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projetos")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver projetos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-heading font-black text-3xl md:text-4xl mb-6 text-primary">MAIS SOBRE MIM!</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Atualmente estou cursando Redes de Computadores pela Anhembi Morumbi. Atualmente, trabalho em outra
                área, mas estou sempre em busca de aprender mais. Sou apaixonado por tocar contrabaixo e passar tempo no
                computador.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Desde o início de 2024, comecei a explorar o universo DevOps e, rapidamente, fui aprendendo a utilizar
                ferramentas essenciais como Docker, Linux, redes, além de conceitos como HTTPS e certificados SSL.
                Também adquiri conhecimento em outras tecnologias importantes no mundo DevOps, como AWS, pipelines com
                Azure DevOps, GitLab, entre várias outras.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.instagram.com/gabrieldaconceicao27/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/GabrielDaConceicao" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/gabriel-conceição-4a8b492b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-pulse-glow">
                  <img
                    src="/gabriel-photo1.jpeg"
                    alt="Gabriel da Conceição"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-center mb-12 text-primary">TECNOLOGIAS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={tech.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {tech.icon}
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{tech.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-center mb-12 text-primary">PROJETOS</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading font-bold flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver no GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="https://github.com/GabrielDaConceicao" target="_blank" rel="noopener noreferrer">
                Ver mais projetos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-center mb-4">
            FALE <span className="text-primary">COMIGO!</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Vamos conversar sobre oportunidades e projetos interessantes
          </p>
          <Card>
            <CardContent className="p-6">
              <form action="https://formsubmit.co/gconceicao631@gmail.com" method="post" className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input type="email" id="email" name="email" placeholder="seu@email.com" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="celular" className="block text-sm font-medium mb-2">
                    Celular
                  </label>
                  <Input type="tel" id="celular" name="celular" placeholder="(11) 99999-9999" className="w-full" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Sua mensagem..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-xl mb-2">Gabriel da Conceição</h3>
              <p className="text-primary-foreground/80">DevOps Engineer</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://www.instagram.com/gabrieldaconceicao27/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://wa.me/45999154723" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a
                  href="https://www.linkedin.com/in/gabriel-conceição-4a8b492b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:gconceicao631@gmail.com" className="hover:text-primary-foreground transition-colors">
                gconceicao631@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
