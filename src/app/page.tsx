'use client';

import React, { useState } from 'react';
import { BookOpen, Cpu, Sparkles, Terminal, Globe, Github, Mail, Send, ChevronRight, Binary, Orbit, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'books' | 'tech' | 'lore'>('all');

  const books = [
    {
      id: 'eteria',
      title: 'Етерія (Eteryya)',
      genre: 'Hard Sci-Fi / Резонансна Метафізика',
      desc: 'Монументальна сага про виживання людини в умовах нульового паралаксу, вимивання кальцію під тиском та боротьби із Секвестром X-0.',
      status: 'У процесі написання',
      tags: ['POLER[Ψ]', 'Сфера Предела', 'Нокс & Рэй', 'Секвестр X-0'],
      color: 'from-cyan-500/20 to-blue-600/20',
      border: 'border-cyan-500/30'
    },
    {
      id: 'cassiopeia',
      title: 'Касіопея: Відлуння Глибокого Яру',
      genre: 'Кібер-археологія / Соціальна антиутопія',
      desc: 'Історія виходу з техногенної матричної Ями. Від первобытного костра Ліани до квантового резонатора Скії та зламу контурів Каїна.',
      status: 'Канон зафіксовано',
      tags: ['Планковська геодезична', 'Скія (Редактор)', 'Роан', 'Верис 1000+'],
      color: 'from-indigo-500/20 to-purple-600/20',
      border: 'border-indigo-500/30'
    },
    {
      id: 'silence',
      title: 'The Accountant of Silence (Бухгалтерія Довіри)',
      genre: 'Економічний трилер / Кіберпанк',
      desc: 'Архітектура нульового фактора на Одеському розломі. Деконструкція кримінальних та правових систем Уламка.',
      status: 'Дослідження',
      tags: ['Малус', 'Картель', 'Злам ринків', 'Lex Σύνθησις'],
      color: 'from-amber-500/20 to-orange-600/20',
      border: 'border-amber-500/30'
    }
  ];

  const technologies = [
    {
      title: 'POLER-Engine (Rust Core)',
      category: 'System Architecture / Search Engine',
      desc: 'Пошуково-аналітичний движок нового покоління. Поєднує IIR-резонанс поля R(t), інформаційну щільність ε, граф сутностей K-Hop та AIDDE Impact-аналіз.',
      version: 'v0.16.0',
      features: ['Pure Rust gix', 'Chromium CDP Crawler', 'NotebookLM Direct RPC', 'Zero-Copy &str Stream'],
      link: '#'
    },
    {
      title: 'POLER[Ψ] Attention Theory',
      category: 'Mathematical Physics / Cognitive Flow',
      desc: 'Математичний оператор уваги з CORDIC-квантовою ренормалізацією, проектором заборонених напрямків та дисипатором D = LLᵀ.',
      version: 'v6.3-Closed',
      features: ['Планковська геодезична', 'Ентропійний борг V = -k·ΔH', 'Синхронізація 7.8 Гц'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08090d]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090d]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              V
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">Vitalij <span className="text-cyan-400 font-mono text-xs px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">ARCHITECT</span></span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#worlds" className="hover:text-cyan-400 transition-colors">Всесвіти</a>
            <a href="#tech" className="hover:text-cyan-400 transition-colors">POLER-Engine</a>
            <a href="#lore" className="hover:text-cyan-400 transition-colors">Канон</a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5">
              <span>Зв'язок</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-mono text-cyan-300 mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Синтез Hard Sci-Fi, Математичної Фізики та Автономних Систем</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Архітектура Світів & <br />
            <span className="text-gradient">Квантова Механіка Сенсу</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Проектування комплексних науково-фантастичних всесвітів («Етерія», «Касіопея») та розробка суверенного пошуково-аналітичного ядра <strong>POLER-Engine</strong> на Rust.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#worlds" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Дослідити Книги</span>
            </a>
            <a href="http://localhost:3001" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium transition-all flex items-center gap-2 shadow-sm">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>POLER Web GUI (Live)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Universe Section */}
      <section id="worlds" className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-10 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Orbit className="w-7 h-7 text-cyan-400" />
              <span>Літературні Всесвіти & Романи</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">Оригінальні цикли наукової фантастики</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((b) => (
            <div key={b.id} className={`rounded-2xl bg-gradient-to-b ${b.color} p-6 border ${b.border} backdrop-blur-sm flex flex-col justify-between hover:scale-[1.02] transition-all group`}>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-3">
                  <span>{b.genre}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700">{b.status}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{b.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">{b.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {b.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700/60 flex items-center justify-center gap-1 transition-colors">
                  <span>Читати синопсис & канон</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack / POLER Engine Section */}
      <section id="tech" className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-10 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-indigo-400" />
              <span>Технологічний Стек: POLER-Engine</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">Високопродуктивні математичні та пошукові алгоритми (Rust)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((t) => (
            <div key={t.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400">{t.category}</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 font-mono text-xs border border-indigo-800/50">{t.version}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">{t.desc}</p>
              </div>

              <div className="border-t border-slate-800/80 pt-4">
                <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Ключові модулі:</div>
                <div className="grid grid-cols-2 gap-2">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="mt-auto border-t border-slate-800/80 bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span>Vitalij</span>
              <span className="text-xs font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">2026</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Суверенний канон та розробка відкритих систем.</p>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              <span>Gitea Hub</span>
            </a>
            <a href="http://localhost:3001" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Terminal className="w-4 h-4" />
              <span>POLER GUI</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
