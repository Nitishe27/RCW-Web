import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstallationImg from '../Pictures/Group Pic - Installation.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: InstallationImg, alt: '38th Installation Group Pic' },
  // Add more images here if available, e.g. { src: AnotherImg, alt: 'Another Image' },
];

const Installation = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const handleNext = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={() => navigate('/projects')}
            className="absolute -top-2 -left-4 md:-left-6 flex items-center gap-2 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-10 group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={22} className="text-blue-800 group-hover:text-blue-900 transition-colors" />
            <span className="hidden sm:inline text-blue-800 font-medium group-hover:text-blue-900 transition-colors">Back</span>
          </button>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">38th Installation</h1>
            </motion.div>
            <div className="flex justify-center items-center mb-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous image"
              >
                <ArrowLeft size={28} className="text-blue-800" />
              </button>
              <motion.img
                key={imgIndex}
                src={images[imgIndex].src}
                alt={images[imgIndex].alt}
                className="w-full max-w-xl object-contain"
                style={{ maxHeight: '350px' }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              />
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next image"
              >
                <ArrowRight size={28} className="text-blue-800" />
              </button>
            </div>
            <motion.p
              className="text-base text-blue-900 font-semibold max-w-4xl mx-auto text-center mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Project Chair: Rtr. Nitishe Premnath
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The 38th Installation Ceremony of the Rotaract Club of Wellawatte marked a momentous occasion filled with promise, purpose, and celebration. Set against an atmosphere of elegance and camaraderie, the event unfolded as a testament to the enduring spirit of leadership. The ceremony's highlight was the installation of the vibrant and dedicated Board of Directors for the Rotaract year 2024-2025, ushering in a new chapter of transformative initiatives and impactful endeavors.<br/><br/>
              The journey toward the 38th Installation Ceremony of the Rotaract Club of Wellawatte began with a vision and a dedicated effort to bring it to life. On 2nd of August, the President took the first step by forming a Whatsapp group tasked with planning and organizing every detail of this significant event. Starting with a small team, the group eventually grew to 15 committed members, half of whom were enthusiastic new recruits eager to make their mark. Alongside this, a specialized Public Relations (PR) group was established to focus on managing communications and amplifying the event's reach. Together, these teams worked tirelessly, combining fresh perspectives with experienced guidance to ensure the event's success. Their collaborative effort set the stage for a memorable celebration of leadership, service, and camaraderie.<br/><br/>
              The final date for the installation ceremony was confirmed on November 23rd, 2024, marking the culmination of months of planning and preparation. This key decision allowed the team to finalize all arrangements and ensure the event would unfold as envisioned.<br/><br/>
              Everything came together smoothly through careful planning and strong leadership. The dedicated teams ensured that every detail was attended to, from the timely distribution of flyers and invitations to reaching out and engaging the public. A crucial pillar of support came through sponsorships, which played a significant role in bringing the event to life. Aqua Packaging (Pvt) Ltd stepped forward as the esteemed Silver Sponsor, while myClick Photography and Bliss Up Videography beautifully captured the essence of the occasion through their exceptional photography and videography services. Additionally, the generosity of members and friends, who contributed their own sponsorships, strengthened the event's foundation.<br/><br/>
              A key milestone in the preparations was the rehearsal conducted with the organizing committee on November 19, 2024. This crucial session ensured that every detail was fine-tuned, and all members were aligned with their roles and responsibilities.<br/><br/>
              Finally, the much-anticipated day arrived, bringing together members, guests, and supporters to celebrate the vibrant spirit of leadership and service. The organizing committee arrived at the Construction Industry Development Authority (CIDA) premises at 1:30 PM, ensuring that all preparations were finalized and every detail was in place for a smooth execution. Their early arrival allowed ample time to double-check arrangements and address any last-minute adjustments, reflecting their dedication to making the event a success.<br/><br/>
              The event officially commenced at 3:00 PM, with the arrival of esteemed guests observed around 3:10 PM. A warm and heartfelt welcome was extended to all attendees, setting the tone for an evening of celebration, camaraderie, and purpose. The atmosphere was one of elegance and anticipation, as the stage was set for a truly memorable occasion.<br/><br/>
              The ceremony commenced with the arrival of the Chief Guest, the President of the Rotary Club of Mount Lavinia, who was warmly welcomed by the organizing committee and other attendees. This moment marked the beginning of a significant and meticulously planned event.<br/><br/>
              The lighting of the oil lamp followed, a symbolic act that embodies enlightenment and the spirit of unity. Next, the dignitaries were invited to the head table, signifying their roles as esteemed leaders and contributors to the success of the event.<br/><br/>
              Outgoing President Rtr. Rebecca Letchumanan officially called the ceremony to order, demonstrating poise and leadership as she oversaw this pivotal transition. Her role in initiating the event underscored her contributions to the club during her tenure.<br/><br/>
              The proceedings continued with the singing of the national anthem, fostering a sense of pride and unity among all attendees. This was followed by the flag salutation, invocation, and the recital of the Rotaract Four-Way Test, which reflect the club's values of ethical leadership and service.<br/><br/>
              To further elevate the atmosphere, the Rotaract Song was performed, uniting everyone in the room through its powerful message of fellowship and service.<br/><br/>
              The next phase of the ceremony began with the Welcome Address by Project Chairperson Rtr. Nitishe Premnath. With eloquence and warmth, Rtr. Nitishe extended greetings to the dignitaries, members, and guests, setting a tone of gratitude and anticipation for the proceedings. The address highlighted the significance of the event and acknowledged the collective efforts that made it possible.<br/><br/>
              This was followed by the Secretary's Report for the year 2023-2024, presented by Rtr. Kugaleshani Ravirajah. The detailed account offered a comprehensive overview of the club's accomplishments, activities, and milestones during the past year. It served as a reflection of the dedication and impact of the Rotaract Club of Wellawatte, leaving the audience inspired by the collective efforts of its members.<br/><br/>
              The Outgoing President's Address by Rtr. Rebeccan Letchumanan was a heartfelt and insightful reflection on her tenure. She expressed gratitude to her team and supporters, recounting the challenges and successes that defined her leadership. Her words carried an air of optimism, motivating the incoming team to build on the strong foundation laid during her presidency.<br/><br/>
              In a gesture of acknowledgment and appreciation, the Outgoing President recognized outstanding contributions by club members. These recognitions celebrated the dedication, hard work, and commitment of individuals who played pivotal roles in advancing the club's mission. This moment of appreciation fostered a sense of pride and encouragement among the members.<br/><br/>
              The ceremony then transitioned into its most anticipated segment: the Introduction of the Incoming President, Rtr. Kugaleshani Ravirajah. The introduction highlighted her journey within the club, her dedication to its values, and her vision for the future.<br/><br/>
              With great enthusiasm, the Installation of the Incoming President followed, marking the official transfer of leadership. Rtr. Kugaleshani Ravirajah accepted the mantle of responsibility with grace and determination, symbolizing a new chapter of leadership for the Rotaract Club of Wellawatte.<br/><br/>
              In her Address as the Incoming President, Rtr. Kugaleshani spoke with passion and clarity, outlining her plans and goals for the upcoming year. She emphasized the importance of teamwork, innovation, and service, inspiring members to unite and contribute toward the club's growth and impact. Her address left the audience confident in her leadership and excited about the year ahead.<br/><br/>
              The ceremony proceeded with the Introduction and Induction of the Board of Directors for 2024-2025, a pivotal moment where the incoming team of leaders was formally introduced to the audience. The Board, a group of dedicated and dynamic individuals, took an oath to uphold the values and mission of the Rotaract Club of Wellawatte, signifying the continuation of the club's impactful work and leadership.<br/><br/>
              This was followed by an Address by the District Rotaract Representative (DRR), PHF Rtn. Rtr. PP Shanel Mendis, who spoke with authority and insight. His words highlighted the importance of leadership within the Rotaract movement, offering guidance and encouragement to the incoming board. His address emphasized the collective responsibility of all Rotaractors to drive positive change and uphold the values of service, fellowship, and leadership.<br/><br/>
              Next, the Address by the Assistant District Rotaract Chair (ADRC), Rtn. Mindula Perera, added further depth to the event, providing a broader perspective on the role of Rotaract in fostering community development and leadership. His speech resonated with both the new and outgoing members, motivating them to continue their service with dedication and passion.<br/><br/>
              The ceremony reached a significant point with the Address by the Chief Guest, Rtn. PHF Lalith Kumarage, who delivered an inspiring speech. His address was filled with words of wisdom and encouragement, reinforcing the values of Rotary and Rotaract, and the vital role that young leaders play in shaping the future. His support and guidance were invaluable, setting a positive tone for the upcoming Rotaract year.<br/><br/>
              Following the speeches, Tokens of Appreciation were presented to the distinguished guests and dignitaries in attendance. This gesture of gratitude recognized their valuable contributions and support, acknowledging the role they play in the success of the event and the club.<br/><br/>
              The Felicitations section allowed members and guests to offer their congratulations and best wishes to the incoming Board of Directors, a moment of mutual respect and celebration of new leadership.<br/><br/>
              The ceremony concluded with a Vote of Thanks delivered by the Joint Secretaries for 2024-2025, Rtr. Dilash Sivakumaran and Rtr. Krithikprakash Sivakumar. Their words of gratitude captured the essence of the event, thanking everyone for their presence and contributions, and expressing excitement for the future initiatives and endeavors of the club.<br/><br/>
              Following the formal proceedings of the ceremony, refreshments were served to the attendees and guests, providing an opportunity for everyone to relax, network, and engage in meaningful conversations. This informal segment allowed the guests to further bond and reflect on the inspiring moments of the ceremony. It also offered a chance to extend congratulations to the incoming board members and share excitement for the year ahead. The refreshments added a warm and welcoming touch to the event, ensuring that the atmosphere remained vibrant and collegial until the conclusion of the gathering<br/><br/>
              As the event drew to a close, the organizing committee felt a deep sense of relief and accomplishment, having successfully executed a ceremony that ran smoothly and met all expectations. The atmosphere was one of satisfaction and camaraderie, as the team reflected on their collective efforts and the positive impact of the day.<br/><br/>
              In a final moment of celebration, the organizing committee gathered for photos, capturing memories of a job well done. The shared sense of pride was evident as they exchanged words of encouragement and appreciation, acknowledging each other's contributions throughout the planning and execution process. It was a moment of recognition not only for the success of the ceremony but for the teamwork and dedication that had made it all possible.<br/><br/>
              As the day came to a close, the organizing committee gathered to unwind and celebrate their hard work with a well-deserved dinner. This final gathering allowed the team to relax, reflect on the event's success, and share their thoughts in a more informal setting. The dinner was not only a time to enjoy good food but also an opportunity to strengthen the bonds formed throughout the planning process. The committee left the venue feeling accomplished, grateful for the teamwork and collaboration that made the 38th Installation Ceremony a memorable event for everyone involved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Project Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                <li>Celebrate club achievements and milestones</li>
                <li>Induct new board members and leaders</li>
                <li>Inspire members and guests for the year ahead</li>
                <li>Foster fellowship and club spirit</li>
                <li>Strengthen community and partner relationships</li>
              </ul>
              <div className="mt-6 text-gray-600">
                {/* Add more details or highlights if needed */}
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Installation;
