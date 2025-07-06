import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-teal-50 dark:bg-teal-950 
  dark:bg-grid-teal-100/[0.05] items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of " +
      "foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of " +
      "Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings " +
      "and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end " +
      "them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be " +
      "in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my " +
      "purse, and nothing particular to interest me on shore, I thought I would sail about a little and " +
      "see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  // ✅ Updated realistic AI-driven customer reviews below
  {
    quote:
      "Booking an appointment took seconds, and the AI assistant handled everything—including reminding me and even attending the session!",
    name: "Dr. Meenal Rao",
    title: "Pulmonologist, HealthyLife Clinic",
  },
  {
    quote:
      "I was amazed that the AI bot conducted the initial conversation with the patient and generated a summary before the real consult. Super efficient.",
    name: "Dr. Arjun Patel",
    title: "Orthopedic Surgeon",
  },
  {
    quote:
      "I booked a checkup for my mother in under a minute, and the AI explained everything clearly during the meet. We didn't need to talk to anyone.",
    name: "Ritika Sharma",
    title: "Patient's Daughter",
  },
  {
    quote:
      "This AI platform has completely automated our front-desk operations. No manual scheduling, follow-ups, or video setup—it's all done by the system.",
    name: "Dr. Kavita Mishra",
    title: "Clinic Owner, MindWell",
  },
  {
    quote:
      "I was skeptical at first, but the AI voice agent felt natural, answered my queries, and even booked a follow-up. It's like having a digital receptionist.",
    name: "Rahul Verma",
    title: "Patient",
  },
];
