import { BASE_URL } from "@/config/urls";
import TownPage from "@/components/TownPage";

interface TownPageOverrides {
  metaTitle?: string;
  metaDescription?: string;
  heading?: string;
}

// Template function to create town-specific pages
export const createTownPage = (townName: string, townType: string, overrides: TownPageOverrides = {}) => {
  return function TownSpecificPage() {
    return <TownPage townName={townName} townType={townType} {...overrides} />;
  };
};

// Individual town page exports
export const BarnegaTPPage = createTownPage("Barnegat", "Township");
export const BarnegaLightPage = createTownPage("Barnegat Light", "Borough");
export const BayHeadPage = createTownPage("Bay Head", "Borough");
export const BeachHavenPage = createTownPage("Beach Haven", "Borough");
export const BeachwoodPage = createTownPage("Beachwood", "Borough");
export const BerkeleyTPage = createTownPage("Berkeley", "Township");
export const BrickTPage = createTownPage("Brick", "Township");
export const EagleswoodTPage = createTownPage("Eagleswood", "Township");
export const HarveyCedarsPage = createTownPage("Harvey Cedars", "Borough");
export const IslandHeightsPage = createTownPage("Island Heights", "Borough");
export const JacksonTPage = createTownPage("Jackson", "Township");
export const LaceyTPage = createTownPage("Lacey", "Township");
export const LakehurstPage = createTownPage("Lakehurst", "Borough");
export const LakewoodTPage = createTownPage("Lakewood", "Township");
export const LavallettePage = createTownPage("Lavallette", "Borough");
export const LittleEggHarborTPage = createTownPage("Little Egg Harbor", "Township");
export const LongBeachTPage = createTownPage("Long Beach", "Township");
export const ManchesterTPage = createTownPage("Manchester", "Township");
export const MantolokingPage = createTownPage("Mantoloking", "Borough");
export const OceanGatePage = createTownPage("Ocean Gate", "Borough");
export const OceanTPage = createTownPage("Ocean", "Township");
export const PineBeachPage = createTownPage("Pine Beach", "Borough");
export const PlumstedTPage = createTownPage("Plumsted", "Township");
export const PointPleasantPage = createTownPage("Point Pleasant", "Borough");
export const PointPleasantBeachPage = createTownPage("Point Pleasant Beach", "Borough");
export const SeasideHeightsPage = createTownPage("Seaside Heights", "Borough");
export const SeasideParkPage = createTownPage("Seaside Park", "Borough");
export const ShipBottomPage = createTownPage("Ship Bottom", "Borough");
export const SouthTomsRiverPage = createTownPage("South Toms River", "Borough");
export const StaffordTPage = createTownPage("Stafford", "Township");
export const SurfCityPage = createTownPage("Surf City", "Borough");
// Note: Toms River uses a dedicated, sales-focused page (TomsRiverGolfCartsPage)
// wired directly in App.tsx, so it is intentionally not created from this template.
export const TuckertonPage = createTownPage("Tuckerton", "Borough");