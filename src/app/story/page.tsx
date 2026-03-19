import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { Footer } from "@/components/footer";
import { FullImage } from "@/components/content-container";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Story",
};

export default function Story() {
  return (
    <div>
      <PageTitle title="Driven by Curiosity" />
      <FadeIn>
      <div className="max-w-[720px] mx-auto px-4 [&_a]:text-link [&_a]:no-underline [&_a:hover]:text-link-hover [&_a:hover]:transition-colors [&_a:hover]:duration-200">
        <p>
          I was twelve when my middle school Quiz Bowl coach floated the idea of purchasing a buzzer system for our practices. You know those game shows where contestants race to hit a button first? That&apos;s basically what we needed. My teammates started searching online for viable options, but my instinct was a little different. Instead, I thought to myself: <i>what if I could build it?</i>
        </p>
        <p>
          And so, I did. After weeks of YouTube tutorials and Radio Shack visits, I had a working buzzer system. Was it pretty janky in hindsight? Absolutely. But most importantly, that was among my first experiences that revealed the pattern that has defined my life since:
        </p>
        <p><i>Recognize a problem, become obsessively curious, and build a solution.</i></p>
        <p>
          That pattern continued the following year, when I turned a Rubik&apos;s Cube obsession into a summer camp, teaching kids to solve it &mdash; a skill I had honed to{" "}
          <a href="https://www.youtube.com/watch?v=2yrVTqqy4yc" target="_blank" rel="noopener noreferrer">under 15 seconds</a>. I also launched an e-commerce site selling{" "}
          <a href="https://www.youtube.com/watch?v=-atg20iRoEA" target="_blank" rel="noopener noreferrer">custom hip-hop beats</a> I&apos;d produced in my bedroom.
        </p>
        <p>
          High school taught me that building great products requires building great teams &mdash; and setting the right culture &mdash; to coalesce around a shared vision. As Senior Class President, I spearheaded multiple initiatives to help reconnect our class following the disruptions of COVID and broader social challenges. Leading the Yearbook and Mock Trial sharpened my ability to craft and tell compelling stories &mdash; a skill that has equipped me well for the world of business.
        </p>
        <FullImage src="/images/Commencement.jpg" alt="Commencement" />
        <p>
          Entering college, I naturally wanted to learn about both technology and business &mdash; not just one or the other &mdash; so I chose to double major in Computer Science and Finance. In my freshman year, I applied an{" "}
          <a href="/projects/peer-ed">EdTech startup idea</a> of mine to{" "}
          <a href="https://linkedin.com/company/neosvf-cwru/" target="_blank" rel="noopener noreferrer">Venture @ CWRU</a>, a student-run venture fund. While the startup didn&apos;t work out, I inadvertently got dragged into the fund as an analyst/investor, teaching me about the world of venture capital and how to build a much better business in the future. Under my leadership, Venture @ CWRU grew from just 4 to 25+ recurring members, becoming one of the most active business organizations on campus.
        </p>
        <p>
          I&apos;ve further pursued venture capital as President of the{" "}
          <a href="https://case.edu/entrepreneurship/alumni-venture-fund" target="_blank" rel="noopener noreferrer">Alumni Venture Fund</a>, where I&apos;ve gotten the opportunity to source deals and make investments of up to $25,000 per company. I was also 1 of 5 members on Case Western&apos;s{" "}
          <a href="http://vcic.org" target="_blank" rel="noopener noreferrer">Venture Capital Investment Competition</a> (VCIC) team, where we placed 3rd in our region for our outstanding due diligence and deal memo construction.
        </p>
        <FullImage src="/images/VCIC.jpg" alt="VCIC" />
        <p>
          To better understand the ins-and-outs of startups, I interned at{" "}
          <a href="http://immersivetouch.com" target="_blank" rel="noopener noreferrer">ImmersiveTouch</a> during the summer of 2023, where I researched competitors and learned about healthcare sales cycles and processes. That fall, I was 1 of 12 selected{" "}
          <a href="https://case.edu/entrepreneurship/vealesnyderfellows" target="_blank" rel="noopener noreferrer">Veale Snyder Fellows</a>, allowing me to take fully funded trips to Silicon Valley, Las Vegas (for the Consumer Electronics Show), and Ireland to visit tech companies and network with professionals.
        </p>
        <p>
          That Fellowship opened many doors, including my internship at{" "}
          <a href="http://afference.io" target="_blank" rel="noopener noreferrer">Afference</a>, a startup whose mission is to bring the sense of touch &mdash; a key aspect of human connection &mdash; to the digital world. I helped build and design a software development kit that will be deployed alongside Afference products, allowing software developers to integrate complex haptics into their digital experiences.
        </p>
        <p>
          Most recently, I led the development of an internal CRM platform for The O.H.I.O. Fund, from inception to launch. It reinforced my desire to not just write code behind a screen, but oversee the entire lifecycle of a product &mdash; including user research, design, coding, and continuous iteration.
        </p>
        <p>
          These days, I&apos;m captivated by the opportunities of AI, especially in spaces that traditionally lack technical innovation. Drawing from my technical expertise and business/startup experience, I enjoy searching for and building high-value AI applications. Some projects include a{" "}
          <a href="/projects/curio">personalized education app</a>, a{" "}
          <a href="/projects/consultant-digital-mind">digital mind chatbot</a> for a consultant, and automations for podcast episode analysis and personalized networking.
        </p>
        <p>
          My philosophy is defined by a commitment to lifelong learning. I love learning about emerging trends in technology, business, finance, economics, and politics, mainly through podcasts (20VC, Acquired, All-In, Lex Fridman, Lenny&apos;s Podcast, Y Combinator). I love learning about new people and cultures, which inspired me to study abroad at Universidad Carlos III de Madrid in Spain.
        </p>
        <p>
          I love teaching and mentoring, not just to help others grow, but also to reinforce my own understanding of concepts. During high school summers, I was fortunate to teach STEM at the{" "}
          <a href="https://time2rise.org/" target="_blank" rel="noopener noreferrer">Time to Rise</a> summer program, shaping my own hands-on, practical curriculum for at-risk children. I&apos;ve enjoyed volunteering children at{" "}
          <a href="https://idealist.org/en/nonprofit/e0c31efdb62448d686bd135188131234-lunch-buddies-at-bolton-elementary-cleveland" target="_blank" rel="noopener noreferrer">Bolton Elementary School</a> throughout college.
        </p>
        <p>
          I&apos;m always seeking new opportunities to build, contribute, and learn with innovative teams. Please connect with me at{" "}
          <a href="mailto:krishinparikh@gmail.com">krishinparikh@gmail.com</a> or{" "}
          <a href="http://linkedin.com/in/krishin-parikh" target="_blank" rel="noopener noreferrer">LinkedIn</a> if you&apos;d like to start a conversation!
        </p>
        <p>
          With optimism and gratitude,
          <br />
          Krishin Parikh
        </p>
      </div>
      </FadeIn>
      <Footer />
    </div>
  );
}
