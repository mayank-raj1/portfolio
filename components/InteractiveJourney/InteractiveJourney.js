import React, { useState } from "react";
import { motion } from "framer-motion";

const journeyData = [
  {
    id: 1,
    title: "The Spark of Creativity",
    year: "Childhood",
    description:
      "As a child, I'd spend hours crafting intricate art models, my small hands carefully connecting each piece. Little did I know that this childhood passion would evolve into something much bigger – a mission to connect people through technology.",
    detailedContent:
      "Those early days of creation were more than just play – they were the foundation of my future in technology. Each model I built was a puzzle, a problem to solve, much like the coding challenges I face today. This innate desire to create and connect pieces has been the driving force behind every line of code I've written and every project I've undertaken.",
    visualDescription: "Child hands working on a colorful, complex art model",
  },
  {
    id: 2,
    title: "The Power of Technology Realized",
    year: "Prolyncs Internship, 2024",
    description:
      "During my internship at Prolyncs, I had a transformative moment that shaped my understanding of technology's impact on real lives.",
    detailedContent:
      "I still remember the day I truly understood the power of technology to touch lives. A colleague shared how a small feature we implemented had made their workday significantly easier. Their eyes lit up as they described how much time they saved, time they could now spend with their family. That moment was transformative – I realized that behind every line of code, every user interface, there's a human story waiting to unfold. This realization has guided every project since, pushing me to always consider the human impact of my work.",
    visualDescription:
      "Young professional in an office, engaged in an animated conversation with a smiling colleague",
  },
  {
    id: 3,
    title: "ReflectLLM: Empathy in Every Pixel",
    year: "2024",
    description:
      "Developing ReflectLLM, an iOS app that uses machine learning to help users gain deeper self-awareness and manage stress more effectively.",
    detailedContent:
      "ReflectLLM isn't just about clever algorithms or sleek interfaces. It's about being there for someone when they're struggling with stress or trying to understand their emotions. I imagine a user, let's call her Sarah, opening the app after a tough day. As she journals her thoughts, the app gently offers insights and coping strategies. It's like having a compassionate friend in your pocket, one that's there whenever you need it. This project has taught me the importance of empathy in design, and how technology can be a force for emotional support and personal growth.",
    visualDescription:
      "A person using a journaling app on their phone, looking relieved and thoughtful",
  },
  {
    id: 4,
    title: "NutriChat: Nourishing Bodies and Souls",
    year: "2024",
    description:
      "Created NutriChat, a personalized recipe recommendation app that understands users' unique health journeys.",
    detailedContent:
      "NutriChat was born from conversations with friends who struggled with maintaining healthy eating habits. I envisioned an app that doesn't just spit out recipes, but understands the user's journey. Maybe it's Michael, a busy dad trying to cook nutritious meals for his kids while managing a hectic schedule. NutriChat is designed to be that helpful friend who not only suggests quick, healthy recipes but also cheers Michael on in his efforts to care for his family's well-being. This project reinforced my belief that technology should adapt to people's lives, not the other way around.",
    visualDescription:
      "A family cooking together in a kitchen, guided by a recipe on a tablet",
  },
  {
    id: 5,
    title: "Hackathons: Diverse Voices, Inclusive Solutions",
    year: "2024",
    description:
      "Participated in hackathons, developing projects like NetWrk and CodeSync, learning the value of diverse perspectives in creating inclusive technology.",
    detailedContent:
      "My experiences in hackathons have been eye-opening, teaching me the value of diverse perspectives in creating truly inclusive technology. During the GDSC Hackathon, our team's work on NetWrk was inspired by a team member's personal struggles with cross-cultural communication. As we worked on the AI assistant, I saw firsthand how our different backgrounds and experiences enriched the project, making it more empathetic and universally helpful. These intense, collaborative experiences have shown me that the best solutions emerge when we bring together diverse voices and experiences.",
    visualDescription:
      "Diverse group of people collaborating intensely at a hackathon, surrounded by laptops and whiteboards",
  },
  {
    id: 6,
    title: "The Human Side of Systems",
    year: "2023",
    description:
      "Developed a Hospital Management System, focusing on creating a more compassionate healthcare experience through technology.",
    detailedContent:
      "Even in more traditional projects, like the Hospital Management System I developed, the focus has always been on the human impact. I constantly asked myself: How can this system make a nurse's job easier? How can it help doctors provide better care? How can it make a patient's hospital stay less stressful? It's not just about efficiency; it's about creating a more compassionate healthcare experience. This project taught me that even behind-the-scenes systems can have a profound impact on people's lives, especially in sensitive environments like healthcare.",
    visualDescription:
      "A doctor and nurse looking at a computer screen, with a patient visible in the background",
  },
  {
    id: 7,
    title: "The Future: Bridging Distances, Connecting Hearts",
    year: "Looking Ahead",
    description:
      "Envisioning the future of AR/VR and AI in bringing people closer together and addressing issues like loneliness.",
    detailedContent:
      "Looking ahead, I'm excited about the potential of AR/VR and AI to bring people closer together. I dream of creating experiences that allow grandparents to feel like they're in the same room as their grandchildren, despite being continents apart. Or developing AI assistants that can provide companionship to those feeling isolated, bridging the gap of loneliness with understanding and warmth. The future of technology, as I see it, is not about replacing human connection, but enhancing and enabling it in ways we've never imagined before.",
    visualDescription:
      "An elderly person using VR goggles, smiling as if interacting with loved ones",
  },
];

const JourneyItem = ({ item, isActive, onClick }) => (
  <motion.div
    className={`cursor-pointer p-4 rounded-lg ${
      isActive ? "bg-blue-100" : "bg-gray-100"
    }`}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <h3 className="text-xl font-bold">{item.title}</h3>
    <p className="text-sm text-gray-600">{item.year}</p>
  </motion.div>
);

const JourneyDetail = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
    <p className="text-gray-600 mb-4">{item.year}</p>
    <p className="text-gray-700 mb-4">{item.description}</p>
    <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 mb-4">
      [Visual: {item.visualDescription}]
    </div>
    <p className="text-gray-700">{item.detailedContent}</p>
  </motion.div>
);

const InteractiveJourney = () => {
  const [activeItem, setActiveItem] = useState(journeyData[0]);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        My Journey in Tech
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {journeyData.map((item) => (
            <JourneyItem
              key={item.id}
              item={item}
              isActive={activeItem.id === item.id}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </div>
        <div className="md:col-span-2">
          <JourneyDetail item={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveJourney;
