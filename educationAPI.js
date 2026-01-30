const educationAPI = (() => {
  const places = [
    //Community & Recreation
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
