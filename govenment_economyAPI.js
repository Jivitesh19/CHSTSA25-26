const government_economyAPI = (() => {
  const places = [
    //Community & Recreation
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
