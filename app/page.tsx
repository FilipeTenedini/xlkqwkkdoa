import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FlaskRoundIcon as Flask,
  Atom,
  Microscope,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Scale,
  FileCheck,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import MoleculeAnimation from "@/components/molecule-animation"
import BannerAnimation from "@/components/banner-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Atom className="h-6 w-6 text-azul-medio" />
            <span className="text-xl font-bold">NexQuim</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-azul-medio transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-azul-medio transition-colors">
              Serviços
            </Link>
            <Link href="#equipe" className="text-sm font-medium hover:text-azul-medio transition-colors">
              Nossa Equipe
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-azul-medio transition-colors">
              Sobre Nós
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-azul-medio transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="bg-azul-medio hover:bg-azul-escuro">Solicitar Orçamento</Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-azul-escuro/90 to-azul-medio/90 z-10" />
          <BannerAnimation />
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
          >
            <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
              <div className="grid gap-4 max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Soluções em Química para sua Empresa
                </h1>
                <p className="text-lg text-azul-claro">
                  Consultoria especializada e análises químicas de alta precisão para diversos setores industriais.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button className="bg-white text-azul-escuro hover:bg-azul-claro">Nossos Serviços</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-gray-50 relative">
          <MoleculeAnimation />
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block p-3 rounded-full bg-azul-claro/20 mb-4">
                <Flask className="h-6 w-6 text-azul-medio" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Nossos Serviços</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl bg-white/70 p-2 rounded-md">
                Oferecemos uma ampla gama de serviços químicos para atender às necessidades específicas da sua empresa.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <FileText className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">Classificação Fiscal</h3>
                  <p className="mt-2 text-muted-foreground">
                    Identificação técnica e tributária de mercadorias (NCM/SH).
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <Scale className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">Tributação por NCM</h3>
                  <p className="mt-2 text-muted-foreground">
                    Consultas especializadas para definição de carga tributária.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <FileCheck className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">FDS e FEM</h3>
                  <p className="mt-2 text-muted-foreground">
                    Elaboração de fichas de dados de segurança conforme normas técnicas.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <Microscope className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">Ensaios Químicos</h3>
                  <p className="mt-2 text-muted-foreground">
                    Análises laboratoriais e emissão de laudos técnicos personalizados.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <ShieldCheck className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">Consultoria Regulatória</h3>
                  <p className="mt-2 text-muted-foreground">
                    Apoio técnico para conformidade ANVISA, MAPA, IBAMA e INMETRO.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-claro/20">
                    <FileSpreadsheet className="h-6 w-6 text-azul-medio" />
                  </div>
                  <h3 className="text-xl font-bold">Pareceres Técnicos</h3>
                  <p className="mt-2 text-muted-foreground">
                    Relatórios e pareceres para suporte jurídico e processos administrativos.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-azul-medio flex items-center gap-1">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="equipe" className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block p-3 rounded-full bg-azul-claro/20 mb-4">
                <GraduationCap className="h-6 w-6 text-azul-medio" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Nossa Equipe</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Conheça os profissionais altamente qualificados que estão por trás da NexQuim.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Primeiro Químico */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-azul-claro">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Josiel B. Domingos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-azul-escuro">Dr. Josiel B. Domingos</h3>
                <p className="text-azul-medio font-medium mb-4">Docente do Departamento de Química - UFSC</p>
                <p className="text-muted-foreground text-center md:text-left">
                  Atua com pesquisa aplicada nas áreas de catálise, biologia química e desenvolvimento de soluções
                  químicas para desafios industriais e regulatórios.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-azul-medio" />
                    <span>Doutorado em Química - UFSC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-azul-medio" />
                    <span>Pesquisador em Catálise e Biologia Química</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-azul-medio" />
                    <span>Especialista em Soluções Químicas Industriais</span>
                  </div>
                </div>
              </div>

              {/* Segundo Químico */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-azul-claro">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Msc. Cézar A. de Aguiar Arpini"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-azul-escuro">Msc. Cézar A. de Aguiar Arpini</h3>
                <p className="text-azul-medio font-medium mb-4">Doutorando em Química - UFSC</p>
                <p className="text-muted-foreground text-center md:text-left">
                  Especialista em caracterização de compostos e análise técnico-regulatória de produtos químicos, com
                  atuação voltada à interface entre pesquisa científica e demanda do setor produtivo.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-azul-medio" />
                    <span>Mestrado em Química - UFSC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-azul-medio" />
                    <span>Especialista em Caracterização de Compostos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-azul-medio" />
                    <span>Análise Técnico-Regulatória de Produtos Químicos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-block p-3 rounded-full bg-azul-claro/20 mb-4">
                  <Atom className="h-6 w-6 text-azul-medio" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Sobre Nós</h2>
                <p className="mt-4 text-muted-foreground">
                  A NexQuim nasceu da visão de profissionais apaixonados por ciência e inovação. Nossa missão é fornecer
                  soluções químicas inovadoras e de alta qualidade para empresas de diversos segmentos, com foco em
                  análises técnicas e conformidade regulatória.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Combinamos expertise acadêmica e experiência prática para oferecer serviços que atendem às
                  necessidades específicas de cada cliente, sempre com foco na excelência e na satisfação.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-azul-claro/20 p-2">
                      <Flask className="h-5 w-5 text-azul-medio" />
                    </div>
                    <div>
                      <h3 className="font-bold">Excelência Técnica</h3>
                      <p className="text-muted-foreground">
                        Profissionais com formação acadêmica e experiência prática.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-azul-claro/20 p-2">
                      <Microscope className="h-5 w-5 text-azul-medio" />
                    </div>
                    <div>
                      <h3 className="font-bold">Soluções Personalizadas</h3>
                      <p className="text-muted-foreground">Atendimento às necessidades específicas de cada cliente.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Laboratório NexQuim"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg mt-8">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Equipe NexQuim"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-2 bg-azul-claro/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-azul-escuro">Nossa Abordagem</h3>
                  <p className="text-muted-foreground mt-2">
                    Integramos conhecimento científico e demandas do mercado para oferecer soluções eficientes e
                    inovadoras que atendem às necessidades regulatórias e técnicas das empresas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-azul-escuro text-white relative overflow-hidden">
          <ParticleBackground />
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="inline-block p-3 rounded-full bg-azul-medio mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Entre em Contato</h2>
                <p className="mt-4 text-azul-claro">
                  Estamos prontos para ajudar sua empresa com soluções químicas personalizadas. Entre em contato para
                  discutir suas necessidades específicas.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-azul-claro" />
                    <span>(48) 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-azul-claro" />
                    <span>contato@nexquim.com.br</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-azul-claro" />
                    <span>Florianópolis, SC</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg text-gray-900">
                <h3 className="text-xl font-bold mb-4 text-azul-escuro">Envie uma mensagem</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="nome"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="assunto" className="text-sm font-medium">
                      Assunto
                    </label>
                    <input
                      id="assunto"
                      className="w-full rounded-md border border-gray-300 p-2"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-2"
                      placeholder="Sua mensagem"
                    />
                  </div>
                  <Button className="w-full bg-azul-medio hover:bg-azul-escuro">Enviar Mensagem</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Atom className="h-5 w-5 text-azul-medio" />
            <span className="text-lg font-bold">NexQuim</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 NexQuim.Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-azul-medio">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-azul-medio">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
