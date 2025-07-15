import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Avenue from "./Avenue";
import Admin from "./Admin";
import NotFound from "./NotFound";
import Committee from "./Committee";
import CommitteeExecutive from "./CommitteeExecutive";
import CommitteeBoard from "./CommitteeBoard";
import Audicia from "./Audicia";
import WellaPongal from "./WellaPongal";
import InsideEdge from "./InsideEdge";
import EndrendrumSPB from "./EndrendrumSPB";
import SafeSpaces from "./SafeSpaces";
import InnerLeader from "./InnerLeader";
import MindtheGap from "./MindtheGap";
import HipHopThiruvizha from "./HipHopThiruvizha";
import BIAnalytiq from "./BIAnalytiq";
import BeachCleanup from "./BeachCleanup";
import ThreadsofTreasure from "./ThreadsofTreasure";
import PulseOfHope from "./PulseOfHope";
import GiftsOfHopes from "./GiftsOfHopes";
import Installation from "./38thInstallation";
import Bandhan from "./Bandhan";
import Breakaway from "./Breakaway";
import CommunityService from "./CommunityService";
import ProfessionalDevelopment from "./ProfessionalDevelopment";
import InternationalService from "./InternationalService";
import ClubsSports from "./ClubsSports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avenue" element={<Avenue />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/executive" element={<CommitteeExecutive />} />
          <Route path="/committee/board" element={<CommitteeBoard />} />
          <Route path="/projects/audacia" element={<Audicia />} />
          <Route path="/projects/wellapongal" element={<WellaPongal />} />
          <Route path="/projects/insideedge" element={<InsideEdge />} />
          <Route path="/projects/mindthegap" element={<MindtheGap />} />
          <Route path="/projects/innerleader" element={<InnerLeader />} />
          <Route path="/projects/hiphopthiruvizha" element={<HipHopThiruvizha />} />
          <Route path="/projects/safespaces" element={<SafeSpaces />} />
          <Route path="/projects/bianalytiq" element={<BIAnalytiq />} />
          <Route path="/projects/beachcleanup" element={<BeachCleanup />} />
          <Route path="/projects/threadsoftreasure" element={<ThreadsofTreasure />} />
          <Route path="/projects/pulseofhope" element={<PulseOfHope />} />
          <Route path="/projects/giftsofhopes" element={<GiftsOfHopes />} />
          <Route path="/projects/38thinstallation" element={<Installation />} />
          <Route path="/projects/bandhan" element={<Bandhan />} />
          <Route path="/projects/breakaway" element={<Breakaway />} />
          <Route path="/projects/endrendrumspb" element={<EndrendrumSPB />} />
          <Route path="/communityservice" element={<CommunityService />} />
          <Route path="/professionaldevelopment" element={<ProfessionalDevelopment />} />
          <Route path="/internationalservice" element={<InternationalService />} />
          <Route path="/clubssports" element={<ClubsSports/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; 