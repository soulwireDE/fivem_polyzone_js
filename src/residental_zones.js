residentalZones = [
    {
        "id": 1,
        "name": "Downtown Los Santos",
        "type": "mixed",
        "center": [500.0, -1500.0, 30.0],
        "points": [
            { "x": 470.0, "y": -1550.0 },
            { "x": 530.0, "y": -1550.0 },
            { "x": 530.0, "y": -1450.0 },
            { "x": 470.0, "y": -1450.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 8 }
    },
    {
        "id": 2,
        "name": "Hollywood Hills",
        "type": "residential",
        "center": [300.0, -1200.0, 60.0],
        "points": [
            { "x": 270.0, "y": -1230.0 },
            { "x": 330.0, "y": -1230.0 },
            { "x": 330.0, "y": -1170.0 },
            { "x": 270.0, "y": -1170.0 }
        ],
        "data": { "usage": "residential", "price_factor": 10 }
    },
    {
        "id": 3,
        "name": "Westside",
        "type": "mixed",
        "center": [100.0, -1800.0, 30.0],
        "points": [
            { "x": 70.0, "y": -1830.0 },
            { "x": 130.0, "y": -1830.0 },
            { "x": 130.0, "y": -1770.0 },
            { "x": 70.0, "y": -1770.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 7 }
    },
    {
        "id": 4,
        "name": "South Los Santos",
        "type": "industrial",
        "center": [500.0, -2000.0, 15.0],
        "points": [
            { "x": 470.0, "y": -2030.0 },
            { "x": 530.0, "y": -2030.0 },
            { "x": 530.0, "y": -1970.0 },
            { "x": 470.0, "y": -1970.0 }
        ],
        "data": { "usage": "industrial", "price_factor": 5 }
    },
    {
        "id": 5,
        "name": "Eastside",
        "type": "mixed",
        "center": [800.0, -1200.0, 25.0],
        "points": [
            { "x": 770.0, "y": -1230.0 },
            { "x": 830.0, "y": -1230.0 },
            { "x": 830.0, "y": -1170.0 },
            { "x": 770.0, "y": -1170.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 6 }
    },
    {
        "id": 6,
        "name": "San Fernando Valley",
        "type": "residential",
        "center": [1000.0, -1600.0, 20.0],
        "points": [
            { "x": 970.0, "y": -1630.0 },
            { "x": 1030.0, "y": -1630.0 },
            { "x": 1030.0, "y": -1570.0 },
            { "x": 970.0, "y": -1570.0 }
        ],
        "data": { "usage": "residential", "price_factor": 4 }
    },
    {
        "id": 7,
        "name": "South Bay",
        "type": "mixed",
        "center": [150.0, -2200.0, 10.0],
        "points": [
            { "x": 120.0, "y": -2230.0 },
            { "x": 180.0, "y": -2230.0 },
            { "x": 180.0, "y": -2170.0 },
            { "x": 120.0, "y": -2170.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 5 }
    },
    {
        "id": 8,
        "name": "San Pedro",
        "type": "mixed",
        "center": [200.0, -2500.0, 10.0],
        "points": [
            { "x": 170.0, "y": -2530.0 },
            { "x": 230.0, "y": -2530.0 },
            { "x": 230.0, "y": -2470.0 },
            { "x": 170.0, "y": -2470.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 4 }
    }
];


const neighborhoodCouncils = [
    {
        "id": 1,
        "name": "Downtown Los Santos",
        "type": "mixed",
        "center": [500.0, -1500.0, 30.0],
        "points": [
            { "x": 470.0, "y": -1550.0 },
            { "x": 530.0, "y": -1550.0 },
            { "x": 530.0, "y": -1450.0 },
            { "x": 470.0, "y": -1450.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 8 },
        "neighborhoods": [
            {
                "id": 101,
                "name": "Central District",
                "center": [485.0, -1520.0, 30.0],
                "points": [
                    { "x": 470.0, "y": -1530.0 },
                    { "x": 500.0, "y": -1530.0 },
                    { "x": 500.0, "y": -1510.0 },
                    { "x": 470.0, "y": -1510.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 8 }
            },
            {
                "id": 102,
                "name": "Financial District",
                "center": [515.0, -1480.0, 30.0],
                "points": [
                    { "x": 510.0, "y": -1490.0 },
                    { "x": 520.0, "y": -1490.0 },
                    { "x": 520.0, "y": -1470.0 },
                    { "x": 510.0, "y": -1470.0 }
                ],
                "data": { "usage": "commercial", "price_factor": 9 }
            }
        ]
    },
    {
        "id": 2,
        "name": "Hollywood Hills",
        "type": "residential",
        "center": [300.0, -1200.0, 60.0],
        "points": [
            { "x": 270.0, "y": -1230.0 },
            { "x": 330.0, "y": -1230.0 },
            { "x": 330.0, "y": -1170.0 },
            { "x": 270.0, "y": -1170.0 }
        ],
        "data": { "usage": "residential", "price_factor": 10 },
        "neighborhoods": [
            {
                "id": 201,
                "name": "Sunset Boulevard",
                "center": [310.0, -1200.0, 60.0],
                "points": [
                    { "x": 290.0, "y": -1210.0 },
                    { "x": 320.0, "y": -1210.0 },
                    { "x": 320.0, "y": -1190.0 },
                    { "x": 290.0, "y": -1190.0 }
                ],
                "data": { "usage": "residential", "price_factor": 11 }
            },
            {
                "id": 202,
                "name": "Hollywood Bowl",
                "center": [290.0, -1180.0, 60.0],
                "points": [
                    { "x": 270.0, "y": -1190.0 },
                    { "x": 310.0, "y": -1190.0 },
                    { "x": 310.0, "y": -1170.0 },
                    { "x": 270.0, "y": -1170.0 }
                ],
                "data": { "usage": "residential", "price_factor": 9 }
            }
        ]
    },
    {
        "id": 3,
        "name": "Westside",
        "type": "mixed",
        "center": [100.0, -1800.0, 30.0],
        "points": [
            { "x": 70.0, "y": -1830.0 },
            { "x": 130.0, "y": -1830.0 },
            { "x": 130.0, "y": -1770.0 },
            { "x": 70.0, "y": -1770.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 7 },
        "neighborhoods": [
            {
                "id": 301,
                "name": "Vinewood",
                "center": [110.0, -1790.0, 30.0],
                "points": [
                    { "x": 90.0, "y": -1810.0 },
                    { "x": 120.0, "y": -1810.0 },
                    { "x": 120.0, "y": -1780.0 },
                    { "x": 90.0, "y": -1780.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 8 }
            },
            {
                "id": 302,
                "name": "Richman",
                "center": [80.0, -1760.0, 30.0],
                "points": [
                    { "x": 60.0, "y": -1770.0 },
                    { "x": 100.0, "y": -1770.0 },
                    { "x": 100.0, "y": -1740.0 },
                    { "x": 60.0, "y": -1740.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 6 }
            }
        ]
    },
    {
        "id": 4,
        "name": "South Los Santos",
        "type": "industrial",
        "center": [500.0, -2000.0, 15.0],
        "points": [
            { "x": 470.0, "y": -2030.0 },
            { "x": 530.0, "y": -2030.0 },
            { "x": 530.0, "y": -1970.0 },
            { "x": 470.0, "y": -1970.0 }
        ],
        "data": { "usage": "industrial", "price_factor": 5 },
        "neighborhoods": [
            {
                "id": 401,
                "name": "Davis",
                "center": [490.0, -2020.0, 15.0],
                "points": [
                    { "x": 470.0, "y": -2025.0 },
                    { "x": 510.0, "y": -2025.0 },
                    { "x": 510.0, "y": -2005.0 },
                    { "x": 470.0, "y": -2005.0 }
                ],
                "data": { "usage": "industrial", "price_factor": 5 }
            },
            {
                "id": 402,
                "name": "South Central",
                "center": [510.0, -1980.0, 15.0],
                "points": [
                    { "x": 490.0, "y": -1990.0 },
                    { "x": 530.0, "y": -1990.0 },
                    { "x": 530.0, "y": -1970.0 },
                    { "x": 490.0, "y": -1970.0 }
                ],
                "data": { "usage": "industrial", "price_factor": 4 }
            }
        ]
    },
    {
        "id": 5,
        "name": "Eastside",
        "type": "mixed",
        "center": [800.0, -1200.0, 25.0],
        "points": [
            { "x": 770.0, "y": -1230.0 },
            { "x": 830.0, "y": -1230.0 },
            { "x": 830.0, "y": -1170.0 },
            { "x": 770.0, "y": -1170.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 6 },
        "neighborhoods": [
            {
                "id": 501,
                "name": "El Burro Heights",
                "center": [790.0, -1210.0, 25.0],
                "points": [
                    { "x": 770.0, "y": -1215.0 },
                    { "x": 810.0, "y": -1215.0 },
                    { "x": 810.0, "y": -1195.0 },
                    { "x": 770.0, "y": -1195.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 6 }
            },
            {
                "id": 502,
                "name": "Little Bighorn",
                "center": [820.0, -1180.0, 25.0],
                "points": [
                    { "x": 800.0, "y": -1190.0 },
                    { "x": 840.0, "y": -1190.0 },
                    { "x": 840.0, "y": -1170.0 },
                    { "x": 800.0, "y": -1170.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 5 }
            }
        ]
    },
    {
        "id": 6,
        "name": "San Fernando Valley",
        "type": "residential",
        "center": [1000.0, -1600.0, 20.0],
        "points": [
            { "x": 970.0, "y": -1630.0 },
            { "x": 1030.0, "y": -1630.0 },
            { "x": 1030.0, "y": -1570.0 },
            { "x": 970.0, "y": -1570.0 }
        ],
        "data": { "usage": "residential", "price_factor": 4 },
        "neighborhoods": [
            {
                "id": 601,
                "name": "Van Nuys",
                "center": [990.0, -1610.0, 20.0],
                "points": [
                    { "x": 970.0, "y": -1620.0 },
                    { "x": 1010.0, "y": -1620.0 },
                    { "x": 1010.0, "y": -1600.0 },
                    { "x": 970.0, "y": -1600.0 }
                ],
                "data": { "usage": "residential", "price_factor": 4 }
            },
            {
                "id": 602,
                "name": "North Hollywood",
                "center": [1010.0, -1580.0, 20.0],
                "points": [
                    { "x": 990.0, "y": -1590.0 },
                    { "x": 1030.0, "y": -1590.0 },
                    { "x": 1030.0, "y": -1570.0 },
                    { "x": 990.0, "y": -1570.0 }
                ],
                "data": { "usage": "residential", "price_factor": 3 }
            }
        ]
    },
    {
        "id": 7,
        "name": "South Bay",
        "type": "mixed",
        "center": [150.0, -2200.0, 10.0],
        "points": [
            { "x": 120.0, "y": -2230.0 },
            { "x": 180.0, "y": -2230.0 },
            { "x": 180.0, "y": -2170.0 },
            { "x": 120.0, "y": -2170.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 5 },
        "neighborhoods": [
            {
                "id": 701,
                "name": "Torrance",
                "center": [160.0, -2210.0, 10.0],
                "points": [
                    { "x": 140.0, "y": -2220.0 },
                    { "x": 170.0, "y": -2220.0 },
                    { "x": 170.0, "y": -2200.0 },
                    { "x": 140.0, "y": -2200.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 5 }
            },
            {
                "id": 702,
                "name": "Redondo Beach",
                "center": [180.0, -2180.0, 10.0],
                "points": [
                    { "x": 160.0, "y": -2190.0 },
                    { "x": 190.0, "y": -2190.0 },
                    { "x": 190.0, "y": -2170.0 },
                    { "x": 160.0, "y": -2170.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 6 }
            }
        ]
    },
    {
        "id": 8,
        "name": "San Pedro",
        "type": "mixed",
        "center": [200.0, -2500.0, 10.0],
        "points": [
            { "x": 170.0, "y": -2530.0 },
            { "x": 230.0, "y": -2530.0 },
            { "x": 230.0, "y": -2470.0 },
            { "x": 170.0, "y": -2470.0 }
        ],
        "data": { "usage": "mixed", "price_factor": 4 },
        "neighborhoods": [
            {
                "id": 801,
                "name": "Harbor Area",
                "center": [190.0, -2510.0, 10.0],
                "points": [
                    { "x": 170.0, "y": -2520.0 },
                    { "x": 210.0, "y": -2520.0 },
                    { "x": 210.0, "y": -2500.0 },
                    { "x": 170.0, "y": -2500.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 4 }
            },
            {
                "id": 802,
                "name": "Wilmington",
                "center": [220.0, -2490.0, 10.0],
                "points": [
                    { "x": 200.0, "y": -2500.0 },
                    { "x": 240.0, "y": -2500.0 },
                    { "x": 240.0, "y": -2480.0 },
                    { "x": 200.0, "y": -2480.0 }
                ],
                "data": { "usage": "mixed", "price_factor": 3 }
            }
        ]
    }
];
