import { useEffect, useRef, useState } from "react"
import {
  CheckCheck,
  ChevronLeft,
  MoreVertical,
  Paperclip,
  Pause,
  Phone,
  Play,
  RotateCcw,
  Smile,
  Video,
  Mic,
  Wifi,
  BatteryFull,
  CalendarCheck2,
} from "lucide-react"
import styles from "./WhatsAppDemo.module.css"

type DemoMessage = {
  id: number
  from: "customer" | "agent"
  text: string
  time: string
  at: number
}

const MESSAGES: DemoMessage[] = [
  {
    id: 1,
    from: "customer",
    text: "Oi! Vocês atendem aos sábados? Queria marcar uma avaliação.",
    time: "09:41",
    at: 900,
  },
  {
    id: 2,
    from: "agent",
    text: "Oi! Atendemos sim 😊 Prefere manhã ou tarde?",
    time: "09:41",
    at: 3400,
  },
  {
    id: 3,
    from: "customer",
    text: "De manhã, perto das 10h.",
    time: "09:42",
    at: 5600,
  },
  {
    id: 4,
    from: "agent",
    text: "Tenho 10h e 10h30 disponíveis. Qual fica melhor pra você?",
    time: "09:42",
    at: 8300,
  },
  {
    id: 5,
    from: "customer",
    text: "Pode ser 10h30! Meu nome é Ana.",
    time: "09:43",
    at: 10400,
  },
  {
    id: 6,
    from: "agent",
    text: "Prontinho, Ana! Sua avaliação ficou marcada para sábado, às 10h30. 💚",
    time: "09:43",
    at: 13700,
  },
]

const CONFIRMATION_AT = 15200
const DURATION = 16800

export default function WhatsAppDemo() {
  const stageRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener?.("change", update)
    return () => media.removeEventListener?.("change", update)
  }, [])

  useEffect(() => {
    const node = stageRef.current
    if (!node) return
    if (!("IntersectionObserver" in window)) {
      setStarted(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.23 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const finished = elapsed >= DURATION
  useEffect(() => {
    if (!started || !playing || reduceMotion || finished) return
    const interval = window.setInterval(() => {
      setElapsed((previous) => Math.min(DURATION, previous + 100))
    }, 100)
    return () => window.clearInterval(interval)
  }, [started, playing, reduceMotion, finished])

  const clock = reduceMotion ? DURATION : elapsed
  const shown = MESSAGES.filter((message) => clock >= message.at)
  const typing = !reduceMotion && MESSAGES.some(
    (message) => message.from === "agent" && clock >= message.at - 1050 && clock < message.at,
  )
  const confirmed = clock >= CONFIRMATION_AT

  useEffect(() => {
    const node = chatRef.current
    if (!node) return
    node.scrollTo({ top: node.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" })
  }, [shown.length, typing, confirmed, reduceMotion])

  const replay = () => {
    setElapsed(0)
    setPlaying(true)
    setStarted(true)
  }

  return (
    <div className={styles.demo} ref={stageRef} data-demo="whatsapp" data-finished={confirmed ? "true" : "false"}>
      <div className={styles.phoneStage}>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.phone} aria-label="Simulação visual de conversa no WhatsApp">
          <div className={styles.statusBar} aria-hidden="true">
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Wifi size={14} strokeWidth={2.6} />
              <BatteryFull size={18} strokeWidth={2.5} />
            </span>
          </div>
          <div className={styles.chatHeader}>
            <ChevronLeft size={24} aria-hidden="true" />
            <div className={styles.avatar} aria-hidden="true">E</div>
            <div className={styles.contact}>
              <span className={styles.contactName}>Empresa Exemplo</span>
              <span className={styles.contactStatus}>{typing ? "digitando..." : "online"}</span>
            </div>
            <div className={styles.headerActions} aria-hidden="true">
              <Video size={20} />
              <Phone size={18} />
              <MoreVertical size={20} />
            </div>
          </div>

          <div className={styles.chatWallpaper} ref={chatRef}>
            <div className={styles.dateChip}>HOJE</div>
            <div className={styles.securityChip}>
              <span aria-hidden="true">🔒</span> Conversa ilustrativa
            </div>
            <ol className={styles.messageList} aria-label="Roteiro ilustrativo de atendimento e agendamento">
              {shown.map((message) => (
                <li
                  className={message.from === "customer" ? styles.received : styles.sent}
                  key={message.id}
                  data-message={message.id}
                  data-from={message.from}
                >
                  <span className={styles.messageText}>{message.text}</span>
                  <span className={styles.messageMeta}>
                    <time>{message.time}</time>
                    {message.from === "agent" && <CheckCheck size={15} strokeWidth={2} className={styles.readReceipt} aria-label="Mensagem visualizada" />}
                  </span>
                </li>
              ))}
              {typing && (
                <li className={styles.typingBubble} aria-label="Funcionário digital digitando">
                  <span /><span /><span />
                </li>
              )}
              {confirmed && (
                <li className={styles.appointment} data-demo-confirmation>
                  <span className={styles.appointmentIcon}><CalendarCheck2 size={19} /></span>
                  <span>
                    <strong>Agendamento ilustrativo</strong>
                    <small>Avaliação · sábado, 10h30</small>
                  </span>
                </li>
              )}
            </ol>
          </div>

          <div className={styles.chatInput} aria-hidden="true">
            <div className={styles.inputPill}>
              <Smile size={21} />
              <span>Mensagem</span>
              <Paperclip size={20} />
            </div>
            <span className={styles.mic}><Mic size={20} /></span>
          </div>
          <div className={styles.gestureBar} aria-hidden="true"><span /></div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.progress} aria-hidden="true">
          <div style={{ width: `${(clock / DURATION) * 100}%` }} />
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlCaption}>
            {reduceMotion ? "Conversa completa" : confirmed ? "Fim da demonstração" : "Acompanhe a conversa"}
          </span>
          {!reduceMotion && (
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setPlaying((current) => !current)}
                disabled={finished}
                aria-label={playing ? "Pausar demonstração" : "Continuar demonstração"}
                title={playing ? "Pausar" : "Continuar"}
              >
                {playing ? <Pause size={17} /> : <Play size={17} />}
              </button>
              <button type="button" className={styles.replayButton} onClick={replay} aria-label="Rever a demonstração">
                <RotateCcw size={16} />
                Rever
              </button>
            </div>
          )}
        </div>
        <p className={styles.disclaimer}>
          Simulação visual com dados fictícios. Não consulta nem altera uma agenda real.
        </p>
      </div>
    </div>
  )
}
