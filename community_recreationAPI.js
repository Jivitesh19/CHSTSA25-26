const community_recreationAPI = (() => {
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
