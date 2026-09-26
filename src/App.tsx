import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Avenue from "./pages/Avenue";
import CommunityService from "./pages/CommunityService";
import ProfessionalDevelopment from "./pages/ProfessionalDevelopment";
import InternationalService from "./pages/InternationalService";
import ClubsSports from "./pages/ClubsSports";
import Sports from "./pages/Sports";
import PublicRelation from "./pages/PublicRelation";
import Formality from "./pages/Formailty";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Committee from "./pages/Committee";
import CommitteeBoard from "./pages/CommitteeBoard";
import Audicia from "./pages/Audicia";
import WellaPongal from "./pages/WellaPongal";
import InsideEdge from "./pages/InsideEdge";
import InnerLeader from "./pages/InnerLeader";
import HipHopThiruvizha from "./pages/HipHopThiruvizha";
import BIAnalytiq from "./pages/BIAnalytiq";
import BeachCleanup from "./pages/BeachCleanup";
import ThreadsofTreasure from "./pages/ThreadsofTreasure";
import PulseOfHope from "./pages/PulseOfHope";
import GiftsOfHopes from "./pages/GiftsOfHopes";
import Installation from "./pages/38thInstallation";
import Bandhan from "./pages/Bandhan";
import Breakaway from "./pages/Breakaway";
import EndrendrumSPB from "./pages/EndrendrumSPB";
import MindtheGap from "./pages/MindtheGap";
import SafeSpaces from "./pages/SafeSpaces"
import Lailath from "./pages/Lailath"
import WellaPongal26 from "./pages/WellaPongal26";
import Installation39 from "./pages/39thInstallation";
import CrownConsipiracy from "./pages/CrownConsipiracy";
import BreakAway26 from "./pages/Break-Away26";
import WhotShot from "./pages/WhotShot";
import NextStep from "./pages/NextStep";
import MithuriDosti from "./pages/MithuriDosti";
import IamASpecialChild from "./pages/IamASpecialChild";
import Hinawa from "./pages/Hinawa";
import Embrace from "./pages/Embrace";
import CoastalCare from "./pages/CoastalCare";
import DigiThrive from "./pages/DigiThrive";
import KickOff from "./pages/KickOff";
import PaddlesGiggles from "./pages/Paddles&Giggles";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Avenue" element={<Avenue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/communityservice" element={<CommunityService />} />
          <Route path="/professionaldevelopment" element={<ProfessionalDevelopment />} />
          <Route path="/internationalservice" element={<InternationalService />} />
          <Route path="/clubssports" element={<ClubsSports />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/publicrelations" element={<PublicRelation />} />
          <Route path="/formality" element={<Formality />} />
          {/* <Route path="/formailty" element={<Formality />} /> */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/executive" element={<Navigate to="/committee/board?view=executive" replace />} />
          <Route path="/committee/board" element={<CommitteeBoard />} />
          <Route path="/projects/audacia" element={<Audicia />} />
          <Route path="/projects/wellapongal" element={<WellaPongal />} />
          <Route path="/projects/insideedge" element={<InsideEdge />} />
          <Route path="/projects/innerleader" element={<InnerLeader />} />
          <Route path="/projects/hiphopthiruvizha" element={<HipHopThiruvizha />} />
          <Route path="/projects/bianalytiq" element={<BIAnalytiq />} />
          <Route path="/projects/beachcleanup" element={<BeachCleanup />} />
          <Route path="/projects/threadsoftreasure" element={<ThreadsofTreasure />} />
          <Route path="/projects/pulseofhope" element={<PulseOfHope />} />
          <Route path="/projects/giftsofhopes" element={<GiftsOfHopes />} />
          <Route path="/projects/38thinstallation" element={<Installation />} />
          <Route path="/projects/bandhan" element={<Bandhan />} />
          {/* <Route path="/projects/breakaway" element={<Breakaway />} /> */}
          <Route path="/projects/endrendrumspb" element={<EndrendrumSPB />} />
          <Route path="/projects/mindthegap" element={<MindtheGap />} />
          <Route path="/projects/safespaces" element={<SafeSpaces />} />
          <Route path="/projects/lailath" element={<Lailath />} />
          <Route path="/projects/wellapongal26" element={<WellaPongal26 />} />
          <Route path="/projects/39thinstallation" element={<Installation39 />} />
          <Route path="/projects/crownconspiracy" element={<CrownConsipiracy />} />
          <Route path="/projects/breakaway" element={<BreakAway26 />} />
          <Route path="/projects/whotshot" element={<WhotShot />} />
          <Route path="/projects/nextstep" element={<NextStep />} />
          <Route path="/projects/mithuridosti" element={<MithuriDosti />} />
          <Route path="/projects/iamaspecialchild" element={<IamASpecialChild />} />
          <Route path="/projects/hinawa" element={<Hinawa />} />
          <Route path="/projects/embrace" element={<Embrace />} />
          <Route path="/projects/coastalcare" element={<CoastalCare />} />
          <Route path="/projects/digithrive" element={<DigiThrive />} />
          <Route path="/projects/kickoff" element={<KickOff />} />
          <Route path="/projects/paddlesandgiggles" element={<PaddlesGiggles />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
