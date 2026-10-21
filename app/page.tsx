'use client'

import { useState } from 'react'
import { BarChart3, Bell, BriefcaseBusiness, CalendarDays, ChevronDown, CircleDollarSign, FileText, Home, Menu, Mic2, MoreHorizontal, Plus, Search, Settings, Users, WalletCards, X } from 'lucide-react'

const nav = [
  { label: 'Visão geral', icon: Home },
  { label: 'Empresas', icon: BriefcaseBusiness },
  { label: 'Financeiro', icon: CircleDollarSign },
  { label: 'Contatos', icon: Users },
  { label: 'Comunidade', icon: Mic2 },
]

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const bars = [42, 58, 37, 65, 52, 74, 61, 83, 69, 91, 77, 100]

export default function Page() {
  const [active, setActive] = useState('Visão geral')
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(false)

  return (
    <main className="portal-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand"><span className="brand-mark"><Mic2 size={19} /></span><span>Voz<span className="brand-accent">Pro</span></span></div>
        <div className="workspace"><div className="avatar avatar-yellow">NF</div><div><strong>Nova Frequência</strong><small>Plano profissional</small></div><ChevronDown size={16} className="muted" /></div>
        <nav className="nav-list" aria-label="Navegação principal">
          <p className="nav-label">MENU PRINCIPAL</p>
          {nav.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => { setActive(label); setMenuOpen(false) }}><Icon size={18} /><span>{label}</span>{label === 'Comunidade' && <span className="nav-badge">3</span>}</button>)}
          <p className="nav-label nav-label-space">FERRAMENTAS</p>
          <button className="nav-item"><CalendarDays size={18} /><span>Agenda</span></button>
          <button className="nav-item"><FileText size={18} /><span>Documentos</span></button>
        </nav>
        <div className="sidebar-bottom"><button className="nav-item"><Settings size={18} /><span>Configurações</span></button><div className="profile"><div className="avatar avatar-purple">MS</div><div><strong>Marina Silva</strong><small>marina@novafreq.com</small></div><MoreHorizontal size={18} className="muted" /></div></div>
      </aside>

      <section className="content-area">
        <header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button><div className="breadcrumb"><span>Portal</span><span>/</span><strong>{active}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Buscar"><Search size={18} /></button><button className="icon-button notification-button" onClick={() => setNotifications(!notifications)} aria-label="Notificações"><Bell size={18} /><i /></button><button className="top-avatar">MS</button></div>{notifications && <div className="notification-pop"><strong>Notificações</strong><p>Nova proposta recebida da Rádio Horizonte.</p><p>Pagamento de R$ 1.200 confirmado.</p></div>}</header>
        <div className="page-content">
          <div className="page-heading"><div><p className="eyebrow">TERÇA-FEIRA, 16 DE SETEMBRO</p><h1>Bom dia, Marina <span>●</span></h1><p className="subtitle">Aqui está o resumo da sua operação hoje.</p></div><button className="primary-button"><Plus size={17} /> Nova movimentação</button></div>
          <div className="stat-grid"><StatCard icon={<CircleDollarSign size={20} />} label="Receita este mês" value="R$ 8.420,00" trend="+12,5%" detail="vs. mês anterior" color="yellow" /><StatCard icon={<BriefcaseBusiness size={20} />} label="Projetos ativos" value="12" trend="+3" detail="neste mês" color="purple" /><StatCard icon={<WalletCards size={20} />} label="A receber" value="R$ 3.850,00" trend="Próx. 7 dias" detail="em pagamentos" color="green" /><StatCard icon={<Users size={20} />} label="Novos contatos" value="28" trend="+18,2%" detail="vs. mês anterior" color="blue" /></div>
          <div className="main-grid"><section className="panel chart-panel"><div className="panel-heading"><div><h2>Visão financeira</h2><p>Receitas e despesas ao longo do ano</p></div><button className="select-button">2024 <ChevronDown size={15} /></button></div><div className="chart"><div className="chart-y"><span>10k</span><span>7,5k</span><span>5k</span><span>2,5k</span><span>0</span></div><div className="chart-bars">{bars.map((height, i) => <div className="bar-column" key={months[i]}><div className="bar-wrap"><div className="bar" style={{ height: `${height}%` }} /></div><span>{months[i]}</span></div>)}</div></div><div className="chart-legend"><span><i className="legend-dot yellow-dot" /> Receitas</span><span><i className="legend-dot purple-dot" /> Despesas</span><button>Ver relatório completo <span>→</span></button></div></section><section className="panel activity-panel"><div className="panel-heading"><div><h2>Atividade recente</h2><p>Últimas atualizações</p></div><button className="dots-button"><MoreHorizontal size={18} /></button></div><div className="activity-list"><Activity icon={<BriefcaseBusiness size={16} />} title="Novo projeto adicionado" desc="Campanha de verão • Rádio Mix" time="Há 2h" color="yellow" /><Activity icon={<CircleDollarSign size={16} />} title="Pagamento recebido" desc="R$ 1.200,00 • Spot comercial" time="Há 4h" color="green" /><Activity icon={<FileText size={16} />} title="Contrato assinado" desc="Podcast Conexão • 3 episódios" time="Ontem" color="purple" /><Activity icon={<Users size={16} />} title="Novo contato" desc="Carlos Mendes • Produtor" time="Ontem" color="blue" /></div><button className="view-all">Ver todas as atividades <span>→</span></button></section></div>
          <section className="panel projects-panel"><div className="panel-heading"><div><h2>Projetos em andamento</h2><p>Acompanhe seus trabalhos ativos</p></div><button className="outline-button">Ver todos <span>→</span></button></div><div className="project-table"><div className="table-head"><span>PROJETO</span><span>CLIENTE</span><span>STATUS</span><span>VALOR</span><span>ENTREGA</span><span /></div><Project name="Campanha de verão" client="Rádio Mix" status="Em produção" value="R$ 2.800,00" date="22 Set" initials="RM" color="yellow" /><Project name="Podcast Conexão" client="Agência Nexo" status="Aguardando aprovação" value="R$ 1.950,00" date="28 Set" initials="AN" color="purple" /><Project name="Spot institucional" client="TechCorp" status="Roteiro" value="R$ 1.200,00" date="04 Out" initials="TC" color="blue" /></div></section>
        </div>
        <footer className="mobile-nav">{nav.slice(0, 5).map(({ label, icon: Icon }) => <button key={label} className={active === label ? 'active' : ''} onClick={() => setActive(label)}><Icon size={19} /><span>{label.split(' ')[0]}</span></button>)}</footer>
      </section>
    </main>
  )
}

function StatCard({ icon, label, value, trend, detail, color }: { icon: React.ReactNode, label: string, value: string, trend: string, detail: string, color: string }) { return <div className="stat-card"><div className={`stat-icon ${color}`}>{icon}</div><div className="stat-info"><p>{label}</p><strong>{value}</strong><small className={color === 'purple' ? 'neutral' : 'positive'}>{trend} <em>{detail}</em></small></div><MoreHorizontal size={18} className="muted stat-more" /></div> }
function Activity({ icon, title, desc, time, color }: { icon: React.ReactNode, title: string, desc: string, time: string, color: string }) { return <div className="activity-row"><div className={`activity-icon ${color}`}>{icon}</div><div className="activity-copy"><strong>{title}</strong><span>{desc}</span></div><time>{time}</time></div> }
function Project({ name, client, status, value, date, initials, color }: { name: string, client: string, status: string, value: string, date: string, initials: string, color: string }) { return <div className="project-row"><div className="project-name"><div className={`avatar avatar-${color}`}>{initials}</div><strong>{name}</strong></div><span>{client}</span><span><b className={`status-dot ${color}`} />{status}</span><strong>{value}</strong><span>{date}</span><button className="dots-button"><MoreHorizontal size={17} /></button></div> }
