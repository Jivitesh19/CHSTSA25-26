const ParkerPlacesAPI = (() => {
  const places = [
    //Community & Recreation
    {
      id: 1,
      name: "Downtown Parker",
      address: "📍 Address: 19501 E Mainstreet, Suite 200, Parker, CO 80138",
      phone: "📞 Phone: (303)-841-2332",
      email: "✉️ Email: info@downtownparker.com",
      website: "https://www.downtownparker.com/",
    },
    {
      id: 2,
      name: "Parker Recreation Center",
      address: "📍 Address: 17301 Lincoln Ave, Parker, CO 80134",
      phone: "📞 Phone: (303)-841-2332",
      email: "✉️ Email: info@downtownparker.com",
      website: "https://www.parkerrec.com/"
    },
    {
      id: 45,
      name: "Parker Senior Center",
      address: "📍 Address: 10675 Longs Way, Parker, CO 80138", 
      phone: "📞 Phone: (303)-841-5370",
      email: "✉️ Email: leslie@parkerseniorcenter.org",
      website: "https://www.parkerseniorcenter.org/"
    },
    {
      id: 63,
      name: "Parker Fieldhouse",
      address: "📍 Address: 18700 Plaza Dr, Parker, CO 80134", 
      phone: "📞 Phone: (303)-805-6300",
      email: "✉️ Email: recreation@parkerco.gov",
      website: "https://parkerrec.com/348/Parker-Fieldhouse"  
    },
    {
      id: 62,
      name: "Parker Racquet Club",
      address: "📍 Address: 18396 Plaza Dr, Parker, CO 80134", 
      phone: "📞 Phone: (720)-676-7560",
      email: "✉️ Email: parkerracquetclub@gmail.com",
      website: "https://www.parkerracquetclub.com/"
    },
    {
      id: 4,
      name: "Jay Moore Studio",
      address: "📍 Address: 11020 S Pikes Peak Dr #105, Parker, CO 80138",
      phone: "📞 Phone: (303)-588-4152",
      email: "✉️ Email: jay@jaymoorestudio.com",
      website: "https://jaymoorestudio.com/"
    },
    {
      id: 5,
      name: "Discovery Park",
      address: "📍 Address: 20115 Mainstreet, Parker, CO 80138",
      phone: "📞 Phone: (303)-805-6324",
      email: "✉️ Email: recreation@parkeronline.org",
      website: "https://vehiclevaultco.com"
    },
    {
      id: 46,
      name: "Parker Volunteer Opportunities",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: (303)-841-0353",
      email: "✉️ Email: volunteer@parkerco.gov",
      website: "https://www.parkerco.gov/2149/Volunteer-Opportunities"
    },
    {
      id: 48,
      name: "Parker Farmers Market",
      address: "📍 Address: 19565 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: (303)-596-8808",
      email: "✉️ Email: info@parkersymphony.org",
      website: "https://thelocalcolorado.com/parker-farmers-market/"
    },
    {
      id: 44,
      name: "Parker Parks, Trails & Open Space",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://parkerrec.com/301/PARKS-TRAILS"
    },
    {
      id: 50,
      name: "AdventHealth Parker Hospital",
      address: "📍 Address: 9395 Crown Crest Blvd, Parker, CO 80138", 
      phone: "📞 Phone: (303)-269-4000",
      email: "✉️ Email: NA",
      website: "https://www.adventhealth.com/hospital/adventhealth-parker"
    },
    {
      id: 51,
      name: "Douglas County Mental Health Services",
      address: "📍 Address: 4400 Castleton Court Castle Rock, CO 80109", 
      phone: "📞 Phone: (303)-814-4368",
      email: "✉️ Email: dcmhi@douglas.co.us",
      website: "https://www.douglas.co.us/mental-health/" 
    },
    {
      id: 3,
      name: "H2O Brian Pool",
      address: "📍 Address: 10795 Victorian Dr, Parker, CO 80138",
      phone: "📞 Phone: (720)-851-5873",
      email: "✉️ Email: aboyd@parkerco.gov",
      website: "https://parkerrec.com/234/H2OBrien-Pool"
    },
    {
      id: 64,
      name: "Parker Task Force for Human Services",
      address: "📍 Address: 19105 Longs Way, Parker, CO 80134", 
      phone: "📞 Phone: (303)-841-3460",
      email: "✉️ Email: foodbank@parkertaskforce.org",
      website: "https://parkertaskforce.org/"  
    },
    {
      id: 65,
      name: "Douglas County Transit & Community Assistance",
      address: "📍 Address: 100 Third St., 2nd Floor Castle Rock, CO 80104", 
      phone: "📞 Phone: (303)-660-7460",
      email: "✉️ Email: N/A",
      website: "https://www.douglas.co.us/community-services/grants-transportation/"  
    },
    {
      id: 60,
      name: "Railbender Skate & Tennis Park",
      address: "📍 Address: 10543 Twenty Mile Rd, Parker, CO 80134", 
      phone: "📞 Phone: (303)-841-4500",
      email: "✉️ Email: N/A",
      website: "https://parkerrec.com/255/Railbender-Skate-Tennis-Park"
    },
    {
      id: 54,
      name: "RTD Parker Bus Services",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: (303)-299-6000",
      email: "✉️ Email: N/A",
      website: "https://www.parkerco.gov/1244/Public-Transportation"
    },
    {
      id: 55,
      name: "Parker Road Corridor Information",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: (303)-299-6000",
      email: "✉️ Email: N/A",
      website: "https://www.letstalkparker.org/parker-road-corridor-plan"
    },
    {
      id: 61,
      name: "Parker Community Events Calendar",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: (303)-841-0353",
      email: "✉️ Email: N/A",
      website: "https://www.parkerco.gov/calendar.aspx?CID=22"
    },
    //Education
    {
      id: 7,
      name: "Douglas County School District",
      address: "📍 Address: 620 Wilcox Street, Castle Rock, CO 80104",
      phone: "📞 Phone: (303)-387-0100",
      email: "✉️ Email: N/A",
      website: "https://www.dcsdk12.org/"
    },
    {
      id: 37,
      name: "DCSD Adult Education",
      address: "📍 Address: 10850 E. Bethany Drive, Aurora, CO 80014",
      phone: "📞 Phone: (303)-387-9675",
      email: "✉️ Email: aschabes@dcsdk12.org",
      website: "https://www.dcsdk12.org/schools-academics/schools/ged-center"
    },
    {
      id: 38,
      name: "Parker Library",
      address: "📍 Address: 20105 East Mainstreet, Parker, CO 80138",
      phone: "📞 Phone: (303)-791-7323",
      email: "✉️ Email: asklibrary@parker.edu",
      website: "https://www.dcl.org/parker/"
    },
    {
      id: 39,
      name: "DCSD Early Childhood Education",
      address: "📍 Address: 10235 Parkglenn Way, Parker, CO 80138",
      phone: "📞 Phone: (720)-433-0025",
      email: "✉️ Email: preschool@dcsdk12.org",
      website: "https://www.dcsdk12.org/about/departments/early-childhood-education"
    },
    {
      id: 8,
      name: "Chaparral High School",
      address: "📍 Address: 15655 Brookstone Dr, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-3500",
      email: "✉️ Email: N/A",
      website: "https://chs.dcsdk12.org/"
    },
    {
      id: 9,
      name: "Ponderosa High School",
      address: "📍 Address: 7007 Bayou Gulch Rd, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-4000",
      email: "✉️ Email: N/A",
      website: "https://phs.dcsdk12.org/"
    },
    {
      id: 10,
      name: "Legend High School",
      address: "📍 Address: 22219 Hilltop Rd, Parker, CO 80138",
      phone: "📞 Phone: (303)-387-4500",
      email: "✉️ Email: N/A",
      website: "https://lhs.dcsdk12.org/"
    },
    {
      id: 11,
      name: "Cimarron Middle School",
      address: "📍 Address: 12130 Canterberry Pkwy, Parker, CO 80138",
      phone: "📞 Phone: (720)-433-0120",
      email: "✉️ Email: N/A",
      website: "https://cims.dcsdk12.org/"
    },
    {
      id: 12,
      name: "Sierra Middle School",
      address: "📍 Address: 6651 E Pine Ln, Parker, CO 80138",
      phone: "📞 Phone: (303)-387-3800",
      email: "✉️ Email: N/A",
      website: "https://sms.dcsdk12.org/"
    },
    {
      id: 13,
      name: "Sagewood Middle School",
      address: "📍 Address: 4725 Fox Sparrow Rd, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-4300",
      email: "✉️ Email: N/A",
      website: "https://sgms.dcsdk12.org/"
    },
    {
      id: 14,
      name: "Cherokee Trail Elementary",
      address: "📍 Address: 17302 Clarke Farms Dr, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-8125",
      email: "✉️ Email: N/A",
      website: "https://cte.dcsdk12.org/"
    },
    {
      id: 15,
      name: "Frontier Valley Elementary",
      address: "📍 Address: 23919 Canterberry Trail, Parker, CO 80138",
      phone: "📞 Phone: (303)-387-8475",
      email: "✉️ Email: N/A",
      website: "https://fve.dcsdk12.org/"
    },
    {
      id: 16,
      name: "Gold Rush Elementary",
      address: "📍 Address: 12021 S Swift Fox Way, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-7700",
      email: "✉️ Email: N/A",
      website: "https://gre.dcsdk12.org/"
    },
    {
      id: 17,
      name: "Iron Horse Elementary",
      address: "📍 Address: 20151 Tallman Dr, Parker, CO 80138",
      phone: "📞 Phone: (303)-387-8525",
      email: "✉️ Email: N/A",
      website: "https://ihe.dcsdk12.org/"
    },
     {
      id: 18,
      name: "Legacy Point Elementary",
      address: "📍 Address: 12736 Red Rosa Cir, Parker, CO 80134",
      phone: "📞 Phone: (303)-387-8725",
      email: "✉️ Email: N/A",
      website: "https://lpe.dcsdk12.org/"
    },
    {
      id: 19,
      name: "North Star Academy",
      address: "📍 Address: 16700 Keystone Blvd, Parker, CO 80134",
      phone: "📞 Phone: (720)-851-7827",
      email: "✉️ Email: N/A",
      website: "https://www.nstaracademy.org/"
    },
    {
      id: 20,
      name: "American Academy-Lincoln Meadows",
      address: "📍 Address: 10260 Twenty Mile Road Parker, Colorado 80134",
      phone: "📞 Phone: (720)-292-5300",
      email: "✉️ Email: N/A",
      website: "https://www.aak8.org/"
    },
    {
      id: 21,
      name: "American Academy-Motsenbocker",
      address: "📍 Address: 11155 Motsenbocker Road Parker, Colorado 80134",
      phone: "📞 Phone: (720)-292-5600",
      email: "✉️ Email: N/A",
      website: "https://www.aak8.org/"
    },
    {
      id: 22,
      name: "Parker Core Knowledge Carter School",
      address: "📍 Address: 11661 Pine Dr, Parker, CO 80138",
      phone: "📞 Phone: (303)-840-7070",
      email: "✉️ Email: N/A",
      website: "https://www.ckcs.net/"
    },
    {
      id: 23,
      name: "Leman Academy",
      address: "📍 Address: 19560 Stroh Rd, Parker, CO 80134",
      phone: "📞 Phone: (720)-767-1600",
      email: "✉️ Email: N/A",
      website: "https://lemanacademy.com/schools/colorado/parker-stroh-k-8/"
    },
    {
      id: 24,
      name: "Parking Performing Arts School",
      address: "📍 Address: 15035 Compark Blvd, Parker, CO 80134",
      phone: "📞 Phone: (720)-709-7400",
      email: "✉️ Email: N/A",
      website: "https://www.parkerperformingarts.org/"
    },
    {
      id: 25,
      name: "Challenge to Excellence Charter School",
      address: "📍 Address: 16995 Carlson Drive Parker, CO 80134",
      phone: "📞 Phone: (303)-841-9816",
      email: "✉️ Email: N/A",
      website: "https://c2e.org/"
    },
    {
      id: 26,
      name: "Lutheran High School",
      address: "📍 Address: 11249 Newlin Gulch Blvd, Parker, CO 80134",
      phone: "📞 Phone: (303)-841-5551",
      email: "✉️ Email: N/A",
      website: "https://www.lhsparker.org/"
    },
    {
      id: 27,
      name: "Southeast Christian School",
      address: "📍 Address: 9650 Jordan Rd, Parker, CO 80134",
      phone: "📞 Phone: (303)-841-5988",
      email: "✉️ Email: N/A",
      website: "https://sechristianschool.org/"
    },
    {
      id: 28,
      name: "Parker Montessori",
      address: "📍 Address: 10750 Victorian Dr, Parker, CO 80138",
      phone: "📞 Phone: (303)-841-4325",
      email: "✉️ Email: N/A",
      website: "https://parkermontessori.com/"
    },
    {
      id: 29,
      name: "Renaissance Montessori Academy",
      address: "📍 Address: 16740 Keystone Blvd, Parker, CO 80134",
      phone: "📞 Phone: (303)-840-6119",
      email: "✉️ Email: N/A",
      website: "https://rmaschool.org/"
    },
    //Tourism & Attractions
    {
      id: 30,
      name: "Vehicle Vault Museum",
      address: "📍 Address: 18301 Lincoln Meadows Pkwy, Parker, CO 80134",
      phone: "📞 Phone: (303)-626-8920",
      email: "✉️ Email: info@vehiclevaultco.com",
      website: "https://vehiclevaultco.com"
    },
    {
      id: 49,
      name: "Parker Days Festival",
      address: "📍 Address: 19590 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: (303)-841-4268",
      email: "✉️ Email: info@parkerdaysfestival.com",
      website: "https://parkerdaysfestival.com/"
    },
    {
      id: 47,
      name: "Parker Symphony Orchestra",
      address: "📍 Address: 20000 Pikes Peak Avenue, Parker, CO 80138", 
      phone: "📞 Phone: (720)-722-2776",
      email: "✉️ Email: info@parkersymphony.org",
      website: "https://parkersymphony.org/"
    },
    {
      id: 68,
      name: "Rueter-Hess Reservoir",
      address: "📍 Address: 9343 Double Angle Road, Parker, CO 80134", 
      phone: "📞 Phone: (720)-733-6944",
      email: "✉️ Email: RueterHessRec@douglas.co.us",
      website: "https://www.douglas.co.us/rueter-hess-recreation/"  
    },
    {
      id: 6,
      name: "Parker Arts (PACE) Center",
      address: "📍 Address: 20000 Pikes Peak Ave. Parker, CO 80138",
      phone: "📞 Phone: (303)-805-6800",
      email: "✉️ Email: PACETickets@parkerco.gov",
      website: "https://parkerarts.org/" 
    },
    {
      id: 33,
      name: "Parker Chamber",
      address: "📍 Address: 19751 E Mainstreet - Suite R16 Parker, CO 80138",
      phone: "📞 Phone: (303)-841-4268",
      email: "✉️ Email: town@parkeronline.org",
      website: "https://www.parkerchamber.com/" 
    },
    {
      id: 67,
      name: "Dawson Butte Ranch & Douglas Open Space",
      address: "📍 Address: 1753 Tomah Rd, Castle Rock, CO 80109", 
      phone: "📞 Phone: (303)-660-7400",
      email: "✉️ Email: N/A",
      website: "https://www.douglas.co.us/open-space-natural-resources/properties/dawson-butte-open-space-and-trail/"  
    },
    {
      id: 66,
      name: "Salisbury Equestrian Park & Sports Complex",
      address: "📍 Address: 11920 N Motsenbocker Rd, Parker, CO 80134", 
      phone: "📞 Phone: (303)-805-6311",
      email: "✉️ Email: N/A",
      website: "https://parkerrec.com/256/Salisbury-Regional-Park"  
    },
    {
      id: 69,
      name: "Bingham Lake Fishing",
      address: "📍 Address: 7740 Lakeshore Dr. Parker, CO 80134", 
      phone: "📞 Phone: (720)-733-6990",
      email: "✉️ Email: parksandtrails@douglas.co.us",
      website: "https://www.douglas.co.us/rueter-hess-recreation/"  
    },
    {
      id: 56,
      name: "Ruth Memorial Chapel",
      address: "📍 Address: 19650 E.Mainstreet, Parker, CO 80138",
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://parkerarts.org/event-venues/ruth-memorial-chapel/"
    },
    {
      id: 57,
      name: "Local Nightlife & Entertainment Listings",
      address: "📍 Address: N/A",
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://corken.co/blog/nightlife-and-entertainment-in-parker-co"
    },
    {
      id: 70,
      name: "Parker Travel Guide",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://www.colorado.com/cities-and-towns/parker"  
    },
    {
      id: 31,
      name: "History of Parker",
      address: "📍 Address: 19650 Mainstreet, Parker, CO 80138",
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://www.parkerhistory.org/parkerhistory"
    },
    {
      id: 32,
      name: "History of Parker-Brochure",
      address: "📍 Address: 20120 E. Mainstreet Parker, Colorado 80138",
      phone: "📞 Phone: (303)-841-0353",
      email: "✉️ Email: town@parkeronline.org",
      website: "https://www.parkerco.gov/DocumentCenter/View/334/Historic-Walking-Tour-Brochure"
    },
    //Government & Economy
    {
      id: 34,
      name: "Official Parker Website",
      address: "📍 Address: 20120 E Mainstreet Parker, CO 80138",
      phone: "📞 Phone: (303)-841-0353",
      email: "✉️ Email: town@parkeronline.org",
      website: "https://www.parkerco.gov/"
    },
    {
      id: 41,
      name: "Parker Municipal Court",
      address: "📍 Address: 20120 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: (303)-805-3195",
      email: "✉️ Email: court@parkerco.gov",
      website: "https://www.parkerco.gov/67/Municipal-Court"
    },
    {
      id: 35,
      name: "Parker Police Department",
      address: "📍 Address: Parker Police Department 18600 E Lincoln Meadows Pkwy",
      phone: "📞 Phone: (303)-841-9800",
      email: "✉️ Email: N/A",
      website: "http://parkerpd.org/"
    },
    {
      id: 53,
      name: "Parker Economic Development",
      address: "📍 Address: 20120 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: (303)-805-6260",
      email: "✉️ Email: kheckber@parkerco.gov",
      website: "https://www.parkered.com/"
    },
    {
      id: 58,
      name: "Parker Area Chamber of Commerce",
      address: "📍 Address: 19751 Mainstreet r16, Parker, CO 80138", 
      phone: "📞 Phone: (303)-841-4268",
      email: "✉️ Email: info@parkerchamber.com",
      website: "https://www.parkerchamber.com/"
    },
    {
      id: 71,
      name: "Douglas County Economic Development Corporation",
      address: "📍 Address: 8155 Piney River Ave. Suite 210. Sterling Ranch, CO 80125", 
      phone: "📞 Phone: (303)-791-3500",
      email: "✉️ Email: info@nwdouglascounty.org",
      website: "https://douglascountyedc.com/"  
    },
    {
      id: 40,
      name: "South Metro Fire Rescue",
      address: "📍 Address: 9195 E Mineral Ave, Centennial, CO 80112", 
      phone: "📞 Phone: (720)-258-8911",
      email: "✉️ Email: N/A",
      website: "https://www.southmetro.org/"
    },
    {
      id: 42,
      name: "Parker Public Works & Engineering",
      address: "📍 Address: 20120 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: (303)-840-9546",
      email: "✉️ Email: publicworks@parkerco.gov",
      website: "https://www.parkerco.gov/1998/EngineeringPublic-Works"
    },
    {
      id: 59,
      name: "Enhance Economic Vitality",
      address: "📍 Address: N/A", 
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://www.parkerco.gov/2055/Enhance-Economic-Vitality"
    },
    {
      id: 36,
      name: "Parker BallotPedia",
      address: "📍 Address: N/A",
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://ballotpedia.org/Parker%2C_Colorado"
    },
    {
      id: 43,
      name: "Town of Parker Meeting Agendas, Minutes & Packets",
      address: "📍 Address: 20120 Mainstreet, Parker, CO 80138", 
      phone: "📞 Phone: N/A",
      email: "✉️ Email: N/A",
      website: "https://parkerco.portal.civicclerk.com/"
    },
    {
      id: 52,
      name: "Douglas County Job Center",
      address: "📍 Address: 100 Third St., 2nd Floor Castle Rock, CO 80104", 
      phone: "📞 Phone: (303)-660-7460",
      email: "✉️ Email: N/A",
      website: "https://wwwdouglas.co.us/community-services/services/self-sufficiency/pathways-to-employment/"
    }
    
  ];

  return {
    getAll() {
      return [...places];
    },

    getById(id) {
      return places.find(place => place.id === id) || null;
    },

    searchByName(query) {
      return places.filter(place =>
        place.name.toLowerCase().includes(query.toLowerCase())
      );
    },

    filterByZip(zip) {
      return places.filter(place => place.address.includes(zip));
    }
  };
})();
