import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Avenue from "./pages/Avenue";
import CommunityService from "./pages/CommunityService";
import ProfessionalDevelopment from "./pages/ProfessionalDevelopment";
import InternationalService from "./pages/InternationalService";
import ClubsSports from "./pages/ClubsSports";
import Formailty from "./pages/Formailty";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Committee from "./pages/Committee";
import CommitteeExecutive from "./pages/CommitteeExecutive";
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
          <Route path="/Avenue" element={<Avenue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/communityservice" element={<CommunityService />} />
          <Route path="/professionaldevelopment" element={<ProfessionalDevelopment />} />
          <Route path="/internationalservice" element={<InternationalService />} />
          <Route path="/clubssports" element={<ClubsSports />} />
          <Route path="/formailty" element={<Formailty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/executive" element={<CommitteeExecutive />} />
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
          <Route path="/projects/breakaway" element={<Breakaway />} />
          <Route path="/projects/endrendrumspb" element={<EndrendrumSPB />} />
          <Route path="/projects/mindthegap" element={<MindtheGap />} />
          <Route path="/projects/safespaces" element={<SafeSpaces />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
