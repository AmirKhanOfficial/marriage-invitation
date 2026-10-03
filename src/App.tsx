import { useEffect, useRef, useState } from "react";
import { Controls } from "./components/Controls";
import { Hero } from "./components/Hero";
import { Welcome } from "./components/Welcome";
import { InvitationCard } from "./components/InvitationCard";
import { Gallery } from "./components/Gallery";
import { Countdown } from "./components/Countdown";
import {
  Timeline,
  Venue,
  DressCode,
  PreWedding,
  SimpleInfo,
} from "./components/InfoSections";
import { RSVP } from "./components/RSVP";
import { Closing } from "./components/Closing";
import "./index.css";
export default function App() {
  const audio = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    a.muted = false;
    a.play().catch(() => {});
  }, []);
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    setMuted((currentMuted) => {
      const nextMuted = !currentMuted;
      a.muted = nextMuted;
      return nextMuted;
    });
  };
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <audio
        ref={audio}
        autoPlay
        muted={muted}
        loop
        preload="auto"
        src="/music/track3.mp3"
      />
      <Controls muted={muted} onToggle={toggle} />
      <Hero />
      <Welcome />
      <InvitationCard />
      <Gallery />
      <Countdown />
      <Timeline />
      <Venue />
      <DressCode />
      <PreWedding />
      <SimpleInfo />
      <RSVP />
      <Closing />
    </div>
  );
}
