const tourism_attractionsAPI = (() => {
  const places = [
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
      website: "https://www.douglas.co.us/parks-trails-building-grounds/parks-trails/bingham-lake-park/"  
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
