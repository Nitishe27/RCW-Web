import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstallationImg from '../Pictures/Group Pic - Installation.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Install39_1 from '../Pictures/Install39 - 1.jpeg'
import Install39_2 from '../Pictures/Install39 - 2.jpeg'
import Install39_3 from '../Pictures/Install29 - 3.jpeg'

const images = [
    { src: Install39_2, alt: '39th Installation Image 2' },
    { src: Install39_1, alt: '39th Installation Image 1' },
    { src: Install39_3, alt: '39th Installation Image 3' },
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
                            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">39th  Installation</h1>
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
                            Project Chair: Rtr. Umashini Krishnananthan and Rtr. Maxalo Thangarajah
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The 39th Installation Ceremony of the Rotaract Club of Wellawatte marked the beginning of a new
                            leadership era. This event celebrated the accomplishments of the past year and welcomed the incoming

                            President and Board of Directors for 2025/26. The ceremony reflected the club’s commitment to leadership,
                            service, and fellowship. It was attended by distinguished Rotarians, District representatives, past leaders,
                            parents, Rotaractors and members, creating an atmosphere of pride, recognition, and inspiration. The event
                            also provided a platform to unveil the theme of the year and launch the official website for the club.
                            The journey toward the 39th Installation Ceremony of the Rotaract Club of Wellawatte began with the
                            appointment of the Project Chairperson on June 20th, 2025, entrusted with guiding and overseeing the
                            event. From the very beginning, clear explanations were given on the importance of the installation and the
                            responsibilities to be carried out. To streamline coordination, June 21, 2025 the President initiated a
                            WhatsApp group dedicated to planning and organizing every detail of the ceremony. This group quickly
                            became the backbone of the project, ensuring effective communication and teamwork. It consisted of six
                            dedicated members who took charge of responsibilities with commitment. Among them were enthusiastic
                            newcomers, who were warmly welcomed into the team. Their participation brought fresh perspectives and
                            excitement to the planning process. The blend of new energy and experienced leadership created a strong
                            and dynamic force. Together, this team laid the foundation for a truly memorable installation ceremony.
                            A milestone moment came on June 23, 2025, when the final date for the ceremony was officially confirmed.
                            With this decision, months of preparation transformed into actionable plans, ensuring every detail aligned
                            perfectly with the vision for the event.
                            From that point forward, the journey was marked by careful planning and dedicated leadership. Every task
                            from the timely distribution of invitations and flyers to public engagement was executed with precision.
                            Sponsorships became a vital pillar of support, enabling the team to bring their plans to life. Krish Carz,
                            stepping in as the prestigious Gold Sponsor, played a defining role in empowering the event’s success.
                            Alongside this, the heartfelt contributions of members and friends who came forward with their own
                            sponsorships added strength and unity to the cause.
                            What began as an idea has now blossomed into a celebration of leadership, service, and camaraderie—a
                            testament to the spirit of Rotaract and the collective effort of everyone who made this journey possible.
                            The long-awaited day finally unfolded, bringing together members, well-wishers, and distinguished guests to
                            honor the true essence of leadership and fellowship. By 1:30 PM, the organizing committee reached the
                            Construction Industry Development Authority (CIDA) premises, taking charge of final arrangements and
                            ensuring that every element was perfectly in place. Their timely presence allowed for careful reviews and
                            swift adjustments, showcasing their commitment to excellence.
                            The ceremony commenced promptly at 3:00 PM, followed by the graceful arrival of esteemed guests around
                            3:10 PM. A warm welcome was extended to each attendee, creating an atmosphere filled with joy, unity,
                            and anticipation. With every detail aligned, the setting radiated elegance and enthusiasm, paving the way for
                            an evening that would remain a cherished milestone in the club’s journey.
                            The Chief Guest, President of Rotary Club of Mount Lavinia, Rtn. Niwantha Ekanayake, arrived with

                            a warm welcome from the organizing commitee. This marked the official start of the program. The presence
                            of such a distinguished guest emphasized the importance of Rotaract’s contribution to the community and
                            strengthened the relationship between the Rotary Club and Rotaract Club.
                            Next came the symbolic act of lighting the oil lamp, which symbolises enlightenment and the spirit of
                            unity. The dignitaries were then invited to the head table, a reflection of their status as respected leaders
                            and contributors to the event success.
                            Outgoing President Rtr. Kugaleshani Ravirajah officially called the 39th Installation Ceremony to
                            order. She recognized the presence of head table dignitaries, Rotarians, Past DRRs, and parents. The
                            ceremony began with the National Anthem, Flag Salutation, Invocation, the Four-Way Test, and the
                            Rotaract Song, creating a sense of unity and shared purpose among attendees.
                            The Rotaract Song was performed to further boost the environment, bringing everyone together with its
                            strong message of service and camaraderie.

                            The ceremony's following portion started with the A heartfelt welcoming speech was given by Rtr.
                            Umashini Krishnananthan and Rtr. Maxalo Thangarajah, who acknowledged the Rotaractors, parents,
                            and visitors. The importance of the celebration, the accomplishments of the departing board, and their hope
                            for the next year were all emphasised. Their remarks created a lively, upbeat atmosphere for the remainder
                            of the event.
                            This was followed by the Secretary’s Report for the year 2024-2025, presented by Rtr. Dilash
                            Sivakumaran, the Secretary for 2024/25, presented a detailed report of the past year’s projects,
                            accomplishments, and membership engagement. This report emphasized the club’s active participation in
                            community service, collaborative initiatives with other clubs, and the overall impact achieved in alignment
                            with Rotaract objectives.
                            The Outgoing President’s Address by Rtr. Kugaleshani Ravirajah delivered her presidential address,
                            reflecting on the challenges and milestones of her tenure. She recognized the dedication of the board,
                            members, and volunteers, emphasizing teamwork and resilience. Her address inspired the incoming
                            leadership to continue serving the community with enthusiasm and commitment.
                            As a sign of gratitude and recognition, The Outgoing president presented recognitions to outstanding
                            members, volunteers, and contributors, highlighting exemplary service, dedication, and leadership qualities.
                            This segment celebrated individual achievements while encouraging other members to aspire for excellence
                            in service and engagement.

                            The ceremony then progressed into the most eagerly awaited part, the Introduction of the Incoming
                            President, Rtr. Dilash Sivakumaran, was introduced formally and installed by the outgoing president. The

                            ceremony involved the symbolic handover of the gavel and formal words of commitment from the new
                            president. This marked the official transition of leadership and the beginning of a new year of service.
                            Following the delighted, Installation of the Incoming President, the formal leadership transition took
                            place. Rtr. Dilash Sivakumaran represented a new era of leadership for the Wellawatte Rotaract Club by
                            accepting the mantle of responsibility with calm and commitment.
                            The Address by Incoming president Rtr. Dilash outlined his vision for the year 2025/26, presenting the
                            Theme of the Year and launching the club’s official website. The address focused on innovation, community
                            service, leadership development, and active member participation. This segment reinforced the club’s
                            strategic goals for the year and encouraged all members to align with the vision.
                            The Introduction and Induction of the 2025–2026 Board of Directors followed the ceremony. The
                            President of Rotaract Club of Wellawatte gave a warm introduction and speaked about their good deeds and
                            welcomed each Board of Directors to the club. Each team leaders pledged commitment to their respective
                            roles, ensuring a structured and effective leadership team for the year. This session highlighted the
                            collaborative spirit necessary for success of Rotaract club of Wellawatte.

                            Afterwards, Address by the District Rotaract Representative (DRR), PHF Rtr. PP Nazmi Mahamood,
                            who spoke with authority and insight. His words highlighted the importance of leadership within the
                            Rotaract movement, offering guidance and encouragement to the incoming board. His address emphasized
                            the collective responsibility of all Rotaractors to drive positive change and uphold the values of service,
                            fellowship, and leadership.
                            Next, Address by the Chief Guest, Rtn. Niwantha Ekanayake, who delivered an inspiring speech. His
                            address was filled with words of wisdom and encouragement, reinforcing the values of Rotary and Rotaract,
                            and the vital role that young leaders play in shaping the future. His support and guidance were invaluable,
                            setting a positive tone for the upcoming Rotaract year.
                            The ceremony reached a significant point with the, the Address by the District Rotaract Chair (DRC),
                            PHF Rtn. Haneekah Rahil, added further depth to the event, providing a broader perspective on the role of
                            Rotaract in fostering community development and leadership. His speech resonated with both the new and
                            outgoing members, motivating them to continue their service with dedication and passion.
                            Following the speeches, Tokens of appreciation were presented to the esteemed guests and dignitaries, as a
                            heartfelt gesture to honor their guidance, encouragement, and continuous support toward the success of the
                            event and the club.
                            The Felicitations segment provided an opportunity for members and well-wishers to extend their warm
                            congratulations and blessings to the newly appointed Board of Directors, marking a moment of unity and
                            encouragement for the journey ahead.

                            The ceremony gracefully came to an end with the Vote of Thanks, delivered by the Secretary for
                            2025–2026, Rtr. Harisuthan Mohanadas, whose words of gratitude reflected the spirit of togetherness,
                            appreciation, and optimism for the exciting prospects awaiting the club in the upcoming year.
                            Once the formal proceedings concluded, refreshments were served to the attendees and guests, creating a
                            warm and relaxed atmosphere. This informal segment gave everyone the chance to unwind, connect, and
                            engage in meaningful conversations while celebrating the success of the ceremony. Guests took the
                            opportunity to congratulate the newly appointed Board of Directors and share their excitement for the year
                            ahead. The refreshments added a hospitable touch, ensuring the event remained lively and collegial until its
                            close.
                            As the evening drew to a close, the organizing committee felt a strong sense of pride and accomplishment,
                            having successfully delivered a seamless and impactful ceremony. The atmosphere was filled with
                            camaraderie and satisfaction as the team reflected on their hard work, dedication, and the positive outcome
                            of the day.
                            To mark the success, the committee gathered for photographs, capturing moments of joy and mutual
                            appreciation. These snapshots symbolized not only the achievement of hosting a remarkable event but also
                            the teamwork, commitment, and shared vision that had made it possible.
                            In a final moment of celebration, the organizers came together for a well-deserved dinner. This gathering
                            allowed the team to relax, share reflections, and enjoy each other’s company in a more informal setting.
                            Beyond the good food and laughter, it was an opportunity to strengthen bonds and appreciate the collective
                            effort behind the 39th Installation Ceremony. The committee left with a sense of fulfillment and gratitude,
                            proud to have created an event that will be remembered for its success and spirit of togetherness.
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
