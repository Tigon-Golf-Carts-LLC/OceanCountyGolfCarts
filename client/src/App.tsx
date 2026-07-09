import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import GolfCartsForSalePage from "@/pages/GolfCartsForSalePage";
import TomsRiverGolfCartsPage from "@/pages/TomsRiverGolfCartsPage";
import StreetLegalGolfCartsPage from "@/pages/StreetLegalGolfCartsPage";
import LSVGolfCartsPage from "@/pages/LSVGolfCartsPage";
import NorthJerseyGolfCartsPage from "@/pages/NorthJerseyGolfCartsPage";
import NewJerseyShoreGolfCartsPage from "@/pages/NewJerseyShoreGolfCartsPage";
import GolfCartBuyingGuidePage from "@/pages/GolfCartBuyingGuidePage";
// Vehicle Page Imports
import EvolutionD5Ranger6Plus from "@/pages/vehicles/EvolutionD5Ranger6Plus";
import EvolutionD5Ranger22Plus from "@/pages/vehicles/EvolutionD5Ranger22Plus";
import EvolutionForester4Plus from "@/pages/vehicles/EvolutionForester4Plus";
import EvolutionTurfman1000 from "@/pages/vehicles/EvolutionTurfman1000";
import DenagoEvCity from "@/pages/vehicles/DenagoEvCity";
import EvolutionD6MaxGT4 from "@/pages/vehicles/EvolutionD6MaxGT4";
import DenagoEvNomad from "@/pages/vehicles/DenagoEvNomad";
import EvolutionClassic4Plus from "@/pages/vehicles/EvolutionClassic4Plus";
import DenagoEVRoverXL from "@/pages/vehicles/DenagoEVRoverXL";
import DenagoEvNomadXL from "@/pages/vehicles/DenagoEvNomadXL";
import DenagoEvRoverXL6 from "@/pages/vehicles/DenagoEvRoverXL6";
import DenagoEvRoverXXL from "@/pages/vehicles/DenagoEvRoverXXL";
import EvolutionCarrier6Plus from "@/pages/vehicles/EvolutionCarrier6Plus";
import EvolutionCarrier8Plus from "@/pages/vehicles/EvolutionCarrier8Plus";
import EvolutionClassic2Plus from "@/pages/vehicles/EvolutionClassic2Plus";
import EvolutionClassic2Pro from "@/pages/vehicles/EvolutionClassic2Pro";
import EvolutionD5Maverick4 from "@/pages/vehicles/EvolutionD5Maverick4";
import EvolutionD5Maverick6 from "@/pages/vehicles/EvolutionD5Maverick6";
import EvolutionD5Maverick4Plus from "@/pages/vehicles/EvolutionD5Maverick4Plus";
import EvolutionD5Maverick6Plus from "@/pages/vehicles/EvolutionD5Maverick6Plus";
import EvolutionD6MaxGT6 from "@/pages/vehicles/EvolutionD6MaxGT6";
import EvolutionD6MaxXT4 from "@/pages/vehicles/EvolutionD6MaxXT4";
import EvolutionD6MaxXT6 from "@/pages/vehicles/EvolutionD6MaxXT6";
import {
  BarnegaTPPage, BarnegaLightPage, BayHeadPage, BeachHavenPage, BeachwoodPage,
  BerkeleyTPage, BrickTPage, EagleswoodTPage, HarveyCedarsPage, IslandHeightsPage,
  JacksonTPage, LaceyTPage, LakehurstPage, LakewoodTPage, LavallettePage,
  LittleEggHarborTPage, LongBeachTPage, ManchesterTPage, MantolokingPage,
  OceanGatePage, OceanTPage, PineBeachPage, PlumstedTPage, PointPleasantPage,
  PointPleasantBeachPage, SeasideHeightsPage, SeasideParkPage, ShipBottomPage,
  SouthTomsRiverPage, StaffordTPage, SurfCityPage, TuckertonPage
} from "@/pages/towns/TownPageTemplate";

const queryClient = new QueryClient();

function App() {
  // Global scroll-to-top on route changes
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/golf-carts-for-sale" component={GolfCartsForSalePage} />
            <Route path="/street-legal-golf-carts-nj" component={StreetLegalGolfCartsPage} />
            <Route path="/lsv-golf-carts-nj" component={LSVGolfCartsPage} />
            <Route path="/north-jersey-golf-carts" component={NorthJerseyGolfCartsPage} />
            <Route path="/new-jersey-shore-golf-carts" component={NewJerseyShoreGolfCartsPage} />
            <Route path="/golf-cart-buying-guide" component={GolfCartBuyingGuidePage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/brands/denago" component={DenagoPage} />
            <Route path="/brands/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsPage} />
            
            {/* Vehicle Detail Pages */}
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6Plus} />
            <Route path="/vehicles/evolution-d5-ranger-22-plus" component={EvolutionD5Ranger22Plus} />
            <Route path="/vehicles/evolution-forester-4-plus" component={EvolutionForester4Plus} />
            <Route path="/vehicles/evolution-turfman-1000" component={EvolutionTurfman1000} />
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCity} />
            <Route path="/vehicles/evolution-d6-max-gt4" component={EvolutionD6MaxGT4} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomad} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4Plus} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEVRoverXL} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXL} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXL6} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXXL} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6Plus} />
            <Route path="/vehicles/evolution-carrier-8-plus" component={EvolutionCarrier8Plus} />
            <Route path="/vehicles/evolution-classic-2-plus" component={EvolutionClassic2Plus} />
            <Route path="/vehicles/evolution-classic-2-pro" component={EvolutionClassic2Pro} />
            <Route path="/vehicles/evolution-d5-maverick-4" component={EvolutionD5Maverick4} />
            <Route path="/vehicles/evolution-d5-maverick-6" component={EvolutionD5Maverick6} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4Plus} />
            <Route path="/vehicles/evolution-d5-maverick-6-plus" component={EvolutionD5Maverick6Plus} />
            <Route path="/vehicles/evolution-d6-max-gt6" component={EvolutionD6MaxGT6} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXT4} />
            <Route path="/vehicles/evolution-d6-max-xt6" component={EvolutionD6MaxXT6} />
            
            {/* Ocean County Town Pages */}
            <Route path="/barnegat-township-golf-carts" component={BarnegaTPPage} />
            <Route path="/barnegat-light-borough-golf-carts" component={BarnegaLightPage} />
            <Route path="/bay-head-borough-golf-carts" component={BayHeadPage} />
            <Route path="/beach-haven-borough-golf-carts" component={BeachHavenPage} />
            <Route path="/beachwood-borough-golf-carts" component={BeachwoodPage} />
            <Route path="/berkeley-township-golf-carts" component={BerkeleyTPage} />
            <Route path="/brick-township-golf-carts" component={BrickTPage} />
            <Route path="/eagleswood-township-golf-carts" component={EagleswoodTPage} />
            <Route path="/harvey-cedars-borough-golf-carts" component={HarveyCedarsPage} />
            <Route path="/island-heights-borough-golf-carts" component={IslandHeightsPage} />
            <Route path="/jackson-township-golf-carts" component={JacksonTPage} />
            <Route path="/lacey-township-golf-carts" component={LaceyTPage} />
            <Route path="/lakehurst-borough-golf-carts" component={LakehurstPage} />
            <Route path="/lakewood-township-golf-carts" component={LakewoodTPage} />
            <Route path="/lavallette-borough-golf-carts" component={LavallettePage} />
            <Route path="/little-egg-harbor-township-golf-carts" component={LittleEggHarborTPage} />
            <Route path="/long-beach-township-golf-carts" component={LongBeachTPage} />
            <Route path="/manchester-township-golf-carts" component={ManchesterTPage} />
            <Route path="/mantoloking-borough-golf-carts" component={MantolokingPage} />
            <Route path="/ocean-gate-borough-golf-carts" component={OceanGatePage} />
            <Route path="/ocean-township-golf-carts" component={OceanTPage} />
            <Route path="/pine-beach-borough-golf-carts" component={PineBeachPage} />
            <Route path="/plumsted-township-golf-carts" component={PlumstedTPage} />
            <Route path="/point-pleasant-borough-golf-carts" component={PointPleasantPage} />
            <Route path="/point-pleasant-beach-borough-golf-carts" component={PointPleasantBeachPage} />
            <Route path="/seaside-heights-borough-golf-carts" component={SeasideHeightsPage} />
            <Route path="/seaside-park-borough-golf-carts" component={SeasideParkPage} />
            <Route path="/ship-bottom-borough-golf-carts" component={ShipBottomPage} />
            <Route path="/south-toms-river-borough-golf-carts" component={SouthTomsRiverPage} />
            <Route path="/stafford-township-golf-carts" component={StaffordTPage} />
            <Route path="/surf-city-borough-golf-carts" component={SurfCityPage} />
            <Route path="/toms-river-township-golf-carts" component={TomsRiverGolfCartsPage} />
            <Route path="/tuckerton-borough-golf-carts" component={TuckertonPage} />
            
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
