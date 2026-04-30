import { useEffect } from 'react'

type RevealOptions = {
  rootMargin?: string
  threshold?: number
}

function useRevealOnScroll({ rootMargin = '0px 0px -10% 0px', threshold = 0.12 }: RevealOptions) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) return

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    if (reduceMotion) {
      for (const n of nodes) n.classList.add('isVisible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          ;(e.target as HTMLElement).classList.add('isVisible')
          io.unobserve(e.target)
        }
      },
      { root: null, rootMargin, threshold },
    )

    for (const n of nodes) io.observe(n)

    return () => io.disconnect()
  }, [rootMargin, threshold])
}

function App() {
  useRevealOnScroll({})
  const baseUrl = import.meta.env.BASE_URL

  return (
    <>
      <header className="section">
        <div className="container grid2">
          <div className="reveal" data-reveal>
            <div className="eyebrow">
              <span className="eyebrowDot" aria-hidden="true" />
              Roadmap цифровизации • RedPanda Insurance × Dobro Clinic • Прага
            </div>
            <h1 className="h1">Единая цифровая платформа для страхования и медицины — в одном приложении.</h1>
            <p className="lead">
              Проект описывает стратегию, как за 36 месяцев перейти от разрозненных процессов к целостному клиентскому
              опыту: меньше ручной рутины, быстрее обслуживание, выше удержание.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#roadmap">
                Смотреть план внедрения
              </a>
              <a className="btn btnGhost" href="#features">
                Функции приложения
              </a>
            </div>

            <div className="kpiRow" style={{ marginTop: 28 }}>
              <div className="kpi reveal" data-reveal>
                <div className="kpiNum">40%</div>
                <div className="kpiLabel">клиентов активно используют приложение</div>
              </div>
              <div className="kpi reveal" data-reveal>
                <div className="kpiNum">−25%</div>
                <div className="kpiLabel">сокращение времени обслуживания</div>
              </div>
              <div className="kpi reveal" data-reveal>
                <div className="kpiNum">36</div>
                <div className="kpiLabel">месяцев до измеримого эффекта</div>
              </div>
            </div>
          </div>

          <div className="reveal" data-reveal>
            <div className="imgFrame">
              <img
                className="img"
                src={`${baseUrl}assets-redpanda-roadmap.jpg`}
                alt="Roadmap digitalizace — RedPanda"
              />
            </div>
            <div className="fineprint">
              Визуал из проекта: дорожная карта цифровизации и прототип ключевых экранов мобильного приложения.
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="context">
          <div className="container">
            <div className="reveal" data-reveal>
              <h2 className="h2">Контекст и точка старта</h2>
              <p className="lead">
                Компания уже опирается на сильные преимущества: понятная целевая аудитория, связка страхования и
                медицинской заботы, гибкость в изменениях. Основной потенциал роста — в цифровизации.
              </p>
            </div>

            <div className="pillGrid">
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Сейчас</div>
                <div className="pillText">
                  Процессы частично фрагментированы: ручные шаги, разные точки данных, отсутствие единого «центра» для
                  клиента и команды.
                </div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Риск</div>
                <div className="pillText">Замедление обслуживания и рост административной нагрузки при увеличении объёма.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Возможность</div>
                <div className="pillText">
                  Собрать путь клиента в одну цифровую платформу и превратить поддержку в быстрый, предсказуемый сервис.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container grid2">
            <div className="reveal" data-reveal>
              <h2 className="h2">Ключевое решение: мобильное приложение как центр сервиса</h2>
              <p className="lead">
                Приложение становится единой точкой контакта между клиентом и компанией: покупки, документы, поддержка и
                интеграция с клиникой — без лишних звонков и пересылок.
              </p>
              <div className="subtleLine" />
              <div className="pillGrid" style={{ marginTop: 18 }}>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Страхование</div>
                  <div className="pillText">Онлайн-оформление и продление, управление договорами, статусы и детали.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Документы</div>
                  <div className="pillText">Цифровые файлы и экспорт (например, для виз), хранение «в одном месте».</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Поддержка</div>
                  <div className="pillText">Чат с оператором, уведомления о сроках и событиях, многоязычный интерфейс.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Dobro Clinic</div>
                  <div className="pillText">Запись на приём, история посещений, быстрый доступ к рекомендациям.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Единый профиль</div>
                  <div className="pillText">Настройки, безопасность, языки, предпочтения — всё прозрачно и удобно.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Экономия времени</div>
                  <div className="pillText">Уменьшение ручной работы и сокращение нагрузки на поддержку.</div>
                </div>
              </div>
            </div>

            <div className="reveal" data-reveal>
              <div className="imgFrame">
                <img
                  className="img"
                  src={`${baseUrl}assets-redpanda-ui.png`}
                  alt="Пример экранов приложения: полисы, покупка, документы, поддержка и клиника"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="container">
            <div className="reveal" data-reveal>
              <h2 className="h2">План внедрения на 0–36 месяцев</h2>
              <p className="lead">
                Пошаговая реализация через MVP: сначала фиксируем проблемные места и проектируем решение, затем запускаем
                базовую версию, обучаем команду, расширяем функциональность и углубляем интеграцию с клиникой.
              </p>
            </div>

            <div className="pillGrid" style={{ marginTop: 26 }}>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 1 — 0–3 мес</div>
                <div className="pillText">Анализ процессов и точек боли. Где теряется время, где дублируются действия.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 2 — 3–6 мес</div>
                <div className="pillText">Архитектура решения, список функций, выбор подрядчика/команды разработки.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 3 — 6–12 мес</div>
                <div className="pillText">Разработка и запуск MVP: ключевые сценарии, быстрый сбор обратной связи.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 4 — 12–18 мес</div>
                <div className="pillText">Обучение сотрудников и оптимизация процессов под новую платформу.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 5 — 18–30 мес</div>
                <div className="pillText">Расширение функций и глубокая интеграция с Dobro Clinic.</div>
              </div>
              <div className="pill reveal" data-reveal>
                <div className="pillTitle">Фаза 6 — 30–36 мес</div>
                <div className="pillText">Оценка результатов, масштабирование и план следующей итерации развития.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="value">
          <div className="container grid2">
            <div className="reveal" data-reveal>
              <h2 className="h2">Ожидаемый эффект</h2>
              <p className="lead">
                В результате цифровизации выигрывают все: клиент получает предсказуемый сервис, команда — меньше рутины,
                бизнес — ниже стоимость поддержки и более высокая лояльность.
              </p>
              <div className="pillGrid" style={{ marginTop: 18 }}>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Быстрее</div>
                  <div className="pillText">Ускорение обслуживания и снижение числа ручных операций.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Дешевле</div>
                  <div className="pillText">Меньше затрат на поддержку за счёт самообслуживания и уведомлений.</div>
                </div>
                <div className="pill reveal" data-reveal>
                  <div className="pillTitle">Надёжнее</div>
                  <div className="pillText">Единые данные, контроль документов, прозрачные статусы и коммуникации.</div>
                </div>
              </div>
            </div>

            <div className="card reveal" data-reveal>
              <div className="cardInner">
                <div className="pillTitle">Риски и подход к снижению</div>
                <p className="pillText" style={{ marginTop: 8 }}>
                  Риски проекта — инвестиции на старте, сложность внедрения и принятие командой/клиентами. Решение —
                  поэтапный запуск через MVP и дальнейшее развитие на основании обратной связи.
                </p>
                <div className="subtleLine" />
                <div className="btnRow" style={{ marginTop: 16 }}>
                  <a className="btn btnPrimary" href="#cta">
                    Обсудить следующий шаг
                  </a>
                  <a className="btn btnGhost" href="#context">
                    Вернуться к контексту
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="cta">
          <div className="container">
            <div className="card reveal" data-reveal>
              <div className="cardInner">
                <div className="btnRow" style={{ marginTop: 2 }}>
                  <a className="btn btnPrimary" href="#roadmap">
                    Открыть roadmap
                  </a>
                  <a className="btn btnGhost" href="#features">
                    Состав MVP
                  </a>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="fineprint">
                © {new Date().getFullYear()} RedPanda — демонстрационная страница проекта цифровизации. Светлая тема,
                акцентный градиент и анимации появления при скролле настроены для «агентского» премиального вида.
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
